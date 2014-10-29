//====================================================================
function onloading(){//页面载入加载函数;
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
				alert('数据库访问失败，请稍后再次进行访问！');
			else{
				/*构造显示*/
				FOR_DISPLAY(flag);
			}
	    }
	};
	xmlhttp.open("GET","../server/student/courseChoose/fetch_mainInfo.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
//====================================================================
function FOR_DISPLAY(str){//USED BY ONLOADING
	var table,row,col1,col2,col4,col5,col6,col8,span,check;
	var __COLNUM__,__COLCHECK__;
	table=document.getElementById('table');
	
	var _NUM_ = str.split('<>')[1];
	var num=parseInt(_NUM_);
	document.getElementById('_NUM_').innerHTML=num;
	
	for(var i=1;i<=num;i++){

		__COLNUM__= document.createElement('td');
		__COLNUM__.appendChild(document.createTextNode(i+'期已选'));
		__COLCHECK__ =document.createElement('td');
		__COLCHECK__.appendChild(document.createTextNode('查看'));
		document.getElementById('_TITLE_').appendChild(__COLNUM__);
		document.getElementById('_TITLE_').appendChild(__COLCHECK__);

	}	
	var info = str.split('<>')[2].split('&');
	var info_col;
	var len = info.length-1;
	if(len==0) return;
	//加入表的第一行题标行
	document.getElementById('_ROWS_').innerHTML=len;
	
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
		col7 = document.createElement('td');
		col8 = document.createElement('td');
		row.appendChild(col1);
		row.appendChild(col2);
	//	row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
	//	row.appendChild(col7);
		row.appendChild(col8);
	
		//col-1
		span = document.createElement('span');
		span.id='spanNo'+i;
		span.innerHTML = info_col[0];
		col1.appendChild(span);
		//col-2
		span = document.createElement('span');
		span.id='spanName'+i;
		span.innerHTML = info_col[1];
		col2.appendChild(span);
		//col-4
		span = document.createElement('span');
		span.id='spanLaboratory'+i;
		span.innerHTML = info_col[3];
		col4.appendChild(span);
		//col-5
		span = document.createElement('span');
		span.id='spanTeacher'+i;
		span.innerHTML = info_col[4];
		col5.appendChild(span);
		//col-6
		span = document.createElement('span');
		span.id='spanTime'+i;
		span.innerHTML = info_col[5];
		col6.appendChild(span);
		//col-7
		
		//col-8
		span = document.createElement('span');
		span.id='spanLimit'+i;
		span.innerHTML = info_col[7];	
		col8.appendChild(span);
		for(var j=1;j<=num;j++){
			span = document.createElement('span');
			span.id='span_stu'+i+'_'+j;
			span.style.color='blue';
			span.innerHTML=info_col[7+j];
			__COLNUM__ = document.createElement('td');
			__COLNUM__.appendChild(span);
			
			check = document.createElement('a');
			check.href='javascript:void(0)';
			check.innerHTML='查看';
			check.id = 'check_stu'+i+'_'+j;
			check.value = i+'_'+j;
			
			check.onclick=function(){check_list(this);};
			__COLCHECK__ = document.createElement('td');
			__COLCHECK__.appendChild(check);
			row.appendChild(__COLNUM__);
			row.appendChild(__COLCHECK__);
				
		}
	}
	
	
}

//====================================================================
function check_list(str){
	var index = (str.value).split('_')[0];
	var no = document.getElementById('spanNo'+index).innerHTML.replace(/^\s*|\s*$/g,"");
	t = (str.value).split('_')[1];
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
				alert('数据库访问失败，请稍后再次进行访问！');
			else{
				if(flag=='null'){
					$('#dd').window('open');
					document.getElementById('list').innerHTML='该课程暂未有同学参选';
				}
				else{
					$('#dd').window('open');
					var content = '';
					var list = flag.split('#');
					for(var i=0 ; i<list.length-1;i++){
						content = content+list[i]+'<br>';
					}
					document.getElementById('list').innerHTML=content;
				}
				
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/checkChoose/fetch_list.jsp?t="+t+"&no="+no+"&p="+Math.random(),true);
	xmlhttp.send();
}

//====================================================================
function downloadSchedule(){//下载课表	
	//传入后台进行课表的下载
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
	    }
	};
	xmlhttp.open("GET","../server/admin/checkChoose/downloadSchedule.jsp?p="+Math.random(),true);
	xmlhttp.send();
	
	document.getElementById('progress').style.display='';
	document.getElementById('dwn').style.display='none';
	document.getElementById('hs').innerHTML='正在处理请稍后......';
	send();
}

function send(){ 
	var values = $('#progress').progressbar('getValue'); 
	if(values<100){
		values=values+5;
		$('#progress').progressbar({ 
			value: values 
		}); 
	}
	else{
		document.getElementById('hs').innerHTML='课表已经成功导出至桌面，请查看';
		return;
	}
    setTimeout("send();",1000);
  }