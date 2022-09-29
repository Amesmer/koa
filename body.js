var koa = require('koa')
const router = require('koa-router')();
var koaBody = require('koa-body')



var app = new koa()

router.post('/', koaBody(), ctx => {
    console.log(ctx.request.body);
    ctx.body = JSON.stringify(ctx.request.body)
    ctx.response.body = 'hello world'
})
router.get('/', koaBody(), ctx => {

    ctx.response.body = 'hello world'
})
const main = ctx => {
        //原生koa解析
        // var dataArr = []
        // ctx.req.addListener('data', (data) => {
        //     dataArr.push(data)
        // })
        // ctx.req.addListener('end', () => {
        //     let data = Buffer.concat(dataArr).toString()
        // })

        // 使用koabody处理
        var body = ctx.request.body
        console.log(body);
        ctx.response.body = 'hello world'
    }
    // app.use(errHandle)

app.use(router.routes());



app.listen(3000)
console.log('====================================');
console.log('server running 3000');
console.log('====================================');