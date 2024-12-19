import React from 'react';
import { Brain, Users, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Advanced Brain Cancer</span>
              <span className="block text-blue-600">Prediction System</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leveraging cutting-edge AI technology to assist in early detection and diagnosis of brain cancer.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/predict"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Start Prediction
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-blue-50 rounded-xl">
              <Brain className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Advanced Analysis</h3>
              <p className="mt-2 text-gray-600">
                State-of-the-art machine learning models for accurate cancer detection
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Expert Support</h3>
              <p className="mt-2 text-gray-600">
                Backed by leading medical professionals and researchers
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <FileText className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Comprehensive Info</h3>
              <p className="mt-2 text-gray-600">
                Detailed resources and information about brain cancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;