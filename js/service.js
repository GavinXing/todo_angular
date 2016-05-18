angular.module('todo',[])
  .factory('storage', function (){
    return {
      getTodo: function () {
        var todos = JSON.parse(localStorage.getItem('task'));
        return todos;
      }
    }
  })
