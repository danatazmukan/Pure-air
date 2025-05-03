export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-primary mr-2">
                <i className="ri-leaf-line text-3xl"></i>
              </div>
              <h3 className="font-heading font-bold text-2xl">Pure<span className="text-primary">Air</span></h3>
            </div>
            <p className="mb-4 text-gray-400">
              Transforming industrial emissions into valuable resources through innovative air purification technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#solution" className="text-gray-400 hover:text-primary transition-colors">Our Solution</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Subscribe to Newsletter</h4>
            <p className="mb-4 text-gray-400">Stay updated with our latest innovations and environmental initiatives.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-dark" 
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
                aria-label="Subscribe"
              >
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} PureAir Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
