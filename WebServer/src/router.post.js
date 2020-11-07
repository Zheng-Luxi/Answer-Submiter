const express = require("express");
const fs = require("fs");
const querystring = require("querystring");

const router = express.Router();

router.post( "/data", ( req, res ) => {
	console.log( req );
	var arr = [];
	var data = null;
	req.on( "data", buffer => {
		arr.push( buffer );
	} );
	req.on( "end", () => {
		data = querystring.parse( Buffer.concat( arr ).toString() );
		console.log( data );
	} );
	fs.readFile("./datas/text.json", ( err, dat ) => {
		if( err ){
			console.log( err );
			return console.log("##########|数据读取失败|##########");
		}
		var text = JSON.parse( dat.toString() );
		text.texts.push( data );
		text.totals = text.texts.length;
		fs.writeFile( "./datas/text.json", JSON.stringify( text ), ( err ) => {
			if( err ){ 
				console.log( err );
				return console.log("##########|数据写入失败|##########")
			}else {
				return console.log("----------|数据写入成功|----------");
			}
		} );
	});
	res.send(`<title>:) 提交成功! (:</title><link rel="icon" type="image/x-icon" href="/images/index.png"><h1 align="center">: ) 提交成功! 请勿重复提交! ( :</h1><h1 align="center">: ) Submit successfully! Don't submit again! ( :</h1><hr><h4 align="center"><i>来自 Zheng-Luxi.</i></h4><h4 align="center"><i>Come from Zheng-Luxi.</i></h4>`);
	res.end();
} );

module.exports = router;