function getStu(){
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
				var stu = flag.split('^');
				var table,row,col1,col2,col3,col4,col5,span;
				table=document.getElementById('table');
				for(var i=0 ; i<stu.length-1 ;i++){
					
					var us = stu[i].split('~');
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
					
					row.appendChild(col1);
					row.appendChild(col2);
					row.appendChild(col3);
					row.appendChild(col4);
					row.appendChild(col5);
					
					//col-1
					span = document.createElement('a');
					span.href='javascript:void(0)';
					span.id='spanId'+i;
					span.innerHTML = us[0];
					col1.appendChild(span);					
					span.onclick= function(){fetch_sch(this.innerHTML);};
					
					//col-2
					span = document.createElement('span');
					span.id='spanNick'+i;
					span.innerHTML = us[1];
					col2.appendChild(span);
					
					//col-3
					span = document.createElement('span');
					span.id='spanMark'+i;
					span.innerHTML = '          ';
					if(us[2]=='zero'){
						span.value = 'no';
						col3.style.background='red';
					}
					else{
						span.value = 'yes';
						col3.style.background='green';
					}
					col3.appendChild(span);
					
					//col-4
					span = document.createElement('a');
					span.id='rc'+i;
					span.value = i ;
					span.href='javascript:void(0)';
					span.innerHTML = '为该生选课';
					span.onclick= function(){chForStu(this.value);};
					col4.appendChild(span);
					
					//col-5
					span = document.createElement('a');
					span.id='dl'+i;
					span.value = i ;
					span.href='javascript:void(0)';
					span.innerHTML = '删除';
					span.onclick= function(){deleteStu(this.value);};
					col5.appendChild(span);
				}
				
				
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/stuList/fetchStu.jsp?p="+Math.random(),true);
	xmlhttp.send();
}

//==========
function fetch_sch(str){
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
				alert('该生没有进行选课，无法查看详细选课信息');
			}
			else{
				DisSchedule(flag);
				document.getElementById('nowId').innerHTML = str ;
				document.getElementById('div1').style.display='none';
				document.getElementById('div2').style.display='';
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/stuList/fetchSchedule.jsp?id="+str+"&p="+Math.random(),true);
	xmlhttp.send();
}
//===========
function DisSchedule(str){
	
	str = str.split('<>')[2];
	var table,row,col1,col2,col3,col4,col5,col6,col7;
	table=document.getElementById('table2');
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

//=========
function reChoose(){
	$.messager.confirm('警告确认框', '您正在重置该生选课，重置后，该生处于未选课状态，且不可恢复！', function(r){
		if (r){
			var id = document.getElementById('nowId').innerHTML;
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
						alert('该生之前并没有进行过选课，无法重新选课');
					}
					else{
						alert("重置该学生选课成功！");
						window.location.reload(true);
					}
			    }
			};
			xmlhttp.open("GET","../server/admin/stuList/resetSch.jsp?id="+id+"&p="+Math.random(),true);
			xmlhttp.send();
		}
	});
}

//========
function chForStu(str){
	if(document.getElementById('spanMark'+str).value=='yes'){
		alert('该生已经操作选课，你可以点击学号查看该生选课。如果你确定要为该生重新选课，请重置该生选课后进行操作。');
		return;
	}
	document.getElementById('div1').style.display='none';
	document.getElementById('div3').style.display='';
	var id = document.getElementById('spanId'+str).innerHTML;
	document.getElementById('hidden_id').innerHTML = id;
	document.getElementById('hidden_num').innerHTML = str;
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
				alert('数据库访问失败，请稍后再进行访问！');
			else{
				/*构造显示*/
				FOR_DISPLAY(flag);
				hideCheckBox();
				hide_free_checkbox();
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/stuList/fetchInfo.jsp?id="+id+"&p="+Math.random(),true);
	xmlhttp.send();
	
}


/***********************************************This block is for courseChoose.jsp*************************************/
function FOR_DISPLAY(str){//USED BY ONLOADING
	var table,row,col1,col2,col3,col4,col5,col6,col7,col8,span,check;
	var __COLNUM__,__COLCHECK__;
	table=document.getElementById('table3');
	
	var _NUM_ = str.split('<>')[1];
	var num=parseInt(_NUM_);
	document.getElementById('_NUM_').innerHTML=num;
	
	for(var i=1;i<=num;i++){

		__COLNUM__= document.createElement('td');
		__COLNUM__.appendChild(document.createTextNode(i+'期'));
		__COLCHECK__ =document.createElement('td');
		__COLCHECK__.appendChild(document.createTextNode('选择'));
		document.getElementById('title').appendChild(__COLNUM__);
		document.getElementById('title').appendChild(__COLCHECK__);

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
	var id = document.getElementById('hidden_id').innerHTML ;
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
				alert('数据库访问失败，请稍后再次进行访问!!');
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
	xmlhttp.open("GET","../server/admin/stuList/fetchCannotTime.jsp?id="+id+"&p="+Math.random(),true);
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
	xmlhttp.open("GET","../server/student/courseChoose/fetch_cannotTurns.jsp?p="+Math.random(),true);
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
	var userId = document.getElementById('hidden_id').innerHTML;
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
		alert('对不起，选的课程数不满足本课程要求，请继续选课');
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
				alert('选课操作成功');
				window.location.reload(true);
			}
			else{
				alert('数据库操作失败，請稍后再試！');
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/stuList/submit.jsp?id="+userId+"&INFO="+INFO+"&p="+Math.random(),true);
	xmlhttp.send();
	
}

//======
function rech(){
	var obj ;
	for(var i=0 ; i<200 ; i++){
		for(var j=0; j<9 ; j++){
			obj = document.getElementById('check_stu'+i+'_'+j);
			if(obj){
					document.getElementById('check_stu'+i+'_'+j).checked = false ;
					document.getElementById('check_stu'+i+'_'+j).disabled = false ;
			}
		}
	}
	hideCheckBox();
	hide_free_checkbox();
	
}

//=====
function deleteStu(str){
	$.messager.confirm('警告确认框', '您正在删除学生，此操作将删除学生一切信息，删除后不可恢复，请谨慎操作！', function(r){
		if (r){
			var id = document.getElementById('spanId'+str).innerHTML;
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
						alert('学生删除成功！');
						window.location.reload(true);
					}
			    }
			};
			xmlhttp.open("GET","../server/admin/stuList/delete.jsp?id="+id+"&p="+Math.random(),true);
			xmlhttp.send();
		}
	});
}