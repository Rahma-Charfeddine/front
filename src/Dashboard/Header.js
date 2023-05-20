/******** Added********* */


import React from "react"
import { Link } from "react-router-dom";

function Header({ setToggled }) {

  return (
    <React.Fragment>
      <div id="navbar-wrapper">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" id="sidebar-toggle" onClick={() => {
                setToggled(prev => {
                  return !prev;
                })
              }}><i className="bi bi-menu-button-fill"></i></Link>
            </div>
          </div>
        </nav>
      </div >
    </React.Fragment >



  )

}
export default Header





