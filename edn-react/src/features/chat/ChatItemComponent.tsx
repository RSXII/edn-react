import { ChatAssignment, ChatComment, ChatTags } from "./chatTypes";
import { ActivityItem } from "./types/activityItem";
import {
  isActivityCompletionChat,
  isActivityItemAssignment,
  isActivityItemComment,
  isActivityItemTags,
} from "./chatTypes/typeguards";
import ChatCompletion from "./chatTypes/ChatCompletion";

export default function ChatItemComponent({ data }: { data: ActivityItem[] }) {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {data.map((activityItem: ActivityItem, activityItemIdx: number) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== data.length - 1 ? (
                <span
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {isActivityItemComment(activityItem) ? (
                  <ChatComment activityCommentItem={activityItem} />
                ) : isActivityItemAssignment(activityItem) ? (
                  <ChatAssignment activityAssignmentItem={activityItem} />
                ) : isActivityItemTags(activityItem) ? (
                  <ChatTags activityTagsItem={activityItem} />
                ) : isActivityCompletionChat(activityItem) ? (
                  <ChatCompletion activityItemCopletion={activityItem} />
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
