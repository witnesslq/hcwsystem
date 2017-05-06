$(function () {
    /*初始化时间控件*/
    init_time_control();
    if (GLOBAL_DEBUG) {
        //本地数据
    } else {
        //远程数据
        ajax_panel_01_01();
        ajax_panel_01_02();
    }
    /*所有图表点击事件开始*/
    $('#querybtn_01_01').click(function () {
        ajax_panel_01_01();
    });
    $('#querybtn_01_02').click(function () {
        ajax_panel_01_02();
    });
    /*所有数据远程请求方法开始*/
    function ajax_panel_01_01() {
        var year = $('#year_01_01').val();
        var department=$('#department_01_01').val();
        _ajax({
            url: GLOBAL_AJAX_URL.numberOfSenses,
            data: JSON.stringify({
                year: year,
                department:department
            }),
            success: function (res) {
                if (res.status) {
                    if(department){
                        $('#title_01_01').text(year+'年'+department+'院感例数、同比及环比统计');
                    }else{
                        $('#title_01_01').text(year+'年院感例数、同比及环比统计');
                    }
                    $('#number_01_01').text(res.data.number);
                    $('#period_01_01').text(res.data.yoy);
                    $('#per_year_01_01').text(res.data.qoq);
                    if(res.data.yoy_flag=='up'){
                        $('#period_01_01').removeClass('flag-up').removeClass('flag-down').addClass('flag-up');
                    }else if(res.data.yoy_flag=='down'){
                        $('#period_01_01').removeClass('flag-up').removeClass('flag-down').addClass('flag-down');
                    }else{
                        $('#period_01_01').removeClass('flag-up').removeClass('flag-down')
                    }
                    if(res.data.qoq_flag=='up'){
                        $('#per_year_01_01').removeClass('flag-up').removeClass('flag-down').addClass('flag-up');
                    }else if(res.data.qoq_flag=='down'){
                        $('#per_year_01_01').removeClass('flag-up').removeClass('flag-down').addClass('flag-down');
                    }else{
                        $('#per_year_01_01').removeClass('flag-up').removeClass('flag-down')
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
    function ajax_panel_01_02() {
        var year = $('#year_01_02').val();
        var month=$('#month_01_02').val();
        var department=$('#department_01_02').val();
        _ajax({
            url: GLOBAL_AJAX_URL.numberOfSenses,
            data: JSON.stringify({
                year: year,
                month:month,
                department:department
            }),
            success: function (res) {
                if (res.status) {
                    if(department){
                        $('#title_01_02').text(year+'年'+month+'月'+department+'住院均次费用同比、环比统计');
                    }else{
                        $('#title_01_02').text(year+'年'+month+'月住院均次费用同比、环比统计');
                    }
                    $('#number_01_02').text(res.data.number);
                    $('#period_01_02').text(res.data.yoy);
                    $('#per_year_01_02').text(res.data.qoq);
                    if(res.data.yoy_flag=='up'){
                        $('#period_01_02').removeClass('flag-up').removeClass('flag-down').addClass('flag-up');
                    }else if(res.data.yoy_flag=='down'){
                        $('#period_01_02').removeClass('flag-up').removeClass('flag-down').addClass('flag-down');
                    }else{
                        $('#period_01_02').removeClass('flag-up').removeClass('flag-down')
                    }
                    if(res.data.qoq_flag=='up'){
                        $('#per_year_01_02').removeClass('flag-up').removeClass('flag-down').addClass('flag-up');
                    }else if(res.data.qoq_flag=='down'){
                        $('#per_year_01_02').removeClass('flag-up').removeClass('flag-down').addClass('flag-down');
                    }else{
                        $('#per_year_01_02').removeClass('flag-up').removeClass('flag-down')
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