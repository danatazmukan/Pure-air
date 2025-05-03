export default function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 gradient-bg text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Transforming Industrial <span className="text-accent">Emissions</span> Into Valuable <span className="text-accent">Resources</span>
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Advanced multi-stage air purification systems that integrate with industrial ventilation infrastructure to capture pollutants and convert them into usable products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solution" className="bg-white text-primary font-semibold px-6 py-3 rounded-lg text-center transition-all hover:bg-opacity-90">
                Our Solution
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-center transition-all hover:bg-white hover:bg-opacity-10">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
              alt="Industrial air purification system" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
              width="600" 
              height="500"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white text-dark py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <i className="ri-earth-line text-4xl text-primary mb-2"></i>
              <p className="text-sm md:text-base font-semibold">Eco-Friendly Technology</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="ri-recycle-line text-4xl text-primary mb-2"></i>
              <p className="text-sm md:text-base font-semibold">Resource Recovery</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="ri-seedling-line text-4xl text-primary mb-2"></i>
              <p className="text-sm md:text-base font-semibold">Cleaner Air</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="ri-funds-line text-4xl text-primary mb-2"></i>
              <p className="text-sm md:text-base font-semibold">Economic Benefits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
