'use strict';

/**
 * @ngdoc directive
 * @name angularspaApp.directive:ngMessageBox
 * @description
 * # ngMessageBox
 * Message Box is a transcluded directive that inherit from the parent controller activation flags for the messages by message id
 * This directive has a sub drective that is the message tab element that display the message.
 */
angular.module('angularspaApp')
  .directive('ngkMessageBox', ['$interval', function($interval) {
    return {
      restrict: 'E',
      scope: {
        boxTitle: '@', //this attribute is isolated from the parent scope
        messageDelay: '@', //this attribute is isolated from the parent scope
      },
      transclude: true,
      controller: ['$scope', function($scope) {
        $scope.messages = [];

        $scope.showMessage = function(message) {
          if (message && !message.messageVisible) {
            message.messageVisible = true;
          }
        };
        $scope.showMessageById = function(messageId) {
          var message = $scope.getMessageById(messageId);
          if (message && !message.messageVisible) {
            message.messageVisible = true;
          }
        };
        $scope.hideMessage = function(message) {
          if (message && message.messageVisible) {
            message.messageVisible = false;
          }
        };
        $scope.hideMessages = function() {
          $scope.messages.forEach(function(messageToDeactivate) {
            $scope.hideMessage(messageToDeactivate);
          });

        };
        $scope.clearMessageList = function() {
          if ($scope.$parent.messageActivation) {
            for (var key in $scope.$parent.messageActivation) {
              if ($scope.$parent.messageActivation.hasOwnProperty(key)) {
                if (!!$scope.$parent.messageActivation[key]) {
                  $scope.$parent.messageActivation[key] = false;
                }
              }
            }
            $scope.$parent.updateFlags($scope.$parent.messageActivation);
          }
        };
        $scope.getMessageById = function(messageId) {
          if (angular.isArray($scope.messages)) {
            return $scope.messages.filter(function(msg) {
              return msg.messageId === messageId;
            })[0];
          }
          return undefined;
        };

        this.addMessage = function(message) {
          $scope.messages.push(message);
        };
        var timeoutId;
        var started = false;
        var activationWatchList = function() {
          return $scope.$parent.messageActivationFlags;
        };
        this.startUp = function() {
          if (started) {
            return;
          }
          $scope.messagesVisible = false;
          started = true;
          $scope.$watch(activationWatchList, function() {
            var activationList = $scope.$parent.messageActivation;
            var visible = false;
            for (var key in activationList) {
              if (activationList.hasOwnProperty(key)) {
                var val = activationList[key];
                if (!!val) {
                  var messageToActivate = $scope.getMessageById(
                    key);
                  if (!angular.isUndefined(messageToActivate)) {
                    $scope.showMessage(messageToActivate);
                    visible = !!val;
                  }
                }
              }
            }
            if (visible) {
              $scope.messagesVisible = true;
            }
          });
          $scope.$on('$destroy', function() {
            $interval.cancel(timeoutId);
          });
          timeoutId = $interval(function() {
            if ($scope.messagesVisible) {
              $scope.messagesVisible = false;
              $scope.hideMessages(); // update the DOM table
              $scope.clearMessageList(); //reset flags
            }
          }, parseInt($scope.messageDelay));

        };
      }],
      templateUrl: 'templates/ngkmessagebox.html'
    };
  }])
  .directive('ngkMessageTab', function() {
    return {
      require: '^^ngkMessageBox',
      restrict: 'E',
      transclude: true,
      scope: {
        messageId: '@',
        messageTitle: '@',
        messageType: '@'
      },
      link: function postLink(scope, element, attrs, MessageBoxCtrl) {
        scope.messageVisible = false;
        MessageBoxCtrl.startUp();
        MessageBoxCtrl.addMessage(scope);
      },
      templateUrl: 'templates/ngkmessagetab.html'
    };
  });
