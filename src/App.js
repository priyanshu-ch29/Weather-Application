import React, { useState, useEffect } from "react";
import Weather from "./Weather";

const App = () => {
  // ----------- getdates and getMonths
  const monthsName = [
    "Jan",
    "feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemeber",
    "October",
    "November",
    "December",
  ];
  const daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    " Thurday",
    "Friday",
    "Saturday",
  ];

  // ------------ for fetching time details
  let time = new Date().toLocaleDateString();
  const [Time, setTime] = useState(time);

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }, 1000);

  let dates = new Date();
  let getMonth = dates.getMonth();
  let getDay = dates.getDay();

  //----------------------------------------------

  const loadData = () => {
    alert("sssss");
  };
 
  return (
    <>
      <Weather
        monthsName={monthsName}
        daysName={daysName}
        dates={dates}
        getMonth={getMonth}
        getDay={getDay}
        Time={Time}
      />
    </>
  );
};

export default App;
