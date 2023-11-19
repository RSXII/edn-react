import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { ChatInputComponent, ChatOutputComponent } from "../features/chat";
import { useAuthFetchData } from "../features/authentication/services/AuthFetch";
import { CreateCompletionsResponse } from "../interfaces/openAI/interfaces";
import { messages } from "../features/chat/services/ChatService";
import { ActivityItem } from "../features/chat/types/activityItem";

function createMessage(response: CreateCompletionsResponse | null) {
  if (response) {
    const message = {
      id: Number(response.id),
      type: "completionChat",
      user: { name: "EDN Bot", href: "#" },
      imageUrl:
        "https://easydrawingguides.com/wp-content/uploads/2022/12/how-to-draw-an-easy-robot-face-featured-image-1200.png",
      comment: response.choices[0].message.content,
      date: "now",
    };
    messages.value.push(message as ActivityItem);
  }
}

export default function Chat() {
  const { data, error } = useAuthFetchData<CreateCompletionsResponse>(
    "http://localhost:8080/api/testOpenAI"
  );

  createMessage(data);
  if (error) return <div>Error!</div>;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
        <ChatOutputComponent data={messages.value} />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <ChatInputComponent />
        </div>
      </div>
      <GradientBGBottom />
    </div>
  );
}
