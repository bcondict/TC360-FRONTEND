import React from 'react'
import { Input } from '../components/input.component'
import { Button } from '../components/button.component'

export const Register = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='border flex border-gray-400 rounded-lg p-8 bg-white flex-col h-72 justify-around my-24'>
                <h3 className='text-center p-4'>REGISTER</h3>
                <Input label='Nickname'/>
                <Input label='Email' />
                <Input label='Confirmation email' />
                <Button>CREATE USER</Button>
            </div>
        </div>
    );
};