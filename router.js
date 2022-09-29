const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
};

const main = (ctx) => {
    // 修改body之后status就变为了200  通过set劫持  只要修改了body就会自动把status改为200
    ctx.response.body = 'hello world'

}
const getfile = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(path.resolve(path.join(__dirname, './demo.html')))
}

const redirect = ctx => {
    ctx.response.redirect('/');
    ctx.response.body = '<a href="/">Index Page</a>';
};

module.exports = {
    about,
    main,
    getfile,
    redirect
}