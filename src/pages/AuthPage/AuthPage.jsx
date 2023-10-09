//import * as userService from '../../utilities/users-service';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser, setCredentials }) {

    

    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={ setUser } />
            <LogInForm setUser={ setUser } setCredentials={ setCredentials } /> 
        </main>
    );
}