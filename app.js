const express = require('express');
const session = require('express-session');
const authRouter = require('./src/routes/authentication-router.js');
const userRouter = require('./src/routes/user-route.js');
const sessionConf = require('./src/configs/session-config')

app = express();

app.use('/u/', userRouter);
app.use('/a/', authRouter);

app.use(express.static('./src/css/'))

app.set('view engine', 'ejs');
app.set('views', './src/views/')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res, nex) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

