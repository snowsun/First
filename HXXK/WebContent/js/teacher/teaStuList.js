//include in teaStuList.jsp
//查找选了该老师课程的学生的名单
function searchData() {
	//var teacherID = $('#teacherID').text();
	alert("sss");
	var teacherID = '788062108';
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
			if(flag =='failed'){
				alert("数据库访问出错，请联系管理员");
				return;
			}else{
				 var STU = flag.split("_COL_");
				 var col,row,span,btn,STULIST;
				for(var i=0;i<STU.length;i++){
					if(STU[i]!=''){
						STULIST = STU[i].split("_ROW_");
						col = document.createElement('tr');
						if(i%2!=0)
							col.style.background='white';
						else
							col.style.background='lightblue';
						for(var j=0;j<STULIST.length-1;j++){
							if(j<4){
							row = document.createElement('td');
							span = document.createElement('span');
							span.innerHTML = STULIST[j];
							row.appendChild(span);
							col.appendChild(row);
							//lab1
							}else if(j == 4){
								if(STULIST[j]=='0'){
									row = document.createElement('td');
									span = document.createElement('span');
									span.innerHTML = "无学生";
									row.appendChild(span);
									col.appendChild(row);
								}else{
									span = document.createElement('span');
									span.id = i+"_"+j+"_span";
									//span.style.display='none';
									span.innerHTML = STULIST[j+1];
									document.body.appendChild(span);
									row = document.createElement('td');
									btn = document.createElement('input');
									btn.type = 'button';
									btn.value = '显示学生信息';
									btn.id = i+"_"+j;
									btn.onclick=function(){
										displayList(this);
									};
									row.appendChild(btn);
									col.appendChild(row);
								}
							//lab2
							}else if(j == 6){
								if(STULIST[j]=='0'){
									row = document.createElement('td');
									span = document.createElement('span');
									span.innerHTML = "无学生";
									row.appendChild(span);
									col.appendChild(row);
								}else{
									span = document.createElement('span');
									span.id = i+"_"+j+"_span";
									//span.style.display='none';
									span.innerHTML = STULIST[j+1];
									document.body.appendChild(span);
									row = document.createElement('td');
									btn = document.createElement('input');
									btn.type = 'button';
									btn.value = '显示学生信息';
									btn.id = i+"_"+j;
									btn.onclick=function(){
										displayList(this);
									};
									row.appendChild(btn);
									col.appendChild(row);
								}
							//lab3
							}else if(j == 8){
								if(STULIST[j]=='0'){
									row = document.createElement('td');
									span = document.createElement('span');
									span.innerHTML = "无学生";
									row.appendChild(span);
									col.appendChild(row);
								}else{
									span = document.createElement('span');
									span.id = i+"_"+j+"_span";
									//span.style.display='none';
									span.innerHTML = STULIST[j+1];
									document.body.appendChild(span);
									row = document.createElement('td');
									btn = document.createElement('input');
									btn.type = 'button';
									btn.value = '显示学生信息';
									btn.id = i+"_"+j;
									btn.onclick=function(){
										displayList(this);
									};
									row.appendChild(btn);
									col.appendChild(row);
								}
							//lab4
							}else if(j == 10){
								if(STULIST[j]=='0'){
									row = document.createElement('td');
									span = document.createElement('span');
									span.innerHTML = "无学生";
									row.appendChild(span);
									col.appendChild(row);
								}else{
									span = document.createElement('span');
									span.id = i+"_"+j+"_span";
									//span.style.display='none';
									span.innerHTML = STULIST[j+1];
									document.body.appendChild(span);
									row = document.createElement('td');
									btn = document.createElement('input');
									btn.type = 'button';
									btn.value = '显示学生信息';
									btn.id = i+"_"+j;
									btn.onclick=function(){
										displayList(this);
									};
									row.appendChild(btn);
									col.appendChild(row);
								}
							//lab5
							}else if(j == 12){
								if(STULIST[j]=='0'){
									row = document.createElement('td');
									span = document.createElement('span');
									span.innerHTML = "无学生";
									row.appendChild(span);
									col.appendChild(row);
								}else{
									span = document.createElement('span');
									span.id = i+"_"+j+"_span";
									//span.style.display='none';
									span.innerHTML = STULIST[j+1];
									document.body.appendChild(span);
									row = document.createElement('td');
									btn = document.createElement('input');
									btn.type = 'button';
									btn.value = '显示学生信息';
									btn.id = i+"_"+j;
									btn.onclick=function(){
										displayList(this);
									};
									row.appendChild(btn);
									col.appendChild(row);
								}
							}
						}
						document.getElementById("stuList").appendChild(col);
					}
				}
			}	
	    }
	};
	xmlhttp.open("GET",server_context+"/server/teacher/stuList/getStuList.jsp?teacherID="+teacherID+"&p="+Math.random(),true);
	xmlhttp.send();
}

function displayList(str){
	var span_id = "#"+str.id+"_span";
	//var span_info = document.getElementById(span_id).innerHTML;
	$.ajax({
		type:'post',
		url:server_context+"/server/teacher/stuList/getLabStuList.jsp",
		data:{
			span_info:$(span_id).text()
		},
		cache:false,
		success:function(data){
			var flag =data.replace(/^\s*|\s*$/g,"");
			alert('$'+flag+'$');
			if(flag == 'failed'){
				alert("数据库操作失败");
				return;
			}else{
				$.messager.show({
					width:200,
					height:300,
					title:'学生信息',
					msg:flag,
					showType:'show',
					style:{
						right:'',
						top:document.body.scrollTop+document.documentElement.scrollTop,
						bottom:''
					}
				});
			}
		},
		error:function(){
			alert("ajax error");
		}
	});
	/*
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
	xmlhttp.open("GET",server_context+"/server/teacher/stuList/getLabStuList.jsp?span_info="+span_info+"&p="+Math.random(),true);
	xmlhttp.send();
	*/
}
function aaa(){
	$.messager.show({
		width:200,
		height:300,
		title:'学生信息',
		msg:listStr,
		showType:'show',
		style:{
			right:'',
			top:document.body.scrollTop+document.documentElement.scrollTop,
			bottom:''
		}
	});
}
