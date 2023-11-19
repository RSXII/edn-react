import { ActivityItemCompletionChat } from "../types/activityItem";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

export default function ChatCompletion({
  activityItemCopletion,
}: {
  activityItemCopletion: ActivityItemCompletionChat;
}) {
  return (
    <>
      <div className="relative">
        <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
          <ChatBubbleLeftEllipsisIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <div className="text-sm">
            <a
              href={activityItemCopletion.user.href}
              className="font-medium text-gray-900"
            >
              {activityItemCopletion.user.name}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Replied {activityItemCopletion.date}
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <p>{activityItemCopletion.response.choices[0].message.content}</p>
        </div>
      </div>
    </>
  );
}
