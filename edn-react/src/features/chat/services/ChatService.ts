import { signal } from "@preact/signals-react";
import {
  ActivityItem,
  ActivityItemComment,
  ActivityItemCompletionChat,
} from "../types/activityItem";
import { useEffect } from "react";
import { authFetch } from "../../../services/authFetch";

export const messages = signal([] as ActivityItem[]);
export const isLoading = signal(false);

function AddMessage(message: string): ActivityItemComment {
  return {
    id: messages.value.length + 1,
    type: "comment" as ActivityItem["type"],
    user: {
      name: "You",
      href: "https://openai.com",
    },
    date: new Date().toISOString(),
    imageUrl: "#",
    comment: message,
  };
}

function ChatService(authToken: Promise<string | null>) {
  useEffect(() => {}, []);

  const sendMessage = async (messageText: string) => {
    const token = await authToken;
    if (!token) return;
    isLoading.value = true;
    messages.value.push(AddMessage(messageText));
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
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return { sendMessage };
}

export default ChatService;
