import React, { useEffect, useState } from "react";
import "./EditUser.scss";
import EditForm from "../../components/UserForms/EditForm";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "../../API/axiosInstance";
import { SubmissionError, reset } from "redux-form";

const EditUser = (props) => {
  const [errors, setErrors] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState();
  const [loadingSubmit, setLoadingSubmit] = useState();
  let { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUser = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setUserData(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  const onSubmit = (data) => {
    setLoadingSubmit(true);
    return axios
      .put(`/public/v1/users/${data.id}`, data)
      .then((res) => {
        setLoadingSubmit(false);
        dispatch(reset("editUserForm"));
        navigate("/allUsers");
      })
      .catch((err) => {
        setLoading(false);
        setErrors(
          `${err.response.data.data[0].field} ${err.response.data.data[0].message}`
        );
        console.log("Error during updating data: ", err);
        if (err.response.data) {
          throw new SubmissionError(err.response.data);
        }
      });
  };

  useEffect(() => {
    getUser(`/public/v1/users/${id}`);
  }, [id]);
  return (
    <div className="addUserFormContainer">
      <h1 className="header">Edit user</h1>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <EditForm
          onSubmit={onSubmit}
          loading={loadingSubmit}
          userData={userData}
          initialValues={userData}
        />
      )}
      {errors && (
        <h4 style={{ color: "red", textAlign: "center" }}>{errors}</h4>
      )}
    </div>
  );
};

export default EditUser;
