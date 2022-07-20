demo = {


  initChartsPages: async function() {
    let resFunds = await fetch('http://localhost:3000/chart-funds');
    let fundData = await resFunds.json();

    let resQuestion = await fetch('http://localhost:3000/chart-question');
    let questionData = await resQuestion.json();

    let genericData = questionData.genericData;
    let teamData = questionData.teamData;
    let businessData = questionData.businessData;
    let marketData = questionData.marketData;
    let legalData = questionData.legalData;

    console.log(questionData);

    // Changes2 by Saurav

    // Owners Chart
    let ctx = document.getElementById('chartOwner').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'doughnut',
      plugins: [{
        afterDraw: chart => {
          var ctx = chart.chart.ctx;
          ctx.save();
          var image = new Image();
          image.src = "assets/img/default-avatar.png";
          imageSize = 60;
          ctx.drawImage(image, (chart.chart.width / 2 - imageSize / 2) + 5, (chart.chart.height / 2 - imageSize / 2) - 3, imageSize, imageSize);
          ctx.restore();
        }
      }],
      data: {
        labels: Object.keys(questionData.genericData.curr_owner),
        datasets: [{
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#2E2EFF',
            '#4ccced',
            '#ff3355',
            '#5CFF5C',
            '#fcc468',
            '#ef8157',
            '#9370db',
            '#9f9f9f',
            '#66cdaa',
            '#228b55'
          ],
          borderWidth: 0,
          data: Object.values(questionData.genericData.curr_owner)
        }],
      },
      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      },
    });


    // Use of Funds Chart
    ctx = document.getElementById('chartFunds').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Product and R&D", "Sales and Marketing", "Inventory", "Operations", "Capital Expenditure", "Others"],
        datasets: [{
          label: "Funds",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#2E2EFF',
            '#4ccced',
            '#5CFF5C',
            '#fcc468',
            '#ef8157',
            '#9f9f9f'
          ],
          borderWidth: 0,
          data: [fundData.PRFunds, fundData.SMFunds, fundData.IFunds, fundData.OFunds, fundData.CEFunds, fundData.OtherFunds]
        }],
      },
      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      },
    });


    // Scorecard Method Chart
    let strengthOfTeam =
      teamData.founder_num +
      teamData.entre_exp +
      teamData.work_together +
      teamData.equipped_level +
      teamData.leadership_level +
      teamData.founder_involve_degree +
      teamData.role_respon +
      teamData.reward_method +
      teamData.team_strength +
      teamData.step_down_ceo;

    strengthOfTeam /= 10;


    let timingOfOpportunity = marketData.test_customer_demand + marketData.feedback;

    timingOfOpportunity /= 2;


    let sizeOfOpportunity =
      businessData.scalable +
      marketData.test_customer_demand +
      marketData.tam_size +
      marketData.sam_size +
      marketData.som_size;

    sizeOfOpportunity /= 5;


    let strengthOfProduct =
      businessData.service_concept +
      businessData.scalable +
      businessData.breakeven +
      legalData.kind_of_ip +
      legalData.ip_status +
      legalData.can_replicated;

    strengthOfProduct /= 6;


    let competitiveEnvironment =
      marketData.entry_barrier +
      marketData.competition_level +
      marketData.competitive_service +
      marketData.your_service;

    competitiveEnvironment /= 4;


    let strategicRelations =
      marketData.feedback +
      marketData.customer_loyalty +
      marketData.partner_relation +
      marketData.sales_status;

    strategicRelations /= 4;


    let others = teamData.skill_avail + teamData.skill_enhance;

    others /= 2;




    ctx = document.getElementById('chartSM').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Strength of Team", "Timing of Opportunity", "Size of Opportunity", "Strength of Product/Tech", "Competitive Environment", "Strategic Relations with Partners", "Others"],
        datasets: [{
          label: 'Scorecard Method',
          data: [strengthOfTeam, timingOfOpportunity, sizeOfOpportunity, strengthOfProduct, competitiveEnvironment, strategicRelations, others],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(153, 102, 255)',
            '#228b55',
            'rgb(255, 205, 86)',
            '#5CFF5C',
            'rgb(54, 162, 235)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2
        }],
      },
      options: {

        legend: {
          display: false
        },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }
          }],
          xAxes: [{
            ticks: {
              callback: function(label) {
                if (/\s/.test(label)) {
                  return label.split(" ");
                } else {
                  return label;
                }
              },
              padding: 5,
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }
          }]
        }
      }
    });



    // Checklist Method Chart
    let qualityOfCoreTeam =
      teamData.founder_num +
      teamData.employee_num +
      teamData.entre_exp +
      teamData.work_together +
      teamData.equipped_level +
      teamData.leadership_level +
      teamData.founder_involve_degree +
      teamData.role_respon +
      teamData.skill_avail +
      teamData.skill_enhance +
      teamData.reward_method;

    qualityOfCoreTeam /= 11;


    let qualityOfIdea =
      marketData.entry_barrier +
      marketData.competition_level +
      marketData.competitive_service +
      marketData.your_service +
      marketData.test_customer_demand +
      marketData.feedback +
      marketData.customer_loyalty;

    qualityOfIdea /= 7;


    let rollOutAndIP =
      businessData.market_fit +
      legalData.kind_of_ip +
      legalData.ip_status;

    rollOutAndIP /= 3;


    let strategicRelationship =
      teamData.have_mentor +

      marketData.partner_relation;

    strategicRelationship /= 2;


    let operationalStage = businessData.breakeven;

    operationalStage /= 1;


    ctx = document.getElementById('chartCM').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Quality of core Team", "Quality of idea", "Product roll-out and IP-Protection", "Strategic Relationship", "Operational Stage"],
        datasets: [{
          label: 'Checklist Method',
          data: [qualityOfCoreTeam, qualityOfIdea, rollOutAndIP, strategicRelationship, operationalStage],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(153, 102, 255)',
            'rgb(255, 205, 86)',
            '#5CFF5C',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1,
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2
        }],
      },
      options: {

        legend: {
          display: false
        },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }
          }],
          xAxes: [{
            ticks: {
              callback: function(label) {
                if (/\s/.test(label)) {
                  return label.split(" ");
                } else {
                  return label;
                }
              },
              padding: 5,
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }
          }]
        }
      }
    });





    // Changes2 by Saurav


    // {
    // var speedCanvas = document.getElementById("speedChart");
    //
    // var dataFirst = {
    //   data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
    //   fill: false,
    //   borderColor: '#fbc658',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: '#fbc658',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8,
    // };
    //
    // var dataSecond = {
    //   data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
    //   fill: false,
    //   borderColor: '#51CACF',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: '#51CACF',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8
    // };
    //
    // var speedData = {
    //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //   datasets: [dataFirst, dataSecond]
    // };
    //
    // var chartOptions = {
    //   legend: {
    //     display: false,
    //     position: 'top'
    //   }
    // };
    //
    // var lineChart = new Chart(speedCanvas, {
    //   type: 'line',
    //   hover: false,
    //   data: speedData,
    //   options: chartOptions
    // });
    // }
  },

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "stylers": [{
          "saturation": 43
        }, {
          "lightness": -11
        }, {
          "hue": "#0088ff"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "hue": "#ff0000"
        }, {
          "saturation": -100
        }, {
          "lightness": 99
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#808080"
        }, {
          "lightness": 54
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ece2d9"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ccdca1"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#767676"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#b8cb93"
        }]
      }, {
        "featureType": "poi.park",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.sports_complex",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.medical",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "simplified"
        }]
      }]

    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function(from, align) {
    color = 'primary';

    $.notify({
      icon: "nc-icon nc-bell-55",
      message: "Welcome to <b>Paper Dashboard</b> - a beautiful bootstrap dashboard for every web developer."

    }, {
      type: color,
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};
