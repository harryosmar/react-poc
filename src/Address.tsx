import {useContext, useEffect} from 'react';
import {AddressContext} from './context/AddressContext';

function Address() {
    const {address, setAddress} = useContext(AddressContext);

    useEffect(() => {
        setAddress({province: 'DKI Jakarta', city: 'Jakarta Pusat'});
    }, []);

    console.log({address});
    if (!address) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Address</h1>
            <p>Province: {address?.province}</p>
            <p>City: {address?.city}</p>
        </div>
    );
}

export default Address;
