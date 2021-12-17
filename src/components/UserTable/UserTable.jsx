import React from "react";
import "./UserTable.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "../../API/axiosInstance";

import {Table, Paper,TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const UserTable = ({ users, loading, getUsers }) => {
  const handleDelete = (id) => {
    return () => {
      axios
        .delete(`/public/v1/users/${id}`)
        .then((res) => {
          getUsers("/public/v1/users");
        })
        .catch((err) => console.error(err));
    };
  };

  if (loading) {
    return <h1>LOADING...</h1>;
  }
  return (
    <TableContainer sx={{marginTop: '20px'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Edit</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users &&
          users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/edit/${user.id}`}>
                  <EditIcon />
                </Link>
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              <TableCell align="right">
                <button onClick={handleDelete(user.id)}>
                  <DeleteIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
};

export default UserTable;
