import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Details = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();
  console.log(serviceId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:8000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Ordered Successfully!");
      });
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <>
      <h1>Property Details</h1>
      <div className="">
        <div className="details-container my-3 background">
          <div className="row container">
            <div className="col-md-6">
              <div className="card property1 rounded w-75 h-75 p-3 m-5">
                <img className="w-100 h-50" src={service.imageURL} alt="" />
                <h3>{service?.name}</h3>
                <p>{service?.description}</p>
                <h1>Price: {service?.price}</h1>
              </div>
            </div>
            <div className="col-md-6 my-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={service?.name}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("description")}
                  defaultValue={service?.description}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  defaultValue={service?.imageURL}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={service?.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />
                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />
                {/* <Alert severity="success">Added successfully!</Alert> */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  type="submit"
                  value="Order now"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
