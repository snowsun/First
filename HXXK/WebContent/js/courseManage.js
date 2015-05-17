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
			 $('#cc').combobox('setText',fl[2]);
			 $('#dd').combobox('setText',fl[3]);
			 $('#ee').combobox('setText',fl[4]);
			 $('#ff').combobox('setText',fl[5]);
			 $('#gg').combobox('setText',fl[6]);
			 
			 var ttt = fl[7].split('@');
			 var len = ttt.length-1;
			 for(var i=0;i<len;i++){
				 document.getElementById('check'+ttt[i]).checked=true;
			 }
			 
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
	//获取check的时间信息
	var openTime='',IF_CHECKBOX_CLICKED=0,id='check';
	for(var i=1;i<=5;i++){	
			id=id+i;
			if(document.getElementById(id).checked==true){
				IF_CHECKBOX_CLICKED=1;
				openTime=openTime+i+'&';
			}
			id='check';
	}
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
	if(IF_CHECKBOX_CLICKED==0){
		alert('请设置课程开始时间');
		return;
	}
	
	//格式化上课时间显示格式
	var timeDisplay=openTime;	
	timeDisplay=timeDisplay.replace(/1/g, '周一');
	timeDisplay=timeDisplay.replace(/2/g, '周二');
	timeDisplay=timeDisplay.replace(/3/g, '周三');
	timeDisplay=timeDisplay.replace(/4/g, '周四');
	timeDisplay=timeDisplay.replace(/5/g, '周五');
	timeDisplay=timeDisplay.replace(/&/g, '<br><hr/>');
	
	document.getElementById('opTable').style.display='none';
	document.getElementById('hidden').style.display='';
	document.getElementById('hiddenTable').style.display='';
	document.getElementById('year').innerHTML=year+'学年';
	document.getElementById('lab_no').innerHTML=lab_no+'个';
	document.getElementById('week').innerHTML='第'+week+'周';
	document.getElementById('openTime').innerHTML='<hr />'+timeDisplay;
	document.getElementById('begin_time').innerHTML=begin_time;
	document.getElementById('end_time').innerHTML=end_time;
	
}

//====================================================================
function cancle_clicked(){//清空按钮点击效应
	$('#ee').combobox('clear');
	$('#ff').combobox('clear');
	var id='check';
	for(var i=1;i<=5;i++){
		for(var j=1;j<=5;j++){
			id=id+i+'_'+j;
			document.getElementById(id).checked=false;
			id='check';
		}
	}
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

	var openTime='',id='check';
	for(var i=1;i<=5;i++){	
			id=id+i;
			if(document.getElementById(id).checked==true){
				openTime=openTime+i+'@';
			}
			id='check';
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
			if(flag=='success')
				alert("全局设置完毕，现在您可以进行课程设置了！");
			else
				alert("数据库操作失败，请点击左侧全局设置按钮刷新并重新配置！");
			
	    }
	};
	xmlhttp.open("GET","../server/admin/courseConfig/update_config.jsp?year="+year+"&lab_no="+lab_no+"&begin_time="+begin_time+"&end_time="+end_time+"&week="+week+"&openTime="+openTime+"&p="+Math.random(),true);
	xmlhttp.send();
	
}


