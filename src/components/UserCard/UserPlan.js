import React from 'react'
import UserPlanStyle from '../../styled/card/userPlan.style'
const UserPlan = () => {
  return (
    <>
    <UserPlanStyle>
    <label>Plan Uses</label>
    <div className='total'>
      <div className='progress'></div>
    </div>
    </UserPlanStyle>
    </>
  )
}

export default UserPlan