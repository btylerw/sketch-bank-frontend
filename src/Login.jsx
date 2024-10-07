import { Link } from 'react-router-dom'
import './styles/Login.css'

export const Login = () => {
    return (
        <>
            <div className="login-box">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <Link to="/signup">Create Account</Link>
            </div>
        </>
    )
}