//npm uuid to create unique keys
//npm i uuidv4
import { v4 as uuidv4 } from "uuid";

const days = [];

//map through unique keys
for (let i = 1; i < 32; i++) {
  let object = {
    //adding unique id to each day of the month
    id: uuidv4(),
  };
  //for number less than 10 add a 0 - String
  if (i < 10) {
    let stringI = `0${i}`;
    object.day = stringI;
  } else {
    object.day = i;
  }
  //push new id
  days.push(object);
}

export default days;
