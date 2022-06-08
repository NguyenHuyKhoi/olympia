
import firebase from '../../util/firebase'
import {practiceActions} from '../action_constant'

export const getPracticeRounds=()=>{

    return async (dispatch)=>{
        let rounds=await firebase.getPracticeRounds();

        dispatch({
            type:practiceActions.GET_PRACTICE_ROUNDS,
            payload:{rounds}
        })
    }

}

export const answer=(score)=>{
    console.log('choose option :',score);
    return {
        type:practiceActions.ANSWER,
        payload:{score}
    }
}

export const nextRound=()=>{
    return {
        type:practiceActions.NEXT_ROUND,
        payload:{}
    }
}

export const answerKeyword=(keyword_score)=>{
    console.log('choose option :',keyword_score);
    return {
        type:practiceActions.ANSWER_KEYWORD,
        payload:{keyword_score}
    }
}


export const chooseRound4Questions=(arr,picked_star)=>{
    console.log('chooseRound4Questions :',arr);
    return async (dispatch)=>{
        let round4=await firebase.getRound4(arr);

        dispatch({
            type:practiceActions.CHOOSE_ROUND4_QUESTIONS,
            payload:{round4,picked_star}
        })
    }
}