import React from 'react'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import s from './Contact.module.scss'
import Fade from 'react-reveal/Fade'
import {Button} from '../../u0-common/u0.2-components/Button/Button';
import axios from 'axios';
import {useForm} from 'react-hook-form';

export const Contact = React.memo(() => {

    let[notification, setNotification] = React.useState(false)

    const { register, handleSubmit, errors, setError, reset } = useForm();

    const onSubmit = async (data, e) => {
        e.target.reset()
        const res = await axios.post('https://floating-sands-77642.herokuapp.com/sendPost', data)
        try {
            console.log('Massage send!')
        } catch (err) {
            console.log('There is error');
            setError('username', 'validate');
        }
    };

    console.log(errors);

    return (
        <div className={s.contactBlock}>
            <div className={s.container} id='contact'>
                <Fade clear>
                    <Title title={'Contact'}
                           titleDescription={`If you wanna get in touch, talk to me about a project collaboration or just say hi,
                       fill up the awesome form below or send an email.`}
                    />
                    <div className={s.formWrapper}>
                        <form onSubmit={handleSubmit(onSubmit)} className={s.contactForm}>
                            <input name="email"
                                   type="text"
                                   placeholder={'Email'}
                                   ref={register({
                                       required: 'This is required',
                                       pattern: {
                                           value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                           message: 'Invalid email address',
                                       },
                                   })}/>
                            {errors.email && <span className={s.notificationEmail}>{errors.email.message}</span>}
                            <input name="name"
                                   type="text"
                                   placeholder={'Name'}
                                   ref={register({ required: true,
                                       validate: value => value.length >=2
                                   })}/>
                            {errors.name && <span className={s.notificationName}>Your last name is less than 2 characters</span>}
                            <textarea name="message"
                                      placeholder={'Message'}
                                      ref={register}/>
                            <Button type="submit"
                                    newStyle
                                    button
                                    className={s.contactBtn}
                            >Send message</Button>
                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    )
})
