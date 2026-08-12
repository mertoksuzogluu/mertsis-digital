import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Mertsis Digital PDKS gizlilik politikası ve KVKK aydınlatma metni. Toplanan veriler, konum, saklama ve haklarınız.",
  alternates: {
    canonical: "/gizlilik",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const h2Style: CSSProperties = {
  margin: "2rem 0 0.75rem",
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#0a0a0a",
  letterSpacing: "-0.02em",
};

const pStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  fontSize: "0.975rem",
  lineHeight: 1.7,
  color: "#52525b",
};

const ulStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  paddingLeft: "1.25rem",
  fontSize: "0.975rem",
  lineHeight: 1.7,
  color: "#52525b",
};

export default function GizlilikPage() {
  const { privacy } = siteConfig;

  return (
    <>
      <PageHero
        title="Gizlilik Politikası ve KVKK Aydınlatma Metni"
        subtitle="Mertsis Digital PDKS (Personel Devam Kontrol Sistemi)"
      />

      <div style={{ padding: "2.5rem 1.25rem 4rem" }}>
        <article
          className="container-narrow"
          style={{ maxWidth: "42rem", margin: "0 auto" }}
        >
          <p style={{ ...pStyle, fontSize: "0.875rem", color: "#71717a" }}>
            Son güncelleme: {privacy.lastUpdated}
            <br />
            Veri sorumlusu: {privacy.company}
            <br />
            İletişim:{" "}
            <a
              href={`mailto:${privacy.email}`}
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              {privacy.email}
            </a>
          </p>

          <h2 style={h2Style}>1. Kapsam</h2>
          <p style={pStyle}>
            Bu metin, Mertsis Digital mobil personel uygulaması ve ilişkili PDKS
            paneli için geçerlidir. Uygulama, işveren firmanın personelinin
            mesai giriş-çıkış, izin ve ilgili süreçlerini yönetmesi amacıyla
            kullanılır.
          </p>

          <h2 style={h2Style}>2. Toplanan veriler</h2>
          <p style={pStyle}>
            Uygulama ve sistem kapsamında şu veriler işlenebilir:
          </p>
          <ul style={ulStyle}>
            <li>
              Kimlik / personel bilgileri (ad, soyad, personel no, e-posta,
              telefon — işveren kaydıyla)
            </li>
            <li>Cihaz kayıt bilgisi (cihaz token’ı, kayıt zamanı)</li>
            <li>
              Konum bilgisi (yalnızca kullanıcı giriş/çıkış işlemi yaparken; iş
              yeri geofence doğrulaması için)
            </li>
            <li>
              Mesai / puantaj kayıtları (giriş-çıkış zamanı, şube)
            </li>
            <li>İzin talepleri ve açıklamaları</li>
            <li>
              Teknik loglar (güvenlik ve hata ayıklama amaçlı, sınırlı)
            </li>
          </ul>
          <p style={pStyle}>
            Reklam kimliği (IDFA) toplanmaz. Üçüncü taraf reklam / takip
            yapılmaz.
          </p>

          <h2 style={h2Style}>3. İşleme amaçları</h2>
          <ul style={ulStyle}>
            <li>
              Personelin iş yerinde mesai giriş-çıkışının doğrulanması
            </li>
            <li>İzin taleplerinin iletilmesi ve yönetilmesi</li>
            <li>İşveren panelinde puantaj / devam takibi</li>
            <li>
              Güvenlik (cihaz bağlama, yetkisiz erişimin önlenmesi)
            </li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
          <p style={pStyle}>
            Hukuki sebep (KVKK): iş sözleşmesinin ifası, meşru menfaat, açık
            rıza (gerektiğinde) ve ilgili mevzuat.
          </p>

          <h2 style={h2Style}>4. Konum verisi</h2>
          <p style={pStyle}>
            Konum, arka planda sürekli izlenmez. Yalnızca kullanıcı uygulamada
            Giriş / Çıkış işlemini başlattığında alınır; cihazın iş yeri (şube)
            geofence alanında olup olmadığı kontrol edilir. Konum bu amaç
            dışında kullanılmaz, satılmaz.
          </p>

          <h2 style={h2Style}>5. Kimlerle paylaşılır</h2>
          <ul style={ulStyle}>
            <li>
              Veriler, ilgili işveren firmanın PDKS hesabı kapsamında işlenir.
            </li>
            <li>
              Altyapı sağlayıcıları (barındırma / veritabanı) yalnızca hizmetin
              sunulması için, sözleşmesel güvencelerle kullanılır.
            </li>
            <li>
              Yasal zorunluluk olmadıkça üçüncü kişilere satılmaz / pazarlama
              için verilmez.
            </li>
          </ul>

          <h2 style={h2Style}>6. Saklama süresi</h2>
          <p style={pStyle}>
            Veriler, işveren firmanın insan kaynakları / bordro süreçleri ve
            yasal saklama süreleri boyunca tutulur. Cihaz kaydı, personel veya
            yönetici tarafından sonlandırıldığında (uygulamadan hesap/cihaz
            çıkışı veya panelden kayıt iptali) cihaz bağlama bilgisi
            geçersizleşir.
          </p>

          <h2 style={h2Style}>7. Haklarınız (KVKK md. 11)</h2>
          <p style={pStyle}>
            İlgili kişi olarak erişim, düzeltme, silme/yok etme, işlemenin
            kısıtlanması ve kanuna aykırı işleme halinde şikayet taleplerinizi
            iletişim adresine iletebilirsiniz. Talepler ilgili işveren ve
            Mertsis Digital süreçlerine göre değerlendirilir.
          </p>
          <p style={pStyle}>
            Personel uygulamasında “Hesaptan çık” ile bu cihazdaki kayıt
            silinebilir; yeniden kullanım için işverenden yeni kayıt kodu
            gerekir.
          </p>

          <h2 style={h2Style}>8. Güvenlik</h2>
          <p style={pStyle}>
            İletişim HTTPS ile şifrelenir. QR tabanlı doğrulamada ekran
            görüntüsü / kayıt engeli gibi güvenlik önlemleri uygulanabilir.
          </p>

          <h2 style={h2Style}>9. Çocuklar</h2>
          <p style={pStyle}>
            Uygulama 16 yaş altı çocuklara yönelik değildir; işveren personeli
            içindir.
          </p>

          <h2 style={h2Style}>10. Değişiklikler</h2>
          <p style={pStyle}>
            Bu metin güncellenebilir. Güncel sürüm bu sayfada yayınlanır.
          </p>

          <h2 style={h2Style}>11. İletişim</h2>
          <p style={pStyle}>
            Sorularınız için:{" "}
            <a
              href={`mailto:${privacy.email}`}
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              {privacy.email}
            </a>
            <br />
            Adres / unvan: {privacy.address}
          </p>
        </article>
      </div>
    </>
  );
}
