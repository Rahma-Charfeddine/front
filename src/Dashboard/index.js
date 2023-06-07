import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import OverView from "./OverView";
import Data from "./Data";
import Users from "./Users";


function Dashboard() {

    const [toggled, setToggled] = useState(false)


    
    return (
        <React.Fragment>
            <div className={toggled ? "toggled" : ""} id="wrapper">
                <SideBar toggled={toggled} />
                <Header setToggled={setToggled} />
                <Routes>
                    <Route path="/" element={<OverView />} />
                    <Route path="/data/*" element={<Data/>} />
                    <Route path="/tasks" element={<div>tasks component to do // department manager</div>} />
                    <Route path="/allmissions" element={<div>tasks component to do // admin</div>} />
                    <Route path="/settings" element={<div>settings component to do // admin</div>} /> 
                    <Route path="/users/*" element={<Users />} />
                   <Route path="/MGevaluation" element={<div>evaluation component to do // department manager redaction du rapport</div>} />
                </Routes>
            </div>
        </React.Fragment >
    );
}

export default Dashboard;
