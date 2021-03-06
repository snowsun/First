function onloading(){
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
			display(flag);
	    }
	};
	xmlhttp.open("GET",server_context+"/server/teacher/set/fetch_info.jsp?p="+Math.random(),true);
	xmlhttp.send();
}



function display(str){
	//*******
	
	//*******
	
	var table,row,col1,col2,col3,col5,col6,col7,col8,col9;
	table=document.getElementById('table');
	var num = str.split('_NUM_INFO_')[0];
	str = str.split('_NUM_INFO_')[1];
	document.getElementById('T').innerHTML = num ;
	var info = str.split('_CUT_');
	var len = info.length-1;
	for(var i=0 ; i<len ; i++){
		var Rinfo = info[i].split('$');
		for(var j=0 ; j<num ; j++){
			row = document.createElement('tr');
			row.align = 'center';
			if(i%2==0)
				row.style.background='white';
			else
				row.style.background='lightblue';
			table.appendChild(row);
			col1 = document.createElement('td');
			col2 = document.createElement('td');
			col3 = document.createElement('td');
	//		col4 = document.createElement('td');
			col5 = document.createElement('td');
			col6 = document.createElement('td');
			col7 = document.createElement('td');
			col8 = document.createElement('td');
			col9 = document.createElement('td');
		
			row.appendChild(col1);
			row.appendChild(col2);
			row.appendChild(col3);
	//		row.appendChild(col4);
			row.appendChild(col5);
			row.appendChild(col6);
			row.appendChild(col7);
			row.appendChild(col8);
			row.appendChild(col9);
			
			//col-1
			span = document.createElement('span');
			span.id='spanNo'+i+'_'+j;
			span.innerHTML = Rinfo[0];
			span.style.display='none';
			col1.appendChild(document.createTextNode(i));
			col1.appendChild(span);
			//col-2
			span = document.createElement('span');
			span.id='spanName'+i+'_'+j;
			span.innerHTML = Rinfo[1];
			col2.appendChild(span);
			//col-3
			span = document.createElement('span');
			span.id='spanT'+i+'_'+j;
			span.innerHTML = '第'+(j+1)+'期';
			col3.appendChild(span);
			//col-4
			/*
			span = document.createElement('span');
			span.id='spanTeacher'+i+'_'+j;
			span.innerHTML = Rinfo[2].split('-')[1];
			col4.appendChild(span);
			*/
			//col-5
			span = document.createElement('span');
			span.id='spanTime'+i+'_'+j;
			span.innerHTML = Rinfo[3];
			col5.appendChild(span);
			//col-6
			var ddl = Rinfo[4].split('=')[j];
			var timeBox = document.createElement('input');
			timeBox.type = 'text';
			timeBox.id= 'tBox__'+i+'_'+j;
			col6.appendChild(timeBox);
			$('#'+timeBox.id).datebox({    
				required:true,
				onSelect: function(date){
			        updateDDL(this.id);
				}
			}); 
			if(ddl!='NoPublished'){
				$('#'+timeBox.id).combobox('setText',ddl);
			}
			
			//col-7
			span = document.createElement('a');
			span.id=i+'_'+j;
			span.href='javascript:void(0)';
			span.innerHTML = '下载';	
			span.onclick= function(){dwn(this.id);};
			col7.appendChild(span);
			
			//col-8
			var b = document.createElement('a');
			b.href='javascript:void(0)';
			b.value=i+'_'+j;
			b.innerHTML = "上传";	
			b.onclick= function(){pushWork(this);};  
			
			var f = document.createElement('input');
			f.type='file';
			f.name='file';
			f.id='file'+i+'_'+j;
			col8.appendChild(f);
			col8.appendChild(b);
			
			//col-9
			span = document.createElement('a');
			span.id='pub__'+i+'_'+j;
			span.href='javascript:void(0)';
			span.innerHTML = '新建、修改';	
			span.onclick= function(){pubClicked(this.id);};
			col9.appendChild(span);
			
		}
	}
}


function updateDDL(str){
	var date = $('#'+str).combobox('getText').replace(/^\s*|\s*$/g,"");
	$.messager.confirm('警告确认框', '您正在设置或修改本期课程的作业提交截止日期...', function(r){
		if (r){
			var tail = str.split('__')[1];
			var id = document.getElementById('spanNo'+tail).innerHTML.replace(/^\s*|\s*$/g,"");
			var t = tail.split('_')[1];
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
						$.messager.alert('系统消息','DeadLine设置或修改操作已经成功...','info');
					}
					else{
						$.messager.alert('系统消息','数据库操作失败，请联系数据库管理员...','info');
					}
			    }
			};
			xmlhttp.open("GET",server_context+"/server/teacher/set/updateDDL.jsp?id="+id+"&t="+t+'&date='+date+"&p="+Math.random(),true);
			xmlhttp.send();
		}
		else{
			window.location.reload(true);
		}
	});
}


