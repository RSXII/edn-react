import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";
import PlanServiceComponent from "../components/plans/ServiceComponent";
import { ImageStatement, ListStatement } from "../components/statements/index";
import {
  ImageStatementProps,
  ListStatementProps,
} from "../components/statements/types";
import { listStatementItems, imageStatementItems } from "../data/home.json";

export default function Home() {

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
        <img
          src="https://images.squarespace-cdn.com/content/v1/650f36695ef4386d769fcf46/1696640265091-OQA379C7JSSCL2ELQWKO/image-asset.jpeg"
          alt="House Garden"
          className="rounded-3xl shadow-2xl sm:rounded-6xl sm:shadow-3xl max-h-60 sm:max-h-80 xs:max-h-52 mx-auto lg:max-h-96"
        />
      </div>
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
            We aim to turn each homeowner's unique vision of a dream yard into
            an attainable reality, step by step. We believe in a personalized,
            consultative approach that values customer input as much as expert
            recommendations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonPrimary props={{ text: "Get started", href: "#" }} />
            <ButtonSecondary props={{ text: "Learn more", href: "#" }} />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <h2 className="text-5xl mt-6 leading-8 text-gray-600">
          Make it stand out.
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-6 text-lg leading-8 text-gray-600">
          {imageStatementItems.map((statement: ImageStatementProps) => (
            <ImageStatement key={statement.id} props={statement} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-6 text-lg leading-8 text-gray-600">
          {listStatementItems.map((statement: ListStatementProps) => {
            return <ListStatement key={statement.id} props={statement} />;
          })}
        </div>
        <PlanServiceComponent />
      </div>
      <GradientBGBottom />
    </div>
  );
}
