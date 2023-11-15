import ChatAssignment from "./chatTypes/ChatAssignment";
import { ActivityItem } from "./types/activityItem";
import ChatComment from "./chatTypes/ChatComment";
import ChatTags from "./chatTypes/ChatTags";
import {
  isActivityItemAssignment,
  isActivityItemComment,
  isActivityItemTags,
} from "./chatTypes/typeguards";

import { data } from "../../data/activitySamples.json";

export default function ChatItemComponent() {
  const activityItems: ActivityItem[] = data as ActivityItem[];

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activityItems.map(
          (activityItem: ActivityItem, activityItemIdx: number) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activityItems.length - 1 ? (
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
                  ) : null}
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
