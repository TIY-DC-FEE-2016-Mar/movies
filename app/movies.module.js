(function() {
    'use strict';

    angular.module('movies', ['ui.router'])
        .config(movieConfig);

    movieConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function movieConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home.template.html'
            })
            .state('catList', {
                url: '/categories',
                templateUrl: 'category/category-list.template.html',
                controller: 'CategoryController',
                controllerAs: 'categories'
            })
            .state('catList.catMovies', {
                url: '/:id',
                templateUrl: 'movie-item/movie-list.template.html',
                controller: 'MovieListController',
                controllerAs: 'movieList'
            })
            .state('searchResults', {
                url: '/search/:query',
                templateUrl: 'movie-item/movie-list.template.html',
                controller: 'MovieListController',
                controllerAs: 'movieList'
            });

    }

})();
