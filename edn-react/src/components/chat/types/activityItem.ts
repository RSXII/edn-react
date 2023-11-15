// {
//     id: 1,
//     type: "comment",
//     person: { name: "Ryan Schultz", href: "#" },
//     imageUrl:
//       "https://media.licdn.com/dms/image/D5603AQFR62l83ekWmQ/profile-displayphoto-shrink_100_100/0/1680639468619?e=1705536000&v=beta&t=Jk-pPm5U-R54NRQtpHwzNpWG1fGvVEkvCn3oznw6kEI",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
//     date: "6h ago",
//   },
//   {
//     id: 2,
//     type: "assignment",
//     person: { name: "EDN Bot", href: "#" },
//     assigned: { name: "Carl Munden", href: "#" },
//     date: "6h ago",
//   },
//   {
//     id: 3,
//     type: "tags",
//     person: { name: "Carl Munden", href: "#" },
//     tags: [
//       { name: "Flowers", href: "#", color: "fill-red-500" },
//       { name: "Suggestions", href: "#", color: "fill-indigo-500" },
//     ],
//     date: "2h ago",
//   },

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
