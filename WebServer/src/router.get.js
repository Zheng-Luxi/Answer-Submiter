const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get( "/data", ( req, res ) => {
	fs.readFile("./datas/text.json", ( err, data ) => {
		var text = JSON.parse( data.toString() );
		res.json( text );
		res.end();
	} );
} );

module.exports = router;