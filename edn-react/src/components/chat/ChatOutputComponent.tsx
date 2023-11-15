import ChatItemComponent from "./ChatItemComponent";

export default function ChatOutputComponent() {
  return (
    <div className="overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <ChatItemComponent />
      </div>
    </div>
  );
}
