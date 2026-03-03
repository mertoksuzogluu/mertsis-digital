# Mertsis Digital — Premium Dijital Ajans Web Sitesi

Next.js 14 (App Router), TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiş, dönüşüm odaklı kurumsal ajans sitesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yapılandırma

### Site ve iletişim

- **`src/config/site.ts`**  
  E-posta, telefon, adres, sosyal medya linkleri ve **Calendly** (Görüşme Planla) URL’i burada güncellenir.

### Calendly

- “Görüşme Planla” butonu `siteConfig.calendlyUrl` değerine gider.
- Kendi Calendly linkinizi `src/config/site.ts` içindeki `calendlyUrl` alanına yazın.

### Ortam değişkeni (opsiyonel)

- **`NEXT_PUBLIC_SITE_URL`**  
  Sitemap ve OpenGraph için canonical URL (örn. `https://mertsis.digital`). Vercel’de otomatik tanımlanabilir.

## Görsel ve proje içerikleri

### Proje görselleri

- Tüm proje görselleri **`/public/work/`** klasöründe tutulur.
- Varsayılan olarak tüm case study’ler `placeholder.svg` kullanır.
- Kendi görsellerinizi (jpg/png) bu klasöre ekleyin; ardından **`src/data/caseStudies.ts`** içinde ilgili projenin `kapakGorseli` ve `galeriGorselleri` alanlarını güncelleyin.

Örnek:

```ts
// caseStudies.ts
{
  slug: "e-ticaret-roas-artisi",
  // ...
  kapakGorseli: "/work/ecommerce-kapak.jpg",
  galeriGorselleri: ["/work/ecommerce-1.jpg", "/work/ecommerce-2.jpg", "/work/ecommerce-3.jpg"],
}
```

### Case study metinleri

- **`src/data/caseStudies.ts`**  
  Proje başlığı, özet, problem, çözüm, teslimatlar, metrikler ve görsel yolları bu dosyadan düzenlenir. Yeni proje eklemek için aynı yapıda bir obje ekleyin.

## Sayfa yapısı

| Sayfa        | Yol                    |
|-------------|-------------------------|
| Anasayfa    | `/`                    |
| Hizmetler   | `/hizmetler`           |
| Projeler    | `/projeler`            |
| Proje detay | `/projeler/[slug]`     |
| Hakkımızda  | `/hakkimizda`          |
| İletişim    | `/iletisim`            |
| Gizlilik    | `/gizlilik`            |
| Kullanım Şartları | `/kullanim-sartlari` |

## İletişim formu

- Form validasyonu ve başarı mesajı front-end’de çalışır.
- Backend/API bağlamak için **`src/components/ContactForm.tsx`** içindeki `handleSubmit` fonksiyonunu kendi endpoint’inize yönlendirebilirsiniz.

## Tema

- Varsayılan tema **koyu** (true black / charcoal).
- Sağ üstteki toggle ile **açık tema** seçilebilir; tercih `localStorage` içinde saklanır.

## Deploy (Vercel)

1. Projeyi GitHub’a bağlayın.
2. [Vercel](https://vercel.com) üzerinden “Import” ile projeyi seçin.
3. Build komutu: `npm run build`, output: default.
4. `NEXT_PUBLIC_SITE_URL` ortam değişkenini production domain’inizle (örn. `https://mertsis.digital`) tanımlayın.

## Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next/image** (görseller için)
- SEO: metadata, OpenGraph, `sitemap.xml`, `robots.txt`

---

© Mertsis Digital. İletişim ve içerik güncellemeleri için `src/config/site.ts` ve ilgili data dosyalarını kullanın.
