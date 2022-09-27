import React from 'react'
import { Input } from '../components/input.component'
import { Button } from '../components/button.component'

export const Register = () => {
    return (
        <div className='flex justify-center items-center p-12'>
            <div className='border flex border-gray-400 rounded-lg p-14 bg-white flex-col h-96 justify-around space-y-6'>
                <h3 className='text-center'>REGISTER</h3>
                <Input label='Nickname' />
                <Input label='Email' />
                <Input label='Confirmation email' />
                <Button>CREATE USER</Button>
            </div>
        </div>
    );
};