import "./styles/Signup.css"

export const Signup = () => {
    return (
        <>
        <div className="signup-box">
            <input type="text" placeholder="Enter Username" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Submit</button>
        </div>
        </>
    )
}