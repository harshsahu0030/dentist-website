import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    contact: {
      type: Number,
      required: [true, "contact number is required"],
    },
    message: {
      type: String,
      required: [true, "some description of dental issue required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isConnected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Appointment", appointmentSchema);
