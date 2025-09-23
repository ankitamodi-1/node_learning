const { body } = require('express-validator');

// User validation rules
const validateSignup = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  
  body('user_type')
    .optional()
    .isIn(['admin', 'account_user'])
    .withMessage('User type must be either admin or account_user')
];

const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

// Employee validation rules
const validateEmployee = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 255 })
    .withMessage('Name cannot exceed 255 characters'),
  
  body('salary')
    .isNumeric()
    .withMessage('Salary must be a number')
    .isFloat({ min: 0 })
    .withMessage('Salary cannot be negative'),
  
  body('is_manager')
    .optional()
    .isBoolean()
    .withMessage('is_manager must be a boolean value'),
  
  body('dob')
    .isISO8601()
    .withMessage('Date of birth must be a valid date')
    .custom((value) => {
      const dob = new Date(value);
      const today = new Date();
      if (dob >= today) {
        throw new Error('Date of birth must be in the past');
      }
      return true;
    }),
  
  body('status')
    .optional()
    .isIn(['active', 'inactive'])
    .withMessage('Status must be either active or inactive')
];

const validateEmployeeUpdate = [
  body('name')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('Name cannot exceed 255 characters'),
  
  body('salary')
    .optional()
    .isNumeric()
    .withMessage('Salary must be a number')
    .isFloat({ min: 0 })
    .withMessage('Salary cannot be negative'),
  
  body('is_manager')
    .optional()
    .isBoolean()
    .withMessage('is_manager must be a boolean value'),
  
  body('dob')
    .optional()
    .isISO8601()
    .withMessage('Date of birth must be a valid date')
    .custom((value) => {
      if (value) {
        const dob = new Date(value);
        const today = new Date();
        if (dob >= today) {
          throw new Error('Date of birth must be in the past');
        }
      }
      return true;
    }),
  
  body('status')
    .optional()
    .isIn(['active', 'inactive'])
    .withMessage('Status must be either active or inactive')
];

module.exports = {
  validateSignup,
  validateLogin,
  validateEmployee,
  validateEmployeeUpdate
};