/********************************************This block is for laboratory.jsp************************************************/
function onloading_laboratory(){//实验室信息页面载入加载函数
	var table,row,col0,col1,col2,checkbox,span;
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
	col1.appendChild(document.createTextNode('实验室编号'));
	col2.appendChild(document.createTextNode('实验室房号'));
	
	
	//数据库取回数据
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
			var info = flag.split('&');
			var len = info.length-1;
			document.getElementById('record').innerHTML = len;
			for(var i=0;i<len;i++){
				row = document.createElement('tr');
				row.align = 'center';
				row.id = 'row_id'+i;
				if(i%2==0)
					row.style.background='white';
				else
					row.style.background='lightblue';
				table.appendChild(row);
				col0 = document.createElement('td');
				col1 = document.createElement('td');
				col2 = document.createElement('td');
				row.appendChild(col0);
				row.appendChild(col1);
				row.appendChild(col2);
				
				//-0-创建checkbox
				checkbox = document.createElement('input');
				checkbox.type='checkbox';
				checkbox.id='check_id'+i;
				checkbox.name='check_name'+i;
				col0.appendChild(checkbox);
				//-1-
				span = document.createElement('span');
				span.id='span_num'+i;
				span.innerHTML = i+1;
				col1.appendChild(span);
				
				//-2-创建span记录实验室
				span = document.createElement('span');
				span.id='span_id'+i;
				span.innerHTML = info[i];
				col2.appendChild(span);
				
				
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/laboratory/fetch_laboratory.jsp?p="+Math.random(),true);
	xmlhttp.send();
	
	
}
//====================================================================
function add(){//增加实验室按钮触发
	
	$('#add').linkbutton('disable');
	$('#sub').linkbutton('disable');
	document.getElementById('save').style.display='';

	var no = document.getElementById('record').innerHTML;
	no = parseInt(no);
	var table,row,col0,col1,col2,textField;
	table=document.getElementById('table');
	
	//加入表的第一行题标行
	row = document.createElement('tr');
	if(no%2==0)
		row.style.background='white';
	else
		row.style.background='lightblue';
	row.align = 'center';
	table.appendChild(row);
	col0 = document.createElement('td');
	col1 = document.createElement('td');
	col2 = document.createElement('td');
	row.appendChild(col0);
	row.appendChild(col1);
	row.appendChild(col2);
	
	textField = document.createElement('input');
	textField.type='text';
	textField.id='textField_id';
	var save = document.getElementById('save');
	col0.appendChild(save);
	col1.appendChild(document.createTextNode((parseInt(no)+1)));
	col2.appendChild(textField);
}
//====================================================================
function save_laboratory(){//保存新增实验室到数据库
	var ROOM = document.getElementById('textField_id').value.replace(/^\s*|\s*$/g,"");
	ROOM = encodeURI(encodeURI(ROOM));
	if(ROOM.length==0){
		alert('请输入实验室房间号');
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
			if(flag=='success')
				window.location.reload(true);
			else if(flag=='alreadyExist')
				alert('此房间已存在，请检查是否重复');
			else
				alert('数据库存储失败，请刷新后重试');
	    }
	};
	xmlhttp.open("GET","../server/admin/laboratory/insert_laboratory.jsp?ROOM="+ROOM+"&p="+Math.random(),true);
	xmlhttp.send();
	
}


//====================================================================
function remove_laboratory(){//删除实验室

	var id;
	var i=0;
	for(; i<200 ; i++){
		id='check_id'+i;
		if(document.getElementById(id)!=null){
			if(document.getElementById(id).checked==true)
				break;
		}
	}
	if(i==200){
		alert('请先选中要删除的实验室');
		return;
	}
	id='span_id'+i;
	var ROOM = document.getElementById(id).innerHTML.replace(/^\s*|\s*$/g,"");
	ROOM =  encodeURI(encodeURI(ROOM));
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
				window.location.reload(true);
			else
				alert('数据库操作失败，请刷新后重试');
	    }
	};
	xmlhttp.open("GET","../server/admin/laboratory/delete_laboratory.jsp?ROOM="+ROOM+"&p="+Math.random(),true);
	xmlhttp.send();

}
//============================================
function change_laboratory(){//修改实验室

	var id;
	var i=0;
	for(; i<200 ; i++){
		id='check_id'+i;
		if(document.getElementById(id)!=null){
			if(document.getElementById(id).checked==true)
				break;
		}
	}
	if(i==200){
		alert('请先选中要修改的实验室');
		return;
	}
	id='span_id'+i;
	var ROOM = document.getElementById(id).innerHTML.replace(/^\s*|\s*$/g,"");
	document.getElementById('record_room').innerHTML = ROOM ; 
	id = 'row_id'+i;
	document.getElementById(id).style.background='red';

	$('#add').linkbutton('disable');
	$('#sub').linkbutton('disable');
	$('#change').linkbutton('disable');
	document.getElementById('saveEdit').style.display='';

	
	var table,row,col0,col1,col2,textField;
	table=document.getElementById('table');
	
	//加入表的第一行题标行
	row = document.createElement('tr');
	row.style.background='red';
	row.align = 'center';
	table.appendChild(row);
	col0 = document.createElement('td');
	col1 = document.createElement('td');
	col2 = document.createElement('td');
	row.appendChild(col0);
	row.appendChild(col1);
	row.appendChild(col2);
	
	textField = document.createElement('input');
	textField.type='text';
	textField.id='textField_id';
	textField.value = ROOM ;
	var save = document.getElementById('saveEdit');
	col0.appendChild(save);
	col1.appendChild(document.createTextNode(i+1));
	col2.appendChild(textField);

}

