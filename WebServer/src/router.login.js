const express = require("express");
const fs = require("fs");
const querystring = require("querystring");

const router = express.Router();

router.post( "/login", ( req, res ) => {
	var arr = [];
	var data = null;
	req.on( "data", buffer => {
		arr.push( buffer );
	} );
	req.on( "end", () => {
		data = querystring.parse( Buffer.concat( arr ).toString() );
		console.log( data );
		fs.readFile( "./datas/users.json", ( err, dat ) => {
			if( err ){
				console.log( err );
				return console.log("##########|数据读取失败|##########");
			}
			var users = JSON.parse( dat.toString() );
			var isUser = false;
			for( let item of users.users ){
				if( item.username === data.username && item.password === data.password ){
					isUser = true;
					break;
				}
			}
			console.log( isUser );
			if( !isUser ){
				return res.send("error");
			}else {
				return res.send("")
			}
		} );
	} );
} );

module.exports = router;