"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

const BUDGET_OPTIONS = [
  "Belirtmek istemiyorum",
  "10.000 TL altı",
  "10.000 - 25.000 TL",
  "25.000 - 50.000 TL",
  "50.000 - 100.000 TL",
  "100.000 TL üzeri",
];

const SERVICE_OPTIONS = [
  "Sosyal Medya Yönetimi",
  "Performans Pazarlaması (Meta Ads)",
  "İçerik Üretimi",
  "Web Tasarım & Yazılım",
  "3D Configurator",
  "Marka Kimliği",
  "Analitik & CRO",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const isTeklif = searchParams.get("form") === "teklif";

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    services: [] as string[],
    message: "",
  });

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Ad Soyad gerekli";
    if (!form.email.trim()) e.email = "E-posta gerekli";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Geçerli bir e-posta girin";
    if (!form.message.trim()) e.message = "Mesaj gerekli";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Simulate submit - replace with your API/backend
    setStatus("success");
    setForm({ name: "", email: "", phone: "", company: "", budget: "", services: [], message: "" });
  }

  function toggleService(s: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "success" && (
        <div
          role="alert"
          className="rounded-card border border-green-500/30 bg-green-500/10 px-4 py-3 text-body-sm text-green-700 dark:text-green-300"
        >
          Mesajınız alındı. En kısa sürede dönüş yapacağız.
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-card border border-red-500/30 bg-red-500/10 px-4 py-3 text-body-sm text-red-700 dark:text-red-300"
        >
          Bir hata oluştu. Lütfen tekrar deneyin.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-body-sm font-medium text-foreground mb-1">
          Ad Soyad *
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className="w-full rounded-button border border-border bg-background px-4 py-2.5 text-body text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Adınız Soyadınız"
          required
        />
        {errors.name && (
          <p className="mt-1 text-caption text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-body-sm font-medium text-foreground mb-1">
          E-posta *
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className="w-full rounded-button border border-border bg-background px-4 py-2.5 text-body text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="ornek@firma.com"
          required
        />
        {errors.email && (
          <p className="mt-1 text-caption text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-body-sm font-medium text-foreground mb-1">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          className="w-full rounded-button border border-border bg-background px-4 py-2.5 text-body text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="+90 5XX XXX XX XX"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-body-sm font-medium text-foreground mb-1">
          Şirket
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          className="w-full rounded-button border border-border bg-background px-4 py-2.5 text-body text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Şirket adı"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-body-sm font-medium text-foreground mb-1">
          Bütçe aralığı
        </label>
        <select
          id="budget"
          value={form.budget}
          onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
          className="w-full rounded-button border border-border bg-background px-4 py-2.5 text-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Seçin</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="block text-body-sm font-medium text-foreground mb-2">
          İlgilendiğiniz hizmetler
        </span>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((s) => (
            <label key={s} className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.services.includes(s)}
                onChange={() => toggleService(s)}
                className="rounded border-border text-accent focus:ring-accent"
              />
              <span className="text-body-sm text-foreground">{s}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm font-medium text-foreground mb-1">
          Mesaj *
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          rows={5}
          className="w-full rounded-button border border-border bg-background px-4 py-2.5 text-body text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-y"
          placeholder="Projenizi veya ihtiyacınızı kısaca anlatın..."
          required
        />
        {errors.message && (
          <p className="mt-1 text-caption text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg">
        {isTeklif ? "Teklif Talebi Gönder" : "Gönder"}
      </Button>
    </form>
  );
}
