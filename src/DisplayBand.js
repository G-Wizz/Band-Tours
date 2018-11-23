import React from "react";
import styled from "styled-components";
import DateTimeFormat from "./DateTimeFormat";

const DisplayBand = props => {
  return (
    <div>
      {props.artistData.thumb_url && (
        <ArtistImage src={props.artistData.thumb_url} alt="" />
      )}
      {props.eventData.map(info => {
        return (
          <EventInfo key={info.id}>
            <DateTimeFormat dateTime={info.datetime} />{" "}
            {`${info.venue.name}, ${info.venue.city} ${info.venue.region}`}
          </EventInfo>
        );
      })}
    </div>
  );
};

export default DisplayBand;

const ArtistImage = styled.img`
  border: 1px solid black;
  box-shadow: 0 0 15px black;
  margin: 10px 0;
  margin-bottom: 20px;
`;

const EventInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Quicksand", sans-serif;
  margin: 5px 0;
  padding: 12px;
  width: 500px;
  border-bottom: 1px solid black;
  text-decoration: none;
`;
