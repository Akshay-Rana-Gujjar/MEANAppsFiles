angular.module('app').controller('mvMainCtrl', function($scope){
	$scope.courses = [
		{name: 'C# for Sociopaths #1', featured: true, published: new Date('2014-02-01')},
		{name: 'C# for Sociopaths #2', featured: true, published: new Date('2014-03-01')},
		{name: 'C# for Sociopaths #3', featured: true, published: new Date('2013-04-01')},
		{name: 'C# for Sociopaths #4', featured: true, published: new Date('2014-09-01')},
		{name: 'C# for Sociopaths #5', featured: false, published: new Date('2014-07-01')},
		{name: 'C# for Sociopaths #6', featured: true, published: new Date('2014-01-01')},
		{name: 'C# for Sociopaths #7', featured: true, published: new Date('2014-05-01')},
		{name: 'C# for Sociopaths #8', featured: false, published: new Date('2014-08-01')},
		{name: 'C# for Sociopaths #9', featured: true, published: new Date('2014-07-01')},
		{name: 'C# for Sociopaths #10', featured: false, published: new Date('2014-03-01')},
		{name: 'C# for Sociopaths #11', featured: true, published: new Date('2014-09-01')},
		{name: 'C# for Sociopaths #12', featured: true, published: new Date('2014-05-01')}
	]
});