//==============================
function save_edit_laboratory(){
	var before = document.getElementById('record_room').innerHTML.replace(/^\s*|\s*$/g,"");
	var ROOM = document.getElementById('textField_id').value.replace(/^\s*|\s*$/g,"");
	ROOM = encodeURI(encodeURI(ROOM));
	before = encodeURI(encodeURI(before));
	if(ROOM.length==0){
		alert('请输入实验室房间号');
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
			if(flag=='success')
				window.location.reload(true);
			else if(flag=='alreadyExist')
				alert('此房间已存在，请检查是否重复');
			else
				alert('数据库存储失败，请刷新后重试');
	    }
	};
	xmlhttp.open("GET","../server/admin/laboratory/edit_laboratory.jsp?ROOM="+ROOM+"&before="+before+"&p="+Math.random(),true);
	xmlhttp.send();
}
/********************************************This block is for experiment.jsp************************************************/
function FOR_DISPLAY(str){//USED BY ONLOADING
	var info = str.split('&');
	var info_col;
	var len = info.length-2;
	if(len==0)
		return;
	
	var table,row,col0,col1,col2,col3,col4,col5,col6,col7,col8,checkbox,span;
	table=document.getElementById('table');
	
	//加入表的第一行题标行
	for(var i = 0 ; i<len ; i++){
		info_col = info[i].split('#');
		row = document.createElement('tr');
		row.id = 'row'+i;
		row.align = 'center';
		if(i%2==1)
			row.style.background='lightblue';
		else
			row.style.background='white';
		table.appendChild(row);
		col0 = document.createElement('td');
		col1 = document.createElement('td');
		col2 = document.createElement('td');
		col3 = document.createElement('td');
		col4 = document.createElement('td');
		col5 = document.createElement('td');
		col6 = document.createElement('td');
		col7 = document.createElement('td');
		col8 = document.createElement('td');
		row.appendChild(col0);
		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		row.appendChild(col7);
		row.appendChild(col8);
		
		//col-0
		checkbox = document.createElement('input');
		checkbox.type='checkbox';
		checkbox.id='checkbox'+i;
		col0.appendChild(checkbox);
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
		span.onclick= function(){checkClicked(this.id);};
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
	}	
}

