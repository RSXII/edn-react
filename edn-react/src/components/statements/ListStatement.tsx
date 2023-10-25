import { ListStatementProps } from "./types";
export default function ListStatement({
  props,
}: {
  props: ListStatementProps;
}) {
  return (
    <div className="mt-24 px-4 text-lg leading-8">
      <h2 className="text-2xl mb-6">{props.title}</h2>
      <ol className="list-disc leading-8">
        {props.list.map((item: string, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
}
