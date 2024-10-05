"use server";
import bcrypt from 'bcryptjs';
import { User } from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { signupSchema, SignupType } from '@/lib/validators/auth.validator';
import { handleError } from '@/lib/utils';

export async function signup({ name, email, password }: SignupType) {
     try {
          console.log("server called")
          await connectToDatabase();
          const parse = signupSchema.safeParse({ name, email, password });
          if (parse.error) throw new Error(parse.error.issues[0].message || 'Invalid input');
          const exist = await User.findOne({ email });
          if (exist) throw new Error('This Email already registerd');
          const hashPassword = await bcrypt.hash(password, 10);
          await User.create({
               name,
               email,
               password: hashPassword,
          });
          return { success: true, message: 'Signup successfully' };
     } catch (e: any) {
          handleError(e);
     }
}

