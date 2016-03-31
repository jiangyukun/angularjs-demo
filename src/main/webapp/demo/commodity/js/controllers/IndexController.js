+function (window, undefined) {
    'use strict';

    var require = window.require;
    var define = window.define;
    define([], function () {
        return ['$scope', '$window', 'categoryService', function ($scope, $window, categoryService) {
            $scope.categoryList = categoryService.getAllCategory();

            $scope.currentCategoryIndex = 0;
            $scope.$watch('currentCategoryIndex', function () {
                $scope.commodityList = $scope.categoryList[$scope.currentCategoryIndex].commodityList;
            });

            $scope.changeCategory = function ($index) {
                $scope.currentCategoryIndex = $index;
            };

            //搜索
            $scope.searchCommodity = function (searchName) {
                $scope.showSearchPanel = true;
            };
            $scope.goBack = function () {
                $scope.showSearchPanel = false;
            };
            //详情
            $scope.commodityDetail = function (commodityId) {
                console.log(commodityId);
                $window.location.href = '#/commodityDetail/' + commodityId;
            };

            //导航
            $scope.barcodeAdd = function () {
                $window.location.href = '#/barcodeAdd';
            };
            $scope.manualAddNav = function () {
            };
            $scope.categoryManage = function () {
            };
        }];
    });
}(window);
