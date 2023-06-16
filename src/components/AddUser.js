import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';
const AddUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && name) {
      // addUser({ username, name });
      setUsername("");
      setName("");
      alert("User added successfully!");
      dispatch(addUser({id: 0, name: name, username: username}));
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          className="button"
          variant="contained"
          color="primary"
          type="submit"
          // onClick={()=> {
          //   dispatch(addUser({id: 0, name: name, username: username}));
          //   }}
        >
          Add User
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
