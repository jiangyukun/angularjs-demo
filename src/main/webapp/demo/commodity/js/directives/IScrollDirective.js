+function (window, undefined) {
    'use strict';

    var require = window.require;
    var define = window.define;
    define(['IScroll'], function (IScroll) {

        var list = [];
        return function () {
            return {
                restrict: 'EA',
                link: function ($scope, $element, attr, controller) {
                    //console.log($scope);
                    var iscroll = new IScroll($element[0]);
                    list.push(iscroll);
                    $scope.refreshIScroll = function ($last) {
                        if ($last) {
                            for (var i = 0; i < list.length; i++) {
                                list[i].refresh();
                            }
                        }
                    };

                }
            }
        };
    });
}(window);
