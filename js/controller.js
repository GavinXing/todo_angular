var todo = angular.module('todo', []);
todo.controller('todoCtrl',['$scope','storage',function($scope,storage){
    $scope.addTodo = function () {
      var oldTask = JSON.parse(localStorage.getItem('task')) || [];
      var date = JSON.stringify($scope.newDate).slice(1,11);
      var overdated = 'falth';
      if (!valid(date)){
        overdated = 'true';
      }
      var task = {
        'title' : $scope.newTodo,
        'ddl' :   date,
        'overdate': overdated
      };
      if ($scope.newTodo){
        oldTask.push(task);
      } else {
        alert('empty title is not supported!');
      }
      localStorage.setItem("task", JSON.stringify(oldTask));
      $scope.newTodo = '';
      $scope.newDate = '';
      setTodos();
    };

    var setTodos = function (){
      var todos = storage.getTodo();
      $scope.todos = todos;
      $scope.overdated = 0;
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].overdate == 'true') {
          $scope.overdated++;
        }
      }
    }
    setTodos();

     $scope.today = new Date().toISOString().slice(0,10);//set today
     var today = new Date($scope.today);

     var valid = function (ddl) {
       var deadline = new Date(ddl);
       console.log(deadline);
       if (deadline < today){
        return false;
      }
      return true;
     }

}]);
