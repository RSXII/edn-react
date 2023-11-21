import ChatItemComponent from "./ChatItemComponent";
import { ActivityItem } from "./types/activityItem";
import { isLoading } from "./services/ChatService";
import { LoadingSpinner } from "../../components/loading/LoadingSpinner";

export default function ChatOutputComponent({
  messages,
}: {
  messages: ActivityItem[];
}) {
  return (
    <div className="overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <ChatItemComponent data={messages} />
        <div className="pt-10">
          {isLoading.value ? <LoadingSpinner /> : null}
        </div>
      </div>
    </div>
  );
}
