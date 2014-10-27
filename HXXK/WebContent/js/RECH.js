function RECH(){
	var id = document.getElementById('stuId').value.replace(/^\s*|\s*$/g,"");
	if(id.length==0){
		alert('请输入学号');
		return;
	}
	//onloading_courseChoose();
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
				alert('您输入的学生学号有误或者数据库访问失败，请重新输入学生学号或者稍后再试');
			else{
				onloading();
				document.getElementById("msg").innerHTML = '您正在为<'+flag+'>同学选课';
				document.getElementById("hiddenStuID").innerHTML = id;
				document.getElementById("re").style.display = '';
				document.getElementById("ok").style.display = '';
				$('#dialog').window('close');
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/chooseForStu/judge_id.jsp?stuId="+id+"&p="+Math.random(),true);
	xmlhttp.send();
}

//======================================================================
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
		col1.appendChild(span);
		//col-2
		span = document.createElement('span');
		span.id='spanName'+i;
		span.style.cursor='hand';
		
		/******这个地方的冗杂是水平有限的无奈之举*********/	
		if(i==0)   span.onclick= function(){pop_mark_dialog(0);};			/////////////////////////////////////////////////////////
		if(i==1)   span.onclick= function(){pop_mark_dialog(1);};
		if(i==2)   span.onclick= function(){pop_mark_dialog(2);};
		if(i==3)   span.onclick= function(){pop_mark_dialog(3);};
		if(i==4)   span.onclick= function(){pop_mark_dialog(4);};
		if(i==5)   span.onclick= function(){pop_mark_dialog(5);};
		if(i==6)   span.onclick= function(){pop_mark_dialog(6);};
		if(i==7)   span.onclick= function(){pop_mark_dialog(7);};
		if(i==8)   span.onclick= function(){pop_mark_dialog(8);};
		if(i==9)   span.onclick= function(){pop_mark_dialog(9);};
		if(i==10)  span.onclick= function(){pop_mark_dialog(10);};
		if(i==11)  span.onclick= function(){pop_mark_dialog(11);};
		if(i==12)  span.onclick= function(){pop_mark_dialog(12);};
		if(i==13)  span.onclick= function(){pop_mark_dialog(13);};
		if(i==14)  span.onclick= function(){pop_mark_dialog(14);};
		if(i==15)  span.onclick= function(){pop_mark_dialog(15);};
		if(i==16)  span.onclick= function(){pop_mark_dialog(16);};
		if(i==17)  span.onclick= function(){pop_mark_dialog(17);};
		if(i==18)  span.onclick= function(){pop_mark_dialog(18);};
		if(i==19)  span.onclick= function(){pop_mark_dialog(19);};
		if(i==20)  span.onclick= function(){pop_mark_dialog(20);};
		if(i==21)  span.onclick= function(){pop_mark_dialog(21);};
		if(i==22)  span.onclick= function(){pop_mark_dialog(22);};
		if(i==23)  span.onclick= function(){pop_mark_dialog(23);};
		if(i==24)  span.onclick= function(){pop_mark_dialog(24);};
		if(i==25)  span.onclick= function(){pop_mark_dialog(25);};
		if(i==26)  span.onclick= function(){pop_mark_dialog(26);};
		if(i==27)  span.onclick= function(){pop_mark_dialog(27);};
		if(i==28)  span.onclick= function(){pop_mark_dialog(28);};
		if(i==29)  span.onclick= function(){pop_mark_dialog(29);};
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
			check.id = 'check_stu'+i+'_'+j;
			check.onclick= function(){checkClicked();};
			
			__COLCHECK__ = document.createElement('td');
			__COLCHECK__.appendChild(check);
			row.appendChild(__COLNUM__);
			row.appendChild(__COLCHECK__);
				
		}	
	}
}
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
function reChoose(){
	var id ='check_stu';
	var obj;
	var num=parseInt(document.getElementById('_NUM_').innerHTML);
	var rows=parseInt(document.getElementById('_ROWS_').innerHTML);
	for(var i=0;i<rows;i++){
		for(var j=1;j<=num;j++){
			id=id+i+'_'+j;
			obj= document.getElementById(id);
			obj.disabled=false;
			obj.checked=false;
			id = 'check_stu';
		}
	}
}

//=====================================================================
function submit(){
	var num=parseInt(document.getElementById('_NUM_').innerHTML);
	var rows=parseInt(document.getElementById('_ROWS_').innerHTML);
	var id ='check_stu',k=0;
	var stuId = document.getElementById('hiddenStuID').innerHTML;
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
				alert('为该同学选课成功，请关闭此子窗口！');
			}
			else{
				alert('数据库操作失败，这有可能是以下原因造成的：\n1.当前使用系统人数过多，推荐您在系统空闲时进行选课\n2.您选择的课程已经满员,请优先选择已选人数较少的课程\n');
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/chooseForStu/submit.jsp?INFO="+INFO+"&stuId="+stuId+"&p="+Math.random(),true);
	xmlhttp.send();
	
}