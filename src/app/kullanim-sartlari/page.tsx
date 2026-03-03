import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Mertsis Digital web sitesi kullanım şartları.",
};

export default function KullanimSartlariPage() {
  return (
    <div className="py-section">
      <div className="container-narrow max-w-3xl">
        <SectionHeading title="Kullanım Şartları" />
        <div className="mt-block prose prose-invert max-w-none text-body text-muted space-y-4">
          <p className="text-body-sm text-muted">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>
          <p>
            Bu web sitesi Mertsis Digital (&quot;biz&quot;, &quot;ajans&quot;) tarafından
            sunulmaktadır. Siteyi kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Genel</h2>
          <p>
            Sitedeki içerikler bilgilendirme ve tanıtım amaçlıdır. Hizmet kapsamı ve fiyatlar
            özel teklif ile belirlenir; sitedeki açıklamalar bağlayıcı taahhüt niteliği taşımaz.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Fikri Mülkiyet</h2>
          <p>
            Sitedeki metin, görsel ve tasarım unsurları Mertsis Digital&apos;e aittir. İzinsiz
            kopyalama, dağıtma veya ticari kullanım yasaktır.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Sorumluluk</h2>
          <p>
            Sitede yer alan bilgiler doğru tutulmaya çalışılsa da, hata veya eksikliklerden
            dolayı sorumluluk kabul edilmez. Proje detayları ve sonuçlar örnek niteliğindedir.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">İletişim</h2>
          <p>
            Sorularınız için:{" "}
            <a href="mailto:info@mertsisdigital.com" className="text-accent hover:underline">
              info@mertsisdigital.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
