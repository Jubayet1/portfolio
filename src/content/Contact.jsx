import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xknalvzz");
    if (state.succeeded) {
        return <p>Thanks for Messaging!</p>;
    }
    return (
        <div id='contact' className='dark:bg-slate-900'>

            <div className='container mx-auto dark:bg-slate-900'>
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className='text-3xl dark:text-slate-200 mt-16'>Let's Talk</h1>
                </div>
                <form onSubmit={handleSubmit} action="https://formspree.io/f/xknalvzz"
                    method="POST" className='mt-5 p-8 flex flex-col gap-5 items-center'>
                    <input type="text" placeholder='Name' className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 outline-none rounded-sm dark:bg-gray-700 dark:text-slate-100 dark:ring-0' />
                    <input id="email" type="email" name="email" placeholder='email@gmail.com'
                        className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 outline-none rounded-sm dark:bg-gray-700 dark:text-slate-100 dark:ring-0' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea cols="30" rows="10" placeholder='Message' id="message"
                        name="message"
                        className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 outline-none rounded-sm dark:bg-gray-700 dark:text-slate-100 dark:ring-0'></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className='w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md' type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact


// className='w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md'