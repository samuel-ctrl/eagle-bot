import { useState } from "react";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import Style from "./model.module.css";
import { GoldenButton } from "../button/CustomButton";
import { getIconBySeverity } from "../Utils";

export const WaitListModel = ({ open, handleClose, OnSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = (event) => {
    setIsLoading(true);
    OnSubmit(event, reset, setIsLoading);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={Style.modalContainer}>
        <h2>Enter Your Information</h2>
        <form
          noValidate
          className={Style.popupForm}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className={Style.input}>
            <input
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "First name should contain only letters",
                },
                minLength: {
                  value: 2,
                  message: "First name should be at least 2 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "First name should not exceed 30 characters",
                },
              })}
            />
            {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              placeholder="Last name"
              {...register("lastName", {
                required: "Last name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Last name should contain only letters",
                },
                minLength: {
                  value: 2,
                  message: "Last name should be at least 2 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Last name should not exceed 30 characters",
                },
              })}
            />
            {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
          </div>
          <div className={Style.input}>
            <input
              placeholder="Email"
              autoComplete="off"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>

          <GoldenButton
            type={"submit"}
            className={Style.sendBtn}
            buttonName={"JOIN"}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Modal>
  );
};

export const SubscribModel = ({ open, handleClose, OnSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = (event) => {
    setIsLoading(true);
    OnSubmit(event, reset, setIsLoading);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={Style.modalContainer}>
        <h2>Subscribe To Our Monthly Newsletter</h2>
        <form
          noValidate
          className={Style.popupForm}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className={Style.input}>
            <input
              placeholder="Enter your email here"
              autoComplete="off"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>

          <GoldenButton
            type={"submit"}
            buttonName={"Submit"}
            className={Style.submitButton}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Modal>
  );
};

export const CustomizedSnackbar = ({
  handleClose,
  open,
  alertContent,
  alertType,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={alertType}
        sx={{ width: "100%" }}
        icon={getIconBySeverity(alertType)}
      >
        {alertContent}
      </MuiAlert>
    </Snackbar>
  );
};
