import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please complete the form",
        description: "All fields except company are required",
        variant: "destructive"
      });
      return;
    }

    // Form submission logic would go here

    toast({
      title: "Message sent!",
      description: "Thank you for contacting Pure Air. We'll be in touch soon.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg">
            Interested in implementing our solution at your facility? Have questions about how our technology works? Contact us today to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="text-dark font-medium">Full Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-dark font-medium">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-dark font-medium">Company</Label>
                <Input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-dark font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Tell us about your industrial facility and needs"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button 
                type="submit" 
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-primary/90 w-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-light rounded-xl p-8 h-full">
              <h3 className="font-heading text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                    <i className="ri-mail-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">Email</h4>
                    <p>infopureair@gmail.com</p>
                    <p>support@pureair.tech</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                    <i className="ri-phone-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">Phone</h4>
                    <p>+7 (707) 240 5616</p>
                    <p>+7 (776) 135 0999</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-primary/20">
                      <i className="ri-linkedin-fill text-primary"></i>
                    </a>
                    <a href="#" className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-primary/20">
                      <i className="ri-twitter-fill text-primary"></i>
                    </a>
                    <a href="#" className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-primary/20">
                      <i className="ri-facebook-fill text-primary"></i>
                    </a>
                    <a href="#" className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-primary/20">
                      <i className="ri-instagram-line text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}