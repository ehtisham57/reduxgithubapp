import axios from "axios"
import React, { useEffect } from 'react'
import  CardProfile  from "./CardProfile"

import { useDispatch, useSelector } from "react-redux"
import { getGithub } from "../Store/action/getGithub"
import Loading from "./Loading"
import UsernotFound from "./UsernotFound"
const Github = ({inputValue}) => {

    const {userData ,getLOading ,UserdataError} = useSelector((state)=>state.getProfileReducer)
     const dispatch =useDispatch()

    useEffect(async()=>{
       dispatch(getGithub(inputValue))
    },[inputValue])



  return (
    <>
    {getLOading? <Loading /> : UserdataError?
    <UsernotFound /> :<CardProfile userData={userData}/> }
    </>
  )
}

export default Github
