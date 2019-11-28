var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {
    $scope.totalcrimes = function () {
        var graphicData, graphicData1, graphicData2;
        var overall_crime,overall_crime1, overall_crime2;
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            overall_crime= graphicData.length;
            console.log(overall_crime);

            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$limit=150000").then(function (value) {
                graphicData1 = value.data;
                overall_crime1= graphicData1.length;
                console.log(overall_crime1);

                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$limit=150000").then(function (value) {
                    graphicData2 = value.data;
                    overall_crime2= graphicData2.length;
                    console.log(overall_crime2);

                    drawcrimecnt(graphicData.length,graphicData1.length,graphicData2.length, crimecntchart);



                });
            });
        });


    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawcrimecnt);
    function drawcrimecnt(overall_crime,overall_crime1,overall_crime2,crimecntchart) {
        var data = google.visualization.arrayToDataTable([
            ['YEAR','count'],
            ['2017',overall_crime],
            ['2018',overall_crime1],
            ['2019',overall_crime2],

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'TOTAL CRIME COUNT ON PAST 3 YEARS',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#009999'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('crimecntchart'));
        chart.draw(data, options);
    }




    $scope.top10crimes = function () {

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
            $scope.desc2017 = value.data;
            $scope.c1 = parseInt($scope.desc2017[0].count_report_no);
            $scope.c2 = parseInt($scope.desc2017[1].count_report_no);
            $scope.c3 = parseInt($scope.desc2017[2].count_report_no);
            $scope.c4 = parseInt($scope.desc2017[3].count_report_no);
            $scope.c5 = parseInt($scope.desc2017[4].count_report_no);
            $scope.c6 = parseInt($scope.desc2017[5].count_report_no);
            $scope.c7 = parseInt($scope.desc2017[6].count_report_no);
            $scope.c8 = parseInt($scope.desc2017[7].count_report_no);
            $scope.c9 = parseInt($scope.desc2017[8].count_report_no);
            $scope.c10 = parseInt($scope.desc2017[9].count_report_no);
            drawdesc($scope.c1, $scope.c2, $scope.c3, $scope.c4, $scope.c5, $scope.c6, $scope.c7, $scope.c8, $scope.c9, $scope.c10,'descchart');


            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
                $scope.desc2018 = value.data;
                $scope.d1 = parseInt($scope.desc2018[0].count_report_no);
                $scope.d2 = parseInt($scope.desc2018[1].count_report_no);
                $scope.d3 = parseInt($scope.desc2018[2].count_report_no);
                $scope.d4 = parseInt($scope.desc2018[3].count_report_no);
                $scope.d5 = parseInt($scope.desc2018[4].count_report_no);
                $scope.d6 = parseInt($scope.desc2018[5].count_report_no);
                $scope.d7 = parseInt($scope.desc2018[6].count_report_no);
                $scope.d8 = parseInt($scope.desc2018[7].count_report_no);
                $scope.d9 = parseInt($scope.desc2018[8].count_report_no);
                $scope.d10 = parseInt($scope.desc2018[9].count_report_no);
                drawdesc1($scope.d1, $scope.d2, $scope.d3, $scope.d4, $scope.d5, $scope.d6, $scope.d7, $scope.d8, $scope.d9, $scope.d10,'descchart1');


                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
                    $scope.desc2019 = value.data;
                    $scope.e1 = parseInt($scope.desc2019[1].count_report_no);
                    $scope.e2 = parseInt($scope.desc2019[2].count_report_no);
                    $scope.e3 = parseInt($scope.desc2019[3].count_report_no);
                    $scope.e4 = parseInt($scope.desc2019[4].count_report_no);
                    $scope.e5 = parseInt($scope.desc2019[5].count_report_no);
                    $scope.e6 = parseInt($scope.desc2019[6].count_report_no);
                    $scope.e7 = parseInt($scope.desc2019[7].count_report_no);
                    $scope.e8 = parseInt($scope.desc2019[8].count_report_no);
                    $scope.e9 = parseInt($scope.desc2019[9].count_report_no);
                    $scope.e10 = parseInt($scope.desc2019[10].count_report_no);
                    drawdesc2($scope.e1, $scope.e2, $scope.e3, $scope.e4, $scope.e5, $scope.e6, $scope.e7, $scope.e8, $scope.e9, $scope.e10,'descchart2');
                });
            });
        });
    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdesc);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawdesc(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,descchart) {
        var data = google.visualization.arrayToDataTable([
            ['DES','COUNT'],

            ['property damage', parseInt(c1)],
            ['stealing frm auto', parseInt(c2)],
            ['auto theft', parseInt(c3)],
            ['non aggravated assault', parseInt(c4)],
            ['burglury-residence', parseInt(c5)],
            ['aggravated assault', parseInt(c6)],
            ['stealing shoplifting', parseInt(c7)],
            ['possesion', parseInt(c8)],
            ['stealing frm building', parseInt(c9)],
            ['stealing all other', parseInt(c10)]



        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Top 10 crimes-2017',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('descchart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdesc1);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawdesc1(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,descchart1) {
        var data = google.visualization.arrayToDataTable([
            ['DES','COUNT'],

            ['property damage', parseInt(d1)],
            ['stealing frm auto', parseInt(d2)],
            ['Non Agg Assault Dome', parseInt(d3)],
            ['Auto Theft', parseInt(d4)],
            ['Aggravated Assault', parseInt(d5)],
            ['Burglary - Residence', parseInt(d6)],
            ['Stealing Shoplifting', parseInt(d7)],
            ['Possession/Sale/Dist', parseInt(d8)],
            ['stealing frm building', parseInt(d9)],
            ['stealing all other', parseInt(d10)]



        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Top 10 crimes-2018',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('descchart1'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdesc2);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawdesc2(e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,descchart2) {
        var data = google.visualization.arrayToDataTable([
            ['DES','COUNT'],

            ['Simple Assault', parseInt(e1)],
            ['Aggravated Assault', parseInt(e2)],
            ['Destruction of Property', parseInt(e3)],
            ['Motor Vehicle Theft', parseInt(e4)],
            ['Burglary/Breaking and Entering', parseInt(e5)],
            ['Theft From Motor Vehicle', parseInt(e6)],
            ['Shoplifting', parseInt(e7)],
            ['All Other Offenses', parseInt(e8)],
            ['All Other Larceny', parseInt(e9)],
            ['Robbery', parseInt(e10)]



        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Top 10 crimes-2019',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('descchart2'));
        chart.draw(data, options);
    }
    $scope.zipcodef = function () {

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=zip_code,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Stealing%20From%20Auto%22%20or%20description=%20%22Auto%20Theft%22%20or%20description=%20%22Non%20Agg%20Assault%20Dome%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Stealing%20Shoplifting%22%20or%20description=%20%22Possesion%47Sale%47Dist%47%22%20&$group=zip_code%20&$order=count(report_no)%20DESC%20limit%207").then(function (value) {
            $scope.zip2017 = value.data;
            console.log(value.data);
            $scope.z1 = parseInt($scope.zip2017[0].count_report_no);
            $scope.z2 = parseInt($scope.zip2017[1].count_report_no);
            $scope.z3 = parseInt($scope.zip2017[2].count_report_no);
            $scope.z4 = parseInt($scope.zip2017[3].count_report_no);
            $scope.z5 = parseInt($scope.zip2017[4].count_report_no);
            console.log($scope.z1);
            drawzipcode($scope.z1, $scope.z2, $scope.z3, $scope.z4, $scope.z5, 'zipcodechart');

            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=zip_code,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Stealing%20From%20Auto%22%20or%20description=%20%22Auto%20Theft%22%20or%20description=%20%22Non%20Agg%20Assault%20Dome%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Stealing%20Shoplifting%22%20or%20description=%20%22PossesionGSaleGDistG%22%20&$group=zip_code%20&$order=count(report_no)%20DESC%20limit%207").then(function (value) {
                $scope.zip2018 = value.data;
                $scope.l1 = parseInt($scope.zip2018[0].count_report_no);
                $scope.l2 = parseInt($scope.zip2018[3].count_report_no);
                $scope.l3 = parseInt($scope.zip2018[2].count_report_no);
                $scope.l4 = parseInt($scope.zip2018[1].count_report_no);
                $scope.l5 = parseInt($scope.zip2018[4].count_report_no);
                drawzipcode1($scope.l1, $scope.l2, $scope.l3, $scope.l4, $scope.l5, 'zipcodechart1');

                $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=zip_code,count(report_no)%20where%20description=%22Vandalism/Destruction%20of%20Property%22%20or%20description=%20%22Motor%20Vehicle%20Theft%22%20or%20description=%20%22Theft%20From%20Motor%20Vehicle%22%20or%20description=%20%22Simple%20Assault%22%20or%20description=%20%22Burglary/Breaking%20and%20Entering%22%20or%20description=%20%22Shoplifting%22%20or%20description=%20%22All%20Other%20Offenses%22%20&$group=zip_code%20&$order=count(report_no)%20DESC%20limit%207").then(function (value) {
                    $scope.zip2019 = value.data;
                    $scope.k1 = parseInt($scope.zip2019[1].count_report_no);
                    $scope.k2 = parseInt($scope.zip2019[5].count_report_no);
                    $scope.k3 = parseInt($scope.zip2019[2].count_report_no);
                    $scope.k4 = parseInt($scope.zip2019[3].count_report_no);
                    $scope.k5 = parseInt($scope.zip2019[6].count_report_no);
                    drawzipcode2($scope.k1, $scope.k2, $scope.k3, $scope.k4, $scope.k5, 'zipcodechart2');
                });
            });
        });
    };
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzipcode);
    function drawzipcode(z1,z2,z3,z4,z5,zipcodechart) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','Number of Crimes'],
            ['64130', parseInt(z1)],
            ['64134', parseInt(z2)],
            ['64127', parseInt(z3)],
            ['64111', parseInt(z4)],
            ['64131', parseInt(z5)]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            legend:'right',
            title:'Top Crimes in Top 5 locations for 2017',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#142952', '#2952a3', '#334d4d', '#33001a', '#00004d','#1610CB']
        };


        var chart = new google.visualization.PieChart(document.getElementById('zipcodechart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzipcode1);
    function drawzipcode1(l1,l2,l3,l4,l5,zipcodechart1) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','Number of Crimes'],
            ['64130', parseInt(l1)],
            ['64134', parseInt(l2)],
            ['64127', parseInt(l3)],
            ['64111', parseInt(l4)],
            ['64131', parseInt(l5)]

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            legend:'right',
            title:'Top Crimes in Top 5 locations for 2018',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#142952', '#2952a3', '#334d4d', '#33001a', '#00004d','#1610CB']
        };


        var chart = new google.visualization.PieChart(document.getElementById('zipcodechart1'));
        chart.draw(data, options);
    }


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzipcode2);
    function drawzipcode2(k1,k2,k3,k4,k5,zipcodechart2) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','Number of Crimes'],
            ['64130', parseInt(k1)],
            ['64134', parseInt(k2)],
            ['64127', parseInt(k3)],
            ['64111', parseInt(k4)],
            ['64131', parseInt(k5)]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            legend:'right',
            title:'Top Crimes in Top 7 locations for 2019',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#142952', '#2952a3', '#334d4d', '#33001a', '#00004d','#1610CB']
        };


        var chart = new google.visualization.PieChart(document.getElementById('zipcodechart2'));
        chart.draw(data, options);
    }




});