import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";

function Table(params) {

    const navigate = useNavigate();



    const [users, setUsers] = useState([]);

    useEffect(() => {

        instance.get('user').then(response => {
            setUsers(response.data.data)
            console.log(response.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <React.Fragment>

            <div className="container-fluid d-flex justify-content-between align-items-center pt-5">
                <h5 className="text-primary">Users List :</h5>
                <div>
                    <Link to="/dashboard/users/new" className="btn btn-outline-primary">Add New User</Link>
                </div>
            </div>
            <table className="table table-responsive-lg table-striped table-bordered mt-5 ">
                <thead>
                    <tr className="table-primary">
                        <th>#</th>
                        <th>User Family Name</th>
                        <th>User Name</th>
                        <th>Departement</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id} style={{ cursor: "pointer" }} onClick={() => { navigate("/dashboard/users/edit/" + user._id) }}>
                            <td><span className="p-2">{index + 1}</span></td>
                            <td>{user.family_name}</td>
                            <td>{user.name}</td>
                            <td>{user.department || "--"}</td>
                            <td>{
                                (user.is_admin && "Admin") || (user.is_board_member && "Board Member") || (user.is_dep_manager && "Dep Manager") || "--"
                            }</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </React.Fragment>
    )
}

export default Table;