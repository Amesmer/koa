var koa = require('koa')
const route = require('koa-route');
var fs = require('fs')
var path = require('path')
const serve = require('koa-static')
const router = require('./router')
require('./router')

// 静态文件托管
const mystatic = serve(path.join(__dirname, './dist'))

var app = new koa()

app.use(route.get('/', router.main));
app.use(route.get('/about', router.about));
app.use(route.get('/getfile', router.getfile))
app.use(route.get('/redirect', router.redirect));
app.use(mystatic)
app.listen(33333)
console.log('====================================');
console.log('server running 33333');
console.log('====================================');