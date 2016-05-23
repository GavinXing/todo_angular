todo.directive('todoList',function ($scope) {
    return {
      restrict: 'a',
      template: '{{overdate}}  {{title}}  {{ddl}}',
      scope: {
        'overdate': '@' ,
        'title': '@' ,
        'ddl': '@'
      } ,
      replace: true
    }
  });
