import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import { UserProfile } from "@clerk/clerk-react";

export default function Profile() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8"> </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Profile
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <ButtonPrimary props={{ text: "Get started", href: "#" }} />
            <ButtonSecondary props={{ text: "Learn more", href: "#" }} /> */}
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
