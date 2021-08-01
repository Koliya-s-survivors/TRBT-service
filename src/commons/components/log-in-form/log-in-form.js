import React, { Component } from "react";

// styles
import './log-in-form.css'

export default class LogInForm extends Component {
    render() {
        return <article className="log-in-form">
            <section >
                <h3>Authorize</h3>
                <form>
                    <label for="user_email">E-mail:</label>
                    <input name="email" type="text" id="user_email" />
                    <p></p>

                    <label for="user_password">Password:</label>
                    <input name="password" type="password" id="user_password" />
                    <p></p>

                    <a href="#">Registration</a>
                    <button type="submit">Sign in</button>
                </form>
            </section>
        </article >
    }
}