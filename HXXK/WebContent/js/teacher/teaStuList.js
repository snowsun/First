//include in teaStuList.jsp
//查找选了该老师课程的学生的名单
function searchData() {
	var teacherID = $('#teacherID').text();
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
				 var num = flag.split("@")[0];
				 for(var r=1 ; r<=num ; r++){
					 var row0 = document.getElementById("ttitle");
					 var tdd = document.createElement("td");
					 tdd.appendChild(document.createTextNode("第"+r+"期"));
					 row0.appendChild(tdd);
				 }
				 
				 flag = flag.split("@")[1];
				 var STU = flag.split("_COL_");
				 var col,row,span,btn,STULIST;
				 for(var i=0;i<STU.length;i++){
					if(STU[i]!=''){
						STULIST = STU[i].split("_ROW_");
						col = document.createElement('tr');
						col.align='center';
						if(i%2!=0)
							col.style.background='white';
						else
							col.style.background='lightblue';
						
						for(var j=0;j<4;j++){
							row = document.createElement('td');
							span = document.createElement('span');
							span.innerHTML = STULIST[j];
							row.appendChild(span);
							col.appendChild(row);
						}
						
						var limit = num*2+2;
						for(var j=4;j<=limit;j=j+2){
							span = document.createElement('span');
							span.id = i+"_"+j+"_span";
							span.style.display='none';
							span.innerHTML = STULIST[j+1];
							document.body.appendChild(span);
							row = document.createElement('td');
							btn = document.createElement('a');
							btn.href="javascript:void(0)";
							btn.innerHTML = '查看';
							btn.id = i+"_"+j;
							btn.onclick=function(){
								displayList(this);
							};
							row.appendChild(btn);
							col.appendChild(row);		
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
	$.ajax({
		type:'post',
		url:server_context+"/server/teacher/stuList/getLabStuList.jsp",
		data:{
			span_info:$(span_id).text()
		},
		cache:false,
		success:function(data){
			var flag =data.replace(/^\s*|\s*$/g,"");
			if(flag == 'failed'){
				alert("数据库操作失败");
				return;
			}else{
				$('#dd').window('open');
				var content = '';
				var list = flag.split('#');
				for(var i=0 ; i<list.length-1;i++){
					content = content+list[i]+'<br>';
				}
				document.getElementById('list').innerHTML=content;

			}
		},
		error:function(){
			alert("ajax error");
		}
	});
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
