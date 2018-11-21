import React from "react";

const DisplayBand = props => {
  return (
    <div>
      <img id="image" src={props.artistData.thumb_url} alt="" />
      {props.eventData.map(info => {
        return (
          <li className="band-info" key={info.id}>{`${info.datetime} - ${
            info.venue.name
          }, ${info.venue.city} ${info.venue.region}`}</li>
        );
      })}
    </div>
  );
};

export default DisplayBand;
