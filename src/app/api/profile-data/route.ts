import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  const response = await axios.request(options(username));

  const data = response.data[0];

    // console.log("data");
    // console.log(data);

  return Response.json({ data });
}

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
