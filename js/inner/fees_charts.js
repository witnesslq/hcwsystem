$(function () {
    /*初始化时间控件*/
    init_time_control();
    var mychart_02_01 = echarts.init(document.getElementById('chart_02_01'));
    var mychart_02_02 = echarts.init(document.getElementById('chart_02_02'));
    if (GLOBAL_DEBUG) {
        //本地数据
        mychart_02_01.setOption({
            title: {
                text: '2017年住院均次费用构成比例',
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
                    name: '构成比例',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: '75%',
                    label: {
                        normal: {
                            formatter: '{b} {c}例\n{d}%'
                        }
                    },
                    center: ['50%', '48%'],
                    data: GLOBAL_JSON.hospitalizedCostConstitute
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
        mychart_02_02.setOption({
            title: {
                text: '2017年05月住院均次费用构成比例',
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
                    name: '构成比例',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: '75%',
                    label: {
                        normal: {
                            formatter: '{b} {c}例\n{d}%'
                        }
                    },
                    center: ['50%', '48%'],
                    data: GLOBAL_JSON.hospitalizedCostConstitute
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
        ajax_panel_01_01();
        ajax_panel_01_02();
        ajax_chart_02_01();
        ajax_chart_02_02();
        ajax_list_03_01();
        ajax_list_04_01();
        ajax_list_05_01();
        ajax_list_06_01();
        ajax_list_08_01();
        ajax_table_07_01()
    }
    /*所有图表点击事件开始*/
    $('#querybtn_01_01').click(function () {
        ajax_panel_01_01();
    });
    $('#querybtn_01_02').click(function () {
        ajax_panel_01_02();
    });
    $('#querybtn_02_01').click(function () {
        ajax_chart_02_01();
    });
    $('#querybtn_02_02').click(function () {
        ajax_chart_02_02();
    });
    $('#querybtn_03_01').click(function () {
        ajax_list_03_01();
    });
    $('#querybtn_04_01').click(function () {
        ajax_list_04_01();
    });
    $('#querybtn_05_01').click(function () {
        ajax_list_05_01();
    });
    $('#querybtn_06_01').click(function () {
        ajax_list_06_01();
    });
    $('#querybtn_07_01').click(function () {
        ajax_table_07_01();
    });
    $('#querybtn_08_01').click(function () {
        ajax_list_08_01();
    });
    /*所有数据远程请求方法开始*/
    function ajax_panel_01_01() {
        var year = $('#year_01_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizedCostPer,
            data: JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_01_01').text(year+'年住院均次费用同比、环比统计');
                    $('#period_01_01').text(res.data.yoy);
                    $('#per_year_01_01').text(res.data.qoq);
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
    function ajax_panel_01_02() {
        var year = $('#year_01_02').val();
        var month=$('#month_01_02').val();
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizedCostPer,
            data: JSON.stringify({
                year: year,
                month:month
            }),
            success: function (res) {
                if (res.status) {
                    $('#title_01_02').text(year+'年'+month+'月住院均次费用同比、环比统计');
                    $('#period_01_02').text(res.data.yoy);
                    $('#per_year_01_02').text(res.data.qoq);
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
    function ajax_chart_02_01() {
        var year = $('#year_02_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizedCostConstitute,
            data:JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_02_01'));
                    mychart_02_01.setOption({
                        title: {
                            text: year + '年住院均次费用构成比例',
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
                                name: '构成比例',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: '75%',
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
                    mychart_02_01.clear();
                    chart_append_error($('#mychart_02_01'),res.messages);
                }
            }
        });
    }
    function ajax_chart_02_02() {
        var year = $('#year_02_02').val();
        var month = $('#month_02_02').val();
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizedCostConstitute,
            data:JSON.stringify({
                year: year,
                month: month
            }),
            success: function (res) {
                if (res.status) {
                    chart_clear_error($('#mychart_02_02'));
                    mychart_02_02.setOption({
                        title: {
                            text: year + '年' + month + '月' + '院均次费用构成比例',
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
                                name: '构成比例',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: '75%',
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
                    mychart_02_02.clear();
                    chart_append_error($('#mychart_02_02'),res.messages);
                }
            }
        });
    }
    function ajax_list_03_01() {
        var year = $('#year_03_01').val();
        var $title=$('#title_03_01');
        var $list=$('#list_03_01');
        _ajax({
            url: GLOBAL_AJAX_URL.bigdepartmentFeesTop10,
            data:JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    var items=res.data;
                    $title.text(year+'年大项目各科室均次费用Top10');
                    $list.find('dd').remove();
                    for(var i=0,len=items.length;i<len;i++){
                        $list.append('<dd class="clearfix"> <span class="pull-left">'+items[i][0]+'</span> <span class="pull-right cost">'+items[i][1]+'</span></dd>');
                    }
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
    function ajax_list_04_01() {
        var year = $('#year_04_01').val();
        var $title=$('#title_04_01');
        var $list=$('#list_04_01');
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizeddepartmentFeesTop10,
            data:JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    var items=res.data.average;
                    $title.text(year+'年住院各科室均次费用Top10');
                    $list.find('dd').remove();
                    for(var i=0,len=items.length;i<len;i++){
                        $list.append('<dd class="clearfix"> <span class="pull-left">'+items[i][0]+'</span> <span class="pull-right cost">'+items[i][1]+'</span></dd>');
                    }
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
    function ajax_list_05_01() {
        var year = $('#year_05_01').val();
        var $title=$('#title_05_01');
        var $list=$('#list_05_01');
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizeddepartmentFeesTop10,
            data:JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    var items=res.data.mantimes;
                    $title.text(year+'年住院各科室人次Top10');
                    $list.find('dd').remove();
                    for(var i=0,len=items.length;i<len;i++){
                        $list.append('<dd class="clearfix"> <span class="pull-left">'+items[i][0]+'</span> <span class="pull-right cost">'+items[i][1]+'</span></dd>');
                    }
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
    function ajax_list_06_01() {
        var year = $('#year_06_01').val();
        var $title=$('#title_06_01');
        var $list=$('#list_06_01');
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizeddepartmentFeesTop10,
            data:JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    var items=res.data.sumcost;
                    $title.text(year+'年住院各科室总费用Top10');
                    $list.find('dd').remove();
                    for(var i=0,len=items.length;i<len;i++){
                        $list.append('<dd class="clearfix"> <span class="pull-left">'+items[i][0]+'</span> <span class="pull-right cost">'+items[i][1]+'</span></dd>');
                    }
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
    function ajax_table_07_01() {
        var year = $('#year_07_01').val();
        var department=$.trim($('#department_07_01').val());
        var inhospitalnum=$.trim($('#inhospitalnum_07_01').val());
        var name=$.trim($('#name_07_01').val());
        var $tbody=$('#tbody_07_01');
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalDetails,
            data:JSON.stringify({
                year: year,
                department:department,
                inhospitalnum:inhospitalnum,
                name:name
            }),
            success: function (res) {
                if (res.status) {
                    var items=res.data;
                    $tbody.find('tr').remove();
                    for(var i=0,len=items.length;i<len;i++){
                        $tbody.append('<tr><td>'+items[i][0]+'</td><td>'+items[i][1]+'</td><td>'+items[i][2]+'</td><td>'+items[i][3]+'</td><td>'+items[i][4]+'</td><td>'+items[i][5]+'</td><td>'+items[i][6]+'</td><td>'+items[i][7]+'</td><td>'+items[i][8]+'</td></tr>');
                    }
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
    function ajax_list_08_01() {
        var year = $('#year_08_01').val();
        var $title=$('#title_08_01');
        var $list=$('#list_08_01');
        _ajax({
            url: GLOBAL_AJAX_URL.hospitalizeddepartmentItemFeesTop10,
            data:JSON.stringify({
                year: year
            }),
            success: function (res) {
                if (res.status) {
                    var items=res.data.sumcost;
                    $title.text(year+'年科室住院均次费用项目贡献度排行Top10');
                    $list.find('dd').remove();
                    for(var i=0,len=items.length;i<len;i++){
                        $list.append('<dd class="clearfix"> <span class="pull-left">'+items[i][0]+'</span> <span class="pull-right cost">'+items[i][1]+'</span></dd>');
                    }
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
})