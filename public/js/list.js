angular.module('imageGallery').controller('listController', function($rootScope,$scope, $http, $timeout,$location) {
	angular.element(".progress-indicator").show();
	var obj = {typeOfData : 'label'}
	$scope.labelList = [];
	$http.post("/getList/",JSON.stringify(obj)).success(function(data, status) {
		angular.element(".progress-indicator").hide();
		$scope.labelList = data
		$scope.showImage = function(label){
			$rootScope.label = label;
		}
	});
});