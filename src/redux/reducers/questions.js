import * as actions from "../consts/action-types";

let initialData = {questions: [], answered: [], correctCounter: 0, currentQuestionIndex: 0};

const questionsReducer = (state = initialData, action) => {
    switch (action.type) {
        case actions.SET_QUESTIONS:
            return {...state, questions: action.payload};

        case actions.SET_ANSWER:
            return {...state, answered: [...state.answered, action.payload]};

        case actions.SEW_CURRENT_INDEX:
            return {...state, currentQuestionIndex: action.payload};

        case actions.INCREMENT_CORRECT_COUNTER:
            return {...state, correctCounter: state.correctCounter + 1};

        case actions.RESET:
            return {...state, questions: [], answered: [], correctCounter: 0, currentQuestionIndex: 0};

        default:
            return state;
    }
};

export default questionsReducer;