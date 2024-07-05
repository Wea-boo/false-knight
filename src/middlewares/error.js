require('dotenv').config();

module.exports = (err, req, res, next) => {
  console.error('Error Stack:', err.stack);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // const details = err.details ? err.details[0].msg : null;
  res.status(status).json({
    status: status,
    message: message,
    // I want a list of the msg of each element in err.details
    details: err.details ? err.details.map((detail) => detail.msg) : null,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
