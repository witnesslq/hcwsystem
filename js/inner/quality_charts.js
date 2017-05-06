$(function () {
    /*初始化时间控件*/
    init_time_control();
    /*实例化图表开始*/
    var mychart_01_01 = echarts.init(document.getElementById('chart_01_01'));
    var mychart_01_02 = echarts.init(document.getElementById('chart_01_02'));
    var mychart_01_03 = echarts.init(document.getElementById('chart_01_03'));
    if (GLOBAL_DEBUG) {
        //本地数据
        mychart_01_01.setOption({
            color:['#32ce7a','#0a4592','#035aab','#d9191e','#ea6320','#ffae22','#f564c4','#503123','#56969a','#9b9d04'],
            title: {
                text: '2017年05月02日治疗结果统计情况',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            series: [
                {
                    name: '结果比例',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: '80%',
                    label: {
                        normal: {
                            formatter: '{b} {c}例\n{d}%'
                        }
                    },
                    center: ['50%', '48%'],
                    data: GLOBAL_JSON.treatmentOutcome
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        });
        mychart_01_02.setOption({
            color:['#32ce7a','#0a4592','#035aab','#d9191e','#ea6320','#ffae22','#f564c4','#503123','#56969a','#9b9d04'],
            title: {
                text: '2017年05月治疗结果统计情况',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            series: [
                {
                    name: '结果比例',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: '80%',
                    label: {
                        normal: {
                            formatter: '{b} {c}例\n{d}%'
                        }
                    },
                    center: ['50%', '48%'],
                    data: GLOBAL_JSON.treatmentOutcome
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        });
        mychart_01_03.setOption({
            color:['#32ce7a','#0a4592','#035aab','#d9191e','#ea6320','#ffae22','#f564c4','#503123','#56969a','#9b9d04'],
            title: {
                text: '2017年治疗结果统计情况',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            series: [
                {
                    name: '结果比例',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: '80%',
                    label: {
                        normal: {
                            formatter: '{b} {c}例\n{d}%'
                        }
                    },
                    center: ['50%', '48%'],
                    data: GLOBAL_JSON.treatmentOutcome
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        });
    } else {
        //远程数据
        ajax_chart_01_01();
        ajax_chart_01_02();
        ajax_chart_01_03();
    }
    /*所有图表点击事件开始*/
    $('#querybtn_01_01').click(function () {
        ajax_chart_01_01();
    });
    $('#querybtn_01_02').click(function () {
        ajax_chart_01_02();
    });
    $('#querybtn_01_03').click(function () {
        ajax_chart_01_03();
    });
    /*所有数据远程请求方法开始*/
    function ajax_chart_01_01() {
        var year = $('#year_01_01').val();
        var month = $('#month_01_01').val();
        var day = $('#day_01_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.treatmentOutcome,
            data: JSON.stringify({
                year: year,
                month: month,
                day: day
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_01_01'));
                    mychart_01_01.setOption({
                        color:['#32ce7a','#0a4592','#035aab','#d9191e','#ea6320','#ffae22','#f564c4','#503123','#56969a','#9b9d04'],
                        title: {
                            text: year + '年' + month + '月' + day + '日' + '治疗结果统计情况',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {d}%"
                        },
                        series: [
                            {
                                name: '结果比例',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: '80%',
                                label: {
                                    normal: {
                                        formatter: '{b} {c}例\n{d}%'
                                    }
                                },
                                center: ['50%', '48%'],
                                data: res.data.seriesdata
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    });
                } else {
                    mychart_01_01.clear();
                    chart_append_error($('#mychart_01_01'),res.messages);
                }
            }
        });
    }

    function ajax_chart_01_02() {
        var year = $('#year_01_02').val();
        var month = $('#month_01_02').val();
        _ajax({
            url: GLOBAL_AJAX_URL.treatmentOutcome,
            data:JSON.stringify({
                year: year,
                month: month
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_01_02'));
                    mychart_01_02.setOption({
                        color:['#32ce7a','#0a4592','#035aab','#d9191e','#ea6320','#ffae22','#f564c4','#503123','#56969a','#9b9d04'],
                        title: {
                            text: year + '年' + month + '月' + '治疗结果统计情况',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {d}%"
                        },
                        series: [
                            {
                                name: '结果比例',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: '80%',
                                label: {
                                    normal: {
                                        formatter: '{b} {c}例\n{d}%'
                                    }
                                },
                                center: ['50%', '48%'],
                                data: res.data.seriesdata
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    });
                } else {
                    mychart_01_02.clear();
                    chart_append_error($('#mychart_01_02'),res.messages);
                }
            }
        });
    }

    function ajax_chart_01_03() {
        var year = $('#year_01_03').val();
        _ajax({
            url: GLOBAL_AJAX_URL.treatmentOutcome,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_01_03'));
                    mychart_01_03.setOption({
                        color:['#32ce7a','#0a4592','#035aab','#d9191e','#ea6320','#ffae22','#f564c4','#503123','#56969a','#9b9d04'],
                        title: {
                            text: year + '年'+ '治疗结果统计情况',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {d}%"
                        },
                        series: [
                            {
                                name: '结果比例',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: '80%',
                                label: {
                                    normal: {
                                        formatter: '{b} {c}例\n{d}%'
                                    }
                                },
                                center: ['50%', '48%'],
                                data: res.data.seriesdata
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    });
                } else {
                    mychart_01_03.clear();
                    chart_append_error($('#mychart_01_03'),res.messages);
                }
            }
        });
    }
})