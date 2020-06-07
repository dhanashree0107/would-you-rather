import React from 'react'
import {Button, Form, FormGroup} from 'reactstrap'
import {setAuthedUser} from "../Actions/authedUser"
import {connect} from 'react-redux'
//import users from '../_DATA'

 //Object.values(users).map((user) => ({ key: user.id,value: user.name,text: user.name, image: { avatar: true, src: user.avatarURL } }))
class Login extends React.Component {
    state ={
        username:'',
        isLogged:false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username} = this.state
        const {dispatch} = this.props
        if (username !== "") {
            dispatch(setAuthedUser(username))
            this.setState(() => ({isLogged: true}))
        }
    }
    handleChange = (e) => {
        const username = e.target.value
        this.setState(() => ({username}))
    }
    render(){
       
    return(
        <div> 
           <h1> Hii from LOGIN page</h1>
           <Form onChange={this.handleSubmit} className="form-signin" >
                <h1 className="form-heading">Please  Login</h1>
                <FormGroup>
                    <select id="username" className="form-control"
                    value={this.state.username}
                    onChange={this.handleChange}>       
                        <option value='' disabled >Please Select</option>
                        {this.props.users.map((user) => (             
                        <option key={user.id} value={user.id} >{user.name}</option>
                        ))}
                    </select>
                </FormGroup>
                <Button type="submit" id="_submit" name="_submit"className="btn btn-lg btn-primary btn-block">Enter</Button>
            </Form>
            </div>
    );
}

}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name,
            })
        }),
        username: authedUser
    }
}
export default connect(mapStateToProps)(Login)