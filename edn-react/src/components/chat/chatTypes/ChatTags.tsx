import { TagIcon } from "@heroicons/react/20/solid";
import { ActivityItemTags } from "../types/activityItem";
import { Fragment } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ChatTags({
  activityTagsItem,
}: {
  activityTagsItem: ActivityItemTags;
}) {
  return (
    <>
      <div>
        <div className="relative px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
            <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-0">
        <div className="text-sm leading-8 text-gray-500">
          <span className="mr-0.5">
            <a
              href={activityTagsItem.user.href}
              className="font-medium text-gray-900"
            >
              {activityTagsItem.user.name}
            </a>{" "}
            added tags
          </span>{" "}
          <span className="mr-0.5">
            {activityTagsItem.tags?.map((tag) => (
              <Fragment key={tag.name}>
                <a
                  href={tag.href}
                  className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
                >
                  <svg
                    className={classNames(tag.color, "h-1.5 w-1.5")}
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  {tag.name}
                </a>{" "}
              </Fragment>
            ))}
          </span>
          <span className="whitespace-nowrap">{activityTagsItem.date}</span>
        </div>
      </div>
    </>
  );
}
