angular.module('imageGallery').controller('homeController', function($rootScope,$scope, $http, $timeout,$location) {
	$scope.form = {};
	$scope.btnsubmit = function (){
		if($scope.form.imageName && $scope.form.imageName != ''){
			var obj = {"imageName" : $scope.form.imageName , updateFlag : false}
			angular.element(".progress-indicator").show();
			$http.post("/searchFromGoogle/",JSON.stringify(obj)).success(function(data, status) {
				angular.element(".progress-indicator").hide();
				if(data && data.status){
					alert("Your images are stored")
					$scope.form.imageName = '';
				}else{
					var x = confirm("This Images already stored in DB. would u like to merge ?");
					if(x == true) {
						var obj = {"imageName" : $scope.form.imageName, updateFlag : true}
						angular.element(".progress-indicator").show();
						$http.post("/searchFromGoogle/",JSON.stringify(obj)).success(function(data, status) {
							angular.element(".progress-indicator").hide();
							alert("Your images are stored")
							$scope.form.imageName = '';
						});
					}else{
						$scope.form.imageName = '';
					}
				}
			});
		}else{
			alert("Please enter key word")
		}
		
	};

});