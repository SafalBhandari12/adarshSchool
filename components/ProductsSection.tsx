import FlowingMenu from "./FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Pre-Primary",
    image: "/images/pre-primary.png",
  },
  {
    link: "#",
    text: "Primary School",
    image: "/images/primary.png",
  },
  {
    link: "#",
    text: "Middle School",
    image: "/images/midle.png",
  },
  {
    link: "#",
    text: "Secondary School",
    image: "/images/secondary.png",
  },
];

export default function ProductsSection() {
  return (
    <section id='products' className='py-20 bg-white relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            className='text-6xl md:text-7xl lg:text-8xl font-serif italic mb-4 text-primary'
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: "400",
              letterSpacing: "0.02em",
              textShadow: "2px 2px 4px rgba(214, 169, 157, 0.3)",
              background:
                "linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 50%, #cc2a00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Product Category
          </h2>
        </div>

        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </section>
  );
}
