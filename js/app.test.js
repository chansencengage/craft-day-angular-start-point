describe('ContactBuckets', function() {

    describe('Module configuration', function() {

        var module, dependencies;
        function hasModule(m) {
            return dependencies.indexOf(m) >= 0;
        }

        beforeEach(function() {
            module = angular.module('ContactBuckets');
            dependencies = module.value('appName').requires;
        });

        it('should be registered', function() {
            expect(module).toBeDefined();
        });

        it('should have ContactDataModule as a dependency', function() {
            expect(hasModule('ContactDataModule')).toEqual(true);
        });
    });

    describe('ContactController', function() {

        describe('Initializing the controller', function() {

            var contacts, _scope, _controller, contactDataService;
            contacts = [{ name: 'Joe' }];

            beforeEach(function() {
                angular.mock.module('ContactBuckets');
                inject(function($rootScope, $controller, ContactDataService) {
                    _controller = $controller;
                    contactDataService = ContactDataService;
                    _scope = $rootScope.$new();
                });

                spyOn(contactDataService, 'getAll').andReturn(contacts);
                _controller('ContactController', {$scope: _scope, ContactDataService: contactDataService});
            })

            it('retrieves contact data', function() {
                expect(_scope.contacts).toBe(contacts);
            })


        })
    });
});
