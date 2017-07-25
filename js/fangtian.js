/*
 * @Author: fangtian
 * @Date:   2017-04-17 10:08:36
 * @Last Modified by:   fangtian
 * @Last Modified time: 2017-07-21 09:40:05
 */
//****
//页面预加载时 loading
 //获取浏览器页面可见高度和宽度
    //var _PageHeight = document.documentElement.clientHeight,
  //_PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
   // var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
  //_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
   // var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:0.8;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 5px; padding-right: 5px; background: #fff no-repeat scroll 5px 10px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
//呈现loading效果
   // document.write(_LoadingHtml);
    //window.onload = function () {
    //  var loadingMask = document.getElementById('loadingDiv');
    //  loadingMask.parentNode.removeChild(loadingMask);
    //};
    //监听加载状态改变
   //document.onreadystatechange = completeLoading;
    //加载状态为complete时移除loading效果
    //function completeLoading() {
    //  if (document.readyState == "complete") {
    // var loadingMask = document.getElementById('loadingDiv');
    // loadingMask.parentNode.removeChild(loadingMask);
    //  }
    //}



//判断首页 老师介绍 超过150 后面用。。代替 已封装
checkTextLength('itroleng');

function checkTextLength(clas){
    var itroleng = document.getElementsByClassName(clas);
    //alert(itroleng.length);
    for(var i=0;i<itroleng.length;i++){
        var allhtml = itroleng[i].innerHTML;
        if(allhtml.length>100){
            itroleng[i].innerHTML=allhtml.substring(0,100)+"...";
        }
    }
}


var bodyheight = $(window).height();
var bodywidth = $(window).width();
//alert("动态监听 body 高度："+ bodyheight);
//alert("动态监听 body 宽度："+ bodywidth);
var mql = window.matchMedia("(orientation: portrait)");
// 如果有匹配，则我们处于垂直视角
function myrefresh() 
{ 
    window.location.reload(); 
} 

if(mql.matches) { 

}else{
    //水平方向
　//736*441 p6p横
        if(/Android|webOS|iPhone|iPod|BlackBerry|Mozilla/i.test(navigator.userAgent)&&bodyheight===414&&bodywidth==736) {
            $("#homepage .teacher .container .teacher_list").css("height","110vh");
            $("#ft_course .tab_nav ul").css("top","28%");
            $("#ft_course_detail .banner .video img").css("width","100%");
        }
        //736*441 p6横
        if(/Android|webOS|iPhone|iPod|BlackBerry|Mozilla/i.test(navigator.userAgent)&&bodyheight===375&&bodywidth==667) {
            $("#homepage .teacher .container .teacher_list").css("height","110vh");
            $("#ft_course .tab_nav ul").css("top","31%");
            $("#ft_course_detail .banner .video img").css("width","100%");
        }
        if(/Android|webOS|iPhone|iPod|BlackBerry|Mozilla/i.test(navigator.userAgent)&&bodywidth===1366&&bodyheight===1024) {
            $("#homepage .teacher .container .teacher_list").css("height","60vh");
        }

} 


//alert(navigator.userAgent); ipad pro
if(/Android|webOS|iPhone|iPod|BlackBerry|Mozilla/i.test(navigator.userAgent)&&bodyheight===1366) {
    $("#ft_course footer,#about footer,.course_system footer,.help footer,.mistake footer,.teacher_desc footer,.teacher_course footer").css("position","fixed");
    $("#homepage .about .aboutme ul li:last-child").css("display","none");
}
//ip 5 heng
if(/Android|webOS|iPhone|iPod|BlackBerry|Mozilla/i.test(navigator.userAgent)&&bodyheight===320&&bodywidth===568) {
    $("#ft_course .tab_nav ul").css("top","36%");
    $("#homepage .teacher .container .teacher_list").css("height","95vh");
}

//ip 5 heng
if(/Android|webOS|iPhone|iPod|BlackBerry|Mozilla/i.test(navigator.userAgent)&&bodyheight===568&&bodywidth===320) {
    $("#ft_course .tab_nav ul").css("top","20%");
}