//====================================================================
function FOR_SPECIAL_DISPLAY(){
	var row,col,checkbox;
	var len=0;
	var courseId ='';
	for( ; len<200 ; len++){
		if(document.getElementById('spanNo'+len)){
			courseId = courseId + document.getElementById('spanNo'+len).innerHTML.replace(/^\s*|\s*$/g,"")+'-';
		}
		else
			break;
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
			if(flag=='failed'){
				alert('数据库操作失败，请稍后再试，若此问题持续存在请联系数据库管理员');
			}
			else{
				var t = flag.split('*')[0];
				var sp = flag.split('*')[1].split('-');
				t = parseInt(t);
				document.getElementById('hidden_t').innerHTML = t ;
				for(var i=0 ; i<len ; i++){
					row = document.getElementById('row'+i);
					col = document.createElement('td');	
					row.appendChild(col);
					for(var n=0 ; n<t ; n++){
						
						//col-0
						checkbox = document.createElement('input');
						checkbox.type='checkbox';
						checkbox.id='checkbox'+i+'_'+n;
						if(sp[i].indexOf(n)<0){
							checkbox.checked='checked';
						}
						col.appendChild(checkbox);						
					}
					var a = document.createElement('a');
					a.href='javascript:void(0)';
					a.innerHTML = '设置';
					a.id = 'set'+i;
					a.value = i ; 
					a.onclick= function(){upSet(this.value);};
					col.appendChild(a);					
				}
				
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/experiment/get_t_and_special_info.jsp?courseId="+courseId+"&p="+Math.random(),true);
	xmlhttp.send();
	
	
}
//====================================================================
function upSet(str){
	var courseId = document.getElementById('spanNo'+str).innerHTML.replace(/^\s*|\s*$/g,"");
	var t = document.getElementById('hidden_t').innerHTML.replace(/^\s*|\s*$/g,"");
	t = parseInt(t);
	var sp = 'MY';
	for(var i=0 ; i<t ; i++){
		if(!document.getElementById('checkbox'+str+'_'+i).checked)
			sp = sp+i;
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
			if(flag=='failed'){
				alert('数据库操作失败，请稍后再试，若此问题持续存在请联系数据库管理员');
			}
			else{
				alert('单独设置课程期数成功！');
				window.location.reload();
			}
			
	    }
	};
	xmlhttp.open("GET","../server/admin/experiment/update_NPublished.jsp?courseId="+courseId+"&sp="+sp+"&p="+Math.random(),true);
	xmlhttp.send();
	
}
//====================================================================
function initial(str){
	var obj; 
	//week
	document.getElementById('_TURNAL_').innerHTML=3;
	
	//time
	obj=document.getElementById('_TIME_');
	var time = str.split('$')[1];
	var _TIME_=time.split('');
	_TIME_.sort();
	time=_TIME_.join('');
	for(var i=0;i<time.length;i++){
		obj.options.add(new Option("星期"+time[i],i)); //这个兼容IE与firefox
	}
	
    //laboratory
	obj=document.getElementById('_LABORATORY_');
    var laboratory = str.split('$')[2].split('*');
	for(var i=0;i<laboratory.length-1;i++){
		obj.options.add(new Option(laboratory[i],i)); //这个兼容IE与firefox
	}
	
	//teacher
	obj=document.getElementById('_TEACHER_');
    var teacher = str.split('$')[3].split('*');
	for(var i=0;i<teacher.length-1;i++){
		obj.options.add(new Option(teacher[i],i)); //这个兼容IE与firefox
	}
    
}
//====================================================================
function onloading_experiment(){//页面载入加载函数;
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
			if(flag=='failed'){
				alert('数据库操作失败，请稍后再试，若此问题持续存在请联系数据库管理员');
			}
			else{
				
				FOR_DISPLAY(flag);
				FOR_SPECIAL_DISPLAY();
				initial(flag.split('&$')[1]);
				
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/experiment/fetch_experiment.jsp?p="+Math.random(),true);
	xmlhttp.send();
}

//====================================================================
function add_experiment(){//添加实验
	$('#add').linkbutton('disable');
	$('#sub').linkbutton('disable');
	
	var table,row,col0,col1,col2,col3,col4,col5,col6,col7,col8;
	table=document.getElementById('table');
	
	row = document.createElement('tr');
	row.align = 'center';
	row.style.background='lightgreen';
	table.appendChild(row);
	
	col0 = document.createElement('td');
	col1 = document.createElement('td');
	col2 = document.createElement('td');
	col3 = document.createElement('td');
	col4 = document.createElement('td');
	col5 = document.createElement('td');
	col6 = document.createElement('td');
	col7 = document.createElement('td');
	col8 = document.createElement('td');
	
	row.appendChild(col0);
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
	row.appendChild(col4);
	row.appendChild(col5);
	row.appendChild(col6);
	row.appendChild(col7);
	row.appendChild(col8);
	
	document.getElementById("save").style.display='';
	document.getElementById("_NAME_").style.display='';
	document.getElementById("_TURNAL_").style.display='';
	document.getElementById("_LABORATORY_").style.display='';
	document.getElementById("_TEACHER_").style.display='';
	document.getElementById("_TIME_").style.display='';
	document.getElementById("_STATUS_").style.display='';
	document.getElementById("_LIMIT_").style.display='';
	
	col0.appendChild(document.getElementById("save"));
	col2.appendChild(document.getElementById("_NAME_"));
	col3.appendChild(document.getElementById("_TURNAL_"));
	col4.appendChild(document.getElementById("_LABORATORY_"));
	col5.appendChild(document.getElementById("_TEACHER_"));
	col6.appendChild(document.getElementById("_TIME_"));
	col7.appendChild(document.getElementById("_STATUS_"));
	col8.appendChild(document.getElementById("_LIMIT_"));
	
}
//====================================================================
function save_experiment(){//保存新添加的实验课程
	var name,turnal,laboratory,teacher,time,status,limit;
	var obj,index; 
	
	obj=document.getElementById("_NO_");
	index=obj.selectedIndex;
	
	name = document.getElementById("_NAME_").value.replace(/^\s*|\s*$/g,""); 
	if(name.indexOf('!')>0 || name.indexOf('@')>0 || name.indexOf('#')>0 || name.indexOf('$')>0 || name.indexOf('%')>0
			|| name.indexOf('^')>0 || name.indexOf('&')>0 || name.indexOf('*')>0 || name.indexOf('-')>0 || name.indexOf('_')>0
			|| name.indexOf('+')>0 || name.indexOf('=')>0 || name.indexOf('~')>0){
		alert('实验名称中不允许出现特殊字符！');
		return;
	}
	name =  encodeURI(encodeURI(name));
	
	turnal = document.getElementById("_TURNAL_").innerHTML.replace(/^\s*|\s*$/g,"");
	
	obj=document.getElementById("_LABORATORY_");
	index=obj.selectedIndex;
	laboratory = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	laboratory =  encodeURI(encodeURI(laboratory));
	
	obj=document.getElementById("_TEACHER_");
	index=obj.selectedIndex;
	teacher = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	teacher =  encodeURI(encodeURI(teacher));
	
	obj=document.getElementById("_TIME_");
	index=obj.selectedIndex;
	time = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	time =  encodeURI(encodeURI(time));
	
	obj=document.getElementById("_STATUS_");
	index=obj.selectedIndex;
	status = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	if(status=='开放')
		status='1';
	else
		status='0';
	
	obj=document.getElementById("_LIMIT_");
	index=obj.selectedIndex;
	limit = obj.options[index].text.replace(/^\s*|\s*$/g,""); 

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
				window.location.reload(true);
			else
				alert('数据库存储失败，请刷新后重试');
	    }
	};
	xmlhttp.open("GET","../server/admin/experiment/insert_experiment.jsp?name="+name+"&turnal="+turnal+"&laboratory="+laboratory+"&teacher="+teacher+"&time="+time+"&status="+status+"&limit="+limit+"&p="+Math.random(),true);
	xmlhttp.send();
}

