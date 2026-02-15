# PersonaCore — Kişisel Mobil Çekirdek Modülü

<div align="center">

![PersonaCore](https://img.shields.io/badge/PersonaCore-v1.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Prototype-orange?style=for-the-badge)

**Telefon değiştirdikçe kimliğini, verini ve deneyimini kaybetme.**  
**PersonaCore ile dijital benliğin artık sende.**

[🌐 Demo](#) • [📖 Dokümantasyon](#özellikler) • [🚀 Başlarken](#kurulum) • [💬 İletişim](#iletişim)

</div>

---

## 📌 İçindekiler

- [Genel Bakış](#-genel-bakış)
- [Problem](#-problem)
- [Çözüm](#-çözüm)
- [Özellikler](#-özellikler)
- [Teknik Spesifikasyonlar](#-teknik-spesifikasyonlar)
- [Ürünler](#-ürünler)
- [Kurulum](#-kurulum)
- [Yol Haritası](#-yol-haritası)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)
- [İletişim](#-iletişim)

---

## 🎯 Genel Bakış

**PersonaCore**, dijital kimliğinizi, verilerinizi ve kişiselleştirmelerinizi fiziksel bir modülde saklayan, dilediğiniz cihaza tak-çalıştır mantığıyla bağlanan yeni nesil modüler mobil ekosistemdir.

### 🌟 Vizyon

Cihaz merkezli mobil dünyayı **kimlik merkezli** bir geleceğe taşımak.

### 🎓 Proje Statüsü

- 🏆 **TÜBİTAK 2242** başvuru sürecinde
- 🚀 **TEKNOFEST 2025** yarışmacısı
- 🔬 **Prototip aşamasında**
- 📅 **Hedef Lansman:** Q4 2026

---

## ❌ Problem

### Mevcut Durumun Sorunları:

1. **E-Atık Krizi**
   - 📊 Yılda **62 milyon ton** e-atık üretiliyor
   - 📱 Ortalama telefon kullanım süresi sadece **3 yıl**
   - ♻️ Geri dönüşüm oranı %20'nin altında

2. **Veri Güvenliği**
   - 🔐 Veri ihlallerinin **%82'si** insan faktörü kaynaklı
   - ☁️ Cloud çözümleri 3. taraf erişimine açık
   - 📲 Cihaz değişiminde veri transferi riskli

3. **Ekonomik Maliyet**
   - 💰 Ortalama telefon maliyeti **$1,400**
   - 📈 Her yeni model ile artan fiyatlar
   - 🔄 Sürekli yenileme döngüsü

4. **Dijital Kimlik Fragmantasyonu**
   - 🎨 Her cihazda yeni baştan kişiselleştirme
   - 📂 Veriler farklı platformlara dağılmış
   - 🔑 Çoklu kimlik doğrulama zorunluluğu

---

## ✅ Çözüm

### PersonaCore Yaklaşımı:

```
┌─────────────────────────────────────────────────┐
│         PersonaCore Modülü (Çekirdek)          │
│  ┌──────────┬──────────┬──────────┬──────────┐ │
│  │  Kimlik  │   Veri   │  Ayarlar │ Güvenlik │ │
│  │ RSA 4096 │ 128-512GB│   Sync   │ TPM 2.0  │ │
│  └──────────┴──────────┴──────────┴──────────┘ │
└─────────────────────────────────────────────────┘
                      │
          ┌───────────┼───────────┐
          │           │           │
    ┌─────▼────┐ ┌────▼────┐ ┌───▼─────┐
    │ Android  │ │   iOS   │ │ Windows │
    │  Telefon │ │  Tablet │ │    PC   │
    └──────────┘ └─────────┘ └─────────┘
```

### 🔑 Temel Prensipler:

1. **Tek Kimlik, Sonsuz Cihaz**
   - Modülünüzü takın, anında siz olun
   - Host cihaz sadece ekran ve işlemci

2. **Tam Veri Kontrolü**
   - Verileriniz sizde, cloud'a bağımlı değil
   - Fiziksel donanım şifreleme (RSA 4096)

3. **Sürdürülebilir Teknoloji**
   - Telefon eskisin, modülünüz kalsın
   - Minimum e-atık, maksimum kullanım ömrü

4. **Evrensel Uyumluluk**
   - Android, iOS, Windows, Linux
   - USB-C, NFC, Qi kablosuz

---

## ⚡ Özellikler

### 🔐 Güvenlik

| Özellik | Açıklama |
|---------|----------|
| **RSA 4096-bit Şifreleme** | Askeri seviye asimetrik kriptografi |
| **AES 256-bit** | Veri depolama şifrelemesi |
| **TPM 2.0 Chip** | Donanım tabanlı güvenlik modülü |
| **Secure Enclave** | İzole kriptografik işlemci (Pro) |
| **Biyometrik Doğrulama** | Parmak izi / yüz tanıma entegrasyonu |

### 💾 Depolama

| Model | Kapasite | Teknoloji | Hız |
|-------|----------|-----------|-----|
| **Standart** | 128 GB | UFS 3.1 | 1,500 MB/s okuma |
| **Pro** | 512 GB | UFS 4.0 | 2,100 MB/s okuma |

### 🔌 Bağlantı

- **USB-C 3.2 / 4.0** → 5-10 Gb/s veri hızı
- **NFC Type-A** → Kablosuz eşleştirme
- **Qi 1.3 Wireless** → 15W kablosuz şarj

### 🔋 Güç

- **Standart:** 2000 mAh Li-Po batarya
- **Pro:** 3500 mAh + hızlı şarj (18W)
- **Bekleme Modu:** <1mA güç tüketimi

### 🌍 Platform Desteği

✅ Android 10+  
✅ iOS 14+  
✅ HarmonyOS 3+  
✅ Windows 10/11  
✅ macOS 12+  
✅ Linux (Ubuntu 20.04+)

---

## 🛠️ Teknik Spesifikasyonlar

### Donanım Mimarisi

```
┌────────────────────────────────────────────────────┐
│                  Güvenlik Katmanı                  │
│        TPM 2.0 • RSA 4096 • AES 256 • SHA-3        │
├────────────────────────────────────────────────────┤
│              İşlemci & Bellek Katmanı              │
│        ARM Cortex-M7 @ 400MHz • 4GB RAM            │
├────────────────────────────────────────────────────┤
│                  Depolama Katmanı                  │
│          128/512 GB UFS 3.1/4.0 NAND Flash         │
├────────────────────────────────────────────────────┤
│               Bağlantı & Güç Katmanı               │
│    USB-C 3.2/4.0 • NFC • Qi Wireless • Battery     │
├────────────────────────────────────────────────────┤
│                  Fiziksel Katman                   │
│     Anodize Alüminyum • Isı Dağıtım • Polimer     │
└────────────────────────────────────────────────────┘
```

### Boyutlar ve Ağırlık

| Özellik | Standart | Pro |
|---------|----------|-----|
| **Boyut** | Ø 45mm x 8mm (yuvarlak) | 50 x 40 x 9mm (kare) |
| **Ağırlık** | 28g | 35g |
| **Malzeme** | Anodize alüminyum + polimer | Anodize alüminyum + cam |

---

## 📱 Ürünler

### PersonaCore Standart

Günlük kullanım için ideal, dengeli çözüm.

**Özellikler:**
- 💾 128 GB UFS 3.1
- 🔐 RSA 4096 + AES 256
- 🔌 USB-C 3.2 + NFC
- 🔋 2000 mAh + Qi kablosuz

**Kullanım Senaryoları:**
- İş ve okul kullanımı
- Günlük sosyal medya
- Fotoğraf ve belge saklama
- Kişisel veri yönetimi

**Hedef Fiyat:** ~$199

---

### PersonaCore Pro

Profesyoneller için gelişmiş güvenlik ve performans.

**Özellikler:**
- 💾 512 GB UFS 4.0
- 🔐 RSA 4096 + Secure Enclave
- 🔌 USB-C 4.0 + NFC + Bluetooth
- 🔋 3500 mAh + hızlı şarj (18W)

**Kullanım Senaryoları:**
- Kurumsal güvenlik
- Video ve medya prodüksiyonu
- Büyük veri analizi
- Maksimum mahremiyet

**Hedef Fiyat:** ~$399

---

## 🚀 Kurulum

### Web Sitesini Lokal Çalıştırma

```bash
# Repository'yi klonla
git clone https://github.com/kullaniciadin/personacore.git

# Dizine gir
cd personacore

# Basit HTTP sunucusu başlat
python3 -m http.server 8000

# veya Node.js ile
npx serve

# Tarayıcıda aç
# http://localhost:8000
```

### GitHub Pages ile Yayınlama

1. Repository'yi fork edin
2. **Settings** > **Pages** > Source: **main branch**
3. 2-3 dakika bekleyin
4. `https://kullaniciadin.github.io/personacore/` adresinden erişin

**Detaylı kurulum talimatları:** [KURULUM-REHBERI.md](KURULUM-REHBERI.md)

---

## 🗺️ Yol Haritası

### Q1-Q2 2025 | Faz 1: Araştırma & Prototip

- [x] Pazar araştırması ve kullanıcı ihtiyaç analizi
- [x] Teknik mimari tasarım
- [x] Web sitesi ve tanıtım materyalleri
- [ ] PCB tasarımı ve bileşen seçimi
- [ ] Güvenlik protokollerinin tasarımı
- [ ] İlk işlevsel prototip
- [ ] Patent başvurusu
- [ ] TÜBİTAK 2242 başvurusu
- [ ] TEKNOFEST 2025 yarışma başvurusu

### Q3-Q4 2025 | Faz 2: Geliştirme & Test

- [ ] Android/iOS/Windows entegrasyon SDK'ları
- [ ] Güvenlik penetrasyon testleri
- [ ] 50 kişilik beta test programı
- [ ] Geliştirici API ve dokümantasyon
- [ ] Ölçeklenebilirlik ve stres testleri
- [ ] Sertifikasyon süreçleri (CE, FCC)

### Q1-Q4 2026 | Faz 3: Üretim & Lansman

- [ ] 10,000 adetlik ilk seri üretim
- [ ] Turkcell distribütörlük anlaşması
- [ ] E-ticaret platformu lansmanı
- [ ] Retail mağaza yerleştirmeleri
- [ ] Geliştirici topluluk oluşturma
- [ ] Kurumsal müşteri pilotları (5 firma)
- [ ] Uluslararası pazar araştırması

### 2027+ | Faz 4: Büyüme & Yenilik

- [ ] PersonaCore v2 (AI entegrasyonu)
- [ ] IoT cihaz desteği (akıllı ev, giyilebilir)
- [ ] Blockchain kimlik doğrulama
- [ ] Avrupa ve Orta Doğu pazarına açılım
- [ ] Kurumsal çözümler paketi

---

## 🤝 Katkıda Bulunma

PersonaCore açık inovasyona inanır! Katkılarınızı bekliyoruz:

### Katkı Alanları

- 🐛 **Bug Reports:** Sorunları bildirin
- 💡 **Feature Requests:** Yeni özellik önerileri
- 📝 **Documentation:** Dokümantasyon geliştirme
- 🌍 **Translations:** Çeviri desteği
- 🎨 **Design:** UI/UX iyileştirmeleri
- 💻 **Code:** SDK ve API geliştirme

### Katkı Süreci

1. Repository'yi fork yapın
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request açın

---

## 🌍 BM Sürdürülebilir Kalkınma Hedefleri

PersonaCore, BM'nin 17 Sürdürülebilir Kalkınma Hedefi'nden 4 tanesine doğrudan katkı sağlar:

### 🏭 SDG 9: Sanayi, Yenilikçilik ve Altyapı
Yenilikçi donanım-yazılım entegrasyonu ile mobil teknolojide paradigma değişimi.

### 🌱 SDG 12: Sorumlu Üretim ve Tüketim
Modüler tasarım ile e-atık azaltma, cihaz ömrünü uzatma ve döngüsel ekonomiye geçiş.

### ⚖️ SDG 16: Barış, Adalet ve Güçlü Kurumlar
Veri gizliliği ve güvenlik hakkını demokratikleştirerek dijital özgürlük sağlama.

### 🤝 SDG 17: Hedefler İçin Ortaklıklar
Açık kaynak ekosistemi ve geliştirici topluluğu ile küresel iş birliği.

---

## 📊 Karşılaştırma

| Özellik | PersonaCore | Cloud Depolama | Geleneksel Telefon |
|---------|-------------|----------------|-------------------|
| **Veri Güvenliği** | ✅ Donanım şifreleme | ❌ Sunucu bağımlı | ❌ Cihaz bağımlı |
| **Gizlilik** | ✅ Tam kontrol | ❌ 3. taraf erişimi | ❌ OS bağımlı |
| **Taşınabilirlik** | ✅ Cihazlar arası | ⚠️ İnternet gerekli | ❌ Tek cihaz |
| **Çevresel Etki** | ✅ Modüler | ❌ Veri merkezi | ❌ E-atık yoğun |
| **Maliyet** | ✅ Tek seferlik | ❌ Aylık abonelik | ✅ Tek seferlik |
| **Çevrimdışı Erişim** | ✅ Her zaman | ❌ Sınırlı | ✅ Her zaman |

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır.

Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 📞 İletişim

### Ekip

**PersonaCore Team**  
Yarının Teknoloji Liderleri

### İletişim Kanalları

- 📧 **Email:** beyzaerdem182@gmail.com
- 💼 **LinkedIn:** Beyza Erdem
- 📱 **GitHub:** @beyziki

### İş Birlikleri

Kurumsal iş birlikleri, yatırım fırsatları ve medya sorguları için:
📧 partnerships@personacore.tech

### Destek

Teknik destek ve genel sorular için:
📧 support@personacore.tech

---

## 🙏 Teşekkürler

PersonaCore projesi aşağıdaki kurum ve platformların desteğiyle geliştirilmektedir:

- **Turkcell** - Stratejik partner
- **Açık Kaynak Topluluğu** - Teknoloji ve ilham

### Referanslar

- UN Global E-waste Monitor 2024
- GSMA Mobile Industry Report 2023
- OECD Digital Security Outlook 2023
- IEEE Standards Association

---

## 📜 Sorumluluk Reddi

PersonaCore şu anda **prototip aşamasındadır**. Burada belirtilen özellikler, spesifikasyonlar ve fiyatlar değişebilir. Ticari üretim ve satış tarihleri kesin değildir.

---

<div align="center">

**PersonaCore — Dijital Kimliğin Artık Sende**

Made with ❤️ by PersonaCore Team

[⬆ Başa Dön](#personacore--kişisel-mobil-çekirdek-modülü)

</div>
