import { _getUsers } from '../_DATA'
import { getUsers } from './users'


const handleInitialData = () =>{
    return async(dispatch) => {
        try {
            const users= await _getUsers()
            dispatch(getUsers(users))
        } catch (e) {
            console.log(e)
        }  
    }
}

export default handleInitialData