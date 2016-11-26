app.config(function($routeProvider){
	$routeProvider.when("/content-1",{
		//直接在页面需要显示的位置显示信息
		templateUrl:"tpls/content-1.html",
		controller:"content-1-Ctrl"
	}).when("/content-2",{
		templateUrl:"tpls/content-2.html",
		controller:"content-2-Ctrl"
	}).when("/content-3",{
		templateUrl:"tpls/content-3.html",
		controller:"content-3-Ctrl"
	}).when("/content-4",{
		templateUrl:"tpls/content-4.html",
		controller:"content-4-Ctrl"
	}).when("/content-5",{
		templateUrl:"tpls/content-5.html",
		controller:"content-5-Ctrl"
	}).when("/content-6",{
		templateUrl:"tpls/content-6.html",
		controller:"content-6-Ctrl"
	}).when("/content-7",{
		templateUrl:"tpls/content-7.html",
		controller:"content-7-Ctrl"
	}).when("/content-8",{
		templateUrl:"tpls/content-8.html",
		controller:"content-8-Ctrl"
	}).when("/content-9",{
		templateUrl:"tpls/content-9.html",
		controller:"content-9-Ctrl"
	}).otherwise({
		redirectTo:"/content-1"
	})
});