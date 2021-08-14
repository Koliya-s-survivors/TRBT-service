import React from 'react';

//styles
import './my-profile-settings-password-change.css'
import './my-profile-settings-password-change-media.css'

interface Props {}

const MyProfileSettingsPasswordChange: React.FC<Props> = () => {
    return <article className="my-profile-settings-password-change">
            <section >
                <h3>Subscriber password settings</h3>
                <form>
                    <label htmlFor="new_password">New password:</label>
                    <input name="password" type="password" id="new_password" />
                    <p></p>

                    <label htmlFor="confirm_password">Confirm password:</label>
                    <input name="password" type="password" id="confirm_password" />
                    <p></p>

                    <button type="button">Cancel</button>
                    <button type="submit">OK</button>
                </form>
            </section>
        </article >
};

export default MyProfileSettingsPasswordChange;