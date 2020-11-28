import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
  let history = useHistory();
  const [values, setValues] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <div>
        <button onClick={() => history.goBack()}>BACK</button>
      </div>
      <div>
        <form>
          <label>
            EMAIL
            <input type='text' name='email' />
          </label>
          <label>
            PASSWORD
            <input type='password' name='password' />
          </label>
          <input type='submit' value='SUBMIT' onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
