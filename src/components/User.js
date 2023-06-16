import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Typography,
  Avatar,
  ListItemAvatar,
  Button,
} from "@mui/material";
// import { UsersData } from "../share/ListOfUser";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../features/Users";

const User = () => {
  // const [editingId, setEditingId] = useState("");
  // const [updatedUsername, setUpdatedUsername] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState("");

  // const handleEditClick = (userId, username) => {
  //   setEditingId(userId);
  //   setUpdatedUsername(username);
  // };

  // const handleUpdateUser = () => {
  //   if (updatedUsername.trim() !== "") {
  //     updateUser(editingId, updatedUsername);
  //     setEditingId("");
  //     setUpdatedUsername("");
  //   }
  // };

  return (
    <List>
      {userList.map((user) => (
        <ListItem key={user.id}>
          <>
            <Grid container alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle1">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.name}
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  id=""
                  label="Type new your username"
                  variant="standard"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </Grid>
              <Grid item>
                <IconButton
                  edge="end"
                  // onClick={() => handleEditClick(user.id, user.username)}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      );
                    }}
                  >
                    UPDATE
                  </Button>
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </>
        </ListItem>
      ))}
    </List>
  );
};

export default User;
