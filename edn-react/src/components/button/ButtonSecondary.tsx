export default function ButtonSecondary({
  props,
}: {
  props: { text: string; href: string };
}) {
  return (
    <a
      href={props.href}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      {props.text} <span aria-hidden="true">→</span>
    </a>
  );
}