//监听效果 拖动头部 防止用户在移动端样式 以后 拖回pc样式
//pc 窗口大小
var widthbody = $(document.body).width();

//监听 窗口变动大小的时候
window.onresize = function() {
    window.location.reload();
};

function goBack() {
    window.history.back()
}
// ---------------------------------------------------------
// goToByScroll
// ---------------------------------------------------------
function goToByScroll(id){
    // Reove "link" from the ID
    id = id.replace("navbar_", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 100
    }, 'slow');
};

//计算字符串
    //获取字符串长度（汉字算两个字符，字母数字算一个）
    function getByteLen(val) {
      var len = 0;
      for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        //判断汉字 match charAt  js原生函数
        if (a.match(/[^\x00-\xff]/ig) != null) {
          len += 1;
        }
        else {
          len += 1;
        }
      }
      return len;
    }
    // 验证编辑框中的文字长度，最大字符长度可以根据需要设定
    function checkLength(obj) {
      var maxChars = 1000;//最多字符数   
      var curr = maxChars - getByteLen(obj.value);
      if (curr > 0) {
        document.getElementById("checklen").innerHTML = getByteLen(obj.value)+"/"+curr.toString();
      } else {
        document.getElementById("checklen").innerHTML = '0';
        document.getElementById("subject").readOnly = true;
      }
    }
//倒计时
	var clock = '';
	var nums = 60;
	var btn;
     
    function sendCode(thisBtn,phone){
		var phone = phone;
		var send_code = $(thisBtn).attr("vcode");
		
		$.get(sendVerifyUrl+"?phone="+phone+"&send_code="+send_code,function(msg) {
			//alert(jQuery.trim(unescape(msg)));
			layer.msg(jQuery.trim(unescape(msg)));
			if(jQuery.trim(msg)=='提交成功'){
				btn = thisBtn;
				btn.disabled = true; //将按钮置为不可点击
				btn.value = nums+'秒后可重新获取';
				clock = setInterval(doLoop, 1000); //一秒执行一次
			}else{
				btn.disabled = false;
			}
		});		
    }
	
    function doLoop(){
        nums--;
        if(nums > 0){
          btn.value = nums+'秒后可重新获取';
        }else{
            clearInterval(clock); //清除js定时器
            btn.disabled = false;
            btn.value = '点击发送验证码';
            nums = 10; //重置时间
        }
    }

