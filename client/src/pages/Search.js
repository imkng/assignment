import axios from "axios";
import React, { useState } from "react";

const Search = () => {
  const [email, setEmail] = useState();
  const [response, setResponse] = useState();
  const handleChange = (e) => {
    // e.preventDefault();[]
    setEmail(e.target.value );
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(email)
      const res = await axios.post("http://localhost:8801/users/search", {
        email: email
      });
      // console.log(res.data);
      setResponse(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Find user by email</h1>
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
      />
      <button className="formButton" onClick={handleClick}>
        Find
      </button>
      {/* <div>{response}</div> */}
    </div>
  );
};

export default Search;
