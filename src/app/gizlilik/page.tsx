import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Mertsis Digital gizlilik politikası.",
};

export default function GizlilikPage() {
  return (
    <div className="py-section">
      <div className="container-narrow max-w-3xl">
        <SectionHeading title="Gizlilik Politikası" />
        <div className="mt-block prose prose-invert max-w-none text-body text-muted space-y-4">
          <p className="text-body-sm text-muted">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>
          <p>
            Mertsis Digital olarak kişisel verilerinizin güvenliği bizim için önemlidir. Bu sayfada
            web sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde toplanan bilgilerin
            nasıl kullanıldığını ve korunduğunu özetliyoruz.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Toplanan Veriler</h2>
          <p>
            İletişim formu aracılığıyla ad soyad, e-posta, telefon, şirket adı ve mesaj içeriğiniz
            toplanabilir. Web sitesi kullanımı sırasında çerezler ve analitik veriler (anonim)
            kullanılabilir.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Amaç</h2>
          <p>
            Toplanan veriler yalnızca talebinize yanıt vermek, teklif hazırlamak ve hizmet sunmak
            amacıyla kullanılır. Pazarlama iletişimi yalnızca açık onayınız varsa yapılır.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Paylaşım</h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.
          </p>
          <h2 className="text-body-lg font-semibold text-foreground mt-6">Haklarınız</h2>
          <p>
            KVKK kapsamında verilerinize erişim, düzeltme, silme ve işleme itiraz taleplerinizi
            bize yazılı olarak iletebilirsiniz.
          </p>
          <p className="mt-6">
            Sorularınız için:{" "}
            <a href="mailto:info@mertsisdigital.com" className="text-accent hover:underline">
              info@mertsisdigital.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
