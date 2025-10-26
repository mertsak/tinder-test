This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prisma Backend Kurulumu

Bu proje PostgreSQL veritabanı ve Prisma ORM kullanmaktadır.

### 1. PostgreSQL Veritabanı Kurulumu

PostgreSQL veritabanınızı başlatın ve bir veritabanı oluşturun:

```bash
# PostgreSQL başlatma (Windows)
net start postgresql-x64-XX

# PostgreSQL'e bağlanma
psql -U postgres

# Veritabanı oluşturma
CREATE DATABASE carrental_db;
```

### 2. Environment Variables

Proje kök dizininde `.env` dosyası oluşturun:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/carrental_db?schema=public"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
```

### 3. Prisma Migration

Veritabanı tablolarını oluşturmak için migration çalıştırın:

```bash
# Prisma client'ı generate edin
npm run prisma:generate

# Migration oluşturun ve uygulayın
npm run prisma:migrate

# Veya hızlı şema push için (development)
npm run prisma:push
```

### 4. Prisma Studio (Opsiyonel)

Veritabanını görselleştirmek için:

```bash
npm run prisma:studio
```

Bu komut `http://localhost:5555` adresinde Prisma Studio'yu açacaktır.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
