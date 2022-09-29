var koa = require('koa')
    // 异步中间件

const log3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('log3');
            res()
        }, 2000);
    })
}
const one = async(ctx, next) => {
    console.log('>one');
    await next()
    console.log('<one');
};

const two = async(ctx, next) => {
    console.log('>two');
    await next()
    console.log('<two');

}
const three = async(ctx, next) => {
    console.log('>three');
    next()
    await log3()
    console.log('<three');

}
var app = new koa()

// app.use(route.get('/', router.main));
app.use(one);
app.use(two);
app.use(three);


app.listen(3000)
console.log('====================================');
console.log('server running 3000');
console.log('====================================');