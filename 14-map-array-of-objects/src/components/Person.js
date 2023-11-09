import React from "react";

const Person = ({ ID, FirstNameLastName, EmailAddress }) => {
  return (
    <div className="card">
      <h1>Id - {ID}</h1>
      <h1>name - {FirstNameLastName}</h1>
      <h2>email - {EmailAddress}</h2>
    </div>
  );
};

export default Person;
