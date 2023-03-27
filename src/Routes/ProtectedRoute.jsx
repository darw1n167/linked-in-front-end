import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/authContext';

function ProtectedRoute() {  
    const { isAuthenticated } = useContext(AuthContext);

    return (
        isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
    );
}

export default ProtectedRoute;