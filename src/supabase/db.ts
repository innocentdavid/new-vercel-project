import { supabase } from "@/lib/supabaseClient";

export async function getSingleInstagramContent(username: string) {
  const { data, error } = await supabase
    .from("instagram_content")
    .select("*")
  .eq("username", username);

  if (error) console.log(error);

  return { data, error };
}

export type Post = {
  username: string;
  thumbnail_url: string;
  video_url: string;
  comment_count: number;
  like_count: number;
  share_count?: number | null;
  play_count?: number | null;
  caption?: {
    text: string | null;
    created_at: number;
  };
};

export async function addSingleInstagramContent(posts: Post[]) {
  const { data, error } = await supabase
    .from("instagram_content")
    .insert([...posts])
    .select();

  // if (error) console.log(error);

  return { data, error };
}

// GET all captions from posts
export async function getCaptions(username: string) {
  const { data, error } = await supabase
    .from("instagram_content")
    .select("caption")
    .eq("username", username);

  return { data, error };
}