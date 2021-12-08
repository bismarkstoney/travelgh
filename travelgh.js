/* eslint-disable no-undef */
const express = require('express');
const { engine } = require('express-handlebars');
const handlerRoutes = require('./routes/handlerRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', handlerRoutes.home);
app.get('/about', handlerRoutes.about);
app.use(handlerRoutes.notFound);
app.use(handlerRoutes.serverError);

if (require.main === module) {
	app.listen(PORT, () =>
		console.log(`The server is runing on http://localhost:${PORT}`)
	);
} else {
	module.exports = app;
}
