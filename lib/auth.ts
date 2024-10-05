import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import { User } from "./database/models/user.model";
import { signinSchema } from "./validators/auth.validator";
import { connectToDatabase } from "./database/mongoose";

export const authOptions = {
     providers: [
          CredentialsProvider({
               name: 'credintials',
               credentials: {
               email: { label: "Email", type: "text" },
               password: { label: "Password", type: "password" }
               },
               async authorize(credentials: any) {
                    await connectToDatabase();
                    const { email, password } = credentials;
                    const parse = signinSchema.safeParse({ email, password });
                    if (!parse.success) throw new Error("Invalid Input");
                    const user = await User.findOne({ email });
                    if (!user) throw new Error("User not found");
                    const verifyPassword = await bcrypt.compare(password, user.password);
                    if (!verifyPassword) throw new Error("Invalid Password");
                    return {
                         id: user.id.toString(),
                         name: user.name,
                         email: user.email,
                    }
               }
          })
     ],
     secret: process.env.NEXTAUTH_SECRET || "secret",
     pages: {
          signIn: "/signin"
     },
     callbacks: {
          async session({ token, session }: any) {
               session.user.id = token.sub
               return session;
          }
     }
} satisfies NextAuthOptions;