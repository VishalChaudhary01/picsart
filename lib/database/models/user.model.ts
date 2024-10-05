import mongoose from "mongoose";

interface IUser {
     name: string;
     email: string;
     password: string;
     planId: number;
     creditBalance: number;
};

const userSchema = new mongoose.Schema<IUser>({
     name: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
          unique: true,
     },
     password: {
          type: String,
          required: true,
     },
     planId: {
          type: Number,
          default: 1,
     },
     creditBalance: {
          type: Number,
          default: 10,
     }
});

export const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);