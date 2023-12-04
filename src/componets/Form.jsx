"use client";

import { useState } from "react";
export default function Form({
  chosenDay,
  inputTask,
  setInputTask,
  taskArray,
  setTaskArray,
}) {
  //form
  //const [inputTask, setInputTask] = useState("");
  //const [taskArray, setTaskArray] = useState([]);

  //handle input changes
  function handleChange(e) {
    //setTaskArray([...taskArray, e.target.value]);
    setInputTask(e.target.value);
    //console.log(inputTask);
  }

  //handle submit
  function handleSubmit(e) {
    e.preventDefault();
    if (inputTask.trim()) {
      setTaskArray([...taskArray, inputTask]);
      setInputTask("");
      let entry = {
        day: chosenDay,
        text: e.target[0].value,
      };

      //logic to check if an entry excist or not, add if not exsist
      let entryExists = false;
      //
      /*let updatedEntries = taskArray.map((existingEntry) => {
        if (existingEntry.day === entry.day) {
          entryExists = true;
          return { ...existingEntry, text: entry.text };
        }
        return existingEntry;
      });

      if (!entryExists) {
        updatedEntries.push(entry);
      }

      setTaskArray(updatedEntries);*/
    }
  }
  function handleDelete(key) {
    const updatedList = taskArray.filter((item) => item.id !== key);
    setTaskArray(updatedList);
  }

  console.log(inputTask);
  //handleSub
  return (
    <div className="note-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputTask}
          onChange={handleChange}
          className="notes-block"
          placeholder="Add a note"
        />

        <button type="submit" className="notes-button">
          Add Note
        </button>
      </form>
      <div className="notes-captured">
        <ul>
          {taskArray.map((inputTask, index) => (
            <li key={index}>{inputTask}</li>
          ))}
        </ul>
        <button id="delete-button" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
