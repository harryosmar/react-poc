import {useContext, useEffect} from 'react';
import {AddressContext} from './context/AddressContext';
import {UserContext} from './context/UserContext';

function ProfileAddress() {
    const {address, setAddress} = useContext(AddressContext);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        setAddress({province: 'DKI Jakarta', city: 'Jakarta Pusat'});
        setUser({name: 'febri', email: 'febri@angel.com'});
    }, []);

    console.log({address});
    if (!address) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <h2>Address</h2>
            <p>Province: {address?.province}</p>
            <p>City: {address?.city}</p>
        </div>
    );
}

export default ProfileAddress;
