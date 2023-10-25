type ErrorPageProps = {
  error: Error | null;
};

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <h1>Sorry.</h1>
      <p>An error has occured. We apologize for any inconvenience.</p>
      <p>{error?.message}</p>
    </div>
  );
}