//====================================================================
function remove_experiment(){//删除实验
	var id;
	var i=0;
	for(; i<200 ; i++){
		id='checkbox'+i;
		if(document.getElementById(id)!=null){
			if(document.getElementById(id).checked==true)
				break;
		}
	}
	if(i==200){
		alert('请先选中要删除的实验');
		return;
	}
	var no;
	no=document.getElementById("spanNo"+i).innerHTML.replace(/^\s*|\s*$/g,"");	
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
				window.location.reload(true);
			else
				alert('数据库存储失败，请刷新后重试');
	    }
	};
	xmlhttp.open("GET","../server/admin/experiment/delete_experiment.jsp?no="+no+"&p="+Math.random(),true);
	xmlhttp.send();
}
//===================================================================
function edit_experiment(){
	var id;
	var i=0;
	for(; i<200 ; i++){
		id='checkbox'+i;
		if(document.getElementById(id)!=null){
			if(document.getElementById(id).checked==true)
				break;
		}
	}
	if(i==200){
		alert('请先选中要修改的实验');
		return;
	}
	id='spanNo'+i;
	document.getElementById('hidden_id').innerHTML=document.getElementById(id).innerHTML;
	var name = document.getElementById('spanName'+i).innerHTML;
	var lab = document.getElementById('spanLaboratory'+i).innerHTML;
	var teacher = document.getElementById('spanTeacher'+i).innerHTML;
	var time = document.getElementById('spanTime'+i).innerHTML;
	var limit = document.getElementById('spanLimit'+i).innerHTML;

	
	//
	$('#add').linkbutton('disable');
	$('#sub').linkbutton('disable');
	$('#edit').linkbutton('disable');
	
	var table,row,col0,col1,col2,col3,col4,col5,col6,col7,col8;
	table=document.getElementById('table');
	var rowB = document.getElementById('row'+i);
	rowB.style.background='darkgray';
	
	row = document.createElement('tr');
	row.align = 'center';
	row.style.background='darkgray';
	table.appendChild(row);
	
	col0 = document.createElement('td');
	col1 = document.createElement('td');
	col2 = document.createElement('td');
	col3 = document.createElement('td');
	col4 = document.createElement('td');
	col5 = document.createElement('td');
	col6 = document.createElement('td');
	col7 = document.createElement('td');
	col8 = document.createElement('td');
	
	row.appendChild(col0);
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
	row.appendChild(col4);
	row.appendChild(col5);
	row.appendChild(col6);
	row.appendChild(col7);
	row.appendChild(col8);
	
	var obj ; 
	obj = document.getElementById('_TEACHER_');
	for(var i=0 ; i<200 ; i++){
		if(teacher == obj.options[i].text.replace(/^\s*|\s*$/g,"")){
			break;
		}
	}
	obj.options[i].selected = true;
	
	obj = document.getElementById('_LABORATORY_');
	for(var i=0 ; i<200 ; i++){
		if(lab == obj.options[i].text.replace(/^\s*|\s*$/g,"")){
			break;
		}
	}
	obj.options[i].selected = true;
	
	obj = document.getElementById('_TIME_');
	for(var i=0 ; i<200 ; i++){
		if(time == obj.options[i].text.replace(/^\s*|\s*$/g,"")){
			break;
		}
	}
	obj.options[i].selected = true;
	
	obj = document.getElementById('_LIMIT_');
	for(var i=0 ; i<200 ; i++){
		if(limit == obj.options[i].text.replace(/^\s*|\s*$/g,"")){
			break;
		}
	}
	obj.options[i].selected = true;
	
	document.getElementById("upEdit").style.display='';
	document.getElementById("_NAME_").style.display='';
	document.getElementById("_NAME_").value=name;
	document.getElementById("_TURNAL_").style.display='';
	document.getElementById("_LABORATORY_").style.display='';
	document.getElementById("_TEACHER_").style.display='';
	document.getElementById("_TIME_").style.display='';
	document.getElementById("_STATUS_").style.display='';
	document.getElementById("_LIMIT_").style.display='';
	
	col0.appendChild(document.getElementById("upEdit"));
	col2.appendChild(document.getElementById("_NAME_"));
	col3.appendChild(document.getElementById("_TURNAL_"));
	col4.appendChild(document.getElementById("_LABORATORY_"));
	col5.appendChild(document.getElementById("_TEACHER_"));
	col6.appendChild(document.getElementById("_TIME_"));
	col7.appendChild(document.getElementById("_STATUS_"));
	col8.appendChild(document.getElementById("_LIMIT_"));
}

