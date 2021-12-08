const express = require('express');
const { engine } = require('express-handlebars');
const fortune = require('./lib/fortune');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
	res.render('pages/about', { fortune: fortune.getFortune() });
});

//Page Not found
app.use((req, res) => {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// server error
app.use((err, req, res, nex) => {
	console.error(err.message);
	res.type('text/plain');
	res.status(500);
	res.send('500 - server error');
});

app.listen(PORT, () =>
	console.log(`The server is runing on http://localhost:${PORT}`)
);
