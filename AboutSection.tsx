export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">About Pure<span className="text-primary">Air</span></h2>
          <p className="text-lg">
            As industrial development advances, environmental pollution increases. Emissions of CO₂, particulate matter, microplastics, nitrogen oxides, and sulfur oxides harm our environment, causing global warming, acid rain, and air pollution. At Pure Air, we believe these emissions can be not only neutralized but also collected and transformed into valuable products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="mb-4">
              Pure Air is committed to developing and implementing innovative air purification solutions that address both environmental concerns and economic opportunities for industrial facilities.
            </p>
            <p className="mb-4">
              We aim to transform the narrative around industrial emissions from an unavoidable liability to a potential resource - creating a win-win scenario for businesses and the environment.
            </p>
            <p>
              By integrating cutting-edge filtration technology with resource recovery systems, we enable industries to reduce their environmental footprint while generating additional value streams.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="ri-focus-3-line text-2xl text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl">Our Vision</h4>
                <p className="text-dark/70">A world where industrial activity supports environmental health</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="ri-scales-3-line text-2xl text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl">Our Values</h4>
                <p className="text-dark/70">Innovation, sustainability, and economic viability</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="ri-team-line text-2xl text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl">Our Approach</h4>
                <p className="text-dark/70">Collaborative partnerships with forward-thinking industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
