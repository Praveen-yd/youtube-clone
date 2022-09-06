import { Avatar } from "@mui/material";
import React from "react";
import "./SearchVideoCard.css";

function Videocard({ image, title, channel, channelImage, views, timestamp }) {
  return (
    <div className="videocard">
      <img className="videocard__thumbnail" src={image} alt="" />
      <div className="videocard__info">
        <Avatar
          className="videocard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}
            {"  "}
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
