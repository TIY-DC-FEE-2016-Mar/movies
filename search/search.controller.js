(function() {
    'use strict';

    angular.module('movies')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$state'];

    function SearchController($state) {
        this.query = '';

        this.doSearch = function doSearch() {
            // don't do the actual search (http call) here, do it in movie list controller
            $state.go('searchResults', { query: this.query });
        };
    }

})();
