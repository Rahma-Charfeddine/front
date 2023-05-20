import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import OverView from "./OverView";
import Data from "./Data";


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
                    <Route path="/tasks" element={<div>tasks component to do</div>} />
                    <Route path="/settings" element={<div>settings component to do</div>} />
                    <Route path="/users" element={<div>users component to do</div>} />
                    <Route path="/responsabilities" element={<div>responsabilities component to do</div>} />
                    <Route path="/evaluation" element={<div>evaluation component to do</div>} />
                </Routes>
            </div>
        </React.Fragment >
    );
}

export default Dashboard;
