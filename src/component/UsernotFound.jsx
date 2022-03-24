import React from 'react'
import img from "./image/download.png"
import style from "./Github.module.css"
const UsernotFound = () => {
  return (
    <><div className={style.error}>
    <div className={style.card}> 
      <h1>User Not Found</h1>
      <br /><br />
      <img src={img} alt="" />
      </div>
      </div>
    </>
  )
}

export default UsernotFound
