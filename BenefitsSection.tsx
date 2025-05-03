export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Dual Benefits: Environmental & Economic</h2>
          <p className="text-lg">
            Our project combines ecological and economic advantages, offering industries the opportunity to not only reduce emissions but transform them into valuable resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-primary text-white p-6">
              <h3 className="font-heading text-2xl font-semibold flex items-center">
                <i className="ri-earth-line text-3xl mr-3"></i>
                Environmental Benefits
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-primary text-xl mt-1 mr-3"></i>
                <p><strong>Reduced Air Pollution:</strong> Significant decrease in harmful emissions released into the atmosphere</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-primary text-xl mt-1 mr-3"></i>
                <p><strong>Climate Change Mitigation:</strong> Lowered greenhouse gas contributions through CO₂ capture</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-primary text-xl mt-1 mr-3"></i>
                <p><strong>Acid Rain Prevention:</strong> Reduced nitrogen and sulfur oxide emissions that cause acid rain</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-primary text-xl mt-1 mr-3"></i>
                <p><strong>Microplastic Reduction:</strong> Capture of microplastics before they enter the ecosystem</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-primary text-xl mt-1 mr-3"></i>
                <p><strong>Improved Local Air Quality:</strong> Healthier air for communities surrounding industrial facilities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-secondary text-white p-6">
              <h3 className="font-heading text-2xl font-semibold flex items-center">
                <i className="ri-money-dollar-circle-line text-3xl mr-3"></i>
                Economic Benefits
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-secondary text-xl mt-1 mr-3"></i>
                <p><strong>New Revenue Streams:</strong> Monetization of captured CO₂ and other byproducts</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-secondary text-xl mt-1 mr-3"></i>
                <p><strong>Carbon Credit Eligibility:</strong> Potential qualification for carbon credits and emissions trading</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-secondary text-xl mt-1 mr-3"></i>
                <p><strong>Regulatory Compliance:</strong> Meet or exceed environmental regulations, avoiding fines</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-secondary text-xl mt-1 mr-3"></i>
                <p><strong>Brand Enhancement:</strong> Improved corporate image as an environmentally responsible business</p>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-secondary text-xl mt-1 mr-3"></i>
                <p><strong>Long-term Sustainability:</strong> Future-proofing operations against tightening environmental regulations</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-heading text-2xl font-semibold mb-6 text-center">Applications of Recovered Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gas-station-line text-2xl text-secondary"></i>
              </div>
              <h4 className="font-heading font-semibold">Synthetic Fuels</h4>
            </div>
            
            <div className="p-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-cup-line text-2xl text-secondary"></i>
              </div>
              <h4 className="font-heading font-semibold">Carbonated Beverages</h4>
            </div>
            
            <div className="p-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-spray-line text-2xl text-secondary"></i>
              </div>
              <h4 className="font-heading font-semibold">Aerosol Products</h4>
            </div>
            
            <div className="p-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-plant-line text-2xl text-secondary"></i>
              </div>
              <h4 className="font-heading font-semibold">Agricultural Uses</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
