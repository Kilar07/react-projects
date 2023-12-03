import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const ChangeUser = () => {
  const [data, setData] = useState("");

  const FormSubmit = (event) => {
    event.preventDefault();
    if (data) {
      setUser(data);
      setData("");
    }
  };

  const InputChange = (e) => {
    setData(e.target.value);
  };

  const { setUser } = useContext(UserContext);
  return (
    <form onSubmit={FormSubmit}>
      <input type="text" value={data} onChange={(e) => InputChange(e)} />
      <button type="submit">Change user</button>
    </form>
  );
};

export default ChangeUser;
