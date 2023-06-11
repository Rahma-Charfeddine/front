import React from "react";
import {  Route, Routes } from "react-router-dom";
import Table from "./table";
import EditUser from "./EditUser";
import NewUser from "./NewUser";

function Users() {



    return (
        <React.Fragment>
            <div className="container">
                
                <Routes>
                    <Route path="/" element={<Table />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                    <Route path="/new" element={<NewUser />} />
                </Routes>
            </div>

        </React.Fragment>
    )
}

export default Users;