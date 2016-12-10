import React from 'react'
import AdvisorBio from './AdvisorBio'
import RecommendedProduct from './productPage'

var ScheduleAdvisorInfo = React.createClass({

  
  render(){
    return (
      <div>
      <AdvisorBio />
      <RecommendedProduct />
      </div>
      )
  }
})
//need set appointment that will lead to confirmation page
export default ScheduleAdvisorInfo