describe('ContactBuckets', function() {

    beforeEach(function() {
        angular.mock.module('ContactBuckets');
    });

    describe('ContactService', function() {

        var contactService;

        beforeEach(function() {
            inject(function($injector) {
                contactService = $injector.get('ContactService')
            });
        });

        it('contactService should be defined', function() {
            expect(contactService).toBeDefined();
        });

    });
});