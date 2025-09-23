// Simple API test script
// Run this after starting the server to test the endpoints

const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

// Test data
const testUser = {
  name: 'Test Admin',
  email: 'admin@test.com',
  password: 'password123',
  user_type: 'admin'
};

const testEmployee = {
  name: 'John Doe',
  salary: 50000,
  is_manager: false,
  dob: '1990-01-15',
  status: 'active'
};

let authToken = '';

async function testAPI() {
  try {
    console.log('🚀 Starting API Tests...\n');

    // Test 1: Health Check
    console.log('1. Testing Health Check...');
    const healthResponse = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health Check:', healthResponse.data.message);

    // Test 2: User Signup
    console.log('\n2. Testing User Signup...');
    const signupResponse = await axios.post(`${BASE_URL}/auth/signup`, testUser);
    console.log('✅ Signup Success:', signupResponse.data.message);
    authToken = signupResponse.data.data.token;

    // Test 3: User Login
    console.log('\n3. Testing User Login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: testUser.email,
      password: testUser.password
    });
    console.log('✅ Login Success:', loginResponse.data.message);

    // Test 4: Create Employee
    console.log('\n4. Testing Employee Creation...');
    const createEmployeeResponse = await axios.post(`${BASE_URL}/employees`, testEmployee, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    console.log('✅ Employee Created:', createEmployeeResponse.data.message);
    const employeeId = createEmployeeResponse.data.data.employee._id;

    // Test 5: Get All Employees
    console.log('\n5. Testing Get All Employees...');
    const getEmployeesResponse = await axios.get(`${BASE_URL}/employees`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    console.log('✅ Employees Retrieved:', getEmployeesResponse.data.data.employees.length, 'employees found');

    // Test 6: Get Single Employee
    console.log('\n6. Testing Get Single Employee...');
    const getEmployeeResponse = await axios.get(`${BASE_URL}/employees/${employeeId}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    console.log('✅ Employee Retrieved:', getEmployeeResponse.data.data.employee.name);

    // Test 7: Update Employee
    console.log('\n7. Testing Employee Update...');
    const updateEmployeeResponse = await axios.put(`${BASE_URL}/employees/${employeeId}`, {
      salary: 60000,
      is_manager: true
    }, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    console.log('✅ Employee Updated:', updateEmployeeResponse.data.message);

    // Test 8: Soft Delete Employee
    console.log('\n8. Testing Employee Soft Delete...');
    const deleteEmployeeResponse = await axios.delete(`${BASE_URL}/employees/${employeeId}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    console.log('✅ Employee Deleted:', deleteEmployeeResponse.data.message);

    console.log('\n🎉 All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testAPI();
}

module.exports = testAPI;
