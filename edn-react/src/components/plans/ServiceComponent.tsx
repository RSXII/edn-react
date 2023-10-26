import PlanComponent from "./PlanComponent";

const data = {
  title: "Our Services",
  plans: [
    {
      title: "Blossom",
      body: [
        "Embark on your landscaping journey with Blossom, the perfect starting point for budding visions. This foundational tier lays the groundwork for your outdoor aspirations, providing a curated design that mirrors both your aesthetic preferences and the unique characteristics of your space. Our tailored plan serves as the cornerstone, guiding you in translating dreams into tangible changes.",
        "As you navigate the world of landscaping, Blossom ensures you're never alone. With guided support and expert advice, we help transform potential into flourishing growth. This package nurtures your journey's initial stages, sowing seeds of inspiration and knowledge that will flourish in the chapters to come.",
      ],
    },
    {
      title: "Bloom",
      body: [
        "Dive deeper into your landscaping adventure with Bloom, designed for those who seek more than just the basics. This intermediate tier takes your yard's foundation and elevates it, introducing intricate designs and specialized plant lists to cater to unique needs and desires. Bloom bridges the gap between elementary and expert, offering a harmonious blend of guidance and flexibility.",
        "Experience the joy of seeing your space evolve as Bloom amplifies the beauty and functionality of your outdoor haven. This package, rich in detail and expertise, cultivates an environment where both creativity and growth thrive, leading you closer to the zenith of your landscaping aspirations.",
      ],
    },
    {
      title: "Flourish",
      body: [
        "Welcome to Flourish, the pinnacle of our offerings, tailored for those who envision a comprehensive transformation for their outdoor sanctuaries. This all-inclusive tier provides unmatched expertise and personalized consultation, ensuring every inch of your space resonates with your vision. Flourish is not just about landscaping; it's about creating lasting legacies, spaces that tell stories.",
        " Every detail matters, and with Flourish, you're investing in a holistic experience. From advanced yard analytics to personal design consultations, this package promises an unparalleled journey. Dive into a world where dreams are not just realized but celebrated, where every sunrise in your yard is a testament to vision, dedication, and unparalleled craftsmanship",
      ],
    },
  ],
};

export default function PlanServiceComponent() {
  return (
    <div className="lg:flex lg:flex-row mt-24 text-lg leading-8 text-gray-600">
      <h2 className="text-5xl mb-6 min-w-[30%]">Our Services</h2>
      <div>
        {data.plans.map((plan) => (
          <PlanComponent key={plan.title} props={plan} />
        ))}
      </div>
    </div>
  );
}
