import { AuthProvider } from './AuthContext';
import Home from './Home';

const ContextApp = () => {
    return (
        <AuthProvider>
            <div>
                <Home />
            </div>
        </AuthProvider>
    );
};

export default ContextApp;
