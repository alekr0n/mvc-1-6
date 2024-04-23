const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const bookRoutes = require('./routes/book');
const userRoutes = require('../zad2/routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

const errorRoutes = require('./routes/error');

app.use("/user", userRoutes);
app.use("/", bookRoutes);

app.use("*", errorRoutes);

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});