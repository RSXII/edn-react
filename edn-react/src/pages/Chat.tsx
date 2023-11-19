import { useAuth } from "@clerk/clerk-react";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { ChatInputComponent, ChatOutputComponent } from "../features/chat";
import ChatService, { messages } from "../features/chat/services/ChatService";

export default function Chat() {
  const authToken = useAuth();
  const { sendMessage } = ChatService(authToken.getToken());

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
        <ChatOutputComponent messages={messages.value} />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <ChatInputComponent onSendMessage={sendMessage} />
        </div>
      </div>
      <GradientBGBottom />
    </div>
  );
}
