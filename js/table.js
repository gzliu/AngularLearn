/**
 * Created by Administrator on 2016/11/7.
 */
var tableApp = angular.module('myTable',[]);
tableApp.controller('tableController',function($scope){
    var titles = ['employ','age','phone','email'];
    $scope.titile = titles;
    $scope.tableData = [
        {employ:'110','age':'20','pthone':132555555,'emial':'99999@qq.com'},
        {employ:'110','age':'20','pthone':132555555,'emial':'99999@qq.com'},
        {employ:'110','age':'20','pthone':132555555,'emial':'99999@qq.com'},
        {employ:'110','age':'20','pthone':132555555,'emial':'99999@qq.com'}
    ];
});