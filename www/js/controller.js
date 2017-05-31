.controller('AppCtrl',function ($scope,$state,$ionicPopup){

	$scope.login={};
	var user="admin";
	var password="123456";
	$scope.doLogin=function(){
		console.log("alert");
		console.log(password);
		console.log($scope.login.username);
		console.log($scope.login.password);
		if ($scope.login.username == 'admin' && $scope.login.password == '123456') {
		console.log('success');
		$ionicPopup.alert({
		 title: 'Login Success!',
		 template: 'Welcome admin'
	   });
		$state.go('history')

    }else{
		console.log('invalid');
		$ionicPopup.alert({
		 title: 'Login Fail!',
		 template: 'Invalid Username and Password '
	   });
		$state.go('login')
    }
	};
 
	
})