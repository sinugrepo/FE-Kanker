import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://i.pinimg.com/736x/cc/16/0d/cc160dd43abe11fb1c8c4667fb9ad160.jpg',
      title: 'Gambar MRI dengan Tumor Otak',
      description: 'Gambar MRI menunjukkan tumor otak yang teridentifikasi, memberikan gambaran penting untuk diagnosis lebih lanjut.',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhA4FYmCoQJpp7wxTnxdx3p4KyuzQ0Gaplg&s',
      title: 'Alat Diagnostik',
      description: 'Alat diagnostik untuk mendeteksi kanker otak dengan lebih akurat dan efektif dalam pengobatan.',
    },
    {
      url: 'https://i.pinimg.com/736x/25/86/89/2586896b22eac0f0ab8bab2e5280d5ad.jpg',
      title: 'Gambar MRI Dengan Otak Sehat',
      description: 'Gambar MRI menunjukkan otak sehat yang tidak terpengaruh oleh tumor atau kanker, sebagai perbandingan dengan gambar-gambar lainnya.',
    },
    // Add more images as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery Kanker Otak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {image.title}
                </h3>
                <p className="mt-2 text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;