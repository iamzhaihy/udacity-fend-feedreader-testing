$(function () {

    // test suite: RSS Feeds
    describe('RSS Feeds', function () {
        // ensures that 
        // 1. allFeeds variable has been defined
        // 2. allFeeds variable is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // ensures that:
        // 1. each obejct in allFeeds has a URL defined
        // 2. that URL is not empty
        it('each object has a URL defined and it is not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // ensures that:
        // 1. each obejct in allFeeds has a name defined
        // 2. that name is not empty
        it('each object has a name defined and it is not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });


    // test suite: The menu
    describe('The menu', function () {
        // ensures that 
        // 1. the menu is hidden by default
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // ensures that 
        // 1. the menu displays when clicked
        // 2. the menu hides when clicked again
        it('changes visibility when the menu icon is clicked', function () {
            // first click: menu should display
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // second click: menu should hide
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    // test suite: Initial Entries
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        // ensures that 
        // 1. when the loadFeed function is called and completes its work, 
        //    there is at least a single .entry element within the .feed container.
        it('has at least one entry after calling LoadFeed()', function (done) {
            var entries = $('.feed a').children('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });

    });

    
    // test suite: New Feed Selection
    describe('New Feed Selection', function () {
        var oldFeeds;

        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeeds = $('.feed').html();
                loadFeed(1, done);
            });
        });

        // ensures that 
        // 1. when a new feed is loaded, the content actually changes.
        it('changes after loadFeed() loaded a new feed', function (done) {
            var newFeeds = $('.feed').html();
            expect(newFeeds).not.toBe(oldFeeds);
            done();
        });

    });

}());
