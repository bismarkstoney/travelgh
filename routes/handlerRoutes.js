/* eslint-disable no-unused-vars */
const fortune = require('../lib/fortune');
exports.home = (req, res) => {
	res.render('pages/home', { title: 'Home' });
};

exports.about = (req, res) => {
	res.render('pages/about', { fortune: fortune.getFortune() });
};

//Page Not found
exports.notFound = (req, res) => {
	res.render('pages/404');
};

// server error
exports.serverError = (err, req, res, next) => {
	res.render('pages/500');
};
