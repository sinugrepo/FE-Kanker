import React from 'react';
import { AlertCircle, BookOpen, Activity } from 'lucide-react';

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Informasi Kanker Otak</h2>
          <p className="mt-4 text-lg text-gray-600">
            Memahami kanker otak: gejala, jenis, dan pilihan pengobatan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-red-500" />
              <h3 className="ml-2 text-xl font-semibold">Gejala Umum</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Sakit kepala yang terus-menerus</li>
              <li>• Perubahan penglihatan atau pendengaran</li>
              <li>• Masalah keseimbangan</li>
              <li>• Gangguan memori</li>
              <li>• Kejang</li>
              <li>• Perubahan kepribadian</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <h3 className="ml-2 text-xl font-semibold">Jenis Kanker Otak</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Glioblastoma</li>
              <li>• Astrocytoma</li>
              <li>• Meningioma</li>
              <li>• Oligodendroglioma</li>
              <li>• Medulloblastoma</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-green-500" />
              <h3 className="ml-2 text-xl font-semibold">Pilihan Pengobatan</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Operasi</h4>
                <p>Pembuangan jaringan tumor secara bedah jika memungkinkan, dibantu dengan teknik pencitraan canggih.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Terapi Radiasi</h4>
                <p>Radiasi terarah untuk menghancurkan sel kanker dan mengecilkan tumor.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Kemoterapi</h4>
                <p>Obat-obatan untuk membunuh sel kanker atau menghentikan pertumbuhannya.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Deteksi Dini Sangat Penting</h3>
          <p className="text-blue-800">
            Pemeriksaan rutin dan deteksi dini secara signifikan meningkatkan hasil pengobatan. Jika Anda mengalami gejala yang mencurigakan, segera konsultasikan dengan profesional kesehatan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
