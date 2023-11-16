import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { UserProfile } from "@clerk/clerk-react";
import { useFetchData, useFetch } from "../services/BackendService";
import { CreateCompletionsRequest } from "../interfaces/openAI/interfaces";

export default function Profile() {
  const thing = useFetch("http://localhost:8080/api/testOpenAI");

  const { data, error } = useFetchData<CreateCompletionsRequest[]>(
    "http://localhost:8080/api/testOpenAI"
  );
  if (error) return <div>Error!</div>;
  console.log(data);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8"> </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Profile
          </h1>
          <span>
            {data?.map((completion) => {
              return <div>{completion.model}</div>;
            })}
          </span>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <UserProfile
              appearance={{
                elements: {
                  card: "bg-transparent",
                  rootBox: "bg-transparent",
                },
              }}
            />
          </div>
        </div>
      </div>
      <GradientBGBottom />
    </div>
  );
}
