function onloading(){
	var url = window.location.search;
	var type = url.split('?')[1];
	var id,type;
	if(type=='stu'){
		document.getElementById('info').innerHTML='  同学，欢迎登录';
		type='stu';
		id=document.getElementById('userID').innerHTML.replace(/^\s*|\s*$/g,"");
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
				Dis_Stu(flag);
		    }
		};
		xmlhttp.open("GET","../server/pushWork/push_work.jsp?id="+id+"&type="+type+"&p="+Math.random(),true);
		xmlhttp.send();
	}
}


function Dis_Stu(str){
	var table,row,col1,col2,col3,col4,col5,col6,col7,col8,span;
	table=document.getElementById('stuTable');
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
		col8 = document.createElement('td');
		col8.style.background='red';
	
		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		row.appendChild(col7);
		row.appendChild(col8);
	
		
		//col-1
		span = document.createElement('span');
		span.id='spanNo'+i;
		span.innerHTML = info_col[0];
		col1.appendChild(span);
		//col-2
		span = document.createElement('span');
		span.id='spanName'+i;
		span.innerHTML = info_col[1];
		col2.appendChild(span);
		//col-3
		span = document.createElement('span');
		span.id='spanTea'+i;
		span.innerHTML = info_col[2];
		col3.appendChild(span);
		//col-4
		span = document.createElement('span');
		span.id='spanTime'+i;
		span.innerHTML = info_col[3];
		col4.appendChild(span);
		//col-5
		span = document.createElement('span');
		span.id='spanT'+i;
		span.innerHTML = info_col[4];
		col5.appendChild(span);
		//col-6
		span = document.createElement('span');
		span.id='spanDDL'+i;
		span.innerHTML = info_col[5];
		col6.appendChild(span);
		//col-7
		var a = document.createElement('a');
		a.href='javascript:void(0)';
		a.id='a'+i;
		a.innerHTML = "提交";	
		
		var f = document.createElement('input');
		f.type='file';
		col7.appendChild(f);
		col7.appendChild(a);
	}
	
}
