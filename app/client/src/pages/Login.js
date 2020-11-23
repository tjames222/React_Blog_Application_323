import React from 'react';

export const Login = () => {
    return (
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
    )
};

export default Login;

/* 
const App = () => {
    const history = useHistory()
        < i className = "icon list arrow left"
    onClick = {() => {
    history.goBack()
}}></i >
}
*/