import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Address from "./Address";
import UserProvider from './context/UserContext';
import AddressProvider from "./context/AddressContext";
import React from "react";
import ProfileAddress from "./ProfileAddress";
import UserAddressProvider from "./context/UserAddressContext";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<UserProvider><User/></UserProvider>}/>
                <Route path="/profile2" element={<User/>}/>
                <Route path="/address" element={<AddressProvider><Address/></AddressProvider>}/>
                <Route path="/profile-address" element={<UserAddressProvider><ProfileAddress/></UserAddressProvider>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

function NotFound() {
    return <h1>404 Not Found</h1>;
}

export default App;
