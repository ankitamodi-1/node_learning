const { validationResult } = require('express-validator');
const Employee = require('../models/Employee');

// @desc    Get all employees (excluding soft deleted)
// @route   GET /api/employees
// @access  Private
const getEmployees = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, is_manager } = req.query;
    
    // Build filter object
    const filter = { deleted_at: null };
    
    if (status) {
      filter.status = status;
    }
    
    if (is_manager !== undefined) {
      filter.is_manager = is_manager === 'true';
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get employees with pagination
    const employees = await Employee.find(filter)
      .select('-__v')
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Employee.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: 'Employees retrieved successfully',
      data: {
        employees,
        pagination: {
          current_page: parseInt(page),
          total_pages: Math.ceil(total / parseInt(limit)),
          total_employees: total,
          has_next: skip + employees.length < total,
          has_prev: parseInt(page) > 1
        }
      }
    });
  } catch (error) {
    console.error('Get employees error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching employees',
      error: error.message
    });
  }
};

// @desc    Get single employee
// @route   GET /api/employees/:id
// @access  Private
const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      _id: req.params.id,
      deleted_at: null
    }).select('-__v');

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Employee retrieved successfully',
      data: { employee }
    });
  } catch (error) {
    console.error('Get employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching employee',
      error: error.message
    });
  }
};

// @desc    Create new employee
// @route   POST /api/employees
// @access  Private (Admin only)
const createEmployee = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, salary, is_manager, dob, status } = req.body;

    // Create employee
    const employee = await Employee.create({
      name,
      salary,
      is_manager: is_manager || false,
      dob,
      status: status || 'active'
    });

    res.status(201).json({
      success: true,
      message: 'Employee created successfully',
      data: { employee }
    });
  } catch (error) {
    console.error('Create employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating employee',
      error: error.message
    });
  }
};

// @desc    Update employee
// @route   PUT /api/employees/:id
// @access  Private (Admin only)
const updateEmployee = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, salary, is_manager, dob, status } = req.body;

    // Find employee (not soft deleted)
    const employee = await Employee.findOne({
      _id: req.params.id,
      deleted_at: null
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    // Update employee
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name: name || employee.name,
        salary: salary !== undefined ? salary : employee.salary,
        is_manager: is_manager !== undefined ? is_manager : employee.is_manager,
        dob: dob || employee.dob,
        status: status || employee.status
      },
      { new: true, runValidators: true }
    ).select('-__v');

    res.status(200).json({
      success: true,
      message: 'Employee updated successfully',
      data: { employee: updatedEmployee }
    });
  } catch (error) {
    console.error('Update employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating employee',
      error: error.message
    });
  }
};

// @desc    Soft delete employee
// @route   DELETE /api/employees/:id
// @access  Private (Admin only)
const deleteEmployee = async (req, res) => {
  try {
    // Find employee (not already soft deleted)
    const employee = await Employee.findOne({
      _id: req.params.id,
      deleted_at: null
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found or already deleted'
      });
    }

    // Soft delete by setting deleted_at
    await Employee.findByIdAndUpdate(req.params.id, {
      deleted_at: new Date()
    });

    res.status(200).json({
      success: true,
      message: 'Employee deleted successfully'
    });
  } catch (error) {
    console.error('Delete employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting employee',
      error: error.message
    });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
