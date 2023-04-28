import React, {createContext, useState} from 'react';

export interface Address {
    province: string;
    city: string;
}

export interface AddressContextType {
    address: Address | null,
    setAddress: (profile: Address | null) => void;
}

export const AddressContext = createContext<AddressContextType>({
    address: null,
    setAddress: () => {
    },
});

const AddressProvider: React.FC<{
    children?: React.ReactNode,
}> = ({children}) => {
    const [address, setAddress] = useState<Address | null>(null);
    return (
        <AddressContext.Provider value={{address, setAddress,}}>{children}</AddressContext.Provider>
    )
};

export default AddressProvider;