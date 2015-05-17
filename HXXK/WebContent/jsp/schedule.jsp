<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript">
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
			/*构造显示*/
			if(flag=='failed'){
				alert('数据库操作失败，请稍后再试，若此问题持续存在请联系数据库管理员');
			}
			else{
				var AF = flag.split('##');
				var L = AF.length - 1 ;
				for(var w = 0  ; w<L ; w++){
					var row,col,span;
					var table=document.getElementById('table'+AF[w].split('%%')[0]);
					document.getElementById('span'+AF[w].split('%%')[0]).style.display='';
					var group = AF[w].split('%%')[1].split('*');
					var NOC = group[1].split('+-+').length;
					var turns = parseInt(group[0]);
					for(var i=1 ; i<4 ; i++){
						row = document.createElement('tr');
						row.align = 'center';
						table.appendChild(row);
						for(var j=0 ; j<NOC ; j++){
							col = document.createElement('td');
							col.style.width = '100px';
							row.appendChild(col);
							span = document.createElement('span');
							span.innerHTML = group[i].split('+-+')[j];
							col.appendChild(span);
						}
					}
					
					for(var i=0 ; i<turns ; i++){
						row = document.createElement('tr');
						row.align = 'center';
						table.appendChild(row);
						for(var j=0 ; j<NOC ; j++){
							col = document.createElement('td');
							row.appendChild(col);
							span = document.createElement('span');
							var content = group[i+4].split('+-+')[j];
							var gc = content.split('#');
							if(gc.length<=1){
								span.innerHTML = content ; 
							}
							else{
								var ct = '';
								for(var r=0 ; r<gc.length-1 ; r++){
									ct = ct+gc[r]+'<br/>';
								}
								span.innerHTML = ct ;
							}
							col.appendChild(span);
						}
					}
				}
// 				var row,col,span;
// 				var table=document.getElementById('table1');
// 				var group = flag.split('*');
// 				var NOC = group[1].split('+-+').length;
// 				var turns = parseInt(group[0]);
// 				for(var i=1 ; i<4 ; i++){
// 					row = document.createElement('tr');
// 					row.align = 'center';
// 					table.appendChild(row);
// 					for(var j=0 ; j<NOC ; j++){
// 						col = document.createElement('td');
// 						col.style.width = '100px';
// 						row.appendChild(col);
// 						span = document.createElement('span');
// 						span.innerHTML = group[i].split('+-+')[j];
// 						col.appendChild(span);
// 					}
// 				}
				
// 				for(var i=0 ; i<turns ; i++){
// 					row = document.createElement('tr');
// 					row.align = 'center';
// 					table.appendChild(row);
// 					for(var j=0 ; j<NOC ; j++){
// 						col = document.createElement('td');
// 						row.appendChild(col);
// 						span = document.createElement('span');
// 						var content = group[i+4].split('+-+')[j];
// 						var gc = content.split('#');
// 						if(gc.length<=1){
// 							span.innerHTML = content ; 
// 						}
// 						else{
// 							var ct = '';
// 							for(var r=0 ; r<gc.length-1 ; r++){
// 								ct = ct+gc[r]+'<br/>';
// 							}
// 							span.innerHTML = ct ;
// 						}
// 						col.appendChild(span);
// 					}
// 				}
			}
	    }
	};
	xmlhttp.open("GET","../server/admin/fetchSchedule.jsp?p="+Math.random(),true);
	xmlhttp.send();
}
</script>


</head>
<body style="background-color:lightgreen;font-family:'微软雅黑';" onLoad="onloading()">
	<center>		
	
			<span id="span1" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周一课表</span>
			<table border="1" id="table1" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>
			<span id="span2" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周二课表</span>
			<table border="1" id="table2" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>
			<span id="span3" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周三课表</span>
			<table border="1" id="table3" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>
			<span id="span4" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周四课表</span>
			<table border="1" id="table4" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>
			<span id="span5" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周五课表</span>
			<table border="1" id="table5" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>
			<span id="span6" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周六课表</span>
			<table border="1" id="table6" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>
			<span id="span7" style="color:blue;font-size:30px;font-family:'华文行楷';display:none;">周日课表</span>
			<table border="1" id="table7" style="color:black;border-style:Solid;text-decoration:none;width:100%;border-collapse:collapse;">
				
			</table>	
	</center>
</body>
</html>