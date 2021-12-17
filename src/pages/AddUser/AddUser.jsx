import React, { useState } from "react";
import "./AddUser.scss";
import { useDispatch } from "react-redux";
import axios from "../../API/axiosInstance";
import { SubmissionError, reset } from "redux-form";
import AddForm from "../../components/UserForms/AddForm";
import { useNavigate, Link } from "react-router-dom";

const AddUser = (props) => {
    const [errors, setErrors] = useState()
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setLoading(true);
    return axios
      .post("/public/v1/users", data)
      .then((res) => {
        setLoading(false);
        dispatch(reset("addUserForm"));
        navigate('/allUsers')
      })
      .catch((err) => {
        setLoading(false);
        
        setErrors(`${err.response.data.data[0].field} ${err.response.data.data[0].message}`)
        console.log("Error during uploading new data: ", err);
        if (err.response.data) {
          throw new SubmissionError(err.response.data);
        }
      });
  };

  return (
    <div className="addUserFormContainer">
      <h1 className="header">Add user</h1>
      <Link to="/allUsers">All users</Link>
      <AddForm onSubmit={onSubmit} loading={loading} />
      {errors && <h4 style={{color: 'red', textAlign: "center"}}>{errors}</h4>}
    </div>
  );
};

export default AddUser;
