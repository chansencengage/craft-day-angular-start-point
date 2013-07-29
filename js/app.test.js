describe('ContactBuckets', function() {

    describe('Module configuration', function() {

        var module, dependencies;
        beforeEach(function() {
            module = angular.module('ContactBuckets');
            dependencies = module.value('appName').requires;
        });

        it('should be registered', function() {
            expect(module).toBeDefined();
        });

        it('should have ContractDataModule as a dependency', function() {
            expect(hasModule('ContactDataModule')).toEqual(true);
        });


        function hasModule(m) {
            return dependencies.indexOf(m) >= 0;
        }
    });

    describe('ContactController', function() {

        describe('Initializing the controller', function() {

            var contacts, _scope, _controller, contactDataService;
            contacts = [{name: 'Chris'}, {name: 'Eric'}];

            beforeEach(function() {
                angular.mock.module('ContactBuckets');
                inject(function($rootScope, $controller, ContactDataService) {
                    _controller = $controller;
                    contactDataService = ContactDataService;
                    _scope = $rootScope.$new();
                });

                spyOn(contactDataService, 'getAll').andReturn(contacts);
                _controller('ContactController', {$scope: _scope, ContactDataService: contactDataService});

            });

            it('retrieves contact data', function() {
                expect(_scope.contacts).toBe(contacts);
            });

            it('assign delete function to scope', function() {
                 expect(_scope.delete).toBe(contactDataService.delete);
            });
        });
    });

    describe('RouteProvider', function() {

        var routes;
        beforeEach(function() {
            angular.mock.module('ContactBuckets');
            inject(function($route) {
                routes = $route.routes;
            });
        });

        it('should contain /contacts route', function() {
            var route = routes['/contacts'];
            expect(route).toBeDefined();
            expect(route.controller).toEqual('ContactController');
            expect(route.templateUrl).toEqual('contacts.html');
        });
    });
});
