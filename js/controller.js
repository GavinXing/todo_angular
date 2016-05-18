angular.module('todo', [])
  .controller('todoCtrl',['$scope','storage',function($scope,storage){
    $scope.addTodo = function () {
      var oldTask = JSON.parse(localStorage.getItem('task')) || [];
      var date = JSON.stringify($scope.newDate).slice(1,11);
      var task = {
        'title' : $scope.newTodo,
        'ddl' :   date
      };
      oldTask.push(task);
      localStorage.setItem("task", JSON.stringify(oldTask));
      $scope.newTodo = '';
      $scope.newDate = '';
      setTodos();
    };

  var setTodos = function (){
    $scope.todos = storage.getTodo();
  };
  setTodos();
}]);
