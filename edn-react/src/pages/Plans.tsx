import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import PlanOptionComponent from "../components/plans/PlanOptionComponent";
import { plans } from "../data/plans.json";

export default function Company() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8"> </div>
      <div className="mx-auto max-w-2xl lg:max-w-3xl  py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Plans & Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Annual Commitment, Monthly Payments, Yard Bliss
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
            {plans.map((plan, index) => {
              return <PlanOptionComponent key={index} props={plan} />;
            })}
          </div>
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
