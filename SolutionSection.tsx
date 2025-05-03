export default function SolutionSection() {
  return (
    <section id="solution" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Innovative Solution</h2>
          <p className="text-lg">
            Pure Air offers a revolutionary air purification system that integrates with industrial ventilation systems. Through our multi-stage filtration process, we capture harmful emissions and convert them into valuable resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-2xl font-semibold mb-6">Multi-Stage Purification Technology</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">1</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold text-lg">Cyclonic Filtration</h4>
                  <p>Removes large particulate matter through centrifugal separation</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">2</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold text-lg">Electrostatic Filtration</h4>
                  <p>Captures microscopic particles and aerosols using charged plates</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">3</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold text-lg">Sorption Filtration</h4>
                  <p>Absorbs gaseous pollutants and volatile organic compounds</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">4</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold text-lg">Membrane Capture</h4>
                  <p>Selectively separates and captures CO₂ and other valuable gases</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Multi-stage air purification technology" 
              className="rounded-lg shadow-lg w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>
        </div>
        
        <div className="bg-secondary/5 rounded-2xl p-6 md:p-10">
          <h3 className="font-heading text-2xl font-semibold mb-6 text-center">Resource Recovery System</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 card-hover">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <i className="ri-gas-station-line text-2xl text-primary"></i>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">CO₂ Capture</h4>
              <p>Captured carbon dioxide is compressed and stored in tanks for further use in synthetic fuel production, carbonated beverages, and other applications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 card-hover">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <i className="ri-flask-line text-2xl text-primary"></i>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Chemical Recovery</h4>
              <p>Collected nitrogen and sulfur oxides can be processed into fertilizers and industrial chemicals, creating additional revenue streams.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 card-hover">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <i className="ri-recycle-line text-2xl text-primary"></i>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Particulate Collection</h4>
              <p>Solid particles and microplastics are safely contained in hermetic containers for proper disposal or recycling where applicable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
