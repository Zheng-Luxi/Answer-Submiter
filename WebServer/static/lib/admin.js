var data = null;
var ele = "";
var req = new XMLHttpRequest();

function showTable(){
	req.open("GET","./data",true);
	req.setRequestHeader("Content-Type","applications/x-www-form-urlencoded");
	req.send();
	req.onreadystatechange = function( e ){
		if( e.target.readyState === 4 && e.target.status === 200 ){
			data = JSON.parse( req.responseText ); // 获取数据
			// 制作表格
			for( let i = 0 ; i < Object.keys( data.texts[0] ).length ; i ++ ){
				if( i <= 0 ){
					ele += "<tr><td><b>姓名</b></td>";
				}else {
					ele += `<td><b>第${i}题</b></td>`;
				}
			}
			ele += "</tr>";
			for( let i = 0 ; i < data.texts.length ; i ++ ){
				ele += "<tr>";
				for( let name in data.texts[i] ){
					ele += `<td>${data.texts[i][name]}</td>`
				}
				ele += "</tr>";
			}
			document.querySelector("table").innerHTML = ele;
		}
	}
}

function clear(){
	localStorage.clear();
}

if( localStorage.getItem("isUser") !== "true" ){
	const username = prompt("用户名:");
	const password = prompt("密码:");
	req.open( "POST", "/login", true );
	req.setRequestHeader( "Content-Type", "applications/x-www-form-urlencoded" );
	req.send(`username=${username}&password=${password}`);
	req.onreadystatechange = function( e ){
		if( e.target.readyState === 4 && e.target.status === 200 ){
			if( req.responseText === "error" ){
				document.querySelector("table").remove();
			}else {
				localStorage.setItem("isUser","true");
			}
		}
	}

	setTimeout( function(){
		showTable();
	}, 1000 );
}else {
	showTable();
}