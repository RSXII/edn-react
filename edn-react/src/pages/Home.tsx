import ButtonPrimary from "../components/button/ButtonPrimary";
import ButtonSecondary from "../components/button/ButtonSecondary";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Transform your relationship with your outdoor space.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Our Mission <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          The DIY approach to Professional Landscaping
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We aim to turn each homeowner's unique vision of a dream yard into an
          attainable reality, step by step. We believe in a personalized,
          consultative approach that values customer input as much as expert
          recommendations.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonPrimary props={{ text: "Get started", href: "#" }} />
          <ButtonSecondary props={{ text: "Learn more", href: "#" }} />
        </div>
      </div>
    </div>
  );
}
