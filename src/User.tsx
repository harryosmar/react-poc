import {useContext, useEffect} from 'react';
import {UserContext} from './context/UserContext';

function User() {
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        setUser({name: 'febri', email: 'febri@angel.com'});
    }, []);

    console.log({user: user});
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
}

export default User;
