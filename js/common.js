//封装ajax请求
function _ajax(opt) {
    $.ajax({
        url: opt.url,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: opt.data,
        success: opt.success
    });
}
//生成分页代码
//$dom:分页节点
//totals：总记录数
//page_size：一页数量
//current_page：当前页数
function generatePagination($dom, totals, page_size, current_page) {
    $dom.find('.sum span').text(totals);//设置总记录数
    var total_page = Math.ceil(parseInt(totals) / parseInt(page_size));//总页数
    if (total_page <= 1) {
        $dom.find('.pagination').addClass('hide');
        return false;
    }
    $dom.find('.pagination').removeClass('hide');
    $dom.find('input').val(current_page);
    $dom.find('.creatli').remove();
    var $first = $dom.find('.first');
    var $prev = $dom.find('.prev');
    var $next = $dom.find('.next');
    var $last = $dom.find('.last');
    $first.removeClass('disabled');
    $prev.removeClass('disabled');
    $next.removeClass('disabled');
    $last.removeClass('disabled');
    if (total_page <= 5) {
        for (var i = 1; i <= total_page; i++) {
            addliPagination($next, i, current_page);
        }
    } else {
        if (current_page <= 3) {
            for (var i = 1; i <= 5; i++) {
                addliPagination($next, i, current_page);
            }
        } else if (current_page >= (total_page - 2)) {
            for (var i = (total_page - 4) ; i <= total_page; i++) {
                addliPagination($next, i, current_page);
            }
        } else {
            for (var i = (current_page - 2) ; i <= (current_page + 2) ; i++) {
                addliPagination($next, i, current_page);
            }
        }
    }
    $prev.attr('pagenum', current_page - 1);
    $next.attr('pagenum', current_page + 1);
    $last.attr('pagenum', total_page);
    if (current_page == 1) {
        $first.addClass('disabled');
        $prev.addClass('disabled');
    }
    if (current_page == total_page) {
        $last.addClass('disabled');
        $next.addClass('disabled');
    }
};
//分页生成li方法
function addliPagination($dom, index, current_page) {
    var $li = $('<li>');
    $li.addClass('creatli').attr('pagenum', index);
    if (current_page == index) {
        $li.addClass('active');
    }
    var $a = $('<a>');
    $a.text(index);
    $li.append($a);
    $dom.before($li);
}
//分页控件各事件注册
function page_event_register(reloadGridData) {
    //分页点击事件
    $('.m-pagenav').on('click', '.pagination li:not(.disabled)', function () {
        var current_page = $(this).attr('pagenum');
        var pagesize = $('.m-pagenav .sum select').val();
        reloadGridData(current_page, pagesize);
    });
    //分页按钮确定点击事件
    $('.m-pagenav').on('click', '.inputbox a', function () {
        var pagesize = $('.m-pagenav .sum select').val();
        var current_page = parseInt($.trim($('.m-pagenav .inputbox input').val()));
        var total_page = parseInt($.trim($('.m-pagenav .pagination .last').attr('pagenum')));
        if (!current_page || current_page == 0) {
            current_page = 1;
        }
        if (current_page > total_page) {
            current_page = total_page;
        }
        reloadGridData(current_page, pagesize);
    });
    //分页输入框回车事件
    $('.m-pagenav').on('keyup', '.inputbox input', function (event) {
        if (event.keyCode == '13') {
            $('.m-pagenav .inputbox a').trigger('click');
        }
    });
    //每页展示多少条改变事件
    $('.m-pagenav .sum select').change(function () {
        var pagesize = $(this).val();
        reloadGridData(1, pagesize);
    });
}
/*初始化时间控件*/
function init_time_control() {
    $('.year_date').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy',
        startView: 4,
        autoclose: true,
        minView: 4
    })
    $('.month_date').datetimepicker({
        language: 'zh-CN',
        format: 'mm',
        startView: 3,
        autoclose: true,
        maxView: 3,
        minView: 3
    })
    $('.day_date').datetimepicker({
        language: 'zh-CN',
        format: 'dd',
        startView: 2,
        autoclose: true,
        maxView: 2,
        minView: 2
    })
    var now_date_time = get_date_time();
    var now_year = now_date_time.year;//当前年
    var now_month = now_date_time.month;//当前月
    var now_day = now_date_time.day;//当前日
    $('.year_date').val(now_year);//设置时间年
    $('.month_date').val(now_month);//设置时间月
    $('.day_date').val(now_day);//设置时间日
}
//获取系统当前年份、月份、日、时
function get_date_time() {
    var myDate = new Date();
    var now_year = myDate.getFullYear();
    var now_month = myDate.getMonth() + 1;
    var now_day = myDate.getDate();
    var now_hours = myDate.getHours();
    if (now_month >= 1 && now_month <= 9) {
        now_month = '0' + now_month;
    }
    if (now_day >= 0 && now_day <= 9) {
        now_day = '0' + now_day;
    }
    if (now_hours >= 0 && now_hours <= 9) {
        now_hours = '0' + now_hours;
    }
    return {
        year: now_year,
        month: now_month,
        day: now_day,
        hours: now_hours
    }
}
//获取数据失败时添加错误信息
function chart_append_error($box,error){
    var height=$box.height();
    $box.append('<div class="chart-error" style="position: absolute;top:45%;width:100%;left:0;text-align: center;z-index: 999;">'+error+'</div>');
}
//清除错误信息
function chart_clear_error($box){
    $box.find('.chart-error').remove();
}
