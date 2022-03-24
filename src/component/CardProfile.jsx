import React from 'react'
import {Card  } from "react-bootstrap"
import { useNavigate } from 'react-router'
import style from './Github.module.css'
import Img from "./image/download.png"

const CardProfile = (props) => {

  
  const {avatar_url, name ,bio  ,following ,followers ,html_url ,public_repos} = props.userData
  return (
    <>
      <div className={`container ${style.main}`}>
    <div className={style.mainbody}>
    <Card className={style.card} style={{ padding:"20px"}}>
  <Card.Img style={{padding:"50px" ,width:"50%",borderRadius:"20%" }} variant="top" src={avatar_url} />
  <Card.Body>
    <div className={style.name}>
    <h1>Name: {name}</h1>
    <p>Followers: {followers}</p>
    <p>Following: {following}</p>
    </div>
    <div className={style.name}>
    <h2 >Bio: <br /><br /> {bio}</h2>
    </div>
    <div className={style.name}>
    <h2>Public Repos: {public_repos}</h2>
   </div>
    <a className='btn btn-secondary' 
     href={html_url} target="_blank"
     style={{margin : "20px 0", alignItems:"center", textAlign:"center"}} 
    variant="primary">Visit Profile</a>
  </Card.Body>
</Card>
    </div>
    </div>
    </>
  )
}

export default CardProfile
