import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputField, changeInputField] = useState(
        {
            email: "",
            password: ""
        }
        );
        const inputHandler = (event) => {
            changeInputField({...inputField, [event.target.name]: event.target.value})
        }
        const readvalue=()=> {
            console.log(inputField);
            if(inputField.email=="admin@gmail.com" && inputField.password=="12345"){
                navigate("/add")
            }
            else{
                alert("Invalid Credentials")
            }
        }
    
        const navigate=useNavigate();
      return (
        <div>
        <div className="container vh-100 d-flex align-items-center justify-content-center">
          <div className="border p-4">
            <div className="row g-3">
              <div className="col-12">
                <h1 className="text-center">Login</h1>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={inputField.email} onChange={inputHandler}   />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={inputField.password} onChange={inputHandler}   />
                </div>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success" onClick={readvalue}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    };
    
export default Login