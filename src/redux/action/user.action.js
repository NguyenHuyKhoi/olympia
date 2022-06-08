
import firebase from '../../util/firebase'
import {userActions} from '../action_constant'

export const signinSuccess=(user)=>{
    return {
        type:userActions.SIGNIN_SUCCESS,
        payload:{user}
    }
}

export const signout=()=>{
    return {
        type:userActions.SIGNOUT,
        payload:{}
    }
}
