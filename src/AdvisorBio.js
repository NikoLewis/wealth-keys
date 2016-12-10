import React from 'react'
//import {Link} from 'react-router'
// import userObj from './src/test-api-obj';


var AdvisorBio = React.createClass({
  
  render(){
    return (
      <div>
        <img src={require("./images/samplePic.jpg") }alt="Advisor Pic" />
        <p>Name: Lynda James</p>
        <br/>
        <p>Lynda is the Head of Sales and Marketing at Advisor Websites where she is responsible for continuous refinement, testing, and execution of the company’s go to market strategy. 
        This includes optimizing the company’s sales approach (direct sales, partner based, web-based, etc.) and its implementation. She is a member of the Financial Planning Association® (FPA®).</p>
      </div>
      )
  }
})
//need set appointment that will lead to confirmation page
export default AdvisorBio