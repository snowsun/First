/********************************************This block is for studentInfo.jsp************************************************/
function disStu(str){
	if(str=='1'){
		document.getElementById('excelInput').disabled='disabled';
		$('#handInput').fadeToggle();
		$('#pswReset').fadeToggle(function(){
			document.getElementById('ddd').style.display='';
		});	
	}
	else if(str=='2'){
		document.getElementById('handInput').disabled='disabled';
		$('#excelInput').fadeToggle();
		$('#pswReset').fadeToggle(function(){
			document.getElementById('handImp').style.display='';
		});
	}
	else if(str=='3'){
		document.getElementById('pswReset').disabled='disabled';
		$('#excelInput').fadeToggle();
		$('#handInput').fadeToggle();
	}
}
//====================================================================

var num = 5;
function clock(){
	
	if(num==0){
		document.getElementById('hiddenClock').innerHTML='文件上传成功,请点击导入按钮导入学生信息';
		document.getElementById('upload').disabled='';
		document.getElementById('import').disabled='';
		num = 5;
		return;
	}
	else{
		num = num-1;
		document.getElementById('hiddenClock').innerHTML='请等待'+num+'秒';
	}
	setTimeout("clock()",1000);
}


//====================================================================
function checkExt(){
	document.getElementById('import').disabled='disabled';
	var ext = document.getElementById("file").value.split('.')[1];
	if(ext!='xls'){
		alert('请上传EXCEL格式的文件！');
		return false;
	}
	else{
		document.getElementById('upload').disabled='disabled';
		clock();
		return
		true;
	}
}

//====================================================================
function impToDB(){
	document.getElementById('import').disabled='disabled';
	document.getElementById('upload').disabled='disabled';
	document.getElementById('hiddenRemark').innerHTML='正在处理,请稍后';
	
	
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
			if(flag=='error1')
				document.getElementById('hiddenRemark').innerHTML='导入错误，请重新上传文件,点击左侧菜单栏按钮刷新';
			else if(flag=='error2')
				document.getElementById('hiddenRemark').innerHTML='未发现上传文件，请重新上传多等待几秒。点击左侧菜单栏按钮刷新';
			else if(flag=='error3')
				document.getElementById('hiddenRemark').innerHTML='文件格式错误，请仔细核查！！！点击左侧菜单栏按钮刷新';
			else if(flag=='error4')
				document.getElementById('hiddenRemark').innerHTML='数据库存储错误，点击左侧菜单栏按钮刷新';
			else
				document.getElementById('hiddenRemark').innerHTML='导入成功，共导入'+flag+'个信息，点击左侧菜单栏按钮刷新';
	    }
	};
	xmlhttp.open("GET","../server/admin/studentInfo/uploadStudent.jsp?p="+Math.random(),true);
	xmlhttp.send();
}

//====================================================================
function impToDB2(){
	var id = document.getElementById("id").value.replace(/^\s*|\s*$/g,"");
	var name = document.getElementById("name").value.replace(/^\s*|\s*$/g,"");
	var len = id.length,len1=name.length;
	if(len==0||len1==0)
		alert('姓名学号不可为空');
	for(var r = 0 ; r < len ; r++){
		if(id[r]>'9'||id[r]<'0')
			alert('请检查学号');
			break;
	}
}









