class Questions {
	constructor( questionsNum, optionsNum ){
		for( let i = 1 ; i <= questionsNum ; i ++ ){
			this.createQuestion( i, optionsNum );
		}
	}
	createQuestion( questionsNum, optionsNum ){
		const dl = document.createElement("dl"),
			dt = document.createElement("dt"),
			dd = document.createElement("dd");
		dt.innerText = `第${questionsNum}题`;
		var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice( 0, optionsNum );
		for( let i = 0 ; i < options.length ; i ++ ){
			const label = document.createElement("label");
			label.setAttribute("for", `${options[i].toLowerCase()}${questionsNum}`);
			label.innerText = `${options[i]}.`;
			const input = `<input id="${options[i].toLowerCase()}${questionsNum}" type="radio" name="第${questionsNum}题" value="${options[i]}">`
			label.innerHTML += input
			dd.appendChild( label );
		}
		dl.appendChild( dt );
		dl.appendChild( dd );
		document.querySelector("form").appendChild( dl );
	}
}

class Submit {
	constructor(){
		const submit = document.createElement("input");
		submit.setAttribute("type","submit");
		submit.setAttribute("id","submit");
		document.querySelector("form").appendChild( submit );
	}
}

var que = new Questions( 5, 5 );
var sub = new Submit();