function dwn(str){
	$.messager.confirm('确认对话框', '若未到截止日期，您下载的作业可能并不完整，确认下载？', function(r){
		if (r){
			$.messager.progress({
				title:'操作进度',
				msg:'正在压缩文件，这可能需要较长一段时间，请稍等...',
				text:''
			}); 
			var courseID = document.getElementById("spanNo"+str).innerHTML.replace(/^\s*|\s*$/g,"");
			var courseT = str.split('_')[1];
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
					if(flag!='failed'){
						window.location.href="../../HomeWork/"+flag;
						$.messager.progress('close');
					}
					else{
						$.messager.progress('close');
						$.messager.alert('警告','下载失败,原因有可能为:<br>1.您没有为本期实验设置DeadLine<br>2.暂时没有学生提交本期实验的作业');
						
					}
			    }
			};
			xmlhttp.open("GET",server_context+"/server/pushWork/dwn.jsp?courseID="+courseID+"&courseT="+courseT+"&p="+Math.random(),true);
			xmlhttp.send();
		}
	});


	
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
			if(flag=='error_0')
				alert('Excel操作失败，请联系sunchun@smail.nju.edu.cn');
			else if(flag=='error_1')
				alert('数据库操作失败，请联系数据库管理员重启数据库');
	    }
	};
	xmlhttp.open("GET","../server/admin/checkChoose/downloadSchedule.jsp?p="+Math.random(),true);
	xmlhttp.send();
	
	document.getElementById('progress').style.display='';
	document.getElementById('gen').style.display='none';
	document.getElementById('hs').innerHTML='正在处理请稍后......';
	send();
}
/////////////////////////////////////////////////////////////////////
function send(){ 
	var values = $('#progress').progressbar('getValue'); 
	if(values<100){
		values=values+20;
		$('#progress').progressbar({ 
			value: values 
		}); 
	}
	else{
		document.getElementById('dwn').style.display='';
		document.getElementById('hs').innerHTML='';
		return;
	}
    setTimeout("send();",1000);
  }

function pubClicked(str){
	var M = 'spanNo'+str.split('__')[1];
	var id = document.getElementById(M).innerHTML.replace(/^\s*|\s*$/g,"");
	var turn = str.split('__')[1].split('_')[1];
	turn = parseInt(turn)+1;
	document.getElementById('hidden_id').innerHTML = id;
	document.getElementById('hidden_turn').innerHTML = turn;
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
				$('#dialog').dialog('setTitle','第'+turn+'期作业要求');
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML='您还没有对该期课程作业发布作业要求,说点什么吧......';
			}
			else{
				$('#dialog').dialog('setTitle','第'+turn+'期作业要求');
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML=flag;
			}
		}
	};
	xmlhttp.open("GET","../../server/teacher/set/pubWorkRequest.jsp?id="+id+"&turn="+turn+"&p="+Math.random(),true);
	xmlhttp.send();
	
}

//====================================================================
function save_request(){//点击保存备注按钮，触发
	var id=document.getElementById('hidden_id').innerHTML.replace(/^\s*|\s*$/g,"");	
	var turn =document.getElementById('hidden_turn').innerHTML.replace(/^\s*|\s*$/g,"");
	var mark = document.getElementById('ta').value.replace(/^\s*|\s*$/g,"");	
	mark = encodeURI(encodeURI(mark));
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
			else{
				document.getElementById('ta').disabled=true;
				alert('作业要求发布成功！');
			}
				
	    }
	};
	xmlhttp.open("GET","../../server/teacher/set/refreshWorkRequest.jsp?id="+id+"&turn="+turn+"&mark="+mark+"&p="+Math.random(),true);
	xmlhttp.send();
}


//==============================================================================
function pushWork(str){
	$.messager.confirm('警告', '您上传的作业必须以您学生的学号命名，不能有其他任何字符，否则学生将无法下载对应的作业！', function(r){
		if (r){
			var i = str.value;
			var ext = document.getElementById("file"+i).value.replace(/^\s*|\s*$/g,"").split('.')[1];
			if(ext!='pdf' && ext!='PDF' && ext!='doc' && ext!='docx' && ext!='DOC' && ext!='DOCX'){
				alert('上传文件类型不符合类型要求');
				return;
			}
			var filename = document.getElementById("file"+i).value.replace(/^\s*|\s*$/g,"").split('.')[0];
			var len = filename.split('\\').length;
			filename = filename.split('\\')[len-1];
			var courseID = document.getElementById("spanNo"+i).innerHTML.replace(/^\s*|\s*$/g,"");
			var courseT = str.value.split('_')[1];
			courseT = parseInt(courseT)+1;
			document.getElementById("courseID").value = courseID;
			document.getElementById("courseT").value = courseT;
			document.getElementById("fileName").value = filename;
			
			var T = document.getElementById("T").innerHTML.replace(/^\s*|\s*$/g,"");
			T = parseInt(T);
			var I = str.value.split('_')[0];
			I = parseInt(I);
			var J = str.value.split('_')[1];
			J = parseInt(J);
			document.getElementById("fileNo").value = I*T+J;
			document.getElementById("form1").submit();
		}
	});
	
}