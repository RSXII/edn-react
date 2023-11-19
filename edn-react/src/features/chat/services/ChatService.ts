import { signal } from "@preact/signals-react";
import { ActivityItem } from "../types/activityItem";

export const messages = signal([] as ActivityItem[]);
