import React, { Component } from 'react';

// styles
import './log-in-form.css'

interface Props {}

interface State {}

export default class LogInForm extends Component<Props, State> {
    render() {
        return <article className="log-in-form">
            <section >
                <h3>Authorize</h3>
                <form>
                    <label htmlFor="user_email">E-mail:</label>
                    <input name="email" type="text" id="user_email" />
                    <p></p>
                    
                    <label htmlFor="user_password">Password:</label>
                    <input name="password" type="password" id="user_password" />
                    <p></p>

                    <a href="#">Registration</a>
                    <button type="submit">Sign in</button>
                </form>
            </section>
        </article >
    }
}