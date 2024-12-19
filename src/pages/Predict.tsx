import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

const Predict = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [prediction, setPrediction] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>('cnn'); // Default model

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('model', selectedModel); // Add model to form data

    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setPrediction(`Prediction: ${data.prediction} (Probability: ${data.probability.toFixed(2)})`);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error occurred while processing the image.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Brain Cancer Prediction</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex flex-col items-center"
              >
                <Upload className="h-12 w-12 text-gray-400" />
                <span className="mt-2 text-sm text-gray-600">
                  Upload MRI scan image
                </span>
              </label>
            </div>

            {preview && (
              <div className="mt-4 flex flex-row items-center justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-auto h-60 rounded-lg"
                />
              </div>
            )}

            {/* Dropdown for Model Selection */}
            <div className="mt-4">
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Select Prediction Model
              </label>
              <select
                id="model"
                value={selectedModel}
                onChange={handleModelChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="cnn">CNN Model</option>
                <option value="lstm">LSTM Model</option>
                <option value="fnn">FNN Model</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!selectedFile || loading}
              className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Processing...' : 'Analyze Image'}
            </button>
          </form>

          {prediction && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Prediction Result
                  </h3>
                  <p className="mt-2 text-sm text-blue-700">{prediction}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;
