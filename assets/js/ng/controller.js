var logApp = angular.module('logApp', []);

    logApp.controller("TestFormModule",function($scope){
        $scope.user={
            search:'',
        };
        $scope.save=function(){
            alert("获取数据!");
        }
    });

    logApp.controller("TableController",['$scope',
        function($scope){
            $scope.thItems = [
                {title:'th名称',title2:'th名称2',title3:'th名称3',title4:'th名称4',title5:'th名称5'},
            ];
            $scope.items = [
                {title:'名称',title2:'名称2',title3:'名称3',title4:'名333333333333333333333333333deeeeeeedccccccc333333333333333称4',title5:'名dwdewedwedwewdewwdeddddddddddddddddddddddddd称5'},
                {title:'名称',title2:'名称额问问2',title3:'名称3',title4:'名称4',title5:'名称5'},
                {title:'名ddd称',title2:'名称2',title3:'名dsdsdsd称3',title4:'名称4',title5:'名称5'},
                {title:'名称',title2:'名称问问2',title3:'名称3',title4:'名称4',title5:'名称5'},
                {title:'名称',title2:'名称2',title3:'名称3',title4:'名称4',title5:'名称5'},
                {title:'名称',title2:'名称2',title3:'名称3',title4:'名称dsdsdswedw4',title5:'名称5'},
                {title:'名称',title2:'名称2',title3:'名称3',title4:'名称4',title5:'名称5'}
            ];
            $scope.remove = function(index){
                $scope.items.splice(index,1);
            };
        }

    ])

    logApp.controller("sliderCtrl",[
        '$scope',function($scope){
            $scope.sliders = [
                {sliderA:'APP',sliderAa:'app1',sliderAb:'app2',sliderABa:'app2a'},
                {sliderB:'Matrics'},
                {sliderC:'Frace'},
            ]
        }
    ])

    





