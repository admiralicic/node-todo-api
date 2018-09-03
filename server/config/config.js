let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://dbuser:dbuser1@ds123258.mlab.com:23258/admiralicic-todoapp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://dbuser:dbuser1@ds243812.mlab.com:43812/admiralicic-todoapp-test';
}
