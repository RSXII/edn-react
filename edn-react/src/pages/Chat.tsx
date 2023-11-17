import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { ChatInputComponent, ChatOutputComponent } from "../components/chat";
import { useAuthFetchData } from "../services/AuthFetch";
import { CreateCompletionsResponse } from "../interfaces/openAI/interfaces";
import { LoadingSpinner } from "../components/loading/LoadingSpinner";

function renderElement(data: CreateCompletionsResponse | null) {
  if (data)
    return data?.choices.map((choices) => {
      return <div>{choices.message.content}</div>;
    });
  return <LoadingSpinner />;
}

export default function Chat() {
  const { data, error } = useAuthFetchData<CreateCompletionsResponse>(
    "http://localhost:8080/api/testOpenAI"
  );
  if (error) return <div>Error!</div>;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
        <ChatOutputComponent />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <span>{renderElement(data)}</span>
          <ChatInputComponent />
        </div>
      </div>
      <GradientBGBottom />
    </div>
  );
}
