import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";

export default function About() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8"> </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Origin Story…
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            In the heart of a vibrant yard, where the chorus of nature
            harmonizes with the design's aesthetics, the idea of Edn took root.
            Our founder, having been born into a family with deep ties to the
            horticultural industry, embarked on a personal journey to revamp his
            own outdoor space. The entire process, filled with nuanced
            decisions, expertise, and intricate knowledge, came as second nature
            to him.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            However, a realization struck - for many, the world of landscaping
            is a complex maze, daunting and often unapproachable. What about
            those who don't have the benefit of industry insights passed down
            through generations? Those who dream of beautiful, functional
            outdoor spaces but are held back by the sheer intricacy and
            perceived inaccessibility of it all?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Driven by this revelation, Edn was born. A platform aimed to bridge
            this knowledge gap, making high-quality landscaping accessible to
            all. At Edn, we're not just about designing outdoor spaces; we're
            about democratizing the landscaping process. We believe that every
            individual deserves a yard that mirrors their aspirations,
            irrespective of their background in the field.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Today, Edn stands as a testament to that belief, transforming yards
            across the region and helping countless individuals realize their
            dream outdoor sanctuaries. Join us on this journey, and let's craft
            your unique story together.
          </p>
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
