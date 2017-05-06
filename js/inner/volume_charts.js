$(function () {
    /*初始化时间控件*/
    init_time_control();
    /*实例化图表开始*/
    var mychart_08_01 = echarts.init(document.getElementById('chart_08_01'));
    var mychart_09_01 = echarts.init(document.getElementById('chart_09_01'));
    var mychart_10_01 = echarts.init(document.getElementById('chart_10_01'));
    var mychart_11_01 = echarts.init(document.getElementById('chart_11_01'));
    var mychart_12_01 = echarts.init(document.getElementById('chart_12_01'));
    var mychart_13_01 = echarts.init(document.getElementById('chart_13_01'));
    if (GLOBAL_DEBUG) {
        //本地数据
        mychart_08_01.setOption({
            color: ['#d9191e'],
            title: {
                text: '2017年门急诊挂号人次统计',
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
                data: GLOBAL_JSON.emergencyAccessDoor.xaxis,
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
                    name: '挂号人次',
                    type: 'bar',
                    data: GLOBAL_JSON.emergencyAccessDoor.yaxis,
                    barWidth: '30'
                }
            ]
        });
        mychart_09_01.setOption({
            color: ['#0a4592'],
            title: {
                text: '2017年住院均次费用统计',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'axis'
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
                data: GLOBAL_JSON.hospitalizedCost.xaxis,
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
                    name: '均次费用',
                    type: 'line',
                    data: GLOBAL_JSON.hospitalizedCost.yaxis,
                    barWidth: '30'
                }
            ]
        });
        mychart_10_01.setOption({
            color: ['#d9191e'],
            title: {
                text: '2017年门急诊均次费用',
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
                data: GLOBAL_JSON.emergencyCostDepartment.xaxis,
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
                    name: '均次费用',
                    type: 'bar',
                    data: GLOBAL_JSON.emergencyCostDepartment.yaxis,
                    barWidth: '30'
                }
            ]
        });
        mychart_11_01.setOption({
            color: ['#d9191e'],
            title: {
                text: '2017年住院人次',
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
                data: GLOBAL_JSON.hospitalization.xaxis,
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
                    name: '人次',
                    type: 'bar',
                    data: GLOBAL_JSON.hospitalization.yaxis,
                    barWidth: '30'
                }
            ]
        });
        mychart_12_01.setOption({
            color: ['#0a4592'],
            title: {
                text: '2017年在院人次',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'axis'
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
                data: GLOBAL_JSON.courtyardTimes.xaxis,
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
                    name: '人次',
                    type: 'line',
                    data: GLOBAL_JSON.courtyardTimes.yaxis,
                    barWidth: '30'
                }
            ]
        });
        mychart_13_01.setOption({
            color: ['#0a4592'],
            title: {
                text: '2017年出院人次',
                left: 'center',
                bottom: '10',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#000'
                }
            },
            tooltip: {
                trigger: 'axis'
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
                data: GLOBAL_JSON.dischargedNumber.xaxis,
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
                    name: '人次',
                    type: 'line',
                    data: GLOBAL_JSON.dischargedNumber.yaxis,
                    barWidth: '30'
                }
            ]
        });
    } else {
        //远程数据
        ajax_panel_01_01();
        ajax_panel_02_01();
        ajax_panel_03_01();
        ajax_panel_04_01();
        ajax_panel_05_01();
        ajax_panel_06_01();
        ajax_panel_07_01();
        ajax_chart_08_01();
        ajax_chart_09_01();
        ajax_chart_10_01();
        ajax_chart_11_01();
        ajax_chart_12_01();
        ajax_chart_13_01();
    }
    /*所有图表点击事件开始*/
    $('#querybtn_01_01').click(function () {
        ajax_panel_01_01();
    });
    $('#querybtn_02_01').click(function () {
        ajax_panel_02_01();
    });
    $('#querybtn_03_01').click(function () {
        ajax_panel_03_01();
    });
    $('#querybtn_04_01').click(function () {
        ajax_panel_04_01();
    });
    $('#querybtn_05_01').click(function () {
        ajax_panel_05_01();
    });
    $('#querybtn_06_01').click(function () {
        ajax_panel_06_01();
    });
    $('#querybtn_07_01').click(function () {
        ajax_panel_07_01();
    });
    $('#querybtn_08_01').click(function () {
        ajax_chart_08_01();
    });
    $('#querybtn_09_01').click(function () {
        ajax_chart_09_01();
    });
    $('#querybtn_10_01').click(function () {
        ajax_chart_10_01();
    });
    $('#querybtn_11_01').click(function () {
        ajax_chart_11_01();
    });
    $('#querybtn_12_01').click(function () {
        ajax_chart_12_01();
    });
    $('#querybtn_13_01').click(function () {
        ajax_chart_13_01();
    });
    /*所有数据远程请求方法开始*/
    function ajax_panel_01_01() {
        var year = $('#year_01_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.expertAttendance,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_01_01').text(year+'年专家门诊出勤率');
                    $('#res_01_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_panel_02_01() {
        var year = $('#year_02_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.wellKnownExpertNumber,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_02_01').text(year+'年知名专家号');
                    $('#res_02_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_panel_03_01() {
        var year = $('#year_03_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.chiefPhysicianNumber,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_03_01').text(year+'年主任医师挂号数');
                    $('#res_03_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_panel_04_01() {
        var year = $('#year_04_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.deputyChiefPhysicianNumber,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_03_01').text(year+'年副主任医师挂号数');
                    $('#res_03_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_panel_05_01() {
        var year = $('#year_05_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.outpatientConsultation,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_05_01').text(year+'年门诊总诊量数');
                    $('#res_05_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_panel_06_01() {
        var year = $('#year_06_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.ordinaryPhysicianRegistrationNumber,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_06_01').text(year+'年普通医师挂号数');
                    $('#res_06_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_panel_07_01() {
        var year = $('#year_07_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.specialOutpatientVisits,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_07_01').text(year+'年特需门诊人次');
                    $('#res_07_01').text(res.data.result);
                } else {
                    top.dhtmlx.alert({
                        text: res.messages,
                        title: '提示信息',
                        ok: '确定'
                    });
                }
            }
        });
    }
    function ajax_chart_08_01() {
        var year = $('#year_08_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.emergencyAccessDoor,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_08_01'));
                    mychart_08_01.setOption({
                        color: ['#d9191e'],
                        title: {
                            text: year + '年' + '门急诊挂号人次统计',
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
                                name: '挂号人次',
                                type: 'bar',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_08_01.clear();
                    chart_append_error($('#mychart_08_01'), res.messages);
                }
            }
        });
    }
    function ajax_chart_09_01() {
        var year = $('#year_09_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizedCost,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_09_01'));
                    mychart_09_01.setOption({
                        color: ['#0a4592'],
                        title: {
                            text: year + '年' + '住院均次费用',
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
                                name: '均次费用',
                                type: 'line',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_09_01.clear();
                    chart_append_error($('#mychart_09_01'), res.messages);
                }
            }
        });
    }
    function ajax_chart_10_01() {
        var year = $('#year_10_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.emergencyCostDepartment,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_10_01'));
                    mychart_10_01.setOption({
                        color: ['#d9191e'],
                        title: {
                            text: year + '年' + '门急诊均次费用',
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
                                name: '均次费用',
                                type: 'bar',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_10_01.clear();
                    chart_append_error($('#mychart_10_01'), res.messages);
                }
            }
        });
    }
    function ajax_chart_11_01() {
        var year = $('#year_11_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalization,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_11_01'));
                    mychart_11_01.setOption({
                        color: ['#d9191e'],
                        title: {
                            text: year + '年' + '住院人次',
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
                                name: '人次',
                                type: 'bar',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_11_01.clear();
                    chart_append_error($('#mychart_11_01'), res.messages);
                }
            }
        });
    }
    function ajax_chart_12_01() {
        var year = $('#year_12_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.courtyardTimes,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_12_01'));
                    mychart_12_01.setOption({
                        color: ['#0a4592'],
                        title: {
                            text: year + '年' + '在院人次',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'axis'
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
                                name: '人次',
                                type: 'line',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_12_01.clear();
                    chart_append_error($('#mychart_12_01'), res.messages);
                }
            }
        });
    }
    function ajax_chart_13_01() {
        var year = $('#year_13_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.dischargedNumber,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_13_01'));
                    mychart_13_01.setOption({
                        color: ['#0a4592'],
                        title: {
                            text: year + '年' + '出院人次',
                            left: 'center',
                            bottom: '10',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 12,
                                color: '#000'
                            }
                        },
                        tooltip: {
                            trigger: 'axis'
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
                                name: '人次',
                                type: 'line',
                                data: res.data.yaxis,
                                barWidth: '30'
                            }
                        ]
                    });
                } else {
                    mychart_13_01.clear();
                    chart_append_error($('#mychart_13_01'), res.messages);
                }
            }
        });
    }
})