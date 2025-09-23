const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [255, 'Name cannot exceed 255 characters'],
    trim: true
  },
  salary: {
    type: Number,
    required: [true, 'Salary is required'],
    min: [0, 'Salary cannot be negative']
  },
  is_manager: {
    type: Boolean,
    default: false
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  deleted_at: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Add indexes for better query performance
employeeSchema.index({ deleted_at: 1 });
employeeSchema.index({ status: 1 });

// Virtual for employee ID (if you want to use a custom ID format)
employeeSchema.virtual('employeeId').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialized
employeeSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Employee', employeeSchema);
