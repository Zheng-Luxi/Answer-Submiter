const express = require("express");
const querystring = require("querystring");
const fs = require("fs");

const app = express();

const getRouter = require("./router.get.js");
const postRouter = require("./router.post.js");
const loginRouter = require("./router.login.js");

app.use( express.static( "static", {} ) );
app.use( express.static( ".", {} ) );

app.use( getRouter );
app.use( postRouter );
app.use( loginRouter );

app.listen( 80, () => {
	console.log("服务启动成功!");
} );