import axios from "axios";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

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