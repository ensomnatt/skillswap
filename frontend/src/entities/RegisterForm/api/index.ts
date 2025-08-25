import axios from "axios";
import { RegisterFormApi } from "../model/types";

export const registerUser = async (form: RegisterFormApi) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, form);

    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || err.message);
  }
}