//====================================================================
function upEdit_experiment(){
	var id , name,turnal,laboratory,teacher,time,status,limit;
	var obj,index; 
	id = document.getElementById('hidden_id').innerHTML.replace(/^\s*|\s*$/g,""); 
	
	obj=document.getElementById("_NO_");
	index=obj.selectedIndex;
	
	name = document.getElementById("_NAME_").value.replace(/^\s*|\s*$/g,""); 
	name =  encodeURI(encodeURI(name));
	
	turnal = document.getElementById("_TURNAL_").innerHTML.replace(/^\s*|\s*$/g,"");
	
	obj=document.getElementById("_LABORATORY_");
	index=obj.selectedIndex;
	laboratory = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	laboratory =  encodeURI(encodeURI(laboratory));
	
	obj=document.getElementById("_TEACHER_");
	index=obj.selectedIndex;
	teacher = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	teacher =  encodeURI(encodeURI(teacher));
	
	obj=document.getElementById("_TIME_");
	index=obj.selectedIndex;
	time = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	time =  encodeURI(encodeURI(time));
	
	obj=document.getElementById("_STATUS_");
	index=obj.selectedIndex;
	status = obj.options[index].text.replace(/^\s*|\s*$/g,""); 
	if(status=='开放')
		status='1';
	else
		status='0';
	
	obj=document.getElementById("_LIMIT_");
	index=obj.selectedIndex;
	limit = obj.options[index].text.replace(/^\s*|\s*$/g,""); 

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
				window.location.reload(true);
			else
				alert('数据库存储失败，请刷新后重试');
	    }
	};
	xmlhttp.open("GET","../server/admin/experiment/edit_experiment.jsp?name="+name+"&id="+id+"&turnal="+turnal+"&laboratory="+laboratory+"&teacher="+teacher+"&time="+time+"&status="+status+"&limit="+limit+"&p="+Math.random(),true);
	xmlhttp.send();
}
//==================================
function checkClicked(str){//点击课程名称弹出备注修改框，触发
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
				document.getElementById('ta').innerHTML='您还没有对该课程添加备注,说点什么吧......';
			}
			else{
				$('#dialog').dialog('setTitle',document.getElementById("spanName"+str).innerHTML);
				$('#dialog').window('open');
				document.getElementById('ta').innerHTML=flag;
			}
				
	    }
	};
	xmlhttp.open("GET","../server/admin/expMark/fetch_expMark.jsp?no="+no+"&p="+Math.random(),true);
	xmlhttp.send();
}

//====================================================================
function save_mark(){//点击保存备注按钮，触发
	var no=document.getElementById('hidden_id').innerHTML.replace(/^\s*|\s*$/g,"");	
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
				alert('备注成功保存！');
			}
				
	    }
	};
	xmlhttp.open("GET","../server/admin/expMark/refresh_expMark.jsp?no="+no+"&mark="+mark+"&p="+Math.random(),true);
	xmlhttp.send();
}








