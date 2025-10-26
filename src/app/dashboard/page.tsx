"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string;
  userType: 'CUSTOMER' | 'RENTACAR_OWNER' | 'ADMIN';
  isVerified: boolean;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get user info from cookie/token
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        } else {
          router.push('/login');
        }
      })
      .catch(() => {
        router.push('/login');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                RentACar Dashboard
              </h1>
              <p className="text-gray-600">Hoş geldiniz, {user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hesap Bilgileri</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Ad:</span> {user?.name}</p>
              <p><span className="font-medium">Email:</span> {user?.email}</p>
              <p><span className="font-medium">Hesap Türü:</span> {
                user?.userType === 'CUSTOMER' ? 'Müşteri' :
                user?.userType === 'RENTACAR_OWNER' ? 'RentACar Sahibi' : 'Admin'
              }</p>
              <p><span className="font-medium">Durum:</span> {
                user?.isVerified ? 
                <span className="text-green-600">✓ Doğrulanmış</span> : 
                <span className="text-yellow-600">⏳ Beklemede</span>
              }</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hızlı İşlemler</h2>
            <div className="space-y-3">
              {user?.userType === 'CUSTOMER' && (
                <>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Araç Ara
                  </button>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Rezervasyonlarım
                  </button>
                </>
              )}
              
              {user?.userType === 'RENTACAR_OWNER' && (
                <>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Araç Ekle
                  </button>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Araçlarım
                  </button>
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Rezervasyonlar
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">İstatistikler</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Aktif Araçlar:</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between">
                <span>Toplam Rezervasyon:</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between">
                <span>Bu Ay Gelir:</span>
                <span className="font-semibold">₺0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Notice for RentACar Owners */}
        {user?.userType === 'RENTACAR_OWNER' && !user?.isVerified && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Hesap Doğrulama Bekleniyor
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    RentACar sahibi hesabınız admin tarafından doğrulanması bekleniyor. 
                    Doğrulama tamamlandıktan sonra araç ekleyebilir ve rezervasyon alabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
