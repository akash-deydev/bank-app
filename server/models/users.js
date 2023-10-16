import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    mobile: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const transferSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    amount: { type: Number },
  },
  { timestamps: true }
);

export const Users = mongoose.model("Users", userSchema);
export const Transfers = mongoose.model("Transfers", transferSchema);
