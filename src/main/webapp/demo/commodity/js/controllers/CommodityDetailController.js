+function (window, undefined) {
    'use strict';

    var require = window.require;
    var define = window.define;
    define([], function () {
        return ['$scope', '$routeParams', 'categoryService', function ($scope, $routeParams, categoryService) {
            var commodityId = $routeParams.commodityId;

            var commodity = categoryService.getCommodityById(commodityId);
            $scope.commodity = commodity;
            
        }];
    });
}(window);
