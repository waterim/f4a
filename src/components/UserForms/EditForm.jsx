import React from "react";
import "./UserForm.scss";
import {
  Field,
  reduxForm,
} from "redux-form";
import { useNavigate } from "react-router-dom";
//validators
import { required } from "../../utils/validators";
//form controls
import { renderFieldInput } from "../common/FormControls";

const EditForm = ({
  handleSubmit,
  submitting,
  invalid,
  pristine,
  loading,
  userData,
}) => {
  const navigate = useNavigate();
  const handleCancelButton = (formName) => {
    return () => {
        navigate('/allUsers');
    };
  };
  return (
    <form onSubmit={handleSubmit} className="addUserForm" noValidate>
      <div className="name">
        <Field
          name="name"
          component={renderFieldInput}
          type="text"
          label="Name"
          value={userData && userData}
          validate={[required]}
        />

      </div>
      <div className="email">
        <Field
          name="email"
          component={renderFieldInput}
          type="email"
          label="Email"
          validate={[required]}
        />
      </div>
      <div className="gender">
        <Field name="gender" component="select" required validate={[required]}>
          <option></option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Field>
      </div>
      <div className="status">
        <Field name="status" component="select" required validate={[required]}>
          <option></option>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </Field>
      </div>
      <div className="submitButton">
        <button type="submit" disabled={invalid || submitting || pristine}>
          {loading && <div className="loader"></div>}
          Submit
        </button>
        <button onClick={handleCancelButton()}>Cancel</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "editUserForm",
  enableReinitialize: true,
})(EditForm);
