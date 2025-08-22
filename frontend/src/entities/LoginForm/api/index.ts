import { LoginForm } from "@/entities/LoginForm";
import axios from "axios";

export const loginUser = async (form: LoginForm) => {
  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", form);

    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || err.message);
  }
}
