//import { getInitialData } from '../utils/api'
import { addUserQuestion, saveUserAnswer, receiveUsers } from '../actions/users'
import { addQuestion, receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { _saveQuestionAnswer, _saveQuestion, _getUsers, _getQuestions } from '../_DATA'

export function handleInitialData() {
    return async(dispatch) => {
        try {
            const user = await _getUsers()
            const question = await _getQuestions()
            dispatch(receiveUsers(user))
            dispatch(receiveQuestions(question))

        } catch (error) {

        }

    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
                optionOneText,
                optionTwoText,
                author: authedUser
            })
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addUserQuestion(authedUser, question.id))
            })

    }
}

export function handleAnswer(qid, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const info = {
            authedUser: authedUser,
            qid,
            answer: option
        };
        _saveQuestionAnswer(info)
            .then(() => {
                dispatch(saveQuestionAnswer(authedUser, qid, option));
                dispatch(saveUserAnswer(authedUser, qid, option))
            })
    }
}