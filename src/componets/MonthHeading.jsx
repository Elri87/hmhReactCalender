"use client";
//Component for the Month Name Heading + Arrow buttons
import months from "@/lib/months.js";
import { useState } from "react";

//Destructure chosenMonth +
export default function MonthHeading({ chosenMonth, setChosenMonth }) {
  // monthCount is num 0-11 to index through array, real month is actual 1-12 to be used on validate
  const [monthCount, setMonthCount] = useState(0);
  const [exactMonth, setExactMonth] = useState(0);

  //function to go to previous month
  function handlePreviousMonth() {
    let prevMonth = monthCount - 1;
    setMonthCount(prevMonth);
    setExactMonth(exactMonth - 1);
  }

  //function to go to next month
  function handleNextMonth(e) {
    let nextMonth = monthCount + 1;
    setMonthCount(nextMonth);
    setExactMonth(exactMonth + 1);
  }
  //console.log(setExactMonth);

  return (
    <div id="month-container">
      <button
        onClick={handlePreviousMonth}
        className={monthCount === 0 ? "disabledBtn" : null}
        disabled={monthCount === 0 ? true : false}
      >
        ⇦
      </button>
      <h2>{chosenMonth[monthCount]}</h2>
      <button
        onClick={handleNextMonth}
        className={monthCount === 11 ? "disabledBtn" : null}
        disabled={monthCount === 11 ? true : false}
      >
        ⇨
      </button>
    </div>
  );
}
