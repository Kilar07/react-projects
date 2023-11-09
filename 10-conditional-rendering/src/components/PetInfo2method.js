import React from "react";

const PetInfo2method = (props) => {
  const { animal, age, hasPet } = props;
  
  return (hasPet
    ? <h1>{`My ${animal} is ${age} years old`}</h1>
    : <h2>I don't have any pet</h2>
  );
};

export default PetInfo2method;
