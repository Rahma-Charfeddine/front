import React from "react"
import { Link } from "react-router-dom"

function SideBar({ toggled }) {
    return (
        <React.Fragment>

            <aside id="sidebar-wrapper">

                {
                    (toggled && <div className="m-1 py-3 d-flex justify-content-center" >
                        <img src="/Dlogo.png" style={{ maxWidth: '50px' }} alt="logo" className="w-75" />
                    </div>)
                    || <div className="sidebar-brand m-1"><img src="/logo.webp" alt="logo" className="w-75" />
                    </div>
                }
                <ul className="sidebar-nav m-1">
                    <li className="active">
                        <Link className="nav-link active" aria-current="page" to="/dashboard">
                            <i className="bi bi-house-door-fill"></i>&nbsp; &nbsp;
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/dashboard/data">
                            <i className="bi bi-bar-chart-steps"></i>&nbsp; &nbsp;
                            Data
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/dashboard/tasks">
                            <i className="bi bi-list-task"></i>&nbsp; &nbsp;
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/dashboard/managreview">
                            <i className="bi bi-journals"></i>&nbsp; &nbsp;
                            Management Review
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/dashboard/users">
                            <i className="bi bi-people-fill"></i>&nbsp; &nbsp;
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/dashboard/settings">
                            <i className="bi bi-layers"></i>&nbsp; &nbsp;
                            Settings
                        </Link>
                    </li>
                </ul>
            </aside>


        </React.Fragment >
    )
}
export default SideBar