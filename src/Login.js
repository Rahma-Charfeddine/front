import { useState } from "react";
import instance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [registartion_number, setRegistartionNumber] = useState('');
    const [password, setPassword] = useState('');

    const [is_Loading, setIs_Loading] = useState(false);
    const [err, setErr] = useState(false);

    function submitlogin(e) {
        e.preventDefault();
        setIs_Loading(true)
        instance.post('auth/login', {
            registartion_number: registartion_number,
            password: password
        }).then(async (response) => {
            const userd = response.data.user;
            localStorage.setItem('user', JSON.stringify(userd))
            navigate('/dashboard')
        }).catch(error => {
            console.log(error.message)
            setIs_Loading(false)
            setErr(true)

        })
    }
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            {
                is_Loading && (
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )
            }
            {
                !is_Loading && (
                    <form className="w-50" onSubmit={submitlogin}>
                        {
                            err && (
                                <div class="alert alert-danger" role="alert">
                                    Please Verify your Credentials
                                </div>
                            )
                        }
                        <div className="">
                            <label htmlFor="registartion_number" className="form-label">Registration number:</label>
                            <input type="text" className="form-control" id="registartion_number"
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

                        <button type="submit" className="btn btn-primary btn-block m-4">Sign in</button>
                    </form>
                )
            }
        </div>
    )
}

export default Login;