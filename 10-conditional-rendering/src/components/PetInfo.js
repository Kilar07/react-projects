import React from "react";

const PetInfo = (props) => {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don\'t have any pet";
  return (
    <h1>
      {text}
    </h1>
  );
};

export default PetInfo;
