import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../hooks/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    let location = useLocation();

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='text-center my-5'>
            <h3 className='text-danger'>You can't verify email.</h3>
            <h5 className='text-success'>Please verify your email!</h5>
            <button className='btn btn-success' onClick={async () => {
                await sendEmailVerification();
                alert('Sent email');
            }}
            >Send Verification</button>
        </div>
    }

    return children;
};

export default RequireAuth;