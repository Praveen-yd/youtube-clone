import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function Header({ inputSearch, setInputSearch }) {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__icon" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__middle">
        <SearchBar inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <KeyboardVoiceRoundedIcon className="header__icon" />
      </div>
      <div className="header__right">
        <VideoCallOutlinedIcon className="header__icon" />
        <NotificationsNoneRoundedIcon className="header__icon" />

        <AccountCircleRoundedIcon className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
