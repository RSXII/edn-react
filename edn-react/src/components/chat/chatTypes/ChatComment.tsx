import { ActivityItemComment } from "../types/activityItem";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

export default function ChatComment({
  activityCommentItem,
}: {
  activityCommentItem: ActivityItemComment;
}) {
  return (
    <>
      <div className="relative">
        <img
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
          src={activityCommentItem.imageUrl}
          alt=""
        />
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
              href={activityCommentItem.user.href}
              className="font-medium text-gray-900"
            >
              {activityCommentItem.user.name}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Replied {activityCommentItem.date}
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <p>{activityCommentItem.comment}</p>
        </div>
      </div>
    </>
  );
}