$(document).ready(function() {
    //如果个人中心什么都没有 就让footer定位在底部
    //if($("body").find(".nonemsg")){
     //   $("footer").css("position","fixed");
    //}

    var viewportHeight = $(window).height();
    var lazyload = function() {
        // 获取窗口滚动条距离
        var scrollTop = $(window).scrollTop();
        $('img').each(function(){
        // 判断 视口高度+滚动条距离 与 图片元素距离文档原点的高度         
        var x = scrollTop + viewportHeight - $(this).position().top;
        // 如果大于0 即该元素能被浏览者看到，则将暂存于自定义属性loadpic的值赋值给真正的src            
        if (x > 0)
        {
            $(this).attr('src',$(this).attr('loadpic')); 
        }
    })
    }
    // 创建定时器 “实时”计算每个元素的src是否应该被赋值
    setInterval(lazyload,100);

    
    var myphonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 

    //倒计时 获取验证码 点击注册时
    $("#regzphone").on("click",function(){
        var num = $("#regphone").val();
        if(!num){
            layer.msg("手机号不能为空");
            return false;
        }
        if(!myphonereg.test(num)){
            layer.msg("格式错误");
            return false;
        }
        sendCode(this,num);
    });
	
	//倒计时 获取验证码 点击忘记密码时
    $("#lostpwdzphone").on("click",function(){
        var num = $("#lostpwdphone").val();
        if(!num){
            layer.msg("手机号不能为空");
            return false;
        }
        if(!myphonereg.test(num)){
            layer.msg("格式错误");
            return false;
        }
        sendCode(this,num);
    });

    /***禁止滑动***/
    function stop(){
        document.body.style.overflow='hidden';        
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }
    //登录注册 切换
    $(".frmlogin-reg").on("click",function(){
        $("#loginModal").hide();
        $("#registerModal").show();
    });

    $(".frmreg-login").on("click",function(){
        $("#registerModal").hide();
        $("#loginModal").show();

    });
    $(".lostmregs").on("click",function(){
        $("#lostModal").show();
        $("#loginModal").hide();
    });

    //注册判断 无数据 模拟
    $(".frmreg-btn").on("click",function(){
        var regphone = $("#regphone").val();
        var regverify = $("input[name='regverify']").val();
        var regpwd = $("input[name='regpwd']").val();
        var regpwdlength = parseInt(regpwd.length);
        if(!regphone){
            layer.msg("手机号不能为空");
            return false;
        }
        if(!myphonereg.test(regphone)){
            layer.msg("手机号格式错误");
            return false;
        }
        if(!regverify){
            layer.msg("验证码为空");
            return false;
        }
        if(regpwdlength<8){
            layer.msg("密码长度小于8");
            return false;
        }
        if(regpwdlength>12){
            layer.msg("密码长度大于12");
            return false;
        }
		/*
        if(num==15155102848&&verify==1234&&8<regpwdlength<15){
            layer.msg("注册成功,快去登录吧");
            $("#registerModal").hide();
            $("#loginModal").show();
        }
		*/
		//注册提交
		$.post(regUrl,
		{
			phone:regphone,
			pwd:regpwd,
			verify:regverify
		},
		function(data){
			if (data.status==1){
			  	layer.msg("手机号码已注册，可直接登陆");
				$("#registerModal").hide();
				$("#loginModal").show();
			}else{
				layer.msg(data.info);
			}
		});
		
    });

    //登录判断 单纯模拟 无数据显示
    $(".frmlogin-btn").on("click",function(){
        var loginphone = $("input[name='loginphone']").val();
        var loginpwd = $("input[name='loginpwd']").val();
        var loginpwdlength =parseInt(loginpwd.length);
        if(!loginphone){
            layer.msg("手机号不能为空");
            return false;
        }
        if(!myphonereg.test(loginphone)){
            layer.msg("格式错误");
            return false;
        }
        if(!loginpwdlength){
            layer.msg("密码不能为空");
            return false;
        }
        if(loginpwdlength<8){
            layer.msg("密码长度小于8");
            return false;
        }
        if(loginpwdlength>12){
            layer.msg("密码长度大于12");
            return false;
        }
		
		//登录提交
		$.post(loginUrl,
		{
			phone:$("#loginphone").val(),
			pwd:$("#loginpwd").val()
		},
		function(data){
			//alert(data.data.gidname);
			layer.msg(data.info);
			if (data.status==1){
				/*
				$("#loginModal").hide();
				role = 'std';
				stdid = data.data.id;
				stdname = data.data.name
				stdleve = data.data.gidname;
				stdimg = data.data.stdimg;
				
				if (role == "std") {
					isLogin = 1;
					if (stdname != '') isLogin = 2;
				}
				console.log(isLogin);
				if (isLogin == 0) {
					//nologin
					$('#beforelogin').show().css("opacity","1").css("z-index","9999");
					$('#afterlogin').hide();
					$(".dropdown.pchide").hide();
					$(".user_inf").hide();
				} else {
					$('#beforelogin').hide();
					$('#afterlogin').show();
					$(".dropdown.pchide").show();
					$(".user_inf").show();
				}
				if (isLogin == 2) {
					$('#utitle').html(stdname);
					$('#uleve').html(stdleve);
					$('#stdimg').attr("src",stdimg);
				}*/
				
				window.location.href=data.data;
			}
		});

    });

	
	
	//忘记密码，密码重置
    $(".lostmreg-login").on("click",function(){
        var lostpwdphone = $("input[name='lostpwdphone']").val();
		var lostpwdverify = $("input[name='lostpwdverify']").val();
        var lostpwdpwd = $("input[name='lostpwdpwd']").val();
		var lostpwdrepwd = $("input[name='lostpwdrepwd']").val();
		
        var lostpwdpwdlength =parseInt(lostpwdpwd.length);
		var lostpwdrepwdlength =parseInt(lostpwdrepwd.length);
		
        if(!lostpwdphone){
            layer.msg("手机号不能为空");
            return false;
        }
        if(!myphonereg.test(lostpwdphone)){
            layer.msg("格式错误");
            return false;
        }
        if(!lostpwdpwdlength){
            layer.msg("新密码不能为空");
            return false;
        }
        if(lostpwdpwdlength<8){
            layer.msg("新密码长度小于8");
            return false;
        }
        if(lostpwdpwdlength>12){
            layer.msg("新密码长度大于12");
            return false;
        }
        if(!lostpwdrepwdlength){
            layer.msg("确认新密码不能为空");
            return false;
        }
        if(lostpwdrepwdlength<8){
            layer.msg("确认新密码长度小于8");
            return false;
        }
        if(lostpwdrepwdlength>12){
            layer.msg("确认新密码长度大于12");
            return false;
        }
		if(lostpwdpwd!=lostpwdrepwd){
			alert(lostpwdpwd+"--"+lostpwdrepwd);
            layer.msg("新密码与确认新密码不一致");
            return false;
        }
		if(!lostpwdverify){
            layer.msg("验证码为空");
            return false;
        }
		
		//重置密码提交
		$.post(forgetpwdUrl,
		{
			phone:lostpwdphone,
			pwd:lostpwdpwd,
			repwd:lostpwdrepwd,
			verify:lostpwdverify
		},
		function(data){
			if (data.status==1){
			  	layer.msg("密码重置成功,快去登录吧");
				$("#lostModal").hide();
				$("#loginModal").show();
			}else{
				layer.msg(data.info);
			}
		});
    });
	


    var outLogin="1";//来进行判断 1 为登录状态下 0 为未登录状态  移动端 退出显示隐藏
    //退出判断 单纯模拟 无数据显示
    $(".logoff").on("click",function(){
		
		$.getJSON(logoutUrl,function(data){
			if(data.status==1){
				layer.msg(data.info);
				
				/*
				role = '';
				stdid = '';
				stdname = '';
				stdleve = '';
				isLogin = '';
				if (role == "std") {
					isLogin = 1;
					if (stdname != ''){
						isLogin = 2;
					} 
				}
				//console.log(isLogin);
				if (isLogin == 0) {
					//nologin
					$('#beforelogin').show().css("opacity","1").css("z-index","9999");
					$('#afterlogin').hide();
					$(".dropdown.pchide").hide();
					$(".user_inf").hide();
				} else {
					$('#beforelogin').hide();
					$('#afterlogin').show();
					$(".dropdown.pchide").show();
					$(".user_inf").show();
				}
				if (isLogin == 2) {
					$('#utitle').html(stdname);
					$('#uleve').html(stdleve);
				}
				overvis();

				$(".showphonereg.logoff").hide();
				outLogin=0;
				*/
				//alert(data.data);
				window.location.href=data.data;
				
			}else{
				//alert("退出失败，请重试");
				layer.msg("退出失败，请重试");
			}    
		});
        
    });

    //校长邮箱判断
    $(".master-btn").on("click",function(){
        var custorphone = $("input[name='custorphone']").val();
        var custorads = $("textarea[name='custorads']").val();
        /*if(!custorphone){
            layer.msg("手机号不能为空");
            return false;
        }
        if(!myphonereg.test(custorphone)){
            layer.msg("手机号格式错误");
            return false;
        }*/
        if(!custorads){
            layer.msg("请填写您的建议哦！");
            return false;
        }
        if(custorphone&&myphonereg.test(custorphone)&&custorads!=null){
            layer.msg("提交成功");
            $("#mail").hide();
        }
    });
    // ---------------------------------------------------------
    // Back to Top
    // ---------------------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top').on("click",function() {
        $('body,html').stop(false, false).animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // ---------------------------------------------------------
    // navbar highlight
    // ---------------------------------------------------------
    $("#home a:contains('首页')").parent().addClass('selected');
    $("#ft_course a:contains('选课中心')").parent().addClass('selected');
    $("#interaction a:contains('交流中心')").addClass('selected');
    $("#about a:contains('关于我们')").parent().addClass('selected');
    // ---------------------------------------------------------
    // menu highlight
    // ---------------------------------------------------------
    $("#mycourse a:contains('我的主页')").addClass('selected');
    $("#userinfo a:contains('基础资料')").addClass('selected');
    $("#complement a:contains('完善资料')").addClass('selected');
    $("#portrait a:contains('上传头像')").addClass('selected');
    // ---------------------------------------------------------
    // scrollTop
    // ---------------------------------------------------------
    jQuery(".slider a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).parent().attr("id"));
    });

    // ---------------------------------------------------------
    // 关于我们
    // ---------------------------------------------------------
    $('#aboutme').hover(function() {
        $('#aboutme-menu').fadeIn();
    });
    //----------------------------------------------------------
    // 移动端导航切换
    //----------------------------------------------------------
    $(".showmodal").click(function(e) {
        $(".nav_content").toggleClass("showbar")
    });

    //-----------
    //导航关于我们切换
    //-----------
    //$("#header .dropdown").mouseenter(function() {
    //    $(this).addClass('active')
    //})
    //$("#header .dropdown_content").mouseleave(function() {
    //    $("#header .dropdown").removeClass('active')
    //})

    //
    

    //切换 js判断页面大小 来决定执行哪一段js
    if($(document).width()>=769){
        $(".dropdown").unbind().on("mouseenter",function() {
            $(this).find(".dropdown_content").slideDown();

        }).on("mouseleave",function(){
            $(this).find(".dropdown_content").hide();
        });
        $(".dropdown_content").unbind().on("mouseleave",function() {
            $(this).hide();  
        });
    }else{
      $(".dropdown").unbind().on("click",function(e) {
            $(this).find(".dropdown_content").slideToggle();
            $(this).siblings(".dropdown").children(".dropdown_content").slideUp()
            e.stopPropagation();
        });  
    }
    
    


    $(".change").click(function(e) {
        $("#header").toggleClass("showbar");
        $(".headershow").toggle();
        //alert(outLogin);判断状态
        if(outLogin == 0){
            //nologin
            $(".showphonereg.logoff").hide();
        }else{
            $(".showphonereg.logoff").show();
        }
        // $(this).toggleClass('move');
        e.stopPropagation();
        if($("#header").hasClass("showbar")){
            overhid();
        }else{
            overvis();
        }

    });
    $(document).click(function() {
        $("#header").removeClass("showbar");
        $(".headershow").hide();
         $(".showphonereg.logoff").hide();
        //overvis();
    });
    $(".headershow,#header").on("click",function(){
        overvis();
    })
    // $("#header").click(function(e) {
    //     e.stopPropagation();
    // });

    //简化table表格
    $("th[id^='stage']").each(function() {
        var tharr = [];
        tharr = $(this).html().split('-');
        // console.log(tharr);
        if (tharr[0] == tharr[1]) {
            $(this).html(tharr[0])
        } 

    })
    //判断天天练是否做完
    var excontent=$('#list_content').find('.list')
    if(excontent==""){
        $('#list_content').append('<p>做完了</p>')
    }


    //more_msg
    $("#course_end").on("click",function(){

          $(this).html("加载中···<br/><span class='glyphicon glyphicon-arrow-down'></span>");   

          $(this).html("没有更多了哦");

        var arr = [];
        //what more-msg 
        $(".container>.clearfix > li").each(function(){
            //alert($(this).text());
            arr.push($(this).text());
        });
        console.log(arr);
        
    });

    $(".nav.nav-tabs>li").on("click",function(){
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
    //滚动指定位置
    $('.1f').click(function(){$('html,body').animate({scrollTop:$('#1F').offset().top-110+"px"}, 800);});
    $('.2f').click(function(){$('html,body').animate({scrollTop:$('#2F').offset().top-110+"px"}, 800);});
    $('.3f').click(function(){$('html,body').animate({scrollTop:$('#3F').offset().top-130+"px"}, 800);});


    //person base
    //  保存信息
    $(".zhbt").on("click",function(){
        var name = $("input[name='name']").val();
        var sex = $("#sex").val();
        //alert(sex); 0 是女 1 是男
        var gid = $("#gid").val();
        var qq = $("input[name='qq']").val();
        var pwd = $("input[name='pwd']").val();
        var repwd = $("input[name='repwd']").val();
        if (!name) {
            layer.msg("学生姓名不能为空",{time:1000});
            return false;
        }
        alert(gid);
        if (gid==="请选择") {
            layer.msg("就读年级不能为空",{time:1000});
            return false;
        }
        layer.msg("保存成功",{time:1000});
    });

    //移动 pc 模态框出现 禁止 滚动
    var move=function(e){
        e.preventDefault && e.preventDefault();
        e.returnValue=false;
        e.stopPropagation && e.stopPropagation();
        return false;
    }
    var keyFunc=function(e){
        if(37<=e.keyCode && e.keyCode<=40){
        return move(e);
        }
    }

    function overhid(){
        document.documentElement.style.overflow='hidden';
        document.body.style.overflow='hidden';//手机版设置这个。
    }
    function overvis(){
        document.documentElement.style.overflow='visible';
        document.body.style.overflow='visible';//手机版设置这个。
    }

    //控制校长邮箱模态框
    $(".suggest").on("click",function(e){
		//if(isLogin==0){
		//	layer.msg("请登录");
		//	$('#loginModal').modal('show'); 
		//}else{
			$("#mail").fadeIn();
			overhid();
		//}
    });
    $(".mail").on("click",function(e){
        $("#mail").fadeOut();
        overvis();
    });
    //控制课程详情 模态框
    $(".course_serve").on("click",function(e){
        $("#parent").fadeIn();
        overhid();
    });
    $(".parent").on("click",function(e){
        $("#parent").fadeOut();
        overvis();
    });

    //立即报名
	/*
    $(".enlist").on("click",function(e){
        $("#test").fadeIn();
        overhid();
    });
    $(".test").on("click",function(e){
        $("#test").fadeOut();
        overvis();
    });
	*/
	
    //个人中心 导航切换
    $(".user_nav li").on("click",function(){
        $(this).addClass("active").siblings(".active").removeClass("active");
    });

    //注册
    $(".registerModal").on("click",function(){
        $("#registerModal").fadeIn();
        document.body.onkeydown=keyFunc;
        overhid();
    });
    $(".close.frmreg").on("click",function(){
        $("#registerModal").fadeOut();
        overvis();
    });
    //登录
    $(".loginModal").on("click",function(){
        $("#loginModal").fadeIn();
        document.body.onkeydown=keyFunc;
        overhid();
    });
    $(".close.frmlogin").on("click",function(){
        $("#loginModal").fadeOut();
        overvis();
    });

    //忘记密码
    $(".lostmreg").on("click",function(){
        $("#lostModal").hide();
    })   
    //收藏
    $(".iconfont.ft-course").on("click",function(){
        $(this).addClass("checked");
    });

    //qq模态框
    $(".qqbtn").on("click",function(){
        $("#qq").fadeIn();
    })
    $(".qq").on("click",function(){
        $("#qq").fadeOut();
    });

    //动画效果
    var viewAnimate = $('.view-animate');
    $(document).ready(function() {
        function isScrolledIntoView(elem) {
            var $window = $(window);
            return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
        }
        if (viewAnimate.length) {
            for (i = 0; i < viewAnimate.length; i++) {
                var view = $(viewAnimate[i]).not('.active');
                $(document).on("scroll", $.proxy(function() {

                    if (isScrolledIntoView(this)) {
                        this.addClass("active");
                    }
                }, view)).trigger("scroll");
            }
        }
    })

    //
});
