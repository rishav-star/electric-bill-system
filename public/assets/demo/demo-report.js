demoReport = {

  initChartsPages: async function() {


    // Method Weights chart

    let scorecard = 6;
    let checklist = 6;
    let ventureCaptital = 16;
    let dcfLTG = 36;
    let dcfMUL = 36;

    let ctx = document.getElementById('methodWeights').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Scorecard " + scorecard + "%", "Checklist " + checklist + "%", "Venture Capital " + ventureCaptital + "%", "DCF with LTG " + dcfLTG + "%", "DCF with Multiplier " + dcfMUL + "%"],
        datasets: [{
          data: [6, 6, 16, 36, 36],
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

    // Fund Valuation Chart
    ctx = document.getElementById('fundValuation').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'doughnut',
      plugins: [{
        afterDraw: chart => {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 200).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          var text = "Rs. ____",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }],
      data: {
        // labels: ["Product and R&D", "Sales and Marketing", "Inventory", "Operations", "Capital Expenditure", "Others"],
        datasets: [{
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#2E2EFF',
            '#4ccced',
            '#5CFF5C',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: [20, 20, 20, 20, 20]
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



    // cash forecast

     ctx = document.getElementById('cashForecast').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["11/2019-10/2020 ", "11/2020-10/2021", "11/2021-10/2022"],
        datasets: [{
          label:"Free cash flow to equity",
          type:'line',
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,0)",
          borderColor: "rgba(0,0,0)",
          data: [536079, -226279, 912594],
          
        },{
          
            label:"Cash in hand",
            data: [1636079, 1609800, 252239],
            
            backgroundColor:  'rgb(48, 45, 207)',
            borderWidth: 1,
            barPercentage: 0.5,
            barThickness: 4,
            maxBarThickness: 6,
            minBarLength: 2
            
          
        }],
      },
      options: {

        legend: {
          display: true
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

//future profiatability
ctx = document.getElementById('futureProfitability').getContext("2d");

myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["11/2019-10/2020 ", "11/2020-10/2021", "11/2021-10/2022"],
    datasets: [{
      label:"EBITDA",
      type:'line',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(196, 196, 190)",
      borderColor: "rgba(196, 196, 190)",
      data: [882000, -106200, 1471800],
      
    },{
      
        label:"Revenues",
        data: [198000, 1901800, 2846000],
        
        backgroundColor:  'rgb(48, 45, 207)',
        borderWidth: 1,
        barPercentage: 0.5,
        barThickness: 4,
        maxBarThickness: 6,
        minBarLength: 2
        
      
    },{
      
      label:"Costs",
      data: [1636079, 1609800, 252239],
      
      backgroundColor:  'rgb(0,0, 0)',
      borderWidth: 1,
      barPercentage: 0.5,
      barThickness: 4,
      maxBarThickness: 6,
      minBarLength: 2
      
    
  }],
  },
  options: {

    legend: {
      display: true
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
        // chart scorecard
        let strengthOfTeam = 57.14;
        let sizeOfOpportunity = 50;
        let strengthAnd = 100;
        let competitiveEnvironment = 100;
        let relat = 100;
        let funding = 0;
    ctx = document.getElementById('chartScore').getContext("2d");
    
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Strength of the team " + strengthOfTeam + "%", "Size of the Opportunity " +sizeOfOpportunity + "%", "Strength and protection of the product/service" + strengthAnd + "%", "Competitive Environment " + competitiveEnvironment + "%", " Strategic relationships with partners" + relat + "%","Funding required " + funding + "%"],
    
        datasets: [{
          data: [57.14,50,100,100,100,0],
          backgroundColor: 'rgb(48, 45, 207)',
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
        
    // chart checklist
        let qlty = 1659722;
        let qltyidea = 1317240;
        let pdtroll = 987930;
        let strelat = 699784;
        let operatstage = 1317240;
    ctx = document.getElementById('chartChk').getContext("2d");
    
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Quality of the core team " + qlty + "$", "Quality of the Idea " +qltyidea + "$", "Product roll-out and IP protection " + pdtroll + "$", "Strategic Relationships " + strelat + "$", "Operating Stage " + operatstage + "$"],
    
        datasets: [{
          data: [1659722,1317240,987930, 699784,1317240],
          backgroundColor: 'rgb(48, 45, 207)',
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
// chart vc

ctx = document.getElementById('chartVc').getContext("2d");

myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["11/2019-10/2020 ", "11/2020-10/2021", "11/2021-10/2022"],
    datasets: [
      
      {
      data: [882000,-106200, 1471800],
      backgroundColor: 'rgb(48, 45, 207)',
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
// dcf methods
ctx = document.getElementById('chartDcf').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["11/2019-10/2020 ", "11/2020-10/2021", "11/2021-10/2022"],
        datasets: [{
          data: [536079,-226279, 912594],
          backgroundColor:'rgb(48, 45, 207)',
          borderWidth: 1,
          barPercentage: 0.5,
          barThickness: 6,//6
          maxBarThickness: 8,//8
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


    ///dcf with multiply
    

     ctx = document.getElementById('chartDcfMul').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [ "$","$","$"],
        datasets: [{
          
            label:"EBITDA",
            type:'line',
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0)",
            borderColor: "rgba(0,0,0)",
            data: [882200, -106200, 1471800],
            
          
        },
          { 
          type: 'bar',
          label:"Free cash flow to equity",
          data: [536079,-226279, 912594],
          backgroundColor: 'rgb(48, 45, 207)',
          borderWidth: 1,
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2
        }],
      },
      options: {

        legend: {
          display: true
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

    

  }
}