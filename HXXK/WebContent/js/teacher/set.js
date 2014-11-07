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
	
	var table,row,col1,col2,col3,col4,col5,col6,col7;
	table=document.getElementById('table');
	var num = str.split('_NUM_INFO_')[0];
	str = str.split('_NUM_INFO_')[1];
	
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
			span.id='spanNo'+i+'_'+j;
			span.innerHTML = Rinfo[0];
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
			span = document.createElement('span');
			span.id='spanTeacher'+i+'_'+j;
			span.innerHTML = Rinfo[2].split('-')[1];
			col4.appendChild(span);
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
			span.id='a'+i+'_'+j;
			span.href='javascript:void(0)';
			span.innerHTML = '下载';	
			col7.appendChild(span);
			
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
					if(flag=='success');{
						$.messager.alert('系统消息','DeadLine设置或修改操作已经成功...','info');
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