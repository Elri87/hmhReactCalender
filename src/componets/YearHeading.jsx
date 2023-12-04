"use client";
export default function YearHeading({ chosenYear, setChosenYear }) {
  //both function to either add or minus a year
  function handlePreviousYear() {
    // typeof operator returns " object " for arrays
    if (typeof chosenYear === "number") {
      setChosenYear(chosenYear - 1);
    }
  }
  function handleNextYear() {
    if (typeof chosenYear === "number") {
      setChosenYear(chosenYear + 1);
    }
  }
  return (
    <div id="year-container">
      <button onClick={handlePreviousYear}>⇦</button>
      <h2>{chosenYear}</h2>
      <button onClick={handleNextYear}>⇨</button>
    </div>
  );
}
