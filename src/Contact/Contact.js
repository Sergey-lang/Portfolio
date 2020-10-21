import React from 'react';
import s from './Contact.module.css'
import sContainer from './../common/styles/Container.module.css'

export function Contact() {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <h2 className={s.title}>Contact</h2>
                <form className={s.contactForm}>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />
                    <label for="larea">Your message:</label><br />
                    <textarea type="text" id="larea" name="larea" />
                </form>
                <button className={s.sendButton}>Send</button>
            </div>
        </div>
    );
}

