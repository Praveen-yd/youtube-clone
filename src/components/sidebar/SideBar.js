import React from "react";
import "./SideBar.css";
import SidebarRow from "./sidebarRow/SidebarRow";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" />
      <SidebarRow Icon={ExploreOutlinedIcon} title="Explore" />
      <SidebarRow Icon={SlowMotionVideoOutlinedIcon} title="Shorts" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
    </div>
  );
}

export default SideBar;
