/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('urls are defined', function() {
      allFeeds.forEach(feed => {
        expect(feed.hasOwnProperty('url') && feed.url.length !== 0).toBe(true);
      });
    });


    /* This test loops loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('names are defined', function() {
      allFeeds.forEach(feed => {
        expect(feed.hasOwnProperty('name') && feed.name.length !== 0).toBe(true);
      });
    });
  });

  /* The test suite named "The menu" */
  describe('The menu', function() {
    /* Test that ensures the menu element is
     * hidden by default.
     */
    it('element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* Tests that ensure the menu changes
     * visibility when the menu icon is clicked.
     */
    it('is opened', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
    });

    it('is closed', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });


  /* The test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('loadFeed is completed', function() {
      const entries = $('.feed .entry');
      expect(entries.length !== 0).toBe(true);
    });

  });

  /* The test suite named "New Feed Selection" */
  describe('Initial Entries', function() {
    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    let beforeLoaded;

    beforeEach(function(done) {
      beforeLoaded = $('.feed .entry')[0];
      loadFeed(0, done);
    });

    it('loadFeed has changed a content', function() {
      const afterLoaded = $('.feed .entry')[0];
      expect(beforeLoaded !== afterLoaded).toBe(true);
    });

  });
}());
