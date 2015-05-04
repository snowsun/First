//增加选项卡
function addTab(title, url){
	if ($('#tabs').tabs('exists', title)){
		$('#tabs').tabs('select', title);//选中并刷新
		$('#tabs').tabs('select', content);
		var currTab = $('#tabs').tabs('getSelected');
		if(url != undefined && currTab.panel('options').title != 'Home') {
			$('#tabs').tabs('update',{
				tab:currTab,
				options:{
					content:createFrame(url)
				}
			});
		}
	} else {
		var content = createFrame(url);
		$('#tabs').tabs('add',{
			title:title,
			content:content,
			closable:true
		});
	} 
	tabClose();
}

//创建新iframe
function createFrame(url) {
	var s = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
	return s;
}

/*双击关闭选项卡*/
function tabClose() {
	/*双击关闭TAB选项卡*/
	$(".tabs-inner").dblclick(function(){
		var subtitle = $(this).children(".tabs-closable").text();
		$('#tabs').tabs('close',subtitle);
	});
}
/*显示当前日期时间*/
function time(){
    //获得显示时间的div
    t_div = document.getElementById('showtime');
    var now=new Date();
    //替换div内容 
    t_div.innerHTML = "现在是"+now.getFullYear()
    +"年"+(now.getMonth()+1)+"月"+now.getDate()
    +"日"+now.getHours()+"时"+now.getMinutes()
    +"分"+now.getSeconds()+"秒";
    //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
    setTimeout(time,1000);
}
/*功能菜单响应*/
$(function() {
	$('.cs-navi-tab').click(function() {
		var $this = $(this);
		var href = $this.attr('src');
		var title = $this.text().replace(/^\s*|\s*$/g,"");
		addTab(title, href);
	});
});


function check_whether_choose_time(){
	drawTimeTable();
	var xmlhttp;
	if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var flag = xmlhttp.responseText.replace(/^\s*|\s*$/g,"");
			if(flag=='notYet'){
				$.messager.confirm('警告' , '为了您的选课时间不与其他课程冲突，您必须设置您的可用选课时间方可继续操作！',function(r){
					if(r){
						$('#dialog2').window('open');
					}
					else{
						window.location.href='../login.jsp';
					}
				});
				$(".panel-tool-close" ).css( "display","none");

			}		
	    }
	};
	xmlhttp.open("GET","../../server/student/getFirstLoginInfo.jsp?id="+SESSION_ID+"&p="+Math.random(),true);
	xmlhttp.send();
	
	
}


function drawTimeTable(){
	var xmlhttp;
	if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var flag = xmlhttp.responseText.replace(/^\s*|\s*$/g,"");
			var len = flag.split('@').length-1;
			var table,row,col1,col2,span;
			table=document.getElementById('opTable');
			for(var i=0 ; i<len ; i++){
				row = document.createElement('tr');
				row.align = 'center';
				table.appendChild(row);
				col1 = document.createElement('td');
				col2 = document.createElement('td');			
				row.appendChild(col1);
				row.appendChild(col2);
				
				//===col1
				span = document.createElement('span');
				span.id='spanNo'+i;
				span.innerHTML = '星期'+flag.split('@')[i];
				span.value = flag.split('@')[i];
				col1.appendChild(span);
				
				//===col2
				span = document.createElement('input');
				span.type='checkbox';
				span.id = 'check'+ i ;
				span.value = i ;
				col2.appendChild(span);
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/getConfigTime.jsp?p="+Math.random(),true);
	xmlhttp.send();
}


function save_time(){
	var time = '' ;
	for(var i=0 ; i<10 ; i++){
		if(document.getElementById('check'+i)){
			if(document.getElementById('check'+i).checked==true){
				time = time + document.getElementById('spanNo'+i).value+'@';
			}
		}
		else
			break;
	}
	if(time=='') time = 'NOHAVE';
	var xmlhttp;
	if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var flag = xmlhttp.responseText.replace(/^\s*|\s*$/g,"");
			if(flag=='success'){
				alert('时间信息录入成功，你可以选择实验啦');
				window.location.reload();
			}
			else
				alert('系统错误，请稍后重试');
			
	    }
	};
	xmlhttp.open("GET","../../server/student/updateFirstLoginTimeRecord.jsp?id="+SESSION_ID+"&time="+time+"&p="+Math.random(),true);
	xmlhttp.send();
}