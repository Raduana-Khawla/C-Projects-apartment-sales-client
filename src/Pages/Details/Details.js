import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  // handleOpen=(data)=>{
  const onSubmit = (data) => {
    // handleOpen();
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    // setOpen(true);
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Added Successfully!
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <div>
        <div className="details-container">
          <div className="row container">
            <div className="col-md-6">
              <img className="w-50" src={service.imageURL} alt="" />
              <p>{service?.description}</p>
              <h1>{service?.name}</h1>
              <h1> {service?.price}</h1>
            </div>
            <div className="col-md-6">
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
