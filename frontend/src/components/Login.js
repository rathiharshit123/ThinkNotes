import React,{useState} from 'react'
import constants from '../utils/constants'
import utils from '../utils/utils'
import { useNavigate } from 'react-router-dom'
export const Login = (props) => {

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let {email,password} = credentials;
        let response = await utils.post(constants.LOGIN_URL,{email,password})
        if(response.code===200){
            setCredentials({
                email: '',
                password: ''
            })
            localStorage.setItem('token',response.data.token);
            navigate('/')
            props.showAlert('Login Successfull ','success')

        }
        else{
            props.showAlert(response.message,'danger')
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
        <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name='password'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
