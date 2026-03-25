import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fallback.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mertsis Digital | Premium Dijital Ajans",
    template: "%s | Mertsis Digital",
  },
  description:
    "Sosyal medya yönetimi, Meta reklamları, içerik üretimi, web tasarım ve 3D configurator çözümlerini tek bir yüksek performans ekiple sunuyoruz. İstanbul, Türkiye.",
  keywords: [
    "dijital ajans",
    "sosyal medya yönetimi",
    "Meta reklamları",
    "web tasarım",
    "3D configurator",
    "performans pazarlaması",
    "İstanbul",
  ],
  authors: [{ name: "Mertsis Digital" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mertsisdigital.com",
    siteName: "Mertsis Digital",
    title: "Mertsis Digital | Premium Dijital Ajans",
    description:
      "Premium kreatif + performans ile markanı büyüt. Sosyal medya, Meta Ads, içerik, web ve 3D çözümleri.",
    images: [
      {
        url: "/logo.png",
        width: 190,
        height: 44,
        alt: "Mertsis Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mertsis Digital | Premium Dijital Ajans",
    description: "Premium kreatif + performans ile markanı büyüt.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mertsisdigital.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const criticalCSS = `:root{--bg:#fff;--fg:#0a0a0a;--sur:#f0f4ff;--bor:rgba(0,0,0,0.08);--mut:#52525b;--acc:#2563eb;--background:#fff;--foreground:#0a0a0a;--accent-light:#3b82f6}html{background:#fff;scroll-behavior:smooth}body{margin:0;min-height:100vh;background:#fff!important;color:#0a0a0a!important;font-family:system-ui,-apple-system,sans-serif;display:flex;flex-direction:column}main{background:var(--bg);color:var(--fg);flex:1 1 0%}a{color:inherit;text-decoration:none!important}a:hover{color:var(--acc);opacity:.9}header{background:var(--bg);border-bottom:1px solid var(--bor);padding:0 1.25rem;height:4rem;display:flex;align-items:center;justify-content:space-between}header>div{display:flex;align-items:center;justify-content:space-between;width:100%;max-width:80rem;margin:0 auto}header>div>a:first-of-type{display:flex;align-items:center}.mertsis-logo{height:2rem;width:auto;display:block}nav{display:flex;align-items:center;gap:2rem}nav a{font-size:.875rem;font-weight:400!important;color:var(--fg)}nav a:hover{color:var(--acc)}.container-narrow,.container-wide{max-width:64rem;margin-left:auto;margin-right:auto;width:100%;padding-left:1.25rem;padding-right:1.25rem}.container-wide{max-width:80rem}main .container-narrow,main .container-wide{padding-top:3rem;padding-bottom:3rem}h1,h2{color:var(--fg);margin:0 0 .5rem 0;font-weight:600}h1{font-size:clamp(1.75rem,4vw,2.5rem)}.container-narrow h1{font-size:1.25rem;font-weight:600}h2{font-size:clamp(1.25rem,3vw,2rem)}p{color:var(--mut);margin:0 0 .5rem 0;line-height:1.6}.text-muted{color:var(--mut)!important}.text-foreground{color:var(--fg)!important}.text-accent{color:var(--acc)!important}.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:2rem}@media(max-width:1023px){.services-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:639px){.services-grid{grid-template-columns:1fr}}.services-grid .service-card-cell{display:flex;min-height:100%}.services-grid .service-card-cell a{flex:1;display:flex;flex-direction:column;padding:1.25rem;border:1px solid var(--bor);border-radius:.75rem;background:linear-gradient(135deg,#f8faff,#f0f4ff);min-height:140px}.services-grid .service-card-cell a:hover{border-color:var(--mut)}.services-grid .service-card-cell h3{margin:0;font-size:1rem;font-weight:600;color:var(--fg)}.services-grid .service-card-cell p{font-size:.875rem;margin-top:.5rem}.services-grid .service-card-cell ul{list-style:none;padding:0;margin:.75rem 0 0 0}.services-grid .service-card-cell li{font-size:.875rem;color:var(--fg);margin-bottom:.25rem}.service-card-last{grid-column:2}@media(max-width:1023px){.service-card-last{grid-column:1/-1}}.grid{display:grid!important;gap:2rem}img{max-width:100%;height:auto;display:block}footer{border-top:1px solid rgba(37,99,235,0.08);padding:3rem 1.25rem;background:linear-gradient(135deg,#f8faff,#eef2ff)}footer a{color:var(--mut)}footer a:hover{color:var(--acc)}button{font:inherit;color:inherit;background:0 0;border:none;cursor:pointer}
main>section:first-of-type{min-height:75vh;display:flex;flex-direction:column;justify-content:center;padding:clamp(4rem,8vw,7rem) 0;overflow:hidden;position:relative}
main>section:first-of-type h1{font-size:clamp(1.75rem,4vw,2.5rem)!important;font-weight:600}
main>section:first-of-type .container-narrow{position:relative}
main>section:first-of-type p{font-size:1.125rem;line-height:1.65;color:var(--mut);margin-top:1.5rem}
.flex{display:flex}.flex-col{flex-direction:column}.flex-1{flex:1 1 0%}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.items-center{align-items:center}.items-start{align-items:flex-start}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.relative{position:relative}.absolute{position:absolute}.inset-0{top:0;right:0;bottom:0;left:0}.-z-10{z-index:-10}.overflow-hidden{overflow:hidden}.max-w-4xl{max-width:56rem}.max-w-2xl{max-width:42rem}.max-w-xl{max-width:36rem}.mt-6{margin-top:1.5rem}.mt-10{margin-top:2.5rem}.mt-4{margin-top:1rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-8{margin-top:2rem}.mb-4{margin-bottom:1rem}.mb-10{margin-bottom:2.5rem}.py-section{padding-top:clamp(4rem,8vw,7rem);padding-bottom:clamp(4rem,8vw,7rem)}.pt-12{padding-top:3rem}.pb-section{padding-bottom:clamp(4rem,8vw,7rem)}.section-block{padding-top:3rem;padding-bottom:clamp(4rem,8vw,7rem)}.mb-block{margin-bottom:clamp(2rem,4vw,3.5rem)}.text-body-lg{font-size:1.125rem;line-height:1.65}.text-display-sm{font-size:2rem;line-height:1.2}.text-display-md{font-size:2.5rem;line-height:1.15;letter-spacing:-.02em}.text-display-lg{font-size:3.5rem;line-height:1.1;letter-spacing:-.02em}.text-caption{font-size:.75rem;line-height:1.4}.text-body-sm{font-size:.875rem;line-height:1.5}.font-semibold{font-weight:600}.font-medium{font-weight:500}.tracking-tight{letter-spacing:-.025em}.flex-wrap{flex-wrap:wrap}.shrink-0{flex-shrink:0}.min-w-0{min-width:0}.text-center{text-align:center}.mx-auto{margin-left:auto;margin-right:auto}
@media(min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:justify-between{justify-content:space-between}.sm\\:grid-cols-2{grid-template-columns:repeat(2,1fr)}}@media(min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,1fr)}.md\\:grid-cols-3{grid-template-columns:repeat(3,1fr)}}@media(min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,1fr)}.lg\\:grid-cols-5{grid-template-columns:repeat(5,1fr)}}
a.inline-flex,button.inline-flex{display:inline-flex!important;align-items:center;justify-content:center;gap:.5rem;padding:.75rem 1.5rem;font-weight:500;border-radius:.5rem;text-decoration:none!important;cursor:pointer}a.bg-accent{background:var(--acc)!important;color:#fff!important}a.border{border:1px solid var(--bor)!important;background:transparent!important;color:var(--fg)!important}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}`;

  return (
    <html lang="tr" className="light">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} style={{ background: "#fff", color: "#0a0a0a" }}>
          <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: "1 1 0%", background: "#fff", color: "#0a0a0a" }}>{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
