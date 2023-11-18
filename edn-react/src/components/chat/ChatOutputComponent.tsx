import ChatItemComponent from "./ChatItemComponent";
import { ActivityItem } from "./types/activityItem";

export default function ChatOutputComponent({
  data,
}: {
  data: ActivityItem[];
}) {
  return (
    <div className="overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <ChatItemComponent data={data} />
      </div>
    </div>
  );
}
