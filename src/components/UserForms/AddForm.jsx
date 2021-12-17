import React from "react";
import "./UserForm.scss";
import {
  Field,
  reduxForm,
  change,
  untouch,
} from "redux-form";
//validators
import { required } from "../../utils/validators";
//form controls
import { renderFieldInput } from "../common/FormControls";
const AddForm = ({
  dispatch,
  handleSubmit,
  submitting,
  invalid,
  pristine,
  loading,
}) => {

  const resetFields = (formName, fieldsObject) => {
    Object.keys(fieldsObject).forEach((fieldKey) => {
      //reset the field's value
      dispatch(change(formName, fieldKey, fieldsObject[fieldKey]));

      //reset the field's error
      dispatch(untouch(formName, fieldKey));
    });
  };

  const handleCancelButton = (formName) => {
    return () => {
      resetFields(formName, {
        name: "",
        email: "",
        gender: "",
        status: "",
      });
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
        <Field name="gender" component="select" required validate={[required]} >
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
  form: "addUserForm",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(AddForm);
