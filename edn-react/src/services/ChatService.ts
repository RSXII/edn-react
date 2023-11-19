import { signal } from "@preact/signals-react";
import { ActivityItem } from "../components/chat/types/activityItem";

export const messages = signal([] as ActivityItem[]);
