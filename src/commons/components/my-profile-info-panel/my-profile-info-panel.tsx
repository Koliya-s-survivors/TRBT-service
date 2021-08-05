import React, { Component } from "react";

// styles
import './my-profile-info-panel.css';
import './my-profile-info-panel-media.css'

interface MyProfileInfoPanelProps {
    loginedEmail: string,
}

const MyProfileInfoPanel = ({ loginedEmail = 'defaultEmail@gmail.com' }: MyProfileInfoPanelProps) => {

    return (
        <article className="my-profile-info-panel">
            <section>
                <svg viewBox="0 0 28 28">
                    <path d="M23.797 20.922c-0.406-2.922-1.594-5.516-4.25-5.875-1.375 1.5-3.359 2.453-5.547 2.453s-4.172-0.953-5.547-2.453c-2.656 0.359-3.844 2.953-4.25 5.875 2.172 3.063 5.75 5.078 9.797 5.078s7.625-2.016 9.797-5.078zM20 10c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6zM28 14c0 7.703-6.25 14-14 14-7.734 0-14-6.281-14-14 0-7.734 6.266-14 14-14s14 6.266 14 14z"></path>
                </svg>
                <h3>Subscriber  {loginedEmail}</h3>
            </section>
        </article>
    )

}

export default MyProfileInfoPanel;
