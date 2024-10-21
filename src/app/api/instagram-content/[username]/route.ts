import { retrieveInstagramContent } from "../../lib/helpers";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const { username } = params;

  const data = await retrieveInstagramContent(username);

  return Response.json({ data });
}


