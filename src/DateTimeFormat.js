import React from "react";
import moment from "moment";

const DateTimeFormat = props => {
  const { dateTime } = props;
  return <p>{moment(dateTime).format("dddd, MMMM Do YYYY, h:mm a")}</p>;
};

export default DateTimeFormat;
