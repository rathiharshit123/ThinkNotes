import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import constants from '../utils/constants'
import utils from '../utils/utils'
export const Signup = (props) => {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    })
    const onChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        let {name,email,password,cpassword} = credentials;
        if(password!==cpassword){
            props.showAlert('Password does not match','danger')
            return;
        }
        let response = await utils.post(constants.SIGNUP_URL,{name,email,password});
        if(response.code===200){
            localStorage.setItem('token',response.data.token);
            setcredentials({name: '',email: '',password:'',cpassword:''});
            navigate('/')
            props.showAlert('Account created succesfully','success')
            
        }
        else{
            props.showAlert(response.message,'danger')
        }

    }
  return (
    <div className='container my-3'>
    <h2>Create a new Account</h2>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required onChange={onChange} value={credentials.name} name='name' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" onChange={onChange} value={credentials.email} required name='email' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="cpassword" onChange={onChange} value={credentials.cpassword} name='cpassword' required/>
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
