const { body, validationResult } = require('express-validator');
const { ROLES, RACES } = require('../constants');


exports.validateCharacter = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('class').isIn(ROLES).withMessage(`Class must be one of: ${ROLES.join(', ')}`),
  body('race').isIn(RACES).withMessage(`Race must be one of: ${RACES.join(', ')}`),
  body('level').isInt({ min: 1, max: 100 }).optional().withMessage('Level must be an integer between 1 and 100'),
  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      const error = new Error('Validation Error');
      error.status = 400;
      error.details = errors.array();
      return next(error);
    }
    next();
  }
];

exports.validateCharacterUpdate = [
  body('level').optional().isInt({ min: 1, max: 100 }).withMessage('Level must be an integer between 1 and 100'),
  body('name').optional().not().isEmpty().withMessage('Name is required'),
  body('class').optional().isIn(ROLES).withMessage(`Class must be one of: ${ROLES.join(', ')}`),
  body('race').optional().isIn(RACES).withMessage(`Race must be one of: ${RACES.join(', ')}`),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error('Validation Error');
      error.status = 400;
      error.details = errors.array();
      return next(error);
    }
    next();
  }
];
