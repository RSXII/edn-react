import { signal } from "@preact/signals-react";
import { ActivityItem } from "../features/chat/types/activityItem";

export const messages = signal([] as ActivityItem[]);
