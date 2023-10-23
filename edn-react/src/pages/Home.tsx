import { ButtonPrimary, ButtonSecondary } from "../components/button/index";
import { GradientBGTop, GradientBGBottom } from "../components/gradient/index";

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <GradientBGTop />
      <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
        <img
          src="https://images.squarespace-cdn.com/content/v1/650f36695ef4386d769fcf46/1696640265091-OQA379C7JSSCL2ELQWKO/image-asset.jpeg"
          alt="House Garden"
          className="rounded-3xl shadow-2xl sm:rounded-6xl sm:shadow-3xl max-h-60 sm:max-h-52 xs:max-h-80 mx-auto"
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
          <div className="mt-6 px-4 text-lg leading-8">
            <h2 className="text-4xl mb-6">Dream it.</h2>
            <img
              src="https://images.squarespace-cdn.com/content/v1/650f36695ef4386d769fcf46/1696096447926-18WR8B4B76C0MPUM02J8/image-asset.jpeg?format=1000w"
              alt=""
            />
            <p>
              Every journey starts with a vision. Picture your ideal outdoor
              space: the vibrant colors, the inviting pathways, the sounds of
              nature. Whether it's a serene oasis, a lively entertainment hub,
              or a family-friendly retreat, your dream is the blueprint for what
              lies ahead
            </p>
          </div>
          <div className="mt-6 px-4 text-lg leading-8">
            <h2 className="text-4xl mb-6">Grow it.</h2>
            <img
              src="https://images.squarespace-cdn.com/content/v1/650f36695ef4386d769fcf46/b9fbadf4-827e-4f4d-b48a-d6569e8731b3/IMG_2761.JPG?format=1000w"
              alt=""
            />
            <p>
              Turning dreams into reality is a journey of care, expertise, and
              growth. With the right plan, tools, and support, your outdoor
              space will evolve, blooming in sync with your vision. As you
              cultivate, nurture, and tend to every corner, you'll witness the
              transformation you've always imagined.
            </p>
          </div>
          <div className="mt-6 px-4 text-lg leading-8">
            <h2 className="text-4xl mb-6">Love it.</h2>
            <img
              src="https://images.squarespace-cdn.com/content/v1/650f36695ef4386d769fcf46/1696097159577-NWMXS7FJTORMI5LY4ZD6/image-asset.jpeg?format=1000w"
              alt=""
            />
            <p>
              The joy of creation is in seeing, feeling, and living it every
              day. Your outdoor space is a testament to your vision, dedication,
              and love. With every sunrise that illuminates your garden and
              every sunset that casts a golden hue, you'll fall in love with
              your creation, over and over again.
            </p>
          </div>
        </div>
      </div>

      <GradientBGBottom />
    </div>
  );
}
