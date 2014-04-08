angular.module('app').contoller('mvCourseDetailCtrl',function($scope, mvCourse, $routeParams){
	$scope.course = mvCourse.get({_id:$routeParams.id});
});
