import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import "./Section.css";
function Section() {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "553c5abdefmshfdc928b9c5ea597p15b3c6jsn15c3a4a0253c",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    fetch(
      "https://youtube138.p.rapidapi.com/search/?q=latest&hl=en&gl=US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setHomeData(response.contents);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="section">
      <div className="section__videocard">
        {homeData &&
          homeData.map((data) => {
            return (
              <Videocard
                image={data.video.thumbnails[0].url}
                title={data.video.title}
                channel={data.video.author.title}
                channelImage={data.video.author.avatar[0].url}
                views={data.video.stats.views}
                timestamp={data.video.publishedTimeText}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Section;
