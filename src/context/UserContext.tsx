import React, {createContext, useState} from 'react';

export interface User {
    name: string;
    email: string;
}

export interface UserContextType {
    user: User | null,
    setUser: (user: User | null) => void,
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {
    },
});
const UserProvider: React.FC<{
    children?: React.ReactNode,
}> = ({children}) => {
    const [user, setUser] = useState<User|null>(null);
    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>{children}</UserContext.Provider>
    )
};

export default UserProvider;