const {StatusCodes} = require('http-status-codes');

class serviceError extends Error{
   constructor(
    message = 'Something Went Wrong',
    explanation = 'Service layer error',
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
   ) {
    super();
    this.name = 'serviceError';
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
   }
}

module.exports = serviceError;