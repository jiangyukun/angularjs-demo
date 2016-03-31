+function (window, undefined) {
    'use strict';

    var require = window.require;
    var define = window.define;

    define(['angular'], function (angular) {
        var moduleName = 'CategoryModule';

        var allCategory = [{
            id: '1',
            name: '吃的',
            commodityList: [{
                id: '11',
                name: '面包',
                price: 11,
                specification: '....',
                imgUrl: ''
            }]
        }, {
            id: '2',
            name: '穿的',
            commodityList: [{
                id: '21',
                name: '短袖',
                price: 11,
                specification: '....',
                imgUrl: ''
            }]
        }];

        var commodity = {
            id: '11',
            name: '面包',
            categoryName: '食品',
            price: 11,
            specification: '11L',
            imgUrl: '',
            barcodeInfo: '123456789ABC',
            recommend: true
        };

        angular.module(moduleName, [])
            .factory('categoryService', function () {
                return {
                    getAllCategory: function () {
                        return allCategory;
                    },
                    addCategory: function () {

                    },
                    removeCategory: function (categoryId) {

                    },
                    getCommodityById: function (commodityId) {
                        return commodity;
                    }
                }
            });

        return moduleName;
    });
}(window);
