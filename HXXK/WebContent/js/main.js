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
		$('#pswReset').fadeToggle();
	}
	else if(str=='3'){
		document.getElementById('pswReset').disabled='disabled';
		$('#excelInput').fadeToggle();
		$('#handInput').fadeToggle();
	}
}
//====================================================================

var num = 10;
function clock(){
	
	if(num==0){
		document.getElementById('hiddenClock').innerHTML='文件上传成功,请点击导入按钮导入学生信息';
		document.getElementById('import').disabled='';
		num = 10;
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
		clock();
		return true;
	}
}