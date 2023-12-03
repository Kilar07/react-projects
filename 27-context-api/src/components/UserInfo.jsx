import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const UserInfo = () => {
  const {user} = useContext(UserContext)
  return (
    // <UserContext.Consumer>
    //   {value => <h1>{value}</h1>}
    // </UserContext.Consumer>
    <h1>{user}</h1>
  )
}

export default UserInfo
