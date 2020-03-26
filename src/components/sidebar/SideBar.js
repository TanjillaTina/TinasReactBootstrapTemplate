import React from "react";
import SubMenu from "./SubMenu";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = props => (
  <div className={classNames("sidebar", { "is-open": props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Tinas React Bootstrap Template</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>
        <SubMenu title="Home" items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <span>Toggle Sidebar</span>About
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/about2"}>
            <span>Toggle Sidebar2</span>About2
          </NavLink>
        </NavItem>
        <SubMenu title="Pages2" items={submenus[2]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <span>Toggle Sidebar</span>Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <span>Toggle Sidebar</span>FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <span>Toggle Sidebar</span>Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1"
    },
    {
      title: "Home 2",
      target: "Home-2"
    },
    {
      itle: "Home 3",
      target: "Home-3"
    }
  ],
  [
    {
      title: "Page 1",
      target: "Page-1"
    },
    {
      title: "Page 2",
      target: "Page-2"
    }
  ],
  [
    {
      title: "Pagew 1",
      target: "Pagew-1"
    },
    {
      title: "Pagew 2",
      target: "Pagew-2"
    }
  ]
];

export default SideBar;
