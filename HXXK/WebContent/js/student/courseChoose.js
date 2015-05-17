/***********************************************This block is for courseChoose.jsp*************************************/
function FOR_DISPLAY(str){//USED BY ONLOADING
	var table,row,col1,col2,col3,col4,col5,col6,col7,col8,span,check;
	var __COLNUM__,__COLCHECK__;
	table=document.getElementById('table');
	
	var _NUM_ = str.split('<>')[1];
	var num=parseInt(_NUM_);
	document.getElementById('_NUM_').innerHTML=num;
	
	for(var i=1;i<=num;i++){

		__COLNUM__= document.createElement('td');
		__COLNUM__.appendChild(document.createTextNode('第'+i+'期已选'));
		__COLCHECK__ =document.createElement('td');
		__COLCHECK__.appendChild(document.createTextNode('选择'));
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
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		row.appendChild(col7);
		row.appendChild(col8);
	
		//col-1
		span = document.createElement('span');
		span.id='spanNo'+i;
		span.innerHTML = info_col[0];
		span.style.display='none';
		col1.appendChild(span);
		col1.appendChild(document.createTextNode(i));
		//col-2
		span = document.createElement('span');
		span.id='spanName'+i;
		span.style.cursor='hand';
		
		/******这个地方的冗杂是水平有限的无奈之举*********/	
		span.onclick= function(){pop_mark_dialog(this.id);};
		span.innerHTML = info_col[1];
		col2.appendChild(span);
		
		//col-3
		span = document.createElement('span');
		span.id='spanTurnal'+i;
		span.innerHTML = info_col[2];
		col3.appendChild(span);
		//col-4
		span = document.createElement('span');
		span.id='spanLaboratory'+i;
		span.innerHTML = info_col[3];
		col4.appendChild(span);
		//col-5
		span = document.createElement('span');
		span.id='spanTeacher'+i;
		span.innerHTML = info_col[4];
		span.style.cursor = 'hand';
		span.onclick= function(){disTeaNotice(this.innerHTML);};
		col5.appendChild(span);
		//col-6
		span = document.createElement('span');
		span.id='spanTime'+i;
		span.innerHTML = info_col[5];
		col6.appendChild(span);
		//col-7
		span = document.createElement('span');
		span.id='spanStatus'+i;
		if(info_col[6]=='1')
			span.innerHTML = '已发布';
		else
			span.innerHTML = '未发布';
		col7.appendChild(span);
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
			
			check = document.createElement('input');
			check.type='checkbox';
			check.id = 'check_stu'+i+'_'+j;     //Mark
			check.onclick= function(){checkClicked();};
			
			__COLCHECK__ = document.createElement('td');
			__COLCHECK__.appendChild(check);
			row.appendChild(__COLNUM__);
			row.appendChild(__COLCHECK__);
				
		}	
	}
	//判断是否显示操作按钮以及check框
	var yes_or_no = str.split('<>')[0];
	if(yes_or_no=='yes'){
		document.getElementById('add').style.display='none';
		document.getElementById('ok').style.display='none';
		var id ='check_stu';
		var num=parseInt(document.getElementById('_NUM_').innerHTML);
		var rows=parseInt(document.getElementById('_ROWS_').innerHTML);
		for(var i=0;i<rows;i++){
			for(var j=1;j<=num;j++){
				id=id+i+'_'+j;
				document.getElementById(id).disabled=true;
				id = 'check_stu';
			}
		}
		
		
		alert('您已经成功完成了选课操作,无需再次操作,若需要调整选课,请点击左侧菜单栏中的重新选课按钮');
	}
	
	
}
//====================================================================
function hideCheckBox(){
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
				var len = flag.split('@').length-1;
				for(var i=0 ; i<len ; i++){
					var cannotTime='星期'+flag.split('@')[i];
					for(var j=0 ; j<200 ; j++){
						if(document.getElementById('spanTime'+j)){
							if(document.getElementById('spanTime'+j).innerHTML==cannotTime){
								for(var r=0; r<8 ; r++){
									if(document.getElementById('check_stu'+j+'_'+r)){
										document.getElementById('check_stu'+j+'_'+r).disabled=true;
									}
								}
							}
						}
						
					}
				}
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/courseChoose/fetch_cannotTime.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
//====================================================================
function hide_free_checkbox(){
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
				var group = flag.split('#');
				for(var i=0 ; i<200 ; i++){
					if(document.getElementById('spanNo'+i)){
						var id1 = document.getElementById('spanNo'+i).innerHTML;
						var f = inArray(id1 , group);
						if(f!=-1){
							if(f!='MY'){
								for(var j=0 ; j<5 ; j++){
									if(f.indexOf(j)>0){
										var id2 = 'check_stu'+i+'_'+(j+1);
										if(document.getElementById(id2)){
											document.getElementById(id2).disabled=true;
										}
									}
								}
							}
						}
					}
				}
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/courseChoose/fetch_cannotTurns.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
//====================================================================
//****
function inArray( str ,  array){
	for(var i=0 ; i<array.length-1 ; i++){
		if(array[i].split('-')[0] == str){
			return array[i].split('-')[1];
		}
	}
	
	return -1;
}

//****

//===================================================================

function onloading_courseChoose(){//页面载入加载函数;
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
				hideCheckBox();
				hide_free_checkbox();
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/courseChoose/fetch_mainInfo.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
//=====================================================================
function checkClicked(){
	var id ='check_stu';
	var obj;
	var num=parseInt(document.getElementById('_NUM_').innerHTML);
	var rows=parseInt(document.getElementById('_ROWS_').innerHTML);
	for(var i=0;i<rows;i++){
		for(var j=1;j<=num;j++){
			id=id+i+'_'+j;
			obj= document.getElementById(id);
			if(obj.checked==true){
				for(var r=0;r<rows;r++){//设置同列不可再操作
					if(r!=i){
						var ID = 'check_stu'+r+'_'+j;
						document.getElementById(ID).disabled=true;
					}
				}
				for(var r=1;r<=num;r++){//设置同列不可再操作
					if(r!=j){
						var ID = 'check_stu'+i+'_'+r;
						document.getElementById(ID).disabled=true;
					}
				}
			}
			id = 'check_stu';
		}
	}
}
//=====================================================================
function refresh(){
	window.location.reload(true);
}
//=====================================================================
function submit(){
	var num=parseInt(document.getElementById('_NUM_').innerHTML);
	var rows=parseInt(document.getElementById('_ROWS_').innerHTML);
	var id ='check_stu',k=0;
	var INFO ='';
	for(var i=0;i<rows;i++){
		for(var j=1;j<=num;j++){
			id=id+i+'_'+j;
			obj= document.getElementById(id);
			if(obj.checked==true){
				k=k+1;
				if(k<num){
					INFO = INFO + document.getElementById('spanNo'+i).innerHTML + '_' + j + '*';
				}
				else{
					INFO = INFO + document.getElementById('spanNo'+i).innerHTML + '_' + j;
				}
			}
			id = 'check_stu';
		}
	}
	if(k<num){
		alert('对不起，你选的课程数不满足本课程要求，请继续选课');
		return;
	}
	
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
			/*构造显示*/
			if(flag=='success'){
				alert('选课操作成功，您可以到我的课表中查看选课信息');
				window.location.reload(true);
			}
			else{
				alert('数据库操作失败，这有可能是以下原因造成的：\n1.当前使用系统人数过多，推荐您在系统空闲时进行选课\n2.您选择的课程已经满员,请优先选择已选人数较少的课程\n3.您的身份验证已过期,请重新登录');
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/courseChoose/submit_courses.jsp?INFO="+INFO+"&p="+Math.random(),true);
	xmlhttp.send();
	
}
//=====================================================================
function pop_mark_dialog(str){//弹出备注框
	str = str.split('spanName')[1];
	var no;
	document.getElementById('hidden_id').innerHTML=document.getElementById("spanNo"+str).innerHTML;
	no=document.getElementById('hidden_id').innerHTML.replace(/^\s*|\s*$/g,"");	
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
				$('#dialog').dialog('setTitle',document.getElementById("spanName"+str).innerHTML);
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML='管理员暂未为此课程添加备注...';
			}
			else{
				$('#dialog').dialog('setTitle',document.getElementById("spanName"+str).innerHTML);
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML=flag;
			}
				
	    }
	};
	xmlhttp.open("GET","../../server/admin/expMark/fetch_expMark.jsp?no="+no+"&p="+Math.random(),true);
	xmlhttp.send();
}

/***********************************************This block is for schedule.jsp*************************************/
function loading_schedule(){
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
			else if(flag=='no_choose'){
				alert('您还没有进行选课，请选课之后再查看课表');
			}
			else{
				DisSchedule(flag);
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/schedule/fetch_schedule.jsp?p="+Math.random(),true);
	xmlhttp.send();
}

function DisSchedule(str){
	document.getElementById("HHH").innerHTML=str.split('<>')[0];
	document.getElementById("DDL").innerHTML=str.split('<>')[1];
	str = str.split('<>')[2];
	var table,row,col1,col2,col3,col4,col5,col6,col7;
	table=document.getElementById('table');
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
		col7 = document.createElement('td');
	
		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		row.appendChild(col7);
	
		
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
		span.style.cursor = 'hand';
		span.onclick= function(){pop_mark_dialog(this.id);};
		col2.appendChild(span);
		//col-3
		span = document.createElement('span');
		span.id='spanTurnal'+i;
		span.innerHTML = info_col[2];
		col3.appendChild(span);
		//col-4
		span = document.createElement('span');
		span.id='spanLaboratory'+i;
		span.innerHTML = info_col[3];
		col4.appendChild(span);
		//col-5
		span = document.createElement('span');
		span.id='spanTeacher'+i;
		span.innerHTML = info_col[4];
		span.style.cursor = 'hand';
		span.onclick= function(){disTeaNotice(this.innerHTML);};
		col5.appendChild(span);
		//col-6
		span = document.createElement('span');
		span.id='spanTime'+i;
		span.innerHTML = info_col[5];
		col6.appendChild(span);
		//col-7
		span = document.createElement('span');
		span.id='spanLimit'+i;
		span.innerHTML = info_col[6];	
		col7.appendChild(span);
	}
}

function disTeaNotice(str){
	
	var teaId = str.split('-')[0];
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
			if(flag=='zero'){
				alert('该老师很低调，从未给自己编辑过简介哦~');
			}
			else{
				document.getElementById("teaInfo").innerHTML=flag;
				$('#dialog2').window('open');
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/schedule/getTeaNotice.jsp?teaId="+teaId+"&p="+Math.random(),true);
	xmlhttp.send();
}



/***********************************************This block is for rechoose.jsp*************************************/
function reChoose(){
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
			else if(flag=='no_choose'){
				alert('你之前并没有进行过选课，无法重新选课');
			}
			else{
				alert("操作成功，现在你可以重新选课了！");
			}
	    }
	};
	xmlhttp.open("GET","../../server/student/courseChoose/reChoose.jsp?p="+Math.random(),true);
	xmlhttp.send();
}


