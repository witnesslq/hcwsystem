$(function () {
    var $username = $('#username');
    var $password = $('#password');
    var $btn_login = $('#btn_login');
    var $login_info=$('#login_info');
    $btn_login.click(function () {
        var username = $.trim($username.val());
        var password = $.trim($password.val());
        if (username != 'admin' || password != '123456') {
            $login_info.removeClass('hide').text('用户名或密码错误，请重新输入');
        } else {
            window.location = 'center.html';
        }
    });
    $password.on('keyup',function(e){
        if(e.keyCode=='13'){
            $btn_login.trigger('click');
        }
    })
})