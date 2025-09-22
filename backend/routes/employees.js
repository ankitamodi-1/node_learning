const express = require('express');
const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');
const { protect, adminOnly } = require('../middleware/auth');
const { validateEmployee, validateEmployeeUpdate } = require('../middleware/validation');

const router = express.Router();

// @route   GET /api/employees
// @desc    Get all employees
// @access  Private
router.get('/', protect, getEmployees);

// @route   GET /api/employees/:id
// @desc    Get single employee
// @access  Private
router.get('/:id', protect, getEmployee);

// @route   POST /api/employees
// @desc    Create new employee
// @access  Private (Admin only)
router.post('/', protect, validateEmployee, createEmployee);


// @route   PUT /api/employees/:id
// @desc    Update employee
// @access  Private (Admin only)
router.put('/:id', protect, validateEmployeeUpdate, updateEmployee);

// @route   DELETE /api/employees/:id
// @desc    Soft delete employee
// @access  Private (Admin only)
router.delete('/:id', protect, deleteEmployee);


/*
router.post('/', protect, adminOnly, validateEmployee, createEmployee);///if admin then only 
router.put('/:id', protect, adminOnly, validateEmployeeUpdate, updateEmployee);
router.delete('/:id', protect, adminOnly, deleteEmployee);
*/

module.exports = router;
