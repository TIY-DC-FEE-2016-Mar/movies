(function() {
    'use strict';

    angular.module('movies')
        .controller('MovieListController', MovieListController);

    MovieListController.$inject = ['$stateParams'];

    function MovieListController($stateParams) {

        this.categoryId = $stateParams.id;
        this.searchQuery = $stateParams.query;

        // business logic to get data... probably from a service
        if (this.categoryId) {
            // search by category
        } else if (this.searchQuery) {
            // search by query
        }
        // the search would result in an array like below...
        this.results = [
            { id: 45345, title: 'Scorcher', director: 'Jordan', abstract: 'awful movie', poster: '/images/scorcher.png', categoryId: 123123 }
        ];

        this.addToCart = function(id) {
            // add the movie to our cart and do whatever else....
        };
    }

})();
