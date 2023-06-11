import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../axiosInstance";

function NewUser() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({});

    function savechanges(e) {
        e.preventDefault()
        console.log(user)
        instance.post('user', user)
            .then(response => {
                alert("changed correctli :) done");
                navigate("/dashboard/users");
            })
            .catch(err => {
                console.log(err);
                alert("something went wrong");
            })
    }

    return (
        <React.Fragment>
            <div className="container-fluid text-center pt-4">
                <h3>Create New User</h3>
            </div>
            <div className="p-5 m-5">
                <form className="needs-validation" noValidate="" onSubmit={savechanges}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="firstName" defaultValue={user?.name} required={true} onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        name: e.target.value
                                    })
                                })
                            }} />
                            <div className="invalid-feedback">
                                Valid name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Family name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" defaultValue={user?.family_name} required={true} onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        family_name: e.target.value
                                    })
                                })
                            }} />
                            <div className="invalid-feedback">
                                Valid family name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Tel Number</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" defaultValue={user?.nTel} required={true} onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        nTel: e.target.value
                                    })
                                })
                            }} />
                            <div className="invalid-feedback">
                                Valid Tel number is required.
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" defaultValue={user?.email} required={true} onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        email: e.target.value
                                    })
                                })
                            }} />
                            <div className="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="you@example.com" defaultValue={user?.password} required={true} onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        password: e.target.value
                                    })
                                })
                            }} />
                            <div className="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="date" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="date" defaultValue={user?.dateOfBirth?.substring(0, 10)} required={true} onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        dateOfBirth: e.target.value
                                    })
                                })
                            }} />
                            <div className="invalid-feedback">
                                Please enter a valid Date of birth.
                            </div>
                        </div>

                        

                        <div className="my-3">
                            <h5 className="mb-3">Gender</h5>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" checked={user?.gender === "Male"} id="male" name="gender" onClick={(e) => { setUser(previous => { return ({ ...previous, gender: 'Male' }) }) }} />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>

                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="female" name="gender" checked={user?.gender === "Female"} onClick={(e) => { setUser(previous => { return ({ ...previous, gender: 'Female' }) }) }} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="date" className="form-label">Registartion Number</label>
                            <input type="text" className="form-control" id="date" defaultValue={user?.registartion_number ? user?.registartion_number : ""} required={true} onChange={(e) => { setUser(prev => ({ ...prev, registartion_number: e.target.value })) }} />
                        </div>

                        <div className="col-6">
                            <label htmlFor="date" className="form-label">Department</label>
                            <input type="text" className="form-control" id="date" defaultValue={user?.department ? user?.department : ""} required={true} onChange={(e) => { setUser(prev => ({ ...prev, department: e.target.value })) }} />
                        </div>

                        <div className="my-3">
                            <h5 className="mb-3">Role</h5>

                            <div className="form-check">
                                <input id="Board" name="role" type="radio" checked={user?.is_board_member} className="form-check-input" required={true} onClick={(e) => {
                                    setUser(previous => {
                                        return ({
                                            ...previous,
                                            is_admin: false,
                                            is_dep_manager: false,
                                            is_board_member: true,
                                        })
                                    })
                                }} />
                                <label className="form-check-label" htmlFor="Board">Board Member</label>
                            </div>

                            <div className="form-check">
                                <input id="manager" name="role" type="radio" checked={user?.is_dep_manager} className="form-check-input" required={true} onClick={(e) => {
                                    setUser(previous => {
                                        return ({
                                            ...previous,
                                            is_admin: false,
                                            is_dep_manager: true,
                                            is_board_member: false,
                                        })
                                    })
                                }} />
                                <label className="form-check-label" htmlFor="manager">Dep manager</label>
                            </div>

                            <div className="form-check">
                                <input id="Admin" name="role" type="radio" checked={user?.is_admin} className="form-check-input" required={true} onClick={(e) => {
                                    setUser(previous => {
                                        return ({
                                            ...previous,
                                            is_admin: true,
                                            is_dep_manager: false,
                                            is_board_member: false,
                                        })
                                    })
                                }} />
                                <label className="form-check-label" htmlFor="Admin">Admin</label>
                            </div>
                        </div>

                        {/* // checkboxes ..  for roles  // react select forthe gender selction // input datte of birth  */}

                        <button className="w-100 btn btn-outline-primary btn-lg" type="submit">Add New User</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default NewUser;