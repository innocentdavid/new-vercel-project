import axios from "axios";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { UserContent } from "./types";

export function handleCopy(str: string) {
  copy(str, {
    debug: true,
    message: "Press #{key} to copy",
  });
  toast("Copied to Clipboard");
}


export const slackLogging = async (message: string): Promise<boolean> => {
  // console.log("slackSubNotify", username);
  try {
    const resp = await axios.post("/api/slack", {
      route: "log",
      message,
    });
    console.log("slackLogging resp");
    console.log(resp);

    return true;
  } catch (error: any) {
    console.error(error);
    console.log("error while sending message to Slack");
    console.log(error.message);
    return false;
  }
};

export const retrieveUserContent = async (
  username: string,
  enableStorage = true,
): Promise<UserContent | null> => {
  if (!username) {
    return null;
  }

  const fetchedLocalData = localStorage.getItem(`${username}_user_content`);

  if (fetchedLocalData) {
    const parsedFetchedLocalData = JSON.parse(fetchedLocalData);

    // how long?
    if (parsedFetchedLocalData && parsedFetchedLocalData.saved_at) {
      // Calculate how long it has been since the data was saved
      const timeDifference = Date.now() - parsedFetchedLocalData.saved_at;

      // Convert time difference to hours, minutes, and seconds
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

      // Display the time difference in the console
      console.log(
        `Data has been saved for: ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`,
      );
    }

    if (
      typeof parsedFetchedLocalData === "object" &&
      parsedFetchedLocalData.username === username &&
      parsedFetchedLocalData.saved_at &&
      Date.now() - parsedFetchedLocalData.saved_at < 24 * 60 * 60 * 1000 // Check if data is less than 24 hours old
      // Date.now() - parsedFetchedLocalData.saved_at < 1 * 60 * 1000 // Check if data is less than Imin old
    ) {
      delete parsedFetchedLocalData.saved_at;
      return parsedFetchedLocalData;
    } else {
      console.log("data will be fetched again!");
    }
  }

  const response = await axios.get("/api/instagram-content/" + username);

  console.log("userContenteData: response.data.data");
  console.log(response.data.data);

  if (enableStorage) {
    localStorage.setItem(
      `${username}_user__content`,
      JSON.stringify({ ...response.data.data, saved_at: Date.now() }),
    );
  }

  return response.data.data;
};

export function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
      default: return c;
    }
  });
}