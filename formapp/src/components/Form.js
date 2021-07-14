import React from 'react';
import useForm from './useForm';
import validate from './LoginFormValidationRules';
import Greet from './Greet';
import { useState, useEffect } from 'react';
const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [issubimitted, setisSubmitted] = useState(false);
  
    const updateStatus = ev => {
      setisSubmitted(true);
    };
  function login() {
    console.log(errors.name);
    updateStatus();
  }
  return (
    <div
      className="section is-fullheight"
      style={{ backgroundColor: '#5DAAE0', textAlign: 'center',height:'100%' }}
    >
      <p> WELCOME HIGHRADIAN..REGISTER HERE!</p>
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
            { issubimitted ? <Greet name={values.name} /> : null }
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className={`input ${errors.name && 'is-danger'}`}
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={values.name || ''}
                    required
                  />
                </div>
                {errors.name && <p className="help is-danger">{errors.name}</p>}
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && 'is-danger'}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ''}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && 'is-danger'}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ''}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Date of Birth (DD/MM/YYYY)</label>
                <div className="control">
                  <input
                    className={`input ${errors.dofb && 'is-danger'}`}
                    type="dofb"
                    name="dofb"
                    onChange={handleChange}
                    value={values.dofb || ''}
                    required
                  />
                </div>
                {errors.dofb && <p className="help is-danger">{errors.dofb}</p>}
              </div>
              <div className="field">
                <label className="label">Pincode</label>
                <div className="control">
                  <input
                    className={`input ${errors.pin && 'is-danger'}`}
                    type="pin"
                    name="pin"
                    onChange={handleChange}
                    value={values.pin || ''}
                    required
                  />
                </div>
                {errors.pin && <p className="help is-danger">{errors.pin}</p>}
              </div>
              <div className="field">
                <label className="label">Phone Number (with coutry code)</label>
                <div className="control">
                  <input
                    className={`input ${errors.phone && 'is-danger'}`}
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone || ''}
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="help is-danger">{errors.phone}</p>
                )}
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#FC7500",color: '#FFFFFFA6',height:'3vw',width:'6vw', textAlign: "center",borderRadius: "0.7vw",}}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
