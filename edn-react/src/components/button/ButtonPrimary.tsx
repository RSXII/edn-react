export default function ButtonPrimary({
  props,
}: {
  props: { text: string; href: string };
}) {
  return (
    <a
      href={props.href}
      className="rounded-md bg-buttonPrimary px-3.5 py-2.5 text-sm font-semibold text-buttonTextPrimary shadow-sm hover:bg-buttonHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {props.text}
    </a>
  );
}
