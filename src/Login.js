import { useState } from "react";

function Login() {

    const [registartion_number, setRegistartionNumber] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
            <form className="w-50">
                <div className="">
                    <label htmlFor="Registration number" className="form-label">Registration number:</label>
                    <input type="text" className="form-control" id="Registartion number "
                        defaultValue={registartion_number}
                        onChange={e => { setRegistartionNumber(e.target.value) }}
                    />
                    <div className="invalid-feedback">Registration number is required.</div>
                </div>

                <div className="">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password"
                        defaultValue={password}
                        onChange={e => { setPassword(e.target.value) }}
                    />
                    <div className="invalid-feedback">password required.</div>
                </div>

                <button type="button" className="btn btn-primary btn-block m-4">Sign in</button>
            </form>
        </div>
    )
}

export default Login;