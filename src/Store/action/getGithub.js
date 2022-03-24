import axios from "axios"
import ActionType from "../constant"


const getGithub = (username)=>{

    const searchValue = username ? username :"example"
return(dispatch)=>{
    dispatch({
        type:ActionType.getLOading
    })

    axios
    .get(`https://api.github.com/users/${searchValue}`)
    .then(
        (res)=>{
    dispatch({
    type : ActionType.get_Github_Profile,
    payload : res.data,
})
        })
        .catch((err)=>{
            dispatch({
                type :ActionType.get_Error,
            payload : err.message
            })
        })

}
}

export {getGithub}