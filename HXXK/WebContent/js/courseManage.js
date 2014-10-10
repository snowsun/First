/********************************************This block is for config.jsp************************************************/
function onLoading(){
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
			if(flag=='failed'){
				alert("数据库操作失败，请点击左侧全局设置按钮刷新并重新配置！");
				return ;
			}
			var fl = flag.split('&');
			/*
			document.getElementById('IF_CONFIG').innerHTML=fl[0];
			document.getElementById('IF_USED').innerHTML=fl[1];
			document.getElementById('YEAR').innerHTML=fl[2];
			document.getElementById('LAB_NO').innerHTML=fl[3];
			document.getElementById('BEGIN_TIME').innerHTML=fl[4];
			document.getElementById('END_TIME').innerHTML=fl[5];
			document.getElementById('WEEK').innerHTML=fl[6];
			*/
			 $('#cc').combobox('setText',fl[2]);
			 $('#dd').combobox('setText',fl[3]);
			 $('#ee').combobox('setText',fl[4]);
			 $('#ff').combobox('setText',fl[5]);
			 $('#gg').combobox('setText',fl[6]);
			 
	    }
	};
	xmlhttp.open("GET","../server/admin/courseConfig/fetch_config.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
//====================================================================
function yes_clicked(){//点击预览按钮效应
	
	var year = $('#cc').combobox('getText').replace(/^\s*|\s*$/g,"");
	var lab_no = $('#dd').combobox('getText').replace(/^\s*|\s*$/g,"");
	var begin_time = $('#ee').combobox('getText').replace(/^\s*|\s*$/g,"");
	var end_time = $('#ff').combobox('getText').replace(/^\s*|\s*$/g,"");
	var week = $('#gg').combobox('getText').replace(/^\s*|\s*$/g,"");
	
	if(document.getElementById('IF_CONFIG').innerHTML=='1' && document.getElementById('IF_USED').innerHTML=='1'){
		alert('您之前已经配置过全局设置，并且您已经用此全局设置发布了课程信息，请您遵循以下步骤：\n1.点击系统功能下面的选课初始化选项初始化选课操作\n2.点击课程管理下面的全局设置按钮重新配置全局设置\n3.点击课程管理下面的课程信息重新设置课程');
		return;
	}
	if(begin_time.length==0||end_time.length==0){
		alert('开始、结束时间不可为空');
		return;
	}
	if(end_time<=begin_time){
		alert('结束时间不可以早于或等于开始时间');
		return
	}
	document.getElementById('opTable').style.display='none';
	document.getElementById('hidden').style.display='';
	document.getElementById('hiddenTable').style.display='';
	document.getElementById('year').innerHTML=year+'学年';
	document.getElementById('lab_no').innerHTML=lab_no+'个';
	document.getElementById('begin_time').innerHTML=begin_time;
	document.getElementById('end_time').innerHTML=end_time;
	document.getElementById('week').innerHTML='第'+week+'周';
}

//====================================================================
function cancle_clicked(){//清空按钮点击效应
	$('#ee').combobox('clear');
	$('#ff').combobox('clear');
}

//====================================================================
function change_clicked(){//修改按钮点击效应
	document.getElementById('opTable').style.display='';
	document.getElementById('hidden').style.display='none';
	document.getElementById('hiddenTable').style.display='none';
}

//====================================================================
function submit_clicked(){//提交按钮点击效应
	var year = $('#cc').combobox('getText').replace(/^\s*|\s*$/g,"");
	var lab_no = $('#dd').combobox('getText').replace(/^\s*|\s*$/g,"");
	var begin_time = $('#ee').combobox('getText').replace(/^\s*|\s*$/g,"");
	var end_time = $('#ff').combobox('getText').replace(/^\s*|\s*$/g,"");
	var week = $('#gg').combobox('getText').replace(/^\s*|\s*$/g,"");
		
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
			if(flag=='success')
				alert("全局设置完毕，现在您可以进行课程设置了！");
			else
				alert("数据库操作失败，请点击左侧全局设置按钮刷新并重新配置！");
			
	    }
	};
	xmlhttp.open("GET","../server/admin/courseConfig/update_config.jsp?year="+year+"&lab_no="+lab_no+"&begin_time="+begin_time+"&end_time="+end_time+"&week="+week+"&p="+Math.random(),true);
	xmlhttp.send();
	
}


/********************************************This block is for laboratory.jsp************************************************/
function onloading_laboratory(){//实验室信息页面载入加载函数
	var table,row,col0,col1,col2,checkbox;
	table=document.getElementById('table');
	
	//加入表的第一行题标行
	row = document.createElement('tr');
	row.style.background='Silver';
	row.align = 'center';
	table.appendChild(row);
	col0 = document.createElement('td');
	col1 = document.createElement('td');
	col2 = document.createElement('td');
	row.appendChild(col0);
	row.appendChild(col1);
	row.appendChild(col2);
	
//	checkbox = document.createElement('checkbox');
	
	col1.appendChild(document.createTextNode('实验室编号'));
	col2.appendChild(document.createTextNode('实验室房号'));
	
}