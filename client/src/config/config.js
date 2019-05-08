// let server = 'https://blooming-inlet-52353.herokuapp.com/';

const env = process.env.NODE_ENV;

if (env === 'development') {
    server = 'http://localhost:3001';
}

module.exports = server;