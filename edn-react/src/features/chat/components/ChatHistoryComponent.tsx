interface ChatHistoryComponentProps {
  completionTitle: string;
}

const dummyData: ChatHistoryComponentProps[] = [
  { completionTitle: "Help me with my yard please" },
  { completionTitle: "What sort of plants are good in desert?" },
  { completionTitle: "How do I do something" },
  { completionTitle: "Some random text" },
  { completionTitle: "Item 5 is also long so it will truncate" },
];

export default function ChatHistoryComponent() {
  return (
    <div className="bg-black/20 pt-4 overflow-scroll h-64">
      {dummyData.map((item, index) => {
        return (
          <div className="border-y-2 border-slate-900 mb-2 px-2 line-clamp-1">
            <p id={`${index}`}>{item.completionTitle}</p>
          </div>
        );
      })}
    </div>
  );
}
