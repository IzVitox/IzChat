const express = require('express');
const authRouter = require('./src/routes/authentication-router.js');

app = express();

app.use('/u/', authRouter);

app.use(express.static('/src/css/'))

app.set('view engine', 'ejs');
app.set('views', './src/views/')

app.get('/', (req, res, nex) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

