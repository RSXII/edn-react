import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { ChatInputComponent, ChatOutputComponent } from "../components/chat";

export default function Chat() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
        <ChatOutputComponent />
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
