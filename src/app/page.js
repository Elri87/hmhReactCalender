"use client";
import { useState } from "react";
import styles from "./page.module.css";
//import lib files
import days from "@/lib/days.js";
import months from "@/lib/months.js";
//import componenets
import MonthHeading from "@/componets/MonthHeading.jsx";
import YearHeading from "@/componets/YearHeading.jsx";
import CalendarDisplay from "@/componets/CalendarDisplay.jsx";
import Form from "@/componets/Form.jsx";
import Footer from "@/componets/Footer.jsx";

export default function Home() {
  //State Variables

  const [chosenMonth, setChosenMonth] = useState(months);
  const [chosenYear, setChosenYear] = useState(2023);
  //day Array 31, 30, 28/29 days from lib/months
  const [daysArray, setDaysArray] = useState(days);

  const [ifClickedOn, setIfClickedOn] = useState(false);

  //form;
  const [inputTask, setInputTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  //to be used to add text to a chosen day
  const [chosenDay, setChosenDay] = useState(0);

  return (
    <div>
      <h1>Dairy</h1>

      <MonthHeading chosenMonth={chosenMonth} />
      <YearHeading chosenYear={chosenYear} setChosenYear={setChosenYear} />
      <CalendarDisplay daysArray={daysArray} setDaysArrays={setDaysArray} />
      <Form
        inputTask={inputTask}
        setInputTask={setInputTask}
        taskArray={taskArray}
        setTaskArray={setTaskArray}
        chosenDay={chosenDay}
      />
      <Footer />
    </div>
  );
}

/* inputTask={inputTask}
        setInputTask={setInputTask}
        taskArray={taskArray}
        setTaskArray={setTaskArray}*/
