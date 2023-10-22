import React from "react";
import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help"
  ];

  const linkTexts = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help"
  ];

  const icons = [
    "fas fa-user",
    "fas fa-tachometer-alt",
    "fas fa-book",
    "far fa-calendar-alt",
    "fas fa-inbox",
    "fas fa-history",
    "fas fa-network-wired",
    "fas fa-arrow-circle-right",
    "fas fa-question"
  ];

  const { pathname } = useLocation();

  return (
    <div className="container.fluid d-none d-sm-none d-md-block wd-width-75px wd-center-text">
      <div className="wd-flex-col-container wd-width-75px wd-darkbg-height">
        <div className="wd-paddingtop-10p wd-paddingbottom-10p">
          <i className="wd-fontcolor-red fab fa-neos fa-3x"></i>
        </div>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`wd-link-white wd-paddingtop-6p wd-paddingbottom-6p ${pathname.includes(link) ? "wd-lightbg" : ""
              }`}
          >
            <div className={`wd-paddingtop-6p wd-fontcolor-red ${icons[index]} fa-2x`}></div>
            <br />
            <span className="wd-leftnav-fontsize-12px wd-word-wrap">
              {linkTexts[index]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default KanbasNavigation;
