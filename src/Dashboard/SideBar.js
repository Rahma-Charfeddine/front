import React from "react"
import { Link } from "react-router-dom"

function SideBar({ toggled }) {
    return (
        <React.Fragment>

            <aside id="sidebar-wrapper">

                {
                    (toggled && <div class="m-1 py-3 d-flex justify-content-center" >
                        <img src="/Dlogo.png" style={{ maxWidth: '50px' }} alt="logo" className="w-75" />
                    </div>)
                    || <div class="sidebar-brand m-1"><img src="/logo.webp" alt="logo" className="w-75" />
                    </div>
                }
                <ul class="sidebar-nav m-1">
                    <li class="active">
                        <Link class="nav-link active" aria-current="page" to="/dashboard">
                            <i class="bi bi-house-door-fill"></i>&nbsp; &nbsp;
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/dashboard/data">
                            <i class="bi bi-bar-chart-steps"></i>&nbsp; &nbsp;
                            Data
                        </Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/dashboard/responsabilities">
                            <i class="bi bi-list-task"></i>&nbsp; &nbsp;
                            Responsabilities
                        </Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/dashboard/users">
                            <i class="bi bi-people-fill"></i>&nbsp; &nbsp;
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/dashboard/settings">
                            <i class="bi bi-layers"></i>&nbsp; &nbsp;
                            Settings
                        </Link>
                    </li>
                </ul>
            </aside>


        </React.Fragment >
    )
}
export default SideBar