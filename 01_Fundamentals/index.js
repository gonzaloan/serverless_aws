const moment = require('moment');
const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola",
    "pt": "Olá",
    "ur": "Assalamo aleikum",
    "it": "Ciao",
    "de": "Hallo"
}

//lambda handler

exports.handler = async (event) => {
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters;

    let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;

    const response = {
        message: message,
        info: info,
        timestamp: moment().unix()
    }
    // API Gateway response format
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}