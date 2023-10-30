import { PlanOptionComponentProps } from "../../types/shared";

export default function PlanOptionComponent({
  props,
}: {
  props: PlanOptionComponentProps;
}) {
  return (
    <div className="grid grid-rows-2 text-center shadow-lg bg-buttonPrimary text-backgroundColor h-24">
      <h3 className="bg-slate-700 p-2">{props.name}</h3>
      <p className="text-xl mt-auto p-2">{props.price}</p>
    </div>
  );
}
