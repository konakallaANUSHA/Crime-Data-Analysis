var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.firearmf = function () {
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=firearm_used_flag%20as%20f,count(report_no)&$group=f%20limit%20150000").then(function (value) {
            $scope.firearm2017 = value.data;
            $scope.y1 = parseInt($scope.firearm2017[1].count_report_no);
            $scope.n1 = parseInt($scope.firearm2017[0].count_report_no);

            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=firearm_used_flag%20as%20f,count(report_no)&$group=f%20limit%20150000").then(function (value) {
                $scope.firearm2018 = value.data;
                $scope.y2 = parseInt($scope.firearm2018[1].count_report_no);
                $scope.n2 = parseInt($scope.firearm2018[0].count_report_no);

                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=firearm_used_flag%20as%20f,count(report_no)&$group=f%20limit%20150000").then(function (value) {
                    $scope.firearm = value.data;
                    $scope.y3 = parseInt($scope.firearm[1].count_report_no);
                    $scope.n3 = parseInt($scope.firearm[0].count_report_no);

                    drawfirearm($scope.y1, $scope.y2, $scope.n1, $scope.n2, $scope.y3, $scope.n3, 'firearmchart');


                });
            });
        });

    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawfirearm);
    function drawfirearm(y1,y2,n1,n2,y3,n3,firearmchart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','With Firearms','Without Firearms'],
            ['2017',parseInt(y1),parseInt(n1)],
            ['2018',parseInt(y2),parseInt(n2)],
            ['2019',parseInt(y3),parseInt(n3)]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Total Usage of Firearms in CRIME',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C','#95B9C7'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('firearmchart'));
        chart.draw(data, options);
    }
    $scope.firearm_racef = function () {
        var graphicData, firearm_W=0,firearm_B=0;
        var graphicData1, firearm_W1=0,firearm_B1=0;
        var graphicData2, firearm_W2=0,firearm_B2=0;
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "W"){
                    firearm_W++;
                }
                else if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "B"){
                    firearm_B++;
                }
            }
            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$limit=150000").then(function (value) {
                graphicData1 = value.data;
                for(var i=0;i<graphicData1.length;i++){
                    if(graphicData1[i]['firearm_used_flag'] == "Y" && graphicData1[i]['race'] == "W"){
                        firearm_W1++;
                    }
                    else if(graphicData1[i]['firearm_used_flag'] == "Y" && graphicData1[i]['race'] == "B"){
                        firearm_B1++;
                    }
                }
                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$limit=150000").then(function (value) {
                    graphicData2 = value.data;
                    console.log(graphicData2[0]['firearm_used_flag']);
                    for(var i=0;i<graphicData2.length;i++){
                        if(graphicData2[i]['firearm_used_flag'] == true && graphicData1[i]['race'] == "W"){
                            firearm_W2++;
                        }
                        else if (graphicData2[i]['firearm_used_flag'] == true && graphicData1[i]['race'] == "B"){
                            firearm_B2++;
                        }
                    }
                    console.log(firearm_W2);
                    console.log(firearm_B2);

            drawfirearm_race(firearm_W,firearm_B,firearm_W1,firearm_B1,firearm_W2,firearm_B2,f_racechart);
                });
            });
        });

    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawfirearm_filter);
    function drawfirearm_race(firearm_W,firearm_B,firearm_W1,firearm_B1,firearm_W2,firearm_B2,f_racechart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','With Firearms used by B','Without Firearms used by W'],
            ['2017',firearm_B,firearm_W],
            ['2018',firearm_B1,firearm_W1],
            ['2019',firearm_B2,firearm_W2]
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Total Usage of Firearms in CRIME WRT RACE',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#95B9C7','#9999ff','#1A008C'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('f_racechart'));
        chart.draw(data, options);
    }

    $scope.firearm_filterf = function () {
        var graphicData, firearm_W=0,firearm_B=0;
        var graphicData1, firearm_W1=0,firearm_B1=0;
        var graphicData2, firearm_W2=0,firearm_B2=0;

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "W" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    firearm_W++;
                }
                else if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "B" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    firearm_B++;
                }
            }
            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$limit=150000").then(function (value) {
                graphicData1 = value.data;
                for(var i=0;i<graphicData1.length;i++){
                    if(graphicData1[i]['firearm_used_flag'] == "Y" && graphicData1[i]['race'] == "W" && graphicData1[i]['age'] < 30 && graphicData1[i]['age'] > 20){
                        firearm_W1++;
                    }
                    else if(graphicData1[i]['firearm_used_flag'] == "Y" && graphicData1[i]['race'] == "B" && graphicData1[i]['age'] < 30 && graphicData1[i]['age'] > 20){
                        firearm_B1++;
                    }
                }
                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$limit=150000").then(function (value) {
                    graphicData2 = value.data;
                    for(var i=0;i<graphicData2.length;i++){
                        if(graphicData2[i]['firearm_used_flag'] == true && graphicData2[i]['race'] == "W" && graphicData2[i]['age'] < 30 && graphicData2[i]['age'] > 20){
                            firearm_W2++;
                        }
                        else if(graphicData2[i]['firearm_used_flag'] == true && graphicData2[i]['race'] == "B" && graphicData2[i]['age'] < 30 && graphicData2[i]['age'] > 20){
                            firearm_B2++;
                        }
                    }
                    console.log(firearm_W);
                    console.log(firearm_B);
                 drawfirearm_filter(firearm_W,firearm_B,firearm_W1,firearm_B1,firearm_W2,firearm_B2,f_filterchart);
                });
            });
        });

    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawfirearm_filter);
    function drawfirearm_filter(firearm_W,firearm_B,firearm_W1,firearm_B1,firearm_W2,firearm_B2,f_filterchart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Firearms used by B','Firearms used by W'],
            ['2017',firearm_B,firearm_W],
            ['2018',firearm_B1,firearm_W1],
            ['2019',firearm_B2,firearm_W2],

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Total Usage of Firearms in CRIME WRT RACE AND Age(20-30)',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#95B9C7','#15151e','#15151e'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('f_filterchart'));
        chart.draw(data, options);
    }




});