const { registerUser, loginUser } = require('./user');

exports.handler = async (event) => {
    const path = event.path;
    const body = JSON.parse(event.body);
    try {
        if (path === '/register') {
            const response = await registerUser(body.email, body.password);
            return { statusCode: 200, body: JSON.stringify(response) };
        }
        if (path === '/login') {
            const response = await loginUser(body.email, body.password);
            return { statusCode: 200, body: JSON.stringify(response) };
        }
    } catch (error) {
        return { statusCode: 400, body: JSON.stringify({ message: error.message }) };
    }
};