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
        "http://localhost:8080/api/testOpenAI",
        token
      );
      console.log(messageText, data);

      if (!data) return;

      const message = {
        id: Number(data?.id),
        type: "completionChat",
        user: {
          name: "OpenAI",
          href: "https://openai.com/",
        },
        date: new Date().toISOString(),
        response: {
          id: data?.id,
          object: data?.object,
          created: data?.created,
          model: data?.model,
          choices: data?.choices,
          usage: data?.usage,
          error: data?.error,
        },
      } as ActivityItemCompletionChat;

      messages.value.push(message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { sendMessage };
}

export default ChatService;
