import ActionType from "../constant"

const Initial_state ={
    userData :{},
    getLOading:false,
    UserdataError : ""

}

const getProfileReducer = (state = Initial_state , action)=>{

    switch(action.type){
        case ActionType.getLOading:
            return{
                ...state,
                getLOading: true,
            }
        case ActionType.get_Github_Profile:
            return{
                ...state,
                userData: action.payload,
                getLOading: false,
                UserdataError:""
            }
            case ActionType.get_Error:
            return{
                ...state,
                UserdataError :action.payload ,
                userData:{}, 
                getLOading: false,
            }
        default: 
            return state

    }
    

}

export {getProfileReducer} 

