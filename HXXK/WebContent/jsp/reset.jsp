<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@include file="common/common.jsp" %>
<html>
<head>
<title>用户查询</title>
<script type="text/javascript" src="<%=basePath%>js/userList.js"></script>
<script type="text/javascript">
	function do_do(){
		document.getElementById('reset').style.display='none';
		document.getElementById('hide').style.display='';
	}
	
	function reset(){
		if(document.getElementById("yes").checked == true){
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
					if(flag='success'){
						$.messager.alert('系统消息','初始化成功！','info');
					}
					else
						alert(flag);
			    }
			};
			xmlhttp.open("GET",server_context+"/server/admin/reset.jsp?p="+Math.random(),true);
			xmlhttp.send();
		}
			
		else{
			alert("同意上述协议才能继续操作！");
		}
	}

</script>

</head>


<body style="background:lightgreen">
	<center>
	<input id="reset" value="一键初始化" type="button" style="font-size:25px;font-family:'黑体';background-image:url(../image/round3.png); width:256px;height:256px;background-color:lightgreen;border-radius:125px;cursor:pointer;" onClick="do_do()">
	<div id="hide" style="display:none;">
	<textarea rows="14" cols="100" style="background-color:lightgreen;" disabled="disabled">
	1.请仔细阅读本协议，此协议非常重要！
	2.您的此次操作只能用于学期开始时的初始化操作，或者系统出现严重错误的时候。
	3.若您的操作理由不在上述，请联系本站设计人员。
	4.教师信息不会被删除。
	5.管理员信息不会被删除。
	6.公告内容不会被删除。
	7.全局设置不会被删除。
	8.实验内容不会被删除,但实验备注将被删除
	9.实验室信息不会被删除。
	10.除上述不被删除内容之外的所有信息将会被删除。
	11此次操作将无法进行恢复。
	12.若同意此协议，由本次操作造成的误操作损失将由同意人自行承担。
	13.若您同意本协议请在下面勾选”我同意此协议“,这将意味着，您愿意为此次操作负责。
	14.若您有任何疑问，请马上联系本站设计人员，请切勿继续操作。
	
	</textarea><br>
	<input type="checkbox" id="yes">我已阅读并同意上述协议内容
	<input type="checkbox" onClick="window.location.reload(true)">我已阅读但不同意上述协议内容
	<br>
	<button style="font-size:15px;font-family:'黑体';background-image:url(../image/round2.png);background-size:100%; width:128px;height:128px;background-color:lightgreen;border-radius:64px;cursor:pointer;" onClick="reset()">确认初始化</button>
	</div>
	</center>
	
</body>
</html>