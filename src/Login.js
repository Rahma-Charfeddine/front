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
                    <form onSubmit={submitlogin} className="text-center">
                        <img class="mb-4" src="/logo.webp" style={{ filter: "invert()", maxWidth: '300px' }} alt="" />
                        {
                            err && (
                                <div class="alert alert-danger" role="alert">
                                    Please Verify your Credentials
                                </div>
                            )
                        }
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating m-2">
                            <input type="text" className="form-control" id="registartion_number"
                                defaultValue={registartion_number}
                                onChange={e => { setRegistartionNumber(e.target.value) }}
                            />
                            <label htmlFor="registartion_number">Registration number :</label>
                            <div className="invalid-feedback">Registration number is required.</div>
                        </div>
                        <div className="form-floating m-2">
                            <input type="password" className="form-control" id="password"
                                defaultValue={password}
                                onChange={e => { setPassword(e.target.value) }}
                            />
                            <label htmlFor="registartion_number">Password :</label>
                        </div>
                        <button class=" btn btn-lg btn-primary m-3" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted"> © 2023</p>
                    </form>
                )
            }
        </div>
    )
}

export default Login;