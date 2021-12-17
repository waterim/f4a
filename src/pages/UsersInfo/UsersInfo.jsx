import React, { useState, useEffect } from "react";
import "./UsersInfo";
import UserTable from "../../components/UserTable/UserTable.jsx";
import axios from "../../API/axiosInstance";
import { Link } from "react-router-dom";

const UsersInfo = () => {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState();

  const getUsers = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setUsers(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers("/public/v1/users");
  }, []);
  return (
    <div>
      <h1 className="header">All users</h1>
      <Link to="/">Add user</Link>
      <UserTable users={users} loading={loading} getUsers={getUsers} />
    </div>
  );
};

export default UsersInfo;
