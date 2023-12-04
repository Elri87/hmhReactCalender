"use client";

import { useState } from "react";

export default function MonthYear() {
  const [months, setMonth] = useState([
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
  ]);

  const [years, setYear] = useState(2023);
  const [monthCount, setMonthCount] = useState(0);
  const [exactMonth, setExactMonth] = useState(0);

  const currentDate = new Date();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth()
  );

  const [currentYearIndex, setCurrentYearIndex] = useState(
    years.findIndex((y) => y.year === currentDate.getFullYear())
  );

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
