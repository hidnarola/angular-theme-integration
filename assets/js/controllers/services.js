'use strict';

/* Controllers */

angular.module('app',['ui.grid', 'ui.select'])
    // Chart controller 
    .controller('ServicesCtrl', ['$scope', function($scope) {
        var table = $('#basicTable');

        $scope.options = {
            "destroy": true,
            "iDisplayLength": 10,
            "scrollCollapse": true,
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }],
            "order": []
        };

        $scope.selectRow = function(event) {
            var element = event.currentTarget;
             if ($(element).is(':checked')) {
                $(element).closest('tr').addClass('selected');
            } else {
                $(element).closest('tr').removeClass('selected');
            }
        }
        $scope.services = [
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: '100',
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "First Tour",
                isNew : 0,
                type: "Type 1",
                category: "Category 1",
                tags:['My Tour', 'inspiration'],
                popularity: '99,999,999',
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Second Tour",
                isNew : 0,
                type: "Type 1",
                category: "Category 1",
                tags:['Tour'],
                popularity: '1,000,000,000',
                vendor : 'Vendor 2',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
            {
                name: "Life's sadness shared123",
                isNew : 1,
                type: "Type 1",
                category: "Category 1",
                tags:['Hello World', 'quotes', 'inspiration'],
                popularity: 100,
                vendor : 'Vendor 1',
                status : 'Active',
                lastUpdate : 'April 13,2014 10:13'
            },
        ];
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
