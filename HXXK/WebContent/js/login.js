/*计算大小，初始化网格布局*/
function onLoading(){
	// ��ȡ���ڿ��
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
	// ��ȡ���ڸ߶�
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
	// ͨ������ Document �ڲ��� body ���м�⣬��ȡ���ڴ�С
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
	{
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	var left=(winWidth-768)/2.0;
	var top=(winHeight-256)/2.0;
	var left2=(winWidth-800)/2.0;
	var left3=(winWidth-300)/2.0;
	var top3=(winHeight-200)/2.0; 
//	alert(top);
//	onresize=onLoading;
//	alert(winHeight+"  "+winWidth);
	document.getElementById("qwe").style.cssText='top:'+top+';left:'+left;
	document.getElementById("face").style.cssText='left:'+left2;
	document.getElementById("hidenBox").style.cssText='top:'+top3+';left:'+left3;
	
	/*button1*/
	document.getElementById("button1").style.width="100px";	
}

/*shining*/
function shining(id){
	id = '#'+id;
	$(id).fadeToggle(10,function(){
		$(id).fadeToggle(50);
	});	
}
	  
/*弹出登录*/
function go_login(id){
	if(document.getElementById('box').style.display=='none'){
		if(id=='no1'){
			$('#no2').fadeToggle();
			$('#no3').fadeToggle();
			$('#no22').fadeToggle();
			$('#no33').fadeToggle(function(){
				$('div.loginBox').fadeToggle();
			});		
		}
		else if(id=='no2'){
			$('#no1').fadeToggle();
			$('#no3').fadeToggle();
			$('#no11').fadeToggle();
			$('#no33').fadeToggle(function(){
				$('#no2').animate({
					left:'0px'
				},'slow',function(){
					$('div.loginBox').show();
				});
			});		
		}
		else if(id=='no3'){
			$('#no1').fadeToggle();
			$('#no2').fadeToggle();
			$('#no11').fadeToggle();
			$('#no22').fadeToggle(function(){
				$('#no3').animate({
					left:'0px'
				},function(){
					$('div.loginBox').show();
				});
			});		
		}
	}
	
}

/*忘记密码*/
function ffg(){
	alert('如忘记密码请联系网站管理员索取密码！');
}


/*重新选择*/
function back(){
	$('div.loginBox').fadeToggle(function(){
		$('#no1').show();
		$('#no11').show();
		$('#no2').show();
		$('#no22').show();
		$('#no3').show();
		$('#no33').show();
	});
}

function log(str){
	if(str=='0')
		window.location.href="chooseSys.jsp";
	else if(str=='xuanke')
		window.location.href="home.jsp";
	else if(str=='zuoye')
		window.location.href="submit.jsp";
}