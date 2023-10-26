import { useState } from "react";

type PlanProps = {
  title: string;
  body: string[];
};

export default function PlanComponent({ props }: { props: PlanProps }) {
  const [active, setActive] = useState(false);
  const toggleShow = () => setActive(!active);
  return (
    <>
      <button className="mt-8 w-full grid grid-cols-2" onClick={toggleShow}>
        <h2 className="text-2xl text-left mb-6">{props.title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 ml-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-height duration-500 ${
          active ? "h-72" : "h-0"
        }`}
      >
        {props.body.map((bodyText: string) => {
          return <p className="mb-8">{bodyText}</p>;
        })}
      </div>
    </>
  );
}
