import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { company } from "../data/company.json";

export default function Company() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8"> </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
            Who we are...
          </h1>

          {company.map((person) => {
            return (
              <div className="text-left mb-12">
                <div className="mx-auto grid grid-cols-2">
                  <p className="mt-6 text-lg leading-8 text-gray-600 font-bold">
                    {person.name}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {person.title}
                  </p>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {person.bio}
                </p>
              </div>
            );
          })}

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonPrimary props={{ text: "Get started", href: "#" }} />
            <ButtonSecondary props={{ text: "Learn more", href: "#" }} />
          </div>
        </div>
      </div>
      <GradientBGBottom />
    </div>
  );
}
