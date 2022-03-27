import React from "react";
import "./Header.css";
import { Label } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.JPG";

// search
import { MDBCol, MDBIcon } from "mdbreact";
import { MdOutlineSavedSearch } from "react-icons/md";
import {  Button } from 'react-bootstrap';

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/" className="thumb-link">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <nav className="navbarformat">
        {props.entries > 0 && <Label bsStyle="success">{props.entries}</Label>}
        <Link className="navlink" to="/Exhebition">
        فروشگاه سه بعدی(3D)
        </Link>
        <Link className="navlink" to="/admin">
        ورود/عضویت
        </Link>
        <MDBCol md="6">
          <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
            <div className="searchbox">
              <input
                className="form-control form-control-sm ml-5 w-92"
                type="text"
                placeholder="جستجو..."
                aria-label="Search"
              />
              <Button className="searchbutton">
                <MdOutlineSavedSearch className="searchicon" />
              </Button>
            </div>
          </form>
        </MDBCol>
      </nav>
    </header>
  );
};

export default Header;
