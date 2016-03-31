/**
 * jiangyukun on 2016/3/31.
 */
+function (window, undefined) {
    'use strict';

    var require = window.require;

    require.config({
        paths: {
            'angular': '../../../res/js/angular',
            'angular-route': '../../../res/js/angular-route'
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            'angular-route': {
                'deps': ['angular'],
                exports: 'ngRouteModule'
            }
        },
        deps: ['app']
    });
}(window);
