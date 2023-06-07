import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

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


            <table align="center" style={{ borderCollapse: 'separate', borderSpacing: ' 0 20px' }}>
                <thead>
                    <tr>
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
                            <td style={{ maxWidth: '250px' }}>{user.family_name}</td>
                            <td style={{ maxWidth: '250px' }}>{user.name}</td>
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