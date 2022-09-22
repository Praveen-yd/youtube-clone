import React from "react";
import "./SearchVideoCard.css";
import { Avatar } from "@mui/material";
function SearchVideoCard({
  image,
  title,
  channel,
  channelImage,
  views,
  timestamp,
  discription,
}) {
  return (
    <div className="searchCard">
      <div>
        <img className="SearchCard__thumbnail" src={image} alt="" />
      </div>
      <div>
        <div className="SearchCard__info">
          <h4>{title}</h4>
          <p>
            {views}
            {" views . "}
            {timestamp}
          </p>
          <div className="avatar__info">
            <span>
              <Avatar
                alt={channel}
                src={channelImage}
                sx={{ width: 30, height: 30, margin: 1 }}
              />
            </span>
            <span>{channel}</span>
          </div>
          <div className="videocard__description">{discription}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchVideoCard;
