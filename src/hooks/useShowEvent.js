import { get } from '../api';
import { useSelector } from 'react-redux';

export const useShowEvent = () => {
    const token = useSelector((state) => state.auth.user.token)
    const getEvents = async () => {
        return await get('http://localhost:8080/event/event', token);
    };

    return { getEvents };
};
