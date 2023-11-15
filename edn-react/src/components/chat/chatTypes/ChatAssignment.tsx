import { UserCircleIcon } from "@heroicons/react/20/solid";
import { ActivityItemAssignment } from "../types/activityItem";

export default function ChatAssignment({
  activityAssignmentItem,
}: {
  activityAssignmentItem: ActivityItemAssignment;
}) {
  return (
    <>
      <div>
        <div className="relative px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
            <UserCircleIcon
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-1.5">
        <div className="text-sm text-gray-500">
          <a
            href={activityAssignmentItem.user.href}
            className="font-medium text-gray-900"
          >
            {activityAssignmentItem.user.name}
          </a>{" "}
          assigned{" "}
          <a
            href={activityAssignmentItem.assigned?.href}
            className="font-medium text-gray-900"
          >
            {activityAssignmentItem.assigned?.name}
          </a>{" "}
          <span className="whitespace-nowrap">
            {activityAssignmentItem.date}
          </span>
        </div>
      </div>
    </>
  );
}
