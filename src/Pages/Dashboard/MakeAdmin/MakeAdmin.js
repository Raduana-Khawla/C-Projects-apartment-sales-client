import React, { useState } from "react";
import { Alert } from "@mui/material";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          console.log(result);
          setSuccess(true);
        }
      });

    console.log(data);
  };
  return (
    <div className="bg my-5 p-5">
      <h1>Make an Admin</h1>
      <h6>Admin can make an Admin.He\She has the power</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
