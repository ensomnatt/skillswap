import axios from "axios"

export const fetch = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/skills`);
    return res.data.skills;
  } catch (err) {
    throw err;
  }
}
