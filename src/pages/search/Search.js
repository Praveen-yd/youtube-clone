import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import SearchVideoCard from "./SearchVideoCard";
import SearchPlaylistCard from "./SearchPlaylistCard";
import SearchChannelCard from "./SearchChannelCard";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./Search.css";

function Search({ inputSearch }) {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "553c5abdefmshfdc928b9c5ea597p15b3c6jsn15c3a4a0253c",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    fetch(`https://youtube138.p.rapidapi.com/search/?q=${inputSearch}`, options)
      .then((response) => response.json())
      .then((response) => {
        setSearchData(response.contents);
        console.log(response);
      })
      .catch((err) => console.error("error:" + err));
  }, [inputSearch]);

  return (
    <div className="search">
      <SideBar />
      <div className="searchbox">
        <div className="search__filter">
          <TuneOutlinedIcon />
          <h2>FILTERS</h2>
        </div>
        <hr />
        {searchData &&
          searchData.map((data) => {
            if (data.type === "video") {
              return (
                <SearchVideoCard
                  image={data.video.thumbnails[0].url}
                  title={data.video.title}
                  channel={data.video.author.title}
                  channelImage={data.video.author.avatar[0].url}
                  views={data.video.stats.views}
                  timestamp={data.video.publishedTimeText}
                  discription={data.video.descriptionSnippet}
                />
              );
            } else if (data.type === "playlist") {
              return (
                <SearchPlaylistCard
                  image={data.playlist.thumbnails[0].url}
                  title={data.playlist.title}
                  channel={data.playlist.author.title}
                  // channelImage={data.playlist.author.avatar[0].url}
                  // views={data.playlist.stats.views}
                  // timestamp={data.playlist.publishedTimeText}
                  // discription={data.playlist.descriptionSnippet}
                />
              );
            } else {
              <SearchChannelCard title={data.channel.title} />;
            }
          })}
      </div>
    </div>
  );
}

export default Search;
