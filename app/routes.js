// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to returning-boolean-answer
router.post('/returning-boolean-answer', function (req, res) {

    // Make a variable and give it the value from 'returning-boolean'
    var returningApplication = req.session.data['returning-boolean']
  
    // Check whether the variable matches a condition
    if (returningApplication == "yes"){
      // Send user to next page
      res.redirect('/returning-code')
    } else {
      // Send user to ineligible page
      res.redirect('/register-task-list')
    }
  
  })

  // Run this code when a form is submitted to returning-code-answer
router.post('/returning-code-answer', function (req, res) {

    // Make a variable and give it the value from 'returning-code'
    var returningCode = req.session.data['returning-code']
  
    // Check whether the variable matches a condition
    if (returningCode == "001"){
      // Send user to next page
      res.redirect('/kbi-task-list')
    } else {
      // Send user to ineligible page
      res.redirect('/register-task-list-returning')
    }
  
  })