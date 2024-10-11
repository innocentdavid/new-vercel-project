import { NextRequest, NextResponse } from "next/server";
import { App } from "@slack/bolt";
import axios from "axios";
import { StringIndexed } from "@slack/bolt/dist/types/helpers";
// import { SITE_DASH_LINK } from "@/lib/config";

let slackApp: App<StringIndexed> | undefined = undefined;
try {
  // var
  slackApp = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
  });
} catch (error: any) {
  console.log("failed to initialize slack app: ");
  console.log(error.message);
}

export async function GET() {
  return NextResponse.json({ name: "hello" });
}

const getAdminSlackUserId = async (email: string) => {
  if (!slackApp) throw new Error("Slack app is not configured properly");
  try {
    const response = await slackApp.client.users.lookupByEmail({
      token: process.env.SLACK_BOT_TOKEN,
      email,
    });

    if (response.ok) {
      return response?.user?.id; // This is the admin's Slack User ID
    } else {
      throw new Error(response.error);
    }
  } catch (error: any) {
    console.log("Error finding Slack User ID: ", error.message);
    throw error;
  }
};

const sendAdminNotification = async (
  userId: string,
  message: string,
  blocks: any
) => {
  if (!slackApp) throw new Error("Slack app is not configured properly");

  try {
    // Open a DM with the user (admin)
    const dmResponse = await slackApp.client.conversations.open({
      token: process.env.SLACK_BOT_TOKEN,
      users: userId, // Admin's Slack User ID
    });

    if (dmResponse.ok) {
      // Now that we have the DM channel, send the message
      const dmChannelId = dmResponse.channel?.id;

      const messageResponse = await slackApp.client.chat.postMessage({
        token: process.env.SLACK_BOT_TOKEN,
        channel: dmChannelId || "", // DM channel ID
        text: message, // Notification message
        blocks, // Optional blocks if you want to format the message
      });

      if (messageResponse.ok) {
        console.log(`Notification sent to admin (User ID: ${userId})`);
        return messageResponse;
      } else {
        throw new Error(messageResponse.error);
      }
    } else {
      throw new Error(dmResponse.error);
    }
  } catch (error: any) {
    console.log("Error sending DM: ", error.message);
    throw error;
  }
};

export async function POST(request: NextRequest) {
  const { username, cancellation, webhookUrl, message, route } =
    await request.json();
// not used yet
  if (route && route === "send_notification") {
    // const { slackEmail } = await request.json();
    const slackEmail = "paulinnocent04@gmail.com"

    const notificationMessage = "You attention is needed on Tuesday!";

    const blocks = [
      {
        type: "section",
        text: {
          type: "plain_text",
          text: message ?? notificationMessage,
          emoji: true,
        },
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "View",
              emoji: true,
            },
            value: "dashboard",
            url: "https://app.gainsty.com/admin/manage",
          },
        ],
      },
    ];

    try {
      const adminUserId = await getAdminSlackUserId(slackEmail); // Step 1
      if (adminUserId) {
        const response = await sendAdminNotification(
          adminUserId,
          notificationMessage,
          blocks
        ); // Step 2
        return NextResponse.json(
          { status: "success", data: response },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { status: "error", message: "Failed to get user" },
          { status: 500 }
        );
      }
    } catch (error: any) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    }
  }

  if (message && !route) {
    try {
      const response = await axios.post(webhookUrl, { text: message });
      console.log("response");
      console.log(response.data);

      return NextResponse.json({ data: response.data }, { status: 200 });
    } catch (error: any) {
      console.log("failed to send notification to slack");
      console.log(error.message);

      return NextResponse.json(
        { status: "error", message: error.message, error },
        { status: 500 }
      );
    }
    return;
  }

  const blocks = [
    {
      type: "section",
      text: {
        type: "plain_text",
        text:
          message ??
          `@${username} ${
            cancellation
              ? "Requested to cancel their subscription"
              : "just registered for a free trial."
          }`,
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "View",
            emoji: true,
          },
          value: "dashboard",
          url: "https://app.gainsty.com/admin/manage",
        },
      ],
    },
  ];

  if (!slackApp) {
    return NextResponse.json(
      { status: "error", message: "slackApp not found" },
      { status: 500 }
    );
  }

  try {
    // const channel = cancellation ? "cancellations" : "new-subscriptions";
    const channel = message
      ? "logging"
      : cancellation
      ? "cancellations"
      : "new-subscriptions";

    const response = await slackApp.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel,
      text: cancellation
        ? "New Cancellation Request"
        : message
        ? "New Log"
        : "New Subscription!",
      blocks,
    });
    // console.log(response);
    if (response.ok) {
      console.log(
        `${
          cancellation ? "cancellation" : "subscription"
        } message sent to slack ${channel} channel`
      );
      // return res.send(response).status(200);
      return NextResponse.json({ response }, { status: 200 });
    } else {
      console.log("failed to send message to slack channel due to: ");
      console.log(response.message);
      // return res.send(response.message).status(500);
      return NextResponse.json(
        { status: "error", message: response.message, response },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.log("failed to send message to slack channel due to: ");
    console.log(error.message);
    // return res.send(error.message).status(500);
    return NextResponse.json(
      { status: "error", message: error.message, error },
      { status: 500 }
    );
  }
}
