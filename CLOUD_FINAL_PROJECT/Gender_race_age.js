var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.genderf = function () {


        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=sex%20as%20s,count(report_no)&$group=s%20limit%20150000").then(function (value) {
            $scope.gender2017 = value.data;
            $scope.m1=parseInt($scope.gender2017[2].count_report_no);
            $scope.f1=parseInt($scope.gender2017[1].count_report_no);
            $scope.u1=parseInt($scope.gender2017[3].count_report_no);

            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=sex%20as%20s,count(report_no)&$group=s%20limit%20150000").then(function (value) {
                $scope.gender2018 = value.data;
                $scope.m2=parseInt($scope.gender2018[1].count_report_no);
                $scope.f2=parseInt($scope.gender2018[0].count_report_no);
                $scope.u2=parseInt($scope.gender2018[2].count_report_no);

                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=sex%20as%20s,count(report_no)&$group=s%20limit%20150000").then(function (value) {
                    $scope.gender2019 = value.data;
                    $scope.m3=parseInt($scope.gender2019[2].count_report_no);
                    $scope.f3=parseInt($scope.gender2019[1].count_report_no);
                    $scope.u3=parseInt($scope.gender2019[3].count_report_no);

                    drawgender($scope.m1, $scope.m2, $scope.m3, $scope.f1, $scope.f2, $scope.f3,$scope.u1, $scope.u2, $scope.u3,'genderchart');

                });
            });
        });


    };

    $scope.racef = function () {
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=race%20as%20r,count(report_no)&$group=r%20limit%20150000").then(function (value) {
            $scope.race2017 = value.data;
            $scope.b1=parseInt($scope.race2017[2].count_report_no);
            $scope.u1=parseInt($scope.race2017[5].count_report_no);
            $scope.w1=parseInt($scope.race2017[6].count_report_no);
            $scope.a1=parseInt($scope.race2017[1].count_report_no);
            $scope.i1=parseInt($scope.race2017[3].count_report_no);
            $scope.p1=parseInt($scope.race2017[4].count_report_no);

            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=race%20as%20r,count(report_no)&$group=r%20limit%20150000").then(function (value) {
                $scope.race2018 = value.data;
                $scope.b2=parseInt($scope.race2018[1].count_report_no);
                $scope.u2=parseInt($scope.race2018[4].count_report_no);
                $scope.w2=parseInt($scope.race2018[5].count_report_no);
                $scope.a2=parseInt($scope.race2018[0].count_report_no);
                $scope.i2=parseInt($scope.race2018[2].count_report_no);
                $scope.p2=parseInt($scope.race2018[3].count_report_no);

                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=race%20as%20r,count(report_no)&$group=r%20limit%20150000").then(function (value) {
                    $scope.race2019 = value.data;
                    $scope.b3=parseInt($scope.race2019[1].count_report_no);
                    $scope.u3=parseInt($scope.race2019[2].count_report_no);
                    $scope.w3=parseInt($scope.race2019[4].count_report_no);
                    $scope.a3=parseInt($scope.race2019.count_report_no);
                    $scope.i3=parseInt($scope.race2019[3].count_report_no);
                    $scope.p3=parseInt($scope.race2019.count_report_no);

                    drawrace($scope.b1,$scope.b2, $scope.b3, $scope.u1, $scope.u2, $scope.u3, $scope.w1, $scope.w2, $scope.w3, $scope.a1,$scope.a2, $scope.a3, $scope.i1, $scope.i2, $scope.i3, $scope.p1, $scope.p2, $scope.p3, 'racechart');
                });
            });
        });

    };


    $scope.zip2017 = function () {

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=zip_code%20as%20a,count(report_no)&$group=a&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
            $scope.zip2017 = value.data;
            $scope.c1 = parseInt($scope.zip2017[0].count_report_no);
            $scope.c2 = parseInt($scope.zip2017[1].count_report_no);
            $scope.c3 = parseInt($scope.zip2017[2].count_report_no);
            $scope.c4 = parseInt($scope.zip2017[3].count_report_no);
            $scope.c5 = parseInt($scope.zip2017[4].count_report_no);
            $scope.c6 = parseInt($scope.zip2017[5].count_report_no);
            $scope.c7 = parseInt($scope.zip2017[6].count_report_no);
            $scope.c8 = parseInt($scope.zip2017[7].count_report_no);
            $scope.c9 = parseInt($scope.zip2017[8].count_report_no);
            $scope.c10 = parseInt($scope.zip2017[9].count_report_no);

            drawzip($scope.c1, $scope.c2, $scope.c3, $scope.c4, $scope.c5, $scope.c6, $scope.c7, $scope.c8, $scope.c9, $scope.c10, 'zipchart');
            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=zip_code%20as%20a,count(report_no)&$group=a&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
                $scope.zip2018 = value.data;
                $scope.z1 = parseInt($scope.zip2018[0].count_report_no);
                $scope.z2 = parseInt($scope.zip2018[1].count_report_no);
                $scope.z3 = parseInt($scope.zip2018[2].count_report_no);
                $scope.z4 = parseInt($scope.zip2018[3].count_report_no);
                $scope.z5 = parseInt($scope.zip2018[4].count_report_no);
                $scope.z6 = parseInt($scope.zip2018[5].count_report_no);
                $scope.z7 = parseInt($scope.zip2018[6].count_report_no);
                $scope.z8 = parseInt($scope.zip2018[7].count_report_no);
                $scope.z9 = parseInt($scope.zip2018[8].count_report_no);
                $scope.z10 = parseInt($scope.zip2018[9].count_report_no);

                drawzip1($scope.z1, $scope.z2, $scope.z3, $scope.z4, $scope.z5, $scope.z6, $scope.z7, $scope.z8, $scope.z9, $scope.z10, 'zipchart1');
                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=zip_code%20as%20a,count(report_no)&$group=a&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
                    $scope.zip2019 = value.data;
                    $scope.y1 = parseInt($scope.zip2019[1].count_report_no);
                    $scope.y2 = parseInt($scope.zip2019[2].count_report_no);
                    $scope.y3 = parseInt($scope.zip2019[3].count_report_no);
                    $scope.y4 = parseInt($scope.zip2019[4].count_report_no);
                    $scope.y5 = parseInt($scope.zip2019[5].count_report_no);
                    $scope.y6 = parseInt($scope.zip2019[6].count_report_no);
                    $scope.y7 = parseInt($scope.zip2019[7].count_report_no);
                    $scope.y8 = parseInt($scope.zip2019[8].count_report_no);
                    $scope.y9 = parseInt($scope.zip2019[9].count_report_no);
                    $scope.y10 = parseInt($scope.zip2019[10].count_report_no);

                    drawzip2($scope.y1, $scope.y2, $scope.y3, $scope.y4, $scope.y5, $scope.y6, $scope.y7, $scope.y8, $scope.y9, $scope.y10, 'zipchart2');
                });
            });
        });
    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzip);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawzip(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,zipchart) {
        var data = google.visualization.arrayToDataTable([
            ['ZIP_CODE','COUNT'],

            ['64130', parseInt(c1)],
            ['64127', parseInt(c2)],
            ['64111', parseInt(c3)],
            ['64134', parseInt(c4)],
            ['64106', parseInt(c5)],
            ['64131', parseInt(c6)],
            ['64132', parseInt(c7)],
            ['64133', parseInt(c8)],
            ['64123', parseInt(c9)],
            ['64110', parseInt(c10)],

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'ZIP_CODE Vs CRIME COUNT_2017',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#576'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('zipchart'));
        chart.draw(data, options);
    }
            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawzip1);
            //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
            function drawzip1(z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,zipchart1) {
                var data = google.visualization.arrayToDataTable([
                    ['ZIP_CODE','COUNT'],

                    ['64130', parseInt(z1)],
                    ['64127', parseInt(z2)],
                    ['64111', parseInt(z3)],
                    ['64134', parseInt(z4)],
                    ['64131', parseInt(z5)],
                    ['64108', parseInt(z6)],
                    ['64132', parseInt(z7)],
                    ['64133', parseInt(z8)],
                    ['64128', parseInt(z9)],
                    ['64124', parseInt(z10)],

                ]);
                var options = {
                    animation: {
                        startup: true,   /* Need to add this for animations */
                        duration: 1000,
                        easing: 'in',
                    },

                    title: 'ZIP_CODE Vs CRIME COUNT_2018',
                    linewidth: 70,
                    curvetype:'function',
                    pointSize: 9,
                    legend:'right',
                    colors: ['#576'],
                    height: 500,
                    width: 1500,
                    hAxis: {title: 'Crime Count'},
                    is3D:true,
                };

                var chart = new google.visualization.BarChart(document.getElementById('zipchart1'));
                chart.draw(data, options);
            }
            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawzip2);
            //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
            function drawzip2(y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,zipchart2) {
                var data = google.visualization.arrayToDataTable([
                    ['ZIP_CODE','COUNT'],

                    ['64127', parseInt(y1)],
                    ['64130', parseInt(y2)],
                    ['64111', parseInt(y3)],
                    ['64134', parseInt(y4)],
                    ['64106', parseInt(y5)],
                    ['64131', parseInt(y6)],
                    ['64132', parseInt(y7)],
                    ['64108', parseInt(y8)],
                    ['64128', parseInt(y9)],
                    ['64124', parseInt(y10)],

                ]);
                var options = {
                    animation: {
                        startup: true,   /* Need to add this for animations */
                        duration: 1000,
                        easing: 'in',
                    },

                    title: 'ZIP_CODE Vs CRIME COUNT_2019',
                    linewidth: 70,
                    curvetype:'function',
                    pointSize: 9,
                    legend:'right',
                    colors: ['#576'],
                    height: 500,
                    width: 1500,
                    hAxis: {title: 'Crime Count'},
                    is3D:true,
                };

                var chart = new google.visualization.BarChart(document.getElementById('zipchart2'));
                chart.draw(data, options);
            }
    $scope.age_try = function () {
        var graphicData;
        var age0_10=0,age10_20=0,age20_30=0,age30_40=0,age40_50=0,age50_60=0,age60_70=0,age70_80=0,age80_90=0,age90_100=0;
    $http.get("https://data.kcmo.org/resource/98is-shjt.json?$limit=150000").then(function (value) {
        graphicData = value.data;
        console.log(graphicData);
        for(var i=0;i<graphicData.length;i++){
            if(graphicData[i]['age'] < 10 && graphicData[i]['age'] > 0){
                age0_10++;
            }
            else if(graphicData[i]['age'] < 20 && graphicData[i]['age'] > 10){
                age10_20++;
            }
            else if(graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                age20_30++;
            }
            else if(graphicData[i]['age'] < 40 && graphicData[i]['age'] > 30){
                age30_40++;
            }
            else if(graphicData[i]['age'] < 50 && graphicData[i]['age'] > 40){
                age40_50++;
            }
            else if(graphicData[i]['age'] < 60 && graphicData[i]['age'] > 50){
                age50_60++;
            }
            else if(graphicData[i]['age'] < 70 && graphicData[i]['age'] > 60){
                age60_70++;
            }
            else if(graphicData[i]['age'] < 80 && graphicData[i]['age'] > 70){
                age70_80++;
            }
            else if(graphicData[i]['age'] < 90 && graphicData[i]['age'] > 80){
                age80_90++;
            }
            else if(graphicData[i]['age'] < 100 && graphicData[i]['age'] > 90){
                age90_100++;
            }
        }
        console.log(age20_30);
        drawage_try(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart);
    });
        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            console.log(graphicData);
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['age'] < 10 && graphicData[i]['age'] > 0){
                    age0_10++;
                }
                else if(graphicData[i]['age'] < 20 && graphicData[i]['age'] > 10){
                    age10_20++;
                }
                else if(graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    age20_30++;
                }
                else if(graphicData[i]['age'] < 40 && graphicData[i]['age'] > 30){
                    age30_40++;
                }
                else if(graphicData[i]['age'] < 50 && graphicData[i]['age'] > 40){
                    age40_50++;
                }
                else if(graphicData[i]['age'] < 60 && graphicData[i]['age'] > 50){
                    age50_60++;
                }
                else if(graphicData[i]['age'] < 70 && graphicData[i]['age'] > 60){
                    age60_70++;
                }
                else if(graphicData[i]['age'] < 80 && graphicData[i]['age'] > 70){
                    age70_80++;
                }
                else if(graphicData[i]['age'] < 90 && graphicData[i]['age'] > 80){
                    age80_90++;
                }
                else if(graphicData[i]['age'] < 100 && graphicData[i]['age'] > 90){
                    age90_100++;
                }
            }
            console.log(age20_30);
            drawage_try1(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart2);
        });

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            console.log(graphicData);
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['age'] < 10 && graphicData[i]['age'] > 0){
                    age0_10++;
                }
                else if(graphicData[i]['age'] < 20 && graphicData[i]['age'] > 10){
                    age10_20++;
                }
                else if(graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    age20_30++;
                }
                else if(graphicData[i]['age'] < 40 && graphicData[i]['age'] > 30){
                    age30_40++;
                }
                else if(graphicData[i]['age'] < 50 && graphicData[i]['age'] > 40){
                    age40_50++;
                }
                else if(graphicData[i]['age'] < 60 && graphicData[i]['age'] > 50){
                    age50_60++;
                }
                else if(graphicData[i]['age'] < 70 && graphicData[i]['age'] > 60){
                    age60_70++;
                }
                else if(graphicData[i]['age'] < 80 && graphicData[i]['age'] > 70){
                    age70_80++;
                }
                else if(graphicData[i]['age'] < 90 && graphicData[i]['age'] > 80){
                    age80_90++;
                }
                else if(graphicData[i]['age'] < 100 && graphicData[i]['age'] > 90){
                    age90_100++;
                }
            }
            console.log(age20_30);
            drawage_try2(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart2);
        });


    };



    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawgender);
    function drawgender(m1,m2,m3,f1,f2,f3,u1,u2,u3,genderchart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Male','Female','Unidentified'],
            ['2017', parseInt(m1),parseInt(f1),parseInt(u1)],
            ['2018', parseInt(m2),parseInt(f2),parseInt(u2)],
            ['2019', parseInt(m3),parseInt(f3),parseInt(u3)]

            //['Gender','CRIMES BASED ON GENDER'],
            //['Male', parseInt(m)],
            //['Female', parseInt(f)],
            //['Unidentified', parseInt(u)],

            // ['Gender','Male','Female','Unidentified'],
            // [ 'Gender', parseInt(m),parseInt(f),parseInt(u)]
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            curvetype:'function',
            legend:'right',
            title:'INVOLVEMENT IN CRIMES BASED ON GENDER ',
            vAxis: {title: 'Crime Count'},
            hAxis: {title: 'Year'},
            is3D:true,
            seriesType: 'bars',
            series: {3: {type: 'line'}},
            colors: ['#004d4d','#95B9C7','#007a99'] ,
            height: 600,
            width: 1500

        };


        var chart = new google.visualization.ComboChart(document.getElementById('genderchart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawrace);
    function drawrace(b1,b2,b3,u1,u2,u3,w1,w2,w3,a1,a2,a3,i1,i2,i3,p1,p2,p3,racechart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Unknown','Black','White', 'Asian','Native Indian', 'Pacific Islander'],
            ['2017', parseInt(u1),parseInt(b1),parseInt(w1),parseInt(a1),parseInt(i1),parseInt(p1)],
            ['2018', parseInt(u2),parseInt(b2),parseInt(w2),parseInt(a2),parseInt(i2),parseInt(p2)],
            ['2019', parseInt(u3),parseInt(b3),parseInt(w3),parseInt(a3),parseInt(i3),parseInt(p3)]

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            title: 'RACE vs CRIME OVER 3 YEARS',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            height: 500,
            width: 1500,
            vAxis: {title: 'Crime Count'},
            hAxis: {title: 'Year'},
            is3D:true,
        };
        var chart = new google.visualization.LineChart(document.getElementById(racechart));
        chart.draw(data, options);
    }





    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage_try);
    function drawage_try(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart) {
        var data = google.visualization.arrayToDataTable([
            ['age','count'],
            ['0-10',age0_10],
            ['10-20',age10_20],
            ['20-30',age20_30],
            ['30-40',age30_40],
            ['40-50',age40_50],
            ['50-60',age50_60],
            ['60-70',age60_70],
            ['70-80',age70_80],
            ['80-90',age80_90],
            ['90-100',age90_100]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'AGE Vs CRIME-2017',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#000066'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('age_trychart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage_try1);
    function drawage_try1(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart1) {
        var data = google.visualization.arrayToDataTable([
            ['age','count'],
            ['0-10',age0_10],
            ['10-20',age10_20],
            ['20-30',age20_30],
            ['30-40',age30_40],
            ['40-50',age40_50],
            ['50-60',age50_60],
            ['60-70',age60_70],
            ['70-80',age70_80],
            ['80-90',age80_90],
            ['90-100',age90_100]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'AGE Vs CRIME-2018',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#15151e'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('age_trychart1'));
        chart.draw(data, options);
    }
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage_try2);
    function drawage_try2(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart2) {
        var data = google.visualization.arrayToDataTable([
            ['age','count'],
            ['0-10',age0_10],
            ['10-20',age10_20],
            ['20-30',age20_30],
            ['30-40',age30_40],
            ['40-50',age40_50],
            ['50-60',age50_60],
            ['60-70',age60_70],
            ['70-80',age70_80],
            ['80-90',age80_90],
            ['90-100',age90_100]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'AGE Vs CRIME-2019',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ["#006699"] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('age_trychart2'));
        chart.draw(data, options);
    }




});