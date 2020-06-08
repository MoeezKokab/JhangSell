import React,{useState} from 'react'

const [loginScreen, setLoginScreen] = useState(true)
 export const SetLoginScreen = (input) => {
    setLoginScreen(input)
  }

  export default GetLoginScreen = () => {
    return loginScreen
  }
