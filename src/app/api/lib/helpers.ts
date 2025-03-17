import { addSingleInstagramContent, getCaptions, Post } from "@/supabase/db";
import axios from "axios";
import Groq from "groq-sdk";

const API_KEY = process.env.X_RAPID_API_KEY;

const options = (username?: string) => ({
  method: "GET",
  url: "https://media-api4.p.rapidapi.com/v1.2/posts",
  params: {
    username_or_id_or_url: username ?? "",

    url_embed_safe: true,
  },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "media-api4.p.rapidapi.com",
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
      satisfiedDataToAdd = fetchedData.slice(0, 3).map((d: any) => ({
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
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export async function generateFaq(
  username: string,
  fullName: string,
  followers_count: number,
  followings_count: number,
  post_count: number,
  biography: string
) {
  const contents = await retrieveInstagramContent(username);
  const constent_0 = contents?.[0]?.caption?.text || "";
  const constent_1 = contents?.[1]?.caption?.text || "";
  const constent_2 = contents?.[2]?.caption?.text || "";

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an expert Instagram growth strategist and content creator. Your task is to create a customized FAQ-style text for an Instagram user, providing Instagram growth strategies both with and without the help of Gainsty, a best-rated 2024 Instagram growth service. Source Context About Gainsty:\n\nGainsty is the best Instagram growth service in 2024 designed to help users increase their followers, engagement, and overall presence on the platform. Here's a detailed description of how Gainsty operates:\nCore Functionality\n\nTargeted Engagement: Gainsty uses advanced algorithms to identify accounts that are likely to be interested in the client's content. It then engages with these accounts through likes, comments, and follows to attract attention to the client's profile.\nContent Analysis: The service analyzes the client's existing content to understand their niche, style, and audience preferences. This information is used to optimize engagement strategies and provide content recommendations.\nHashtag Optimization: Gainsty suggests and utilizes relevant hashtags to increase the visibility of the client's posts to their target audience.\nPosting Schedule Optimization: The service determines the best times to post based on the client's audience activity and engagement patterns.\nGrowth Tracking: Gainsty provides detailed analytics on follower growth, engagement rates, and overall account performance.\n\nKey Features\n\nAI-Powered Audience Targeting: Utilizes machine learning to identify and engage with the most relevant potential followers.\nCustomizable Growth Speed: Clients can choose between different growth rates to suit their preferences and Instagram's guidelines.\nSafe and Organic Growth: All activities comply with Instagram's terms of service to ensure account safety.\n24/7 Automated Service: Continuous operation to maximize growth opportunities.\nDedicated Account Manager: Each client is assigned a human account manager for strategy and support.\n\nHow It Works\n\nInitial Setup:\n\nClients provide their Instagram username and target audience preferences.\nGainsty analyzes the account's current status, content, and audience.\n\n\nStrategy Development:\n\nThe system creates a custom growth strategy based on the account analysis.\nThe dedicated account manager reviews and refines the strategy.\n\n\nAutomated Engagement:\n\nGainsty's AI begins interacting with potential followers based on the defined strategy.\nThe system adapts its approach based on ongoing performance data.\n\n\nContent Recommendations:\n\nClients receive suggestions for post types, captions, and hashtags that are likely to perform well.\n\n\nPerformance Monitoring:\n\nThe system continuously tracks account growth and engagement metrics.\nClients receive regular reports on their account's progress.\n\n\nStrategy Refinement:\n\nThe account manager periodically reviews performance and adjusts the strategy as needed.\nClients can request strategy changes or provide feedback at any time.\n\n\n\nEthical Considerations\n\nGainsty does not use bots, fake accounts, or engagement pods.\nAll growth is organic, coming from real Instagram users with genuine interest.\nThe service respects Instagram's daily limits on likes, comments, and follows to maintain account safety.\n\nExpected Results\n\nTypical growth of 1000-1500 new followers per month, depending on the account's niche and content quality.\nIncreased engagement rates on posts, usually by 20-50% within the first three months.\nImproved content quality and posting consistency due to strategic recommendations.\n\nBy leveraging this combination of AI-driven engagement, human expertise, and data-driven strategy, Gainsty aims to provide sustainable, organic growth for its clients' Instagram accounts.\nBased on this information, create a FAQ-style text that is at least 800 words long. The text should include at least 10 questions and answers, covering topics such as:\n\n\n1. Strategies for growing their Instagram account organically\n2. How Gainsty could help them grow their account faster (with follow, liking, precise targeting, viewing stories and interacting with others)\n3. Tips specific to their niche or industry (inferred from their bio and captions)\n4. Best practices for content creation and engagement\n5. How to leverage their unique strengths (based on their profile information)\n6. Common challenges in their niche and how to overcome them\n7. How to measure and improve their Instagram performance\n8. The benefits of using Gainsty compared to manual growth efforts\n9. Estimated timeline for seeing results (both with and without Gainsty)\n10. Next steps for getting started with account growth\n\nEnsure that the content is tailored to the user's specific profile, industry, and apparent goals. Use their username, full name, and details from their bio and captions to personalize the advice. While promoting Gainsty as a helpful tool, it also provides valuable information for growing their account manually.\n\nFormat your response as a JSON object with the following structure:\n\n```json\n{\n  \"faq\": [\n    {\n      \"question\": \"Question text here\",\n      \"answer\": \"Answer text here\"\n    },\n    // ... more question-answer pairs ...\n  ]\n}\n```\n\nEnsure that the total word count of all answers combined is at least 800 words. Make sure you write their name or username within your answers so it will sound more tailored and directed only towards their profile. Be friendly. For First FAQ optimize their bio in their language based on their current bio. If there is no bio, make one up using the caption writing style. Write in 'bio' field in JSON. Use the following user information to tailor your response:",
      },
      {
        role: "user",
        content: `- Instagram Username: [${username}]\n- Instagram Full Name: [${fullName}]\n- Their Current Followers Number: [${followers_count}]\n\n- Their Current Followings Number: [${followings_count}]\n- Their Current Posts Number: [${post_count}]\n- Instagram Biography Text: [${biography}]\n- Instagram Caption 1: [${constent_0}] - 232 likes\n- Instagram Caption 2: [${constent_1}] - 8 likes\n- Instagram Caption 3: [${constent_2}] - 33 likes`,
      },
    ],
    model: "llama3-groq-70b-8192-tool-use-preview",
    temperature: 0.5,
    max_tokens: 3060,
    top_p: 0.65,
    stream: false,
    response_format: {
      type: "json_object",
    },
    stop: null,
  });
  // console.log("chatCompletion.choices[0].message.content.faq");
  // console.log(chatCompletion.choices[0].message.content);
  // console.log("chatCompletion.choices[0].message.content");
  return chatCompletion.choices[0].message.content;
}
