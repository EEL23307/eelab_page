
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-500 font-light mb-12">
            Interested in joining our lab or collaborating? We welcome talented minds committed to environmental innovation.
          </p>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="bg-emerald-50 p-4 rounded-2xl h-fit border border-emerald-100">
                <MapPin className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Our Location</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  #25413, Engineering Building 2<br />
                  Sungkyunkwan University (Natural Science Campus)<br />
                  2066 Seobu-ro, Suwon, 16419, Korea
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-emerald-50 p-4 rounded-2xl h-fit border border-emerald-100">
                <Mail className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                <p className="text-gray-500 font-light">eelab@skku.edu</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-emerald-50 p-4 rounded-2xl h-fit border border-emerald-100">
                <Clock className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Office Hours</h3>
                <p className="text-gray-500 font-light">Mon - Fri: 09:00 AM - 06:00 PM (KST)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-emerald-900/5 p-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"></textarea>
            </div>
            <button type="button" className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl hover:bg-emerald-900 transition-all flex items-center justify-center shadow-lg shadow-emerald-900/20">
              Submit Inquiry <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
