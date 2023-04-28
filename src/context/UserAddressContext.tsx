import React from "react";
import UserProvider from "./UserContext";
import AddressProvider from "./AddressContext";

const UserAddressProvider: React.FC<{
    children?: React.ReactNode,
}> = ({children}) => {
    return (
        <UserProvider>
            <AddressProvider>
                {children}
            </AddressProvider>
        </UserProvider>
    )
};

export default UserAddressProvider;