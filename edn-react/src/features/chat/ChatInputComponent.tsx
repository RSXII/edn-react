import { SetStateAction, useState } from "react";

export default function ChatInputComponent({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!message) return;
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form action="#" className="relative" onSubmit={handleSendMessage}>
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-buttonPrimary focus-within:ring-2 focus-within:ring-buttonHover">
            <label htmlFor="comment" className="sr-only">
              As a question
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              onChange={handleChange}
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Ask a question"
              defaultValue={""}
            />
            <div className="py-2" aria-hidden="true">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center"></div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-buttonPrimary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buttonHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
