(function () {
    "use strict";

    function CandyDAO($resource) {
        var api = $resource("/api/candy/:a", null, {
            query: {
                isArray: false
            }
        });
        //var sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        // " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        // " Ut enim ad quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

        return {
            query: function () {
                return api.query().$promise;
            },
            get: function (id) {
                return api.get({a: id}).$promise;
            },
            save: function (object) {
                return api.save(object).$promise;
            },
            delete: function (id) {
                //var apis;
                return api.delete({a: id}).$promise;
            }
        };
    }

    angular.module("exerciseApp").factory("CandyDAO", ["$resource", CandyDAO]);
})();
