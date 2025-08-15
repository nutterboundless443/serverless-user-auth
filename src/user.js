const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');

AWS.config.update({ region: 'YOUR_REGION' });
const docClient = new AWS.DynamoDB.DocumentClient();

const USERS_TABLE = 'Users';
const JWT_SECRET = 'YOUR_SECRET_KEY';

const registerUser = async (email, password) => {
    const params = {
        TableName: USERS_TABLE,
        Item: {
            email: email,
            password: password // In a real application, ensure you hash this.
        }
    };
    await docClient.put(params).promise();
    return { status: 'User registered successfully' };
};

const loginUser = async (email, password) => {
    const params = {
        TableName: USERS_TABLE,
        Key: { email: email }
    };
    const data = await docClient.get(params).promise();
    if (!data.Item || data.Item.password !== password) {
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ email: email }, JWT_SECRET, { expiresIn: '1h' });
    return { token }; 
};

module.exports = { registerUser, loginUser };