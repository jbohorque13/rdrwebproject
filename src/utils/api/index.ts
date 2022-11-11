require('dotenv').config();

export const testEnv = () => console.log('process.env', process.env);