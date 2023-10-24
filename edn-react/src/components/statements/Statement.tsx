type StatementProps = {
  header: string;
  body: string;
  imageSrc: string;
};

export default function Statement({ props }: { props: StatementProps }) {
  return (
    <div className="mt-6 px-4 text-lg leading-8">
      <h2 className="text-4xl mb-6">{props.header}</h2>
      <img src={props.imageSrc} alt="" />
      <p>{props.body}</p>
    </div>
  );
}
