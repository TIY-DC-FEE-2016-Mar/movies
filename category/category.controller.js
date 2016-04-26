(function() {
    'use strict';

    angular.module('movies')
        .controller('CategoryController', CategoryController);

    function CategoryController() {
        this.list = [
            { id: 123123, name: 'Romance' },
            { id: 56456, name: 'Thriller' },
            { id: 783345, name: 'Action' }
        ];
    }

})();
