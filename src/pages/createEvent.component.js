import React, { useState } from 'react';
import { Input, Button } from '../components';
import { useEvent } from '../hooks';
import { useDispatch } from 'react-redux'


export const CreateEvent = () => {
    const { createEvent } = useEvent();
    const [tennisEvent, setTennisEvent] = useState({
        name: '',
        description: '',
        coordinator: '',
        type: '',
        date: '',
        time: '',
        location: '',
        guests: '',
    });

    const onChange = (event) => {
        setTennisEvent({ ...tennisEvent, [event.target.name]: event.target.value });
    };

    const dispatch = useDispatch()
    const handlerSubmit = async () => {
        try {
            const res = await createEvent(tennisEvent);
            dispatch(setTennisEvent(res))
            console.log(res);
        }catch (e) {
            console.log(e);
        }

    };

    return (
        <div className="flex justify-center items-center p-10">
            <div className="border flex border-gray-400 rounded-lg p-14 bg-white flex-col h-auto justify-around space-y-4">
                <h3 className="text-center">CREATE EVENT</h3>
                <Input label="Name" name="name" onChange={onChange} />
                <Input label="Description" name="description" onChange={onChange} />
                <Input label="Coordinator" name="coordinator" onChange={onChange} />
                <Input label="Type" name="type" onChange={onChange} />
                <Input label="Date" name="date" onChange={onChange} />
                <Input label="Time" name="time" onChange={onChange} />
                <Input label="Location" name="location" onChange={onChange} />
                <Input label="Guests" name="guests" onChange={onChange} />
                <Button onClick={handlerSubmit}>CREATE EVENT</Button>
            </div>
        </div>
    );
};