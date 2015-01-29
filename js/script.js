(function(){
	var app=angular.module("angularjs",[]);

/***************************************************************/
/******************LLAMADO DE APPI LASTFM******************/
	app.filter("soloUrl", function(){
	return function(item){
		return (JSON.stringify(item)).slice(10,-18);
		};
	});




	app.controller("lastfm",function($scope,$http){
		//$scope.name="jose";
		
		$http.get("http:ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json").success(function(data){
			$scope.informacion=data.tracks.track;

		});
		
		
	});
})();


$scope.formVisibility = false;
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
}
