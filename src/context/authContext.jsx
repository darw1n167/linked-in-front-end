import { createContext, useState } from "react";
import jwtDecode from 'jwt-decode';
import { API_URL } from "../App";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentProfile, setCurrentProfile] = useState('');
    const [currentAccessToken, setCurrentAccessToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const loginProfile = (token) => {
        setCurrentAccessToken(token.accessToken);
        const decodedToken = jwtDecode(token.accessToken)
        setCurrentProfile(decodedToken.profile_id);
        setIsAuthenticated(true)
    };

    const logoutProfile = async () => {
        const logoutRefreshToken = async () => {
            await fetch(`${API_URL}/logout`, {
                credentials: 'include'
            });
        }

        await logoutRefreshToken();
        setCurrentAccessToken('');
        setCurrentProfile('');
        setIsAuthenticated(false)
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                currentProfile,
                currentAccessToken,
                loginProfile,
                logoutProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
