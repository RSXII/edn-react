import {
  ActivityItem,
  ActivityItemAssignment,
  ActivityItemComment,
  ActivityItemCompletionChat,
  ActivityItemTags,
} from "../types/activityItem";

function isActivityItemAssignment(
  item: ActivityItem
): item is ActivityItemAssignment {
  return "assigned" in item;
}

function isActivityItemTags(item: ActivityItem): item is ActivityItemTags {
  return "tags" in item;
}

function isActivityItemComment(
  item: ActivityItem
): item is ActivityItemComment {
  return "imageUrl" in item && "comment" in item;
}

function isActivityCompletionChat(
  item: ActivityItem
): item is ActivityItemCompletionChat {
  return "response" in item;
}

export {
  isActivityItemAssignment,
  isActivityItemTags,
  isActivityItemComment,
  isActivityCompletionChat,
};
