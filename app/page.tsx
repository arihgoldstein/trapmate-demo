import Link from "next/link";
import { ArrowRight, Battery, Shield, Wifi, Smartphone, BarChart3, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1]">
              Smarter pest control <br /> with remote monitoring.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Eliminate guesswork and unnecessary site visits. Trapmate’s self-powered, wireless monitoring devices give you the tools to stay compliant, proactive, and scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all"
              >
                Book a Demo
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element similar to Vooma's clean style */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-gray-50 to-white opacity-50 blur-3xl" />
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder for Logos - using text for now as per constraints */}
             <div className="text-xl font-bold text-gray-400">Insects Limited</div>
             <div className="text-xl font-bold text-gray-400">Residential Pest Control</div>
             <div className="text-xl font-bold text-gray-400">Commercial Food Facilities</div>
             <div className="text-xl font-bold text-gray-400">Wildlife Control</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your best technicians are wasted on empty traps.</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Wasted Labor Hours</h3>
                    <p className="text-gray-600">Technicians spend hours checking empty traps instead of solving problems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reactive, Not Proactive</h3>
                    <p className="text-gray-600">Finding an issue days later means the infestation has already spread.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
               {/* Abstract representation of "Manual vs Automated" */}
               <div className="text-center">
                 <div className="bg-white p-6 rounded-2xl shadow-xl mb-4 max-w-xs mx-auto transform -rotate-2">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm font-medium text-gray-500">Manual Check</span>
                    </div>
                    <div className="text-lg font-bold">"Nothing here... again."</div>
                 </div>
                 <div className="bg-black text-white p-6 rounded-2xl shadow-2xl max-w-xs mx-auto transform rotate-2">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium text-gray-400">Trapmate Alert</span>
                    </div>
                    <div className="text-lg font-bold">"Activity Detected at Dock 4!"</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A complete platform to elevate your operations</h2>
            <p className="text-xl text-gray-600">Hardware and software working together seamlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Wifi size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">No WiFi Needed</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                Cellular connectivity ensures your traps are monitored even in the most remote locations. Drop-and-go installation.
              </p>
              <div className="h-40 bg-gray-50 rounded-xl w-full border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
                 Visual: Signal Strength / Cellular Map
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <Battery size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Long Battery Life</h3>
              <p className="text-gray-600 mb-6">
                Self-powered devices that last for years, not weeks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Any Trap, Any Time</h3>
              <p className="text-gray-600 mb-6">
                Compatible with multi-catch, snap traps, and insect monitors.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-time Mobile Alerts</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                Get notified instantly via the Trapmate app. Manage all your clients and devices from a single dashboard.
              </p>
               <div className="h-40 bg-gray-50 rounded-xl w-full border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
                 Visual: Mobile App Interface Screenshot
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to modernize your pest control business?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Join the pest control professionals who are saving time and winning more contracts with Trapmate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all"
              >
                Book a Demo
              </Link>
               <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-gray-700 rounded-full hover:bg-gray-900 transition-all"
              >
                Contact Sales
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

