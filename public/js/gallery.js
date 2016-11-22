angular.module('imageGallery').controller('galleryController', function($rootScope,$scope, $http, $timeout,$location) {
	angular.element(".progress-indicator").show();
	var obj = {};
	$scope.images = [];
	if($rootScope.label){
		obj = {typeOfData : 'speData', imageName : $rootScope.label};
	}else{
		obj = {typeOfData : 'allData'};
	}

	$http.post("/getList/",JSON.stringify(obj)).success(function(data, status) {
		angular.element(".progress-indicator").hide();
		$scope.images = data;
	});

});