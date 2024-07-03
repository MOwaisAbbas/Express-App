import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    username: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    contact: {
      type: Schema.Types.Number,
      required: true,
    },
    dob: {
      type: Schema.Types.Date,
      required: true,
    },
    gender: {
      type: Schema.Types.String,
      required: true,
    },
    verified: {
      type: Schema.Types.Boolean,
      default: false,
    },
    avatar: {
      type: Schema.Types.String,
    },
    refreshToken: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
