'use strict';

/* Controllers */

angular.module('app')
    // Chart controller 
    .controller('TestCtrl', ['$scope', function($scope) {
        $scope.skills = [
            {
                id : 1,
                skillName : 'Skill 1',
                description : 'Experiance of N and the Skillset of 12',
                activity : 'Sparklines',
                mode : 'Apprentice',
                skillLevel : '23 Years'
            },
            {
                id : 2,
                skillName : 'Skill 2',
                description : 'Experiance of N and the Skillset of 12',
                activity : 'Sparklines',
                mode : 'Apprentice',
                skillLevel : '23 Years'
            },
            {
                id : 3,
                skillName : 'Skill 3',
                description : 'Experiance of N and the Skillset of 12',
                activity : 'Sparklines',
                mode : 'Mentor',
                skillLevel : '23 Years'
            },
            {
                id : 4,
                skillName : 'Skill 4',
                description : 'Experiance of N and the Skillset of 12',
                activity : 'Sparklines',
                mode : 'Apprentice',
                skillLevel : '23 Years'
            },
            {
                id : 5,
                skillName : 'Skill 5',
                description : 'Experiance of N and the Skillset of 12',
                activity : 'Sparklines',
                mode : 'Apprentice',
                skillLevel : '23 Years'
            },
            {
                id : 6,
                skillName : 'Skill 6',
                description : 'Experiance of N and the Skillset of 12',
                activity : 'Sparklines',
                mode : 'Mentor',
                skillLevel : '23 Years'
            }
        ];

    }]);
