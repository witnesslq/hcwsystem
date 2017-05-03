$(function () {
    /*初始化时间控件*/
    init_time_control();
    /*实例化图表开始*/
    var mychart_01_01 = echarts.init(document.getElementById('chart_01_01'));
    var mychart_01_02 = echarts.init(document.getElementById('chart_01_02'));
    if (GLOBAL_DEBUG) {
        //本地数据
        mychart_01_01.setOption({
            color: ['#578cca'],
            title: {
                text: '2017年医技检查检验统计',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '8%',
                top: '7%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: GLOBAL_JSON.checkInspection.xaxis,
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '检查数',
                    type: 'bar',
                    data: GLOBAL_JSON.checkInspection.yaxis,
                    barWidth: '30'
                }
            ]
        });
        mychart_01_02.setOption({
            color: ['#578cca'],
            title: {
                text: '2017年05月医技检查检验统计',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '8%',
                top: '7%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: GLOBAL_JSON.checkInspection.xaxis,
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '检查数',
                    type: 'bar',
                    data: GLOBAL_JSON.checkInspection.yaxis,
                    barWidth: '30'
                }
            ]
        });
    } else {
        //远程数据
        ajax_chart_01_01();
        ajax_chart_01_02();
    }
    /*所有图表点击事件开始*/
    $('#querybtn_01_01').click(function () {
        ajax_chart_01_01();
    });
    $('#querybtn_01_02').click(function () {
        ajax_chart_01_02();
    });
    /*所有数据远程请求方法开始*/
    function ajax_chart_01_01() {
        var year = $('#year_01_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.checkInspection,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_01_01'));
                    mychart_01_01.setOption({
                        color: ['#578cca'],
                        title: {
                            text: year + '年' + '医技检查检验统计',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '8%',
                            top: '7%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: res.data.xaxis,
                            axisTick: {
                                alignWithLabel: true
                            }
                        },
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '检查数',
                                type: 'bar',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_01_01.clear();
                    chart_append_error($('#mychart_01_01'), res.messages);
                }
            }
        });
    }

    function ajax_chart_01_02() {
        var year = $('#year_01_02').val();
        var month = $('#month_01_02').val();
        _ajax({
            url: GLOBAL_AJAX_URL.checkInspection,
            data:JSON.stringify({
                year: year,
                month: month
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_01_02'));
                    mychart_01_02.setOption({
                        color: ['#578cca'],
                        title: {
                            text: year + '年' + month + '月' + '医技检查检验统计',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '8%',
                            top: '7%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: res.data.xaxis,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval:0,
                                rotate:40
                            }
                        },
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '检查数',
                                type: 'bar',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_01_02.clear();
                    chart_append_error($('#mychart_01_02'), res.messages);
                }
            }
        });
    }
})