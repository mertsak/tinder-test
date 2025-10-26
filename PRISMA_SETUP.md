# Prisma Backend Setup Kılavuzu

## 📋 İçindekiler
1. [PostgreSQL Kurulumu](#1-postgresql-kurulumu)
2. [Environment Ayarları](#2-environment-ayarları)
3. [Migration Çalıştırma](#3-migration-çalıştırma)
4. [Prisma Studio](#4-prisma-studio)
5. [Backend Kullanımı](#5-backend-kullanımı)

---

## 1. PostgreSQL Kurulumu

### Windows için:
1. **PostgreSQL İndir ve Kur**: https://www.postgresql.org/download/windows/
2. Kurulum sırasında **postgres** kullanıcısı için şifre belirleyin
3. PostgreSQL'in kurulu olduğu klasörü PATH'e ekleyin (genellikle `C:\Program Files\PostgreSQL\{version}\bin`)

### PostgreSQL Başlatma:
```bash
# Windows Servis Yöneticisi üzerinden başlatın
# veya command line:
net start postgresql-x64-XX
```

### Veritabanı Oluşturma:
```bash
# PostgreSQL'e bağlan
psql -U postgres

# Veritabanı oluştur
CREATE DATABASE carrental_db;

# Çık
\q
```

---

## 2. Environment Ayarları

Proje kök dizininde `.env` dosyası oluşturun:

```env
# PostgreSQL bağlantı URL'i
DATABASE_URL="postgresql://postgres:YourPassword@localhost:5432/carrental_db?schema=public"

# JWT secret key (güvenlik için değiştirin)
NEXTAUTH_SECRET="your-super-secret-key-change-this"
```

> **Not**: `postgres` yerine kendi kullanıcı adınızı, `YourPassword` yerine kendi şifrenizi yazın.

---

## 3. Migration Çalıştırma

Migration'lar veritabanı şemasını oluşturur. Şu komutları sırayla çalıştırın:

```bash
# 1. Prisma Client'ı generate et
npm run prisma:generate

# 2. Migration oluştur ve uygula
npm run prisma:migrate

# Mesaj: Enter a name for the migration: (örn: init)
# init yazıp Enter'a basın
```

### Alternatif: Hızlı Development Setup
Eğer sadece test için çalıştırıyorsanız:

```bash
npm run prisma:push
```

Bu komut migration dosyası oluşturmadan doğrudan veritabanını günceller.

---

## 4. Prisma Studio

Veritabanınızı görselleştirmek için:

```bash
npm run prisma:studio
```

Browser'da `http://localhost:5555` adresine gidin ve veritabanı tablolarınızı görün.

---

## 5. Backend Kullanımı

### Prisma Client Kullanımı

Projenizde Prisma zaten kurulu ve kullanıma hazır. Örnek kullanımlar:

#### Kullanıcı Oluşturma (API Route)
```typescript
// src/app/api/auth/register/route.ts
import { prisma } from '@/lib/prisma';

const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    password: hashedPassword,
    name: 'John Doe',
    userType: 'CUSTOMER'
  }
});
```

#### Kullanıcı Sorgulama
```typescript
// Tek kullanıcı
const user = await prisma.user.findUnique({
  where: { email: 'user@example.com' }
});

// Tüm kullanıcılar
const users = await prisma.user.findMany();

// İlişkili veriler
const userWithCars = await prisma.user.findUnique({
  where: { id: userId },
  include: { cars: true }
});
```

#### Araba İşlemleri
```typescript
// Araba oluşturma
const car = await prisma.car.create({
  data: {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    ownerId: userId
  }
});

// Araba sorgulama
const cars = await prisma.car.findMany({
  where: {
    availability: true,
    location: 'Istanbul'
  }
});
```

#### Güncelleme
```typescript
await prisma.user.update({
  where: { id: userId },
  data: { name: 'New Name' }
});
```

#### Silme
```typescript
await prisma.user.delete({
  where: { id: userId }
});
```

---

## 📝 Mevcut API Endpoints

### Auth Endpoints:
- `POST /api/auth/register` - Kullanıcı kaydı
- `POST /api/auth/login` - Kullanıcı girişi
- `POST /api/auth/logout` - Kullanıcı çıkışı
- `GET /api/auth/me` - Giriş yapmış kullanıcı bilgisi

### Veritabanı Modelleri:
- **User**: Kullanıcılar (CUSTOMER, RENTACAR_OWNER, ADMIN)
- **Car**: Araba ilanları
- **Reservation**: Rezervasyonlar
- **Review**: Yorumlar ve değerlendirmeler

---

## 🔧 Troubleshooting

### "Can't reach database server" Hatası
- PostgreSQL servisinin çalıştığından emin olun
- `.env` dosyasındaki DATABASE_URL'in doğru olduğunu kontrol edin

### "Schema validation error" Hatası
- `npm run prisma:generate` komutunu çalıştırın

### Migration Hataları
- Mevcut veritabanını sıfırlamak için:
```bash
npx prisma migrate reset
```

---

## 📚 Daha Fazla Bilgi

- [Prisma Dokümantasyonu](https://www.prisma.io/docs)
- [Prisma Next.js Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [PostgreSQL Dokümantasyonu](https://www.postgresql.org/docs/)

