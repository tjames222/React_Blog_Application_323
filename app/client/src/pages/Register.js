import React from 'react';
/*
export const Register = () => {
    return (
        <div>
            <form>
                <label>
                    FIRST NAME
                    <input type="text" name="firstName" />
                </label>
                <label>
                    LAST NAME
                    <input type="text" name="lastName" />
                </label>
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
*/

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // General form handler
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('Registration Complete: ' + this.state.firstName + " " + this.state.lastName +
            " " + this.state.email + " " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <div>
                <label>
                    FIRST NAME
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <label>
                    LAST NAME
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                <label>
                    EMAIL
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    PASSWORD
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default Register;


