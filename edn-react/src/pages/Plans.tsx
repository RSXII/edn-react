import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";

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
            <div className="grid grid-rows-2 text-center shadow-lg bg-buttonPrimary text-backgroundColor h-24">
              <h3 className="bg-slate-700 p-2">Blossom</h3>
              <p className="text-xl mt-auto p-2">$20</p>
            </div>
            <div className="grid grid-rows-2 text-center shadow-lg bg-buttonPrimary text-backgroundColor h-24">
              <h3 className="bg-slate-700 p-2">Bloom</h3>
              <p className="text-xl mt-auto p-2">$35</p>
            </div>
            <div className="grid grid-rows-2 text-center shadow-lg bg-buttonPrimary text-backgroundColor h-24">
              <h3 className="bg-slate-700 p-2">Flourish</h3>
              <p className="text-xl mt-auto p-2">$50</p>
            </div>
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
