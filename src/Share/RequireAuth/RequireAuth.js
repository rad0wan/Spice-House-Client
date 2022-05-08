import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../hooks/Loading';

const RequireAuth = ({ children }) => {

    let location = useLocation();

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;