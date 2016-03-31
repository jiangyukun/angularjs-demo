/**
 * jiangyukun on 2016/3/31.
 */
+function (window, undefined) {
    'use strict';

    var require = window.require;
    require(['angular', 'angular-route'], function (angular) {
        // console.log(angular);
        require(['services/CategoryService',
            'controllers/IndexController',
            'controllers/CommodityDetailController'
        ], function (CategoryService, IndexController, CommodityDetailController) {
            angular.module('commodity', ['ngRoute', CategoryService])
                .controller('IndexController', IndexController)
                .controller('CommodityDetailController', CommodityDetailController)
                .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider
                        .when('/', {
                            controller: 'IndexController',
                            templateUrl: 'templates/commodity-category.html'
                        })
                        .when('/commodityDetail/:commodityId', {
                            controller: 'CommodityDetailController',
                            templateUrl: 'templates/commodity-detail.html'
                        }).otherwise({
                        redirectTo: '/'
                    });
                }]);

            angular.bootstrap(document, ['commodity']);
        });
    });
}(window);
