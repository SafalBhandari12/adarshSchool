import FlowingMenu from "./FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default function ProductsSection() {
  return (
    <section id='products' className='py-20 bg-white relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            className='text-6xl md:text-7xl lg:text-8xl font-serif italic mb-4 text-dusty-rose'
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: "400",
              letterSpacing: "0.02em",
              textShadow: "2px 2px 4px rgba(214, 169, 157, 0.3)",
              background:
                "linear-gradient(135deg, #D6A99D 0%, #B8897D 50%, #9A6F5D 100%)",
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
