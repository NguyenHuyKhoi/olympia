import { INITIAL_ROUND, ROUNDS } from '../../util/constants'
import firebase from '../../util/firebase'
import {practiceActions} from '../action_constant'

const initial_state={}

/// fields : 
// cri: current_round_index
// cqi: current_question_index
// rounds : data of 4 rounds 
// questions_state : state of questions on current round ( on ['none','current','wrong','correct'])
export default practiceReducer=(state=initial_state,action)=>{
    let payload=action.payload
    let {cri,cqi,rounds,questions_state,scores}=state;
    switch (action.type){
        case practiceActions.GET_PRACTICE_ROUNDS:   
            return {
                ...state,
                ...payload,
                cri:INITIAL_ROUND,
                cqi:0,
                questions_state:['current'],
                scores:[0,0,0,0],
                is_guessed_round2_keyword:false,
                keyword_answered:false,
            }

        case practiceActions.ANSWER:
         
            console.log('practiceReducer answer :',payload.score)
            questions_state[questions_state.length-1]=payload.score>0?'correct':'wrong';
            scores[cri]+=payload.score;
            questions_state.push('current');

            let total_question= ROUNDS[cri].number_question
            console.log('total question :',total_question);

            if (cqi<total_question-1){
                cqi++;
            
            };
            return {
                ...state,
                cqi,
                questions_state,
                scores
        }

        case practiceActions.NEXT_ROUND:

            console.log('practiceReducer nextRound :',cri)
            cqi=0;
            cri++;
            questions_state=[];
            questions_state.push('current');

            return {
                ...state,
                cqi,
                cri,
                questions_state
            }



        case practiceActions.ANSWER_KEYWORD:
        
            scores[1]+=payload.keyword_score;
            //move to next round :3;

            

            return {
                ...state,
                scores,
                keyword_answered:true

            }


        case practiceActions.CHOOSE_ROUND4_QUESTIONS:
            rounds[3]=payload.round4;


            console.log('practiceReducer round4:',payload.round4)
            return {
                ...state,
                rounds,
                picked_star:payload.picked_star
            };
        default:
            return state
    }
}