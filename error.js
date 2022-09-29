var koa = require('koa')
const route = require('koa-route');
var fs = require('fs')
var path = require('path')
const serve = require('koa-static')
const router = require('./router')

var app = new koa()

const errHandle = async(ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.app.emit('error', err, ctx); //触发error事件
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = {
            message: err.message
        }
    }
}
const main = ctx => {
        // console.log(aaa.bbb);
        // ctx.throw(404)
        // ctx.throw(200)
        // ctx.response.status = 404
        // ctx.response.body = 'hello world'
        ctx.throw(500)
    }
    // app.use(errHandle)
app.use(route.get('/', main));
app.on('error', err => { //如果错误提前备catch处理了  不会触发error事件
    console.log('err', err);
})


app.listen(3000)
console.log('====================================');
console.log('server running 3000');
console.log('====================================');