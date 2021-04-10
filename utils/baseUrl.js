const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.apifirstsolutions.com' 
: 'http://localhost:3000';

export default baseUrl;