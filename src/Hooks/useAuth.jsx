import { useContext } from 'react';
import { AuthContex } from '../FirebaseProvider.jsx/FirebaseProvider';

const useAuth = () => {
    const all = useContext(AuthContex)
    return  all
};

export default useAuth;