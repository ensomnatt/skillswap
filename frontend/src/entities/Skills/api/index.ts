import axios from "axios"

export const fetch = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/skills");
    return res.data.skills;
  } catch (err) {
    throw err;
  }
}
