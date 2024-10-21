import { generateFaq } from "../lib/helpers";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("username") || "";
  const fullName = url.searchParams.get("fullName") || "";
  const followers_count = Number(url.searchParams.get("followers_count"));
  const followings_count = Number(url.searchParams.get("followings_count"));
  const post_count = Number(url.searchParams.get("post_count"));
  const biography = url.searchParams.get("biography") || "";

  const data = await generateFaq(
    username,
    fullName,
    followers_count,
    followings_count,
    post_count,
    biography
  );

  return Response.json(data);
}
