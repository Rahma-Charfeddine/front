/******** Added********* */


import React from "react"
import { Link } from "react-router-dom";

function Header({ setToggled }) {

  return (
    <React.Fragment>
      <div id="navbar-wrapper">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <Link class="navbar-brand" id="sidebar-toggle" onClick={() => {
                setToggled(prev => {
                  return !prev;
                })
              }}><i class="bi bi-menu-button-fill"></i></Link>
            </div>
          </div>
        </nav>
      </div >
    </React.Fragment >



  )

}
export default Header





