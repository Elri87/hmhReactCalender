"use client";

import { useState, useEffect } from "react";

export default function CalendarDisplay({
  daysArray,
  setDaysArrays,
  ifClickedOn,
  setIfClickedOn,
  chosenYear,
  setChosenYear,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  //form
  const [inputTask, setInputTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  //function to generate days for the month and year
  const generateDays = (date) => {
    let arrayOfDays = [];
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let day = new Date(currentYear, currentMonth, 1);
    let daysInMonth = [];
    while (day.getMonth() === currentMonth) {
      daysInMonth.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    arrayOfDays.push({
      year: currentYear,
      month: currentMonth,
      days: daysInMonth,
    });
    setDays(arrayOfDays);
  };

  useEffect(() => {
    generateDays(currentDate);
  }, [currentDate]);

  function handleChosenDay(e) {
    if (ifClickedOn === false) {
      e.target.className = "day-box selectedDay";
      setIfClickedOn(true);
    } else {
      let parent = [...e.target.parentElement.children];
      for (let i = 0; i < parent.length; i++) {
        if (parent[i].className === "day-box selectedDay") {
          e.target.parentElement.children[i].className = "day-box";
        }
      }
      e.target.className = "day-box selectedDay";
    }
  }

  return (
    <div id="calender-container">
      {daysArray
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((box) => {
          return (
            <div className="day-box" onClick={handleChosenDay} key={box.id}>
              <p key={box.id}>{box.day}</p>
            </div>
          );
        })}
    </div>
  );
}
