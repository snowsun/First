function onloading(){
	var url = window.location.search;
	var type = url.split('?')[1];
	var id,type;
	if(type=='stu'){
		document.getElementById('info').innerHTML='  同学，欢迎登录';
		type='stu';
		id=document.getElementById('userID').innerHTML.replace(/^\s*|\s*$/g,"");
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
				if(flag=='no_choose'){
					alert('对不起您暂未选课，请参与选课，若已过选课截止日期请到管理员处参加选课');
				}
				else if(flag=='failed'){
					alert('对不起，数据库访问出错，请稍后访问，若一直不能访问，请联系数据库管理员');
				}
				else{
					Dis_Stu(flag);
				}
		    }
		};
		xmlhttp.open("GET","../server/pushWork/push_work.jsp?id="+id+"&type="+type+"&p="+Math.random(),true);
		xmlhttp.send();
	}
}


function Dis_Stu(str){
	var table,row,col1,col2,col3,col4,col5,col6,col7,col8,col9,span;
	table=document.getElementById('stuTable');
	var info = str.split('&');
	var len = info.length-1;
	var info_col;
	for(var i = 0 ; i<len ; i++){
		info_col = info[i].split('#');
		row = document.createElement('tr');
		row.align = 'center';
		if(i%2==1)
			row.style.background='lightblue';
		else
			row.style.background='white';
		table.appendChild(row);
		col1 = document.createElement('td');
		col2 = document.createElement('td');
		col3 = document.createElement('td');
		col4 = document.createElement('td');
		col5 = document.createElement('td');
		col6 = document.createElement('td');
		col9 = document.createElement('td');
		col7 = document.createElement('td');
		col8 = document.createElement('td');
		col8.style.background='red';
		
	
		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		row.appendChild(col9);
		row.appendChild(col7);
		row.appendChild(col8);
		
	
		
		//col-1
		span = document.createElement('span');
		span.id='spanNo'+i;
		span.innerHTML = info_col[0];
		span.style.display='none';
		col1.appendChild(document.createTextNode(i));
		col1.appendChild(span);
		//col-2
		span = document.createElement('span');
		span.id='spanName'+i;
		span.innerHTML = info_col[1];
		col2.appendChild(span);
		//col-3
		span = document.createElement('span');
		span.id='spanTea'+i;
		span.innerHTML = info_col[2];
		col3.appendChild(span);
		//col-4
		span = document.createElement('span');
		span.id='spanTime'+i;
		span.innerHTML = info_col[3];
		col4.appendChild(span);
		//col-5
		span = document.createElement('span');
		span.id='spanT'+i;
		span.innerHTML = info_col[4];
		col5.appendChild(span);
		//col-6
		span = document.createElement('span');
		span.id='spanDDL'+i;
		span.innerHTML = info_col[5];
		col6.appendChild(span);
		
		//col-9
		var a = document.createElement('a');
		a.href='javascript:void(0)';
		a.value=i;
		a.innerHTML = "作业要求";	
		a.onclick= function(){DisWork(this.value);};
		col9.appendChild(a);
		
		//col-7
		var a = document.createElement('a');
		a.href='javascript:void(0)';
		a.value=i;
		a.innerHTML = "提交";	
		a.onclick= function(){pushWork(this);};
		
		var f = document.createElement('input');
		f.type='file';
		f.name='file';
		f.id='file'+i;
		col7.appendChild(f);
		col7.appendChild(a);
		
		//col-8
		var ifPushed = info_col[6];
		if(ifPushed == 'yes')
			col8.style.background='darkgreen';
		
	}
	
}

function pushWork(str){
	var i = str.value;
	var ext = document.getElementById("file"+i).value.replace(/^\s*|\s*$/g,"").split('.')[1];
	if(ext!='pdf' && ext!='PDF' && ext!='doc' && ext!='docx' && ext!='DOC' && ext!='DOCX'){
		alert('上传文件类型不符合类型要求');
		return;
	}
	
	var DDL = document.getElementById("spanDDL"+i).innerHTML.replace(/^\s*|\s*$/g,"");
	if(DDL=='未开放提交'){
		alert('本次作业提交暂未开放，请耐心等待');
		return;
	}
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	if(month<10) month='0'+month;
	var day = date.getDate();
	if(day<10) day='0'+day;
	var nowTime = year+'-'+month+'-'+day;
	if(nowTime>DDL){
		alert('已过本次作业的提交截止日期，您的作业依然可以提交，但是将被标记为‘out_of_time’,这可能会影响您的成绩');
		document.getElementById("flag").value = 'out_of_time';
	}
	var courseID = document.getElementById("spanNo"+i).innerHTML.replace(/^\s*|\s*$/g,"");
	var courseT = document.getElementById("spanT"+i).innerHTML.replace(/^\s*|\s*$/g,"");
	document.getElementById("courseID").value = courseID;
	document.getElementById("courseT").value = courseT;
	document.getElementById("fileNo").value = i;
	document.getElementById("form1").submit();
	
	
}


function DisWork(str){
	var id = document.getElementById('spanNo'+str).innerHTML.replace(/^\s*|\s*$/g,"");
	var turn = document.getElementById('spanT'+str).innerHTML.replace(/^\s*|\s*$/g,"");
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
			if(flag=='failed')
				alert('数据库读取失败，请刷新后重试');
			else if(flag=='DO_NOT_EXIST'){
				$('#dialog').dialog('setTitle','作业要求如下：');
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML='老师尚未在线发布该作业的具体要求，以课上老师留的作业要求为准！';
			}
			else{
				$('#dialog').dialog('setTitle','作业要求如下：');
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML=flag;
			}
		}
	};
	xmlhttp.open("GET","../server/teacher/set/pubWorkRequest.jsp?id="+id+"&turn="+turn+"&p="+Math.random(),true);
	xmlhttp.send();
	
}