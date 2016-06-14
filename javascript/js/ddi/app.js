/**
 * ANGLULAR APP
 **/

    /**
     * web_service_url for whole app
     */
    var web_service_url = 'http://wwwdev.ebi.ac.uk/Tools/ddi/ws/';
    var proteomics_list = "pride,peptideatlas,peptide_atlas,massive,PRIDE,PeptideAtlas,MassIVE";
    var metabolomics_list = "MetaboLights,metabolights,metabolights_dataset,MetabolomicsWorkbench, Metabolomics Workbench, metabolome_workbench";
    var genomics_list = "ega,EGA";
    var repositories = {
        "pride": "PRIDE",
        "PRIDE": "PRIDE",
        "peptideatlas": "PeptideAtlas",
        "peptide_atlas": "PeptideAtlas",
        "PeptideAtlas": "PeptideAtlas",
        "massive": "MassIVE",
        "MassIVE": "MassIVE",
        "metabolights": "MetaboLights",
        "metabolights_dataset": "MetaboLights",
        "MetaboLights": "MetaboLights",
        "metabolome_workbench": "Metabolomics Workbench",
        "Metabolomics Workbench": "Metabolomics Workbench",
        "MetabolomicsWorkbench": "Metabolomics Workbench",
        "ega": "EGA",
        "EGA": "EGA",
    };
    var database_urls = {
        "PRIDE": "http://www.ebi.ac.uk/pride/archive/",
        "MetaboLights": "http://www.ebi.ac.uk/metabolights/",
        "Metabolomics Workbench": "www.metabolomicsworkbench.org/",
        "PeptideAtlas": "http://www.peptideatlas.org/",
        "MassIVE": "https://massive.ucsd.edu/ProteoSAFe/datasets.jsp",
        "Metabolomics Workbench": "http://www.metabolomicsworkbench.org/"
    }





/**
 * Make it possible to include underscore as a dependency.
 */
var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
    return window._;
});




var ddiApp = angular.module('ddiApp',['underscore','ngRoute','ngAnimate', 'autocomplete', 'ngCookies', 'ngProgress']);

// $.getJSON('http://api.metabolomexchange.org/providers', function(data) {
//     for (var i in data) {
//         console.log(data[i].name);
//     }
// });

/**
 * Turn on html5mode only in modern browsers because
 * in the older ones html5mode rewrites urls with Hangbangs
 * which break normal Django pages.
 * With html5mode off IE lt 10 will be able to navigate the site
 * but won't be able to open deep links to Angular pages
 * (for example, a link to a search result won't load in IE 9).
 */
//angular.module('ddiApp').config(['$locationProvider', function ($locationProvider) {
//        $locationProvider.html5Mode(true);
//}]);

/**
 * ANGLULAR CONFIG
 **/
ddiApp.config(function($routeProvider) {
    $routeProvider.
    when('/about', { templateUrl: 'app/views/about.html', controller: 'MainContentCtrl' }).
    when('/api', { templateUrl: 'app/views/api.html', controller: 'MainContentCtrl' }).
    when('/databases', { templateUrl: 'app/views/databases.html', controller: 'MainContentCtrl' }).
    when('/help', { templateUrl: 'app/views/help.html', controller: 'MainContentCtrl' }).
    when('/', { templateUrl: 'app/views/home.html', controller: 'MainContentCtrl' }).
    when('/home', { templateUrl: 'app/views/home.html', controller: 'MainContentCtrl' }).
    //when('/search', { templateUrl: 'app/views/search.html', controller: 'MainContentCtrl' }).
    when('/search?:searchstring', { templateUrl: 'app/views/browse.html', controller: 'MainContentCtrl' }).
    //when('/search/:search', { templateUrl: 'app/views/search.html', controller: 'MainContentCtrl' }).
    when('/dataset/:domain/:acc', { templateUrl: 'app/views/dataset.html', controller: 'MainContentCtrl' })
    .
    otherwise({ templateUrl: 'app/views/home.html', controller: 'MainContentCtrl' });

});
/* ----------------------------*/

/**
 * ANGLULAR CONTROLLERS
 **/
//ddiApp.controller('MainContentCtrl', ['$scope', '$routeParams', '$location', '$anchorScroll',
//    function ($scope, $routeParams, $location, $anchorScroll){
//        if ($location.path() === '/about'){
//            $scope.show_top_search = 'true'
//        }else{
//            $scope.show_top_search = 'false'
//
//        }
//
//        // set focus to search
////        if (document.getElementById("search")) { document.getElementById("search").focus(); }
//    }
//]);

/*
ddiApp.factory('ddiAppApi', function($http) {

    var useCache = true;

    return {
        getDatasets: function() { return $http.get('http://api.metabolomexchange.org/datasets', { cache: useCache }); },
        getDataset: function(provider, accession) { return $http.get('http://api.metabolomexchange.org/provider/' + provider + '/' + accession, { cache: useCache }); },
        getProviders: function() { return $http.get('http://api.metabolomexchange.org/providers', { cache: useCache }); },
        getProvider: function(provider) { return $http.get('http://api.metabolomexchange.org/provider/' + provider, { cache: useCache }); },
        findDatasets: function(search) { 
            var andMatch = search.replace(new RegExp(' ', 'g'), '&');
            var searchUrl = 'http://api.metabolomexchange.org/datasets/' + andMatch;
            return $http.get(searchUrl, { cache: useCache }); 
        }
    };
});
*/
/* ----------------------------*/
