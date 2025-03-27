import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  {pathnames.map((pname, index) => {
    breadcrumbPath += ` > ${pname}`;
  })}

  return (
    <div className="breadcrumb">
      <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home{breadcrumbPath}</Link>
    </div>
  );
}

export default Breadcrumb;