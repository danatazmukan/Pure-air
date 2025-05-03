import React from 'react';
import { Link } from 'wouter';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">Last updated: May 03, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Pure Air Technologies. By accessing our website, you agree to these terms of service. Please read them carefully.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Our Services</h2>
          <p>Our website provides information about our industrial air purification technologies. You must follow all policies made available to you within the services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
          <p>The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, or publication of any part of the Site is prohibited without express written permission.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclaimer of Warranties</h2>
          <p>The information on our website is provided "as is" without any warranties, expressed or implied. We do not warrant that the website will be error-free or uninterrupted.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>Pure Air Technologies shall not be liable for any damages arising out of or in connection with the use of this website or the information provided.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p>We may revise these terms from time to time. The most current version will always be on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@pureair.tech" className="text-primary hover:underline">legal@pureair.tech</a>.</p>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}