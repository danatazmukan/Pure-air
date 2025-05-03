import React from 'react';
import { Link } from 'wouter';

export default function Cookies() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">Last updated: May 03, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p>We use cookies for a variety of reasons detailed below:</p>
          <ul className="list-disc ml-8 mb-6">
            <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly and cannot be turned off in our systems.</li>
            <li><strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site.</li>
            <li><strong>Functional cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
            <li><strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
          <p><strong>Session Cookies:</strong> These cookies are temporary and expire once you close your browser.</p>
          <p><strong>Persistent Cookies:</strong> These cookies remain on your device until they expire or you delete them.</p>
          <p><strong>First-Party Cookies:</strong> These cookies are set by the website you're visiting.</p>
          <p><strong>Third-Party Cookies:</strong> These cookies are set by a domain different from the one you're visiting.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Cookie Policy</h2>
          <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us at <a href="mailto:privacy@pureair.tech" className="text-primary hover:underline">privacy@pureair.tech</a>.</p>
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