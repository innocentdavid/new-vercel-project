import { addSingleInstagramContent, getCaptions, Post } from "@/supabase/db";
import axios from "axios";

const API_KEY = process.env.X_RAPID_API_KEY;

const options = (username?: string) => ({
    method: "GET",
    url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
    params: {
      username_or_id_or_url: username ?? "",
  
      url_embed_safe: true,
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  });

export const retrieveInstagramContent = async (username?: string) => {
    // const { data: savedData } = await getSingleInstagramContent(username ?? "");
    const { data: savedData } = await getCaptions(username ?? "");
  
    // console.log("savedData?.length");
    // console.log(savedData?.length);
    
    if (savedData && savedData.length > 0) {
      return savedData;
    }
  
    try {
      const response = await axios.request(options(username));
  
      const fetchedData = response.data.data.items;
      let satisfiedDataToAdd;
  
      if (fetchedData) {
        satisfiedDataToAdd = fetchedData.map((d: any) => ({
          username: d.user.username,
          caption: {
            created_at: d.caption?.created_at,
            text: d.caption?.text,
          },
          thumbnail_url: d.thumbnail_url,
          video_url: d.video_url,
          like_count: d.like_count,
          comment_count: d.comment_count,
          share_count: d.share_count,
          play_count: d.play_count,
        })) satisfies Post[];
  
        await addSingleInstagramContent(satisfiedDataToAdd);
      }
  
      return satisfiedDataToAdd.caption;
    } catch (error) {
      console.log(error);
      return [];
    }
  };