import React, { useState } from 'react'
import { AddUser } from '../Redux/Action/action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Signup = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [state, setstate] = useState({
        email: "",
        password:"",
    })
    let { email, password } = state;
    let handleChange = (e) => {
        let { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(AddUser(email, password))
            navigator("./")
        }
        catch (error){
           console.log(error)
        }
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email1">Confirm your email?</label>
            <input
              type="email"
              className="form-control"
              name="email1"
              placeholder="enter your email again"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create a Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="create a password"
              required
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
}

export default Signup
