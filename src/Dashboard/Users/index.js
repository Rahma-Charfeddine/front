import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./table";
import EditUser from "./EditUser";

function Users() {



    return (
        <React.Fragment>
            <Routes>
                <Route path="/edit/:id" element={<EditUser />} />
                <Route path="/" element={<Table />} />
            </Routes>
        </React.Fragment>
    )
}

export default Users;