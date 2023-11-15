enum ActivityType {
  Comment = "comment",
  Assignment = "assignment",
  Tags = "tags",
}
interface ChatUserInfo {
  name: string;
  href: string;
}
interface Assigned {
  name: string;
  href: string;
}
interface Tags {
  name: string;
  href: string;
  color: string;
}
export interface ActivityItem {
  id: number;
  type: ActivityType;
  user: ChatUserInfo;
  date: string;
}
export interface ActivityItemAssignment extends ActivityItem {
  assigned: Assigned;
}
export interface ActivityItemTags extends ActivityItem {
  tags: Tags[];
}
export interface ActivityItemComment extends ActivityItem {
  imageUrl: string;
  comment: string;
}
