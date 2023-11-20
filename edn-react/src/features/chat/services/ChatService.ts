import { signal } from "@preact/signals-react";
import {
  ActivityItem,
  ActivityItemCompletionChat,
} from "../types/activityItem";
import { useEffect } from "react";
import { authFetch } from "../../../services/authFetch";

export const messages = signal([] as ActivityItem[]);

function ChatService(authToken: Promise<string | null>) {
  useEffect(() => {}, []);

  const sendMessage = async (messageText: string) => {
    const token = await authToken;
    if (!token) return;
    try {
      const data = await authFetch(
        "http://localhost:8080/api/requestCompletion",
        token,
        "POST",
        { message: messageText }
      );

      if (!data) return;

      const message: ActivityItemCompletionChat = {
        id: data.id,
        type: "completionChat" as ActivityItem["type"],
        user: {
          name: "GPT-3",
          href: "https://openai.com",
        },
        date: new Date().toISOString(),
        response: data,
      };

      messages.value = [...messages.value, message];
      // messages.value.push(data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { sendMessage };
}

export default ChatService;
