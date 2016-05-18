angular.module('todo',[])
  .directive('todoList',function () {
    return {
      restrict: 'a',
      template: '<p>{{todo.title}}</p><p>{{todo.ddl}}'
    }
  })
