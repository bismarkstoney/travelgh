/* eslint-disable no-undef */
const handlers = require('../handlerRoutes');

test('Home page render', () => {
	const req = {};
	const res = { render: jest.fn() };
	handlers.home(req, res);
	expect(res.render.mock.calls[0][0]).toBe('pages/home');
});

test('about page with fortunes', () => {
	const req = {};
	const res = { render: jest.fn() };
	handlers.about(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('pages/about');
	expect(res.render.mock.calls[0][1]).toEqual(
		expect.objectContaining({
			fortune: expect.stringMatching(/\W/),
		})
	);
});

test('404 handler', () => {
	const req = {};
	const res = { render: jest.fn() };
	handlers.notFound(req, res);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('pages/404');
});

test('server error handler', () => {
	const req = {};
	const res = { render: jest.fn() };
	const err = new Error('Sever not found');
	const next = jest.fn();
	handlers.serverError(err, req, res, next);
	expect(res.render.mock.calls.length).toBe(1);
	expect(res.render.mock.calls[0][0]).toBe('pages/500');
});
