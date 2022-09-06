import React from "react";
import "./SidebarRow.css";
function SidebarRow({ selected, Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon className={`sidebarRow__icon ${selected && "selected"}`} />
      <div className="sidebarRow__title">{title}</div>
    </div>
  );
}

export default SidebarRow;
