// server

import axios from "axios";

const options = (username?: string | null) => {
  return {
    method: "GET",
    url: "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile",
    params: {
      ig: username ?? "",
      response_type: "short",
      corsEnabled: "true",
    },
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
      "X-RapidAPI-Host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
    },
  };
};

export default async function getUserProfileData(username: string) {
  const response = await axios.request(options(username));

  const data:any = response.data[0];

  return data;
}
