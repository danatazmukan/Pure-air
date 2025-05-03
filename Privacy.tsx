import React from 'react';
import { Link } from 'wouter';

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">Last updated: May 03, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>This Privacy Policy describes how Pure Air Technologies ("we", "our", or "us") collects, uses, and shares information about you when you use our website. We respect your privacy and are committed to protecting it.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p><strong>Information you provide to us:</strong> We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.</p>
          <p><strong>Automatically collected information:</strong> When you access or use our website, we may automatically collect information about you, including log information and device information.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc ml-8 mb-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices, updates, and administrative messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing of Information</h2>
          <p>We may share information about you as follows:</p>
          <ul className="list-disc ml-8 mb-6">
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of us or any third party</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Choices</h2>
          <p><strong>Account Information:</strong> You may update, correct, or delete your information by contacting us. We may retain certain information as required by law or for legitimate business purposes.</p>
          <p><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@pureair.tech" className="text-primary hover:underline">privacy@pureair.tech</a>.</p>
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