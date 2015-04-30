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
					span.id='spanName'+i;
					span.innerHTML = us[1];
					col2.appendChild(span);
					
					//col-3
					span = document.createElement('span');
					span.id='spanMark'+i;
					span.innerHTML = '          ';
					if(us[2]=='zero')
						col3.style.background='red';
					else
						col3.style.background='green';
					col3.appendChild(span);
					
					//col-4
					span = document.createElement('a');
					span.id='rc'+i;
					span.href='javascript:void(0)';
					span.innerHTML = '为该生选课';
					col4.appendChild(span);
					
					//col-5
					span = document.createElement('a');
					span.id='dl'+i;
					span.href='javascript:void(0)';
					span.innerHTML = '删除';
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