import { INITIAL_ROUND, ROUNDS } from '../../util/constants'
import firebase from '../../util/firebase'
import {practiceActions, userActions} from '../action_constant'

const initial_state={
    infor:null
}


export default userReducer=(state=initial_state,action)=>{
    let payload=action.payload

    switch (action.type){
        case userActions.SIGNIN_SUCCESS:   
            console.log('userReducer signinSuccess:',payload.user)
            return {
                ...state,
                infor:payload.user
            }

        case userActions.SIGNOUT:
            console.log('userReducer signinSuccess:',payload.user)
            return {
                ...state,
                infor:null
            }
         
       
        default:
            return state
    }
}