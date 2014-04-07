angular.module('app').factory('mvIdentity', function($window){
	var currentUser;
	if($window.bootstrappedUser) {
		currentUser = $window.bootstrappedUser;
	}
	return {
		currentUser: currentUser,
		isAuthenticated: function() {
			return !!this.currentUser;
		}
	}
});
