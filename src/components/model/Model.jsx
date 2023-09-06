import * as React from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import Style from "./model.module.css";
import { GoldenButton } from "../button/CustomButton";

export const WaitListModel = ({ open, handleClose, OnSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = (event) => {
    OnSubmit(event);
    handleClose();
    reset();
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>

          <GoldenButton
            type={"submit"}
            buttonName={"JOIN"}
            style={{ padding: "10px 52px", marginTop: "1%" }}
          />
        </form>
      </div>
    </Modal>
  );
};

export const SubscribModel = ({ open, handleClose, OnSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = (event) => {
    OnSubmit(event);
    handleClose();
    reset();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={Style.modalContainer}>
        <h2>Subcription Form</h2>
        <form
          noValidate
          className={Style.popupForm}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className={Style.input}>
            <input
              style={{}}
              placeholder="Enter your email here"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>

          <GoldenButton
            type={"submit"}
            buttonName={"Submit"}
            style={{
              paddingTop: "1.3%",
              paddingBottom: "1.3%",
              marginTop: "1.5%",
            }}
          />
        </form>
      </div>
    </Modal>
  );
};
