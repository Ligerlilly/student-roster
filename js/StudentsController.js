studentRoster.controller('StudentsCtrl', function StudentsCrtl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
