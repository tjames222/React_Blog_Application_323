import React from 'react';
import { useHistory } from "react-router-dom";

export const Login = () => {
    let history = useHistory()

    return (
        <div>
            <div>
                <button onClick={() => history.goBack()}>BACK</button>
            </div>
            <div>
            <form>
                <label>
                    EMAIL
                    <input type="text" name="email" />
                </label>
                <label>
                    PASSWORD
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
};

export default Login;





