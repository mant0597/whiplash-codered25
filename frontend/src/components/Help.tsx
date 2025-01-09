import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-gray-600">We're here to help you grow your virtual garden</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <a href="mailto:support@carbongrove.com" className="text-green-600">
                  support@carbongrove.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:+1234567890" className="text-green-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <MapPin className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">Address</div>
                <p className="text-gray-600">123 Eco Street, Green City, 12345</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Quick Support</h2>
          <div className="space-y-4">
            <button className="w-full bg-green-500 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Start Live Chat
            </button>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">FAQs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• How do I plant a virtual tree?</li>
                <li>• What are eco-points?</li>
                <li>• How can I track my progress?</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;