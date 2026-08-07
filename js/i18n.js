/* Vevora IPTV Legal Site — i18n */
(function () {
  'use strict';

  var LANGS = ["en", "tr", "de", "fr", "es", "it", "pt", "ru", "ar"];
  var RTL_LANGS = ['ar'];
  var STORAGE_KEY = 'vevora-lang';
  var THEME_KEY = 'vevora-theme';
  var BASE_PATH = '/vevora-iptv-policies';

  var LANG_LABELS = {
    en: 'English', tr: 'Türkçe', de: 'Deutsch', fr: 'Français',
    es: 'Español', it: 'Italiano', pt: 'Português', ru: 'Русский', ar: 'العربية'
  };

  var THEME_LABELS = {
    en: { dark: 'Dark', light: 'Light' },
    tr: { dark: 'Koyu', light: 'Açık' },
    de: { dark: 'Dunkel', light: 'Hell' },
    fr: { dark: 'Sombre', light: 'Clair' },
    es: { dark: 'Oscuro', light: 'Claro' },
    it: { dark: 'Scuro', light: 'Chiaro' },
    pt: { dark: 'Escuro', light: 'Claro' },
    ru: { dark: 'Тёмная', light: 'Светлая' },
    ar: { dark: 'داكن', light: 'فاتح' }
  };

  var T = {
  "en": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Last updated",
      "lastUpdatedDate": "August 7, 2026",
      "navHome": "Home",
      "navPrivacy": "Privacy Policy",
      "navTerms": "Terms of Use",
      "navSupport": "Support",
      "footer": "© 2026 Okur Studio. All rights reserved.",
      "footerNote": "Vevora IPTV is a media player app. Okur Studio does not provide, host, or distribute IPTV channels or streams.",
      "selectLanguage": "Language"
    },
    "index": {
      "title": "Legal & Support",
      "heading": "Vevora IPTV",
      "subtitle": "Privacy, terms, and support for the iOS & iPadOS app by Okur Studio.",
      "privacyTitle": "Privacy Policy",
      "privacyDesc": "How the app handles information on your device and via Apple iCloud / CloudKit.",
      "termsTitle": "Terms of Use",
      "termsDesc": "Rules for using the Vevora IPTV player app.",
      "supportTitle": "Support",
      "supportDesc": "Setup and technical help by email."
    },
    "support": {
      "title": "Support",
      "heading": "Contact Support",
      "intro": "Need help with Vevora IPTV? Contact us about app setup, playlists you add, or technical issues. We do not provide channels or streams.",
      "emailLabel": "Email us at",
      "emailHint": "Include your device model and iOS version for faster help.",
      "topicsTitle": "Common questions",
      "topics": [
        {
          "title": "Adding playlists",
          "body": "Vevora IPTV is a shell player. Add your own M3U URL or Xtream login in the app. Okur Studio does not provide playlists or channels."
        },
        {
          "title": "Playback issues",
          "body": "Stream quality depends on your network and playlist provider. Try another channel, check your connection, or contact your playlist provider if streams fail."
        },
        {
          "title": "Premium and subscriptions",
          "body": "Premium features are billed through the App Store on your Apple ID. Manage or cancel in Settings > Apple ID > Subscriptions at least 24 hours before renewal."
        },
        {
          "title": "Contacting support",
          "body": "Email vevoraplayer@gmail.com with a clear description of the issue. Avoid sharing playlist passwords unless we ask for troubleshooting."
        }
      ],
      "helpTitle": "Common questions",
      "helpItems": [
        "Vevora IPTV is a shell player — you add your own M3U or Xtream playlists. Okur Studio does not provide, host, or distribute channels or streams.",
        "Include your iOS or iPadOS version, device model, and a short description of the issue.",
        "Do not share playlist passwords in email unless needed for troubleshooting."
      ],
      "responseNote": "We aim to respond within a few business days."
    },
    "privacy": {
      "title": "Privacy Policy",
      "sections": {
        "about": {
          "title": "About This Policy",
          "body": [
            "This Privacy Policy explains how Okur Studio handles information when you use Vevora IPTV on iPhone and iPad (iOS / iPadOS).",
            "Vevora IPTV is a shell media player. You add your own M3U or Xtream playlists. Okur Studio does not provide, host, or distribute any channels, movies, series, or other streams."
          ]
        },
        "data": {
          "title": "Information on Your Device",
          "body": [
            "Okur Studio does not operate its own servers to store your playlists or viewing history. Library data lives on your device and may sync via Apple iCloud / CloudKit when you are signed in to iCloud.",
            "On-device data may include playlist links and credentials you enter, profiles, favorites, watch history, download metadata, and app settings.",
            "When you play media, your device connects directly to the playlist source you configured. We do not receive or store that media."
          ]
        },
        "icloud": {
          "title": "iCloud and CloudKit Sync",
          "body": [
            "If you are signed in to iCloud on your device, Vevora IPTV may sync your library—such as profiles, playlist metadata, favorites, and watch history—across your Apple devices using Apple CloudKit / iCloud.",
            "That sync uses your Apple ID and Apple’s iCloud infrastructure. Okur Studio does not operate its own sync servers and cannot read the contents of your iCloud account.",
            "Playlist passwords and profile PINs are stored in the iOS Keychain and may sync with iCloud Keychain when that feature is enabled for your Apple ID.",
            "You can limit or remove synced data by signing out of iCloud, managing iCloud storage for this app where available, deleting data in the app, or uninstalling Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "Tracking and Advertising",
          "body": [
            "We do not engage in cross-app tracking for advertising.",
            "We do not sell personal data.",
            "We do not use third-party advertising SDKs for tracking."
          ]
        },
        "use": {
          "title": "How Information Is Used",
          "body": [
            "On-device data is used only to run the player: load playlists, show your library, remember preferences, and play streams you request.",
            "We do not use on-device playlist or viewing data for advertising."
          ]
        },
        "sharing": {
          "title": "Sharing",
          "body": [
            "We do not share your playlists, credentials, or viewing history with third parties for their marketing.",
            "Your device may communicate with the playlist provider you choose and with standard Apple platform services needed to run the app on iOS and iPadOS—including iCloud / CloudKit when library sync is active.",
            "If required by law, we may disclose information to the extent necessary to comply."
          ]
        },
        "retention": {
          "title": "Retention",
          "body": [
            "Playlist data and related settings remain on your device (and, when enabled, in your iCloud account via CloudKit) until you delete them in the app, remove them from iCloud, or uninstall the app.",
            "If you contact us by email, we keep the correspondence only as long as needed to respond and resolve your request."
          ]
        },
        "security": {
          "title": "Security",
          "body": [
            "We design the app so sensitive details stay on your device where possible.",
            "No method of storage or transmission is perfectly secure. Protect your device passcode and do not share playlist credentials."
          ]
        },
        "choices": {
          "title": "Your Choices",
          "body": [
            "You can edit or delete playlists, profiles, and related data inside the app.",
            "You can clear app data or uninstall Vevora IPTV to remove on-device information.",
            "For privacy questions, contact us at vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Children",
          "body": [
            "Vevora IPTV is suitable for users aged 13 and older. It is not directed at children under 13.",
            "Do not use the app to collect information from children. If you believe a child has provided personal information through the app, contact us and we will help address it."
          ]
        },
        "purchases": {
          "title": "In-App Purchases and Subscriptions",
          "body": [
            "Vevora IPTV may offer optional premium features through in-app purchases and auto-renewable subscriptions on the App Store.",
            "Payment is processed by Apple. We do not receive or store your payment card or banking details.",
            "Apple may share purchase confirmation and subscription status with us so we can unlock premium features in the app.",
            "You can view billing history, manage subscriptions, and request refunds through your Apple ID account. To cancel auto-renewal, turn it off at least 24 hours before the end of the current billing period in Settings > Apple ID > Subscriptions on your device."
          ]
        },
        "thirdparty": {
          "title": "Third-Party Services",
          "body": [
            "Playlists and streams come from sources you configure. Those providers have their own privacy practices.",
            "Okur Studio is not responsible for the privacy or content of third-party playlist sources."
          ]
        },
        "updates": {
          "title": "Policy Updates",
          "body": [
            "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do.",
            "Continued use of the app after an update means you acknowledge the revised policy."
          ]
        },
        "contact": {
          "title": "Contact",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "Email: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Terms of Use",
      "sections": {
        "agreement": {
          "title": "Agreement",
          "body": [
            "These Terms of Use govern your use of Vevora IPTV on iOS and iPadOS, operated by Okur Studio.",
            "By downloading or using the app, you agree to these terms. If you do not agree, do not use the app."
          ]
        },
        "player": {
          "title": "Shell Player Only",
          "body": [
            "Vevora IPTV is a shell media player. It plays playlists and streams that you add yourself, such as M3U or Xtream sources.",
            "Okur Studio does not provide, host, or distribute IPTV channels, movies, series, or any other media content.",
            "You are solely responsible for obtaining lawful access to any playlist or stream you use with the app."
          ]
        },
        "age": {
          "title": "Age Requirement",
          "body": [
            "Vevora IPTV is intended for users aged 13 and older. It is not directed at children under 13.",
            "You must be old enough to use the App Store and to agree to these terms in your region. If you use the app on behalf of someone else, you confirm you have authority to accept these terms for them."
          ]
        },
        "license": {
          "title": "License",
          "body": [
            "Subject to these Terms, Okur Studio grants you a personal, limited, non-exclusive, non-transferable license to use Vevora IPTV on Apple devices that you own or control.",
            "Apple’s App Store terms also apply where relevant to your download and use of the app."
          ]
        },
        "profiles": {
          "title": "Profiles and Settings",
          "body": [
            "You may create profiles and settings stored on your device. Keep credentials secure and do not share them.",
            "You are responsible for activity that occurs with playlists and profiles you configure on your device."
          ]
        },
        "content": {
          "title": "Your Content and Playlists",
          "body": [
            "Any playlist URL, credentials, or media you add comes from you or your chosen provider — not from Okur Studio.",
            "You must only use content you have the right to access. The app does not grant you any rights to media from third parties."
          ]
        },
        "subscriptions": {
          "title": "Premium Subscriptions",
          "body": [
            "Optional premium features may be available through auto-renewable subscriptions purchased via the Apple App Store.",
            "Payment is charged to your Apple ID account when you confirm a purchase. Subscriptions automatically renew unless you turn off auto-renew at least 24 hours before the end of the current period.",
            "Your account will be charged for renewal within 24 hours prior to the end of the current period. Manage or cancel subscriptions anytime in Settings > Apple ID > Subscriptions on your device.",
            "App Store purchases are subject to Apple’s terms and policies. Okur Studio does not process payments directly."
          ]
        },
        "rules": {
          "title": "Acceptable Use",
          "body": [
            "Use Vevora IPTV only in ways that comply with applicable law and these terms.",
            "Do not misuse the app to access or distribute unlawful content, interfere with others’ systems, or attempt to reverse engineer the app except where allowed by law."
          ]
        },
        "ownership": {
          "title": "App Ownership",
          "body": [
            "Okur Studio owns the Vevora IPTV app software, design, and branding.",
            "These terms do not transfer ownership of the app to you."
          ]
        },
        "nowarranty": {
          "title": "No Warranty",
          "body": [
            "The app is provided “as is” and “as available.” Playback depends on your device, network, and the playlist sources you choose.",
            "Okur Studio does not guarantee uninterrupted playback, compatibility with every playlist format, or availability of any third-party stream."
          ]
        },
        "responsibility": {
          "title": "Your Responsibility",
          "body": [
            "You are responsible for how you use the app and for the playlists and streams you connect.",
            "Okur Studio is not responsible for third-party content, playlist providers, or harm caused by media or links you choose to open."
          ]
        },
        "stop": {
          "title": "Stopping Use",
          "body": [
            "You may stop using Vevora IPTV at any time by deleting the app and related data from your device.",
            "We may stop offering the app or update these terms. Continued use after changes means you accept the updated terms."
          ]
        },
        "contact": {
          "title": "Contact",
          "body": [
            "Questions about these Terms of Use: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "tr": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Son güncelleme",
      "lastUpdatedDate": "7 Ağustos 2026",
      "navHome": "Ana Sayfa",
      "navPrivacy": "Gizlilik Politikası",
      "navTerms": "Kullanım Koşulları",
      "navSupport": "Destek",
      "footer": "© 2026 Okur Studio. Tüm hakları saklıdır.",
      "footerNote": "Vevora IPTV bir medya oynatıcı uygulamasıdır. Okur Studio IPTV kanalları veya yayınları sağlamaz, barındırmaz veya dağıtmaz.",
      "selectLanguage": "Dil"
    },
    "index": {
      "title": "Yasal ve Destek",
      "heading": "Vevora IPTV",
      "subtitle": "Okur Studio’nun iOS ve iPadOS uygulaması için gizlilik, koşullar ve destek.",
      "privacyTitle": "Gizlilik Politikası",
      "privacyDesc": "Uygulamanın cihazınızdaki ve Apple iCloud / CloudKit üzerinden bilgileri nasıl işlediği.",
      "termsTitle": "Kullanım Koşulları",
      "termsDesc": "Vevora IPTV oynatıcı uygulamasını kullanma kuralları.",
      "supportTitle": "Destek",
      "supportDesc": "Kurulum ve teknik yardım için e-posta."
    },
    "support": {
      "title": "Destek",
      "heading": "Destek İletişimi",
      "intro": "Vevora IPTV konusunda yardıma mı ihtiyacınız var? Kurulum, eklediğiniz oynatma listeleri veya teknik sorunlar için bize yazın. Kanal veya yayın sağlamayız.",
      "emailLabel": "E-posta adresimiz",
      "emailHint": "Daha hızlı yardım için cihaz modelinizi ve iOS sürümünüzü belirtin.",
      "topicsTitle": "Sık sorulan konular",
      "topics": [
        {
          "title": "Liste ekleme",
          "body": "Vevora IPTV bir kabuk oynatıcıdır. Uygulamada kendi M3U adresinizi veya Xtream giriş bilgilerinizi ekleyin. Okur Studio liste veya kanal sağlamaz."
        },
        {
          "title": "Oynatma sorunları",
          "body": "Yayın kalitesi ağınıza ve liste sağlayıcınıza bağlıdır. Başka bir kanal deneyin, bağlantınızı kontrol edin veya yayınlar çalışmıyorsa liste sağlayıcınıza başvurun."
        },
        {
          "title": "Premium ve abonelikler",
          "body": "Premium özellikler Apple ID’niz üzerinden App Store’da faturalandırılır. Yenilemeden en az 24 saat önce Ayarlar > Apple ID > Abonelikler bölümünden yönetin veya iptal edin."
        },
        {
          "title": "Destekle iletişim",
          "body": "Sorunu kısaca anlatarak vevoraplayer@gmail.com adresine yazın. Sorun giderme için istemedikçe liste şifrelerini paylaşmayın."
        }
      ],
      "helpTitle": "Yazmadan önce",
      "helpItems": [
        "Vevora IPTV bir kabuk oynatıcıdır — kendi M3U veya Xtream listelerinizi eklersiniz. Okur Studio kanal veya yayın sağlamaz, barındırmaz veya dağıtmaz.",
        "iOS veya iPadOS sürümünüzü, cihaz modelinizi ve sorunun kısa bir açıklamasını ekleyin.",
        "Sorun giderme için gerekli olmadıkça e-postada liste şifrelerini paylaşmayın."
      ],
      "responseNote": "Birkaç iş günü içinde yanıtlamayı hedefliyoruz."
    },
    "privacy": {
      "title": "Gizlilik Politikası",
      "sections": {
        "about": {
          "title": "Bu Politika Hakkında",
          "body": [
            "Bu Gizlilik Politikası, iPhone ve iPad’de (iOS / iPadOS) Vevora IPTV kullanırken Okur Studio’nun bilgileri nasıl işlediğini açıklar.",
            "Vevora IPTV bir kabuk medya oynatıcıdır. Kendi M3U veya Xtream listelerinizi eklersiniz. Okur Studio kanal, film, dizi veya başka yayın sağlamaz, barındırmaz veya dağıtmaz."
          ]
        },
        "data": {
          "title": "Cihazınızdaki Bilgiler",
          "body": [
            "Okur Studio, oynatma listelerinizi veya izleme geçmişinizi saklamak için kendi sunucularını işletmez. Kitaplık verileri cihazınızda tutulur ve iCloud oturumu açıksa Apple iCloud / CloudKit ile senkronize edilebilir.",
            "Cihaz üzerindeki veriler; girdiğiniz liste bağlantıları ve kimlik bilgileri, profiller, favoriler, izleme geçmişi, indirme meta verileri ve uygulama ayarlarını içerebilir.",
            "Medya oynatırken cihazınız doğrudan sizin yapılandırdığınız liste kaynağına bağlanır. Bu medyayı almaz veya saklamayız."
          ]
        },
        "icloud": {
          "title": "iCloud ve CloudKit Senkronizasyonu",
          "body": [
            "Cihazınızda iCloud oturumu açıksa Vevora IPTV; profiller, liste meta verileri, favoriler ve izleme geçmişi gibi kitaplık verilerinizi Apple CloudKit / iCloud ile Apple cihazlarınız arasında senkronize edebilir.",
            "Bu senkronizasyon Apple Kimliğiniz ve Apple’ın iCloud altyapısını kullanır. Okur Studio kendi senkronizasyon sunucularını işletmez ve iCloud hesabınızın içeriğini okuyamaz.",
            "Liste şifreleri ve profil PIN’leri iOS Anahtar Zinciri’nde saklanır; Apple Kimliğinizde etkinse iCloud Anahtar Zinciri ile senkronize edilebilir.",
            "Senkronize veriyi sınırlamak veya kaldırmak için iCloud’dan çıkabilir, uygulamada verileri silebilir veya Vevora IPTV’yi kaldırabilirsiniz."
          ]
        },
        "tracking": {
          "title": "Takip ve Reklam",
          "body": [
            "Reklam amacıyla uygulamalar arası takip yapmayız.",
            "Kişisel verileri satmayız.",
            "Takip için üçüncü taraf reklam SDK’ları kullanmayız."
          ]
        },
        "use": {
          "title": "Bilgilerin Kullanımı",
          "body": [
            "Cihaz üzerindeki veriler yalnızca oynatıcıyı çalıştırmak için kullanılır: listeleri yüklemek, kitaplığınızı göstermek, tercihleri hatırlamak ve istediğiniz yayınları oynatmak.",
            "Cihaz üzerindeki liste veya izleme verilerini reklam için kullanmayız."
          ]
        },
        "sharing": {
          "title": "Paylaşım",
          "body": [
            "Oynatma listelerinizi, kimlik bilgilerinizi veya izleme geçmişinizi üçüncü tarafların pazarlaması için paylaşmayız.",
            "Cihazınız, seçtiğiniz liste sağlayıcısıyla ve uygulamayı iOS ile iPadOS’ta çalıştırmak için gereken standart Apple platform hizmetleriyle—kitaplık senkronizasyonu açıksa iCloud / CloudKit dahil—iletişim kurabilir.",
            "Yasal zorunluluk halinde, gerekli ölçüde bilgi açıklayabiliriz."
          ]
        },
        "retention": {
          "title": "Saklama",
          "body": [
            "Liste verileri ve ilgili ayarlar, uygulamada sildiğinizde, iCloud’dan kaldırdığınızda veya uygulamayı kaldırdığınızda cihazınızda (ve etkinse CloudKit üzerinden iCloud hesabınızda) kalır.",
            "E-posta ile bize ulaşırsanız, yazışmayı yalnızca yanıtlamak ve talebinizi çözmek için gereken süre boyunca tutarız."
          ]
        },
        "security": {
          "title": "Güvenlik",
          "body": [
            "Uygulamayı, hassas ayrıntıların mümkün olduğunca cihazınızda kalması için tasarlarız.",
            "Hiçbir depolama veya iletim yöntemi mükemmel güvenli değildir. Cihaz parolanızı koruyun ve liste kimlik bilgilerini paylaşmayın."
          ]
        },
        "choices": {
          "title": "Seçenekleriniz",
          "body": [
            "Uygulama içinde listeleri, profilleri ve ilgili verileri düzenleyebilir veya silebilirsiniz.",
            "Cihaz üzerindeki bilgileri kaldırmak için uygulama verilerini temizleyebilir veya Vevora IPTV’yi kaldırabilirsiniz.",
            "Gizlilik sorularınız için vevoraplayer@gmail.com adresine yazın."
          ]
        },
        "children": {
          "title": "Çocuklar",
          "body": [
            "Vevora IPTV 13 yaş ve üzeri kullanıcılar için uygundur. 13 yaşından küçük çocuklara yönelik değildir.",
            "Uygulamayı çocuklardan bilgi toplamak için kullanmayın. Bir çocuğun uygulama üzerinden kişisel bilgi verdiğini düşünüyorsanız bize ulaşın; yardımcı oluruz."
          ]
        },
        "purchases": {
          "title": "Uygulama İçi Satın Almalar ve Abonelikler",
          "body": [
            "Vevora IPTV, App Store üzerinden uygulama içi satın almalar ve otomatik yenilenen aboneliklerle isteğe bağlı premium özellikler sunabilir.",
            "Ödeme Apple tarafından işlenir. Ödeme kartı veya banka bilgilerinizi almaz veya saklamayız.",
            "Apple, uygulamada premium özelliklerin kilidini açabilmemiz için satın alma onayı ve abonelik durumunu bizimle paylaşabilir.",
            "Fatura geçmişinizi görüntüleyebilir, abonelikleri yönetebilir ve Apple ID hesabınız üzerinden geri ödeme talep edebilirsiniz. Otomatik yenilemeyi iptal etmek için, mevcut fatura döneminin bitiminden en az 24 saat önce cihazınızda Ayarlar > Apple ID > Abonelikler bölümünden kapatın."
          ]
        },
        "thirdparty": {
          "title": "Üçüncü Taraf Hizmetler",
          "body": [
            "Listeler ve yayınlar sizin yapılandırdığınız kaynaklardan gelir. Bu sağlayıcıların kendi gizlilik uygulamaları vardır.",
            "Okur Studio, üçüncü taraf liste kaynaklarının gizliliğinden veya içeriğinden sorumlu değildir."
          ]
        },
        "updates": {
          "title": "Politika Güncellemeleri",
          "body": [
            "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yaptığımızda sayfanın üstündeki “Son güncelleme” tarihi değişir.",
            "Güncellemeden sonra uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir."
          ]
        },
        "contact": {
          "title": "İletişim",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "E-posta: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Kullanım Koşulları",
      "sections": {
        "agreement": {
          "title": "Sözleşme",
          "body": [
            "Bu Kullanım Koşulları, Okur Studio tarafından sunulan Vevora IPTV’nin iOS ve iPadOS üzerindeki kullanımını düzenler.",
            "Uygulamayı indirerek veya kullanarak bu koşulları kabul edersiniz. Kabul etmiyorsanız uygulamayı kullanmayın."
          ]
        },
        "player": {
          "title": "Yalnızca Kabuk Oynatıcı",
          "body": [
            "Vevora IPTV bir kabuk medya oynatıcıdır. M3U veya Xtream gibi kendinizin eklediği listeleri ve yayınları oynatır.",
            "Okur Studio IPTV kanalları, filmler, diziler veya başka medya içeriği sağlamaz, barındırmaz veya dağıtmaz.",
            "Uygulamayla kullandığınız herhangi bir listeye veya yayına yasal erişim sağlamak yalnızca sizin sorumluluğunuzdadır."
          ]
        },
        "age": {
          "title": "Yaş Koşulu",
          "body": [
            "Vevora IPTV 13 yaş ve üzeri kullanıcılar için tasarlanmıştır. 13 yaşından küçük çocuklara yönelik değildir.",
            "App Store’u kullanabilecek ve bulunduğunuz bölgede bu koşulları kabul edebilecek yaşta olmalısınız. Uygulamayı başkası adına kullanıyorsanız, bu koşulları onlar adına kabul etme yetkiniz olduğunu doğrularsınız."
          ]
        },
        "license": {
          "title": "Lisans",
          "body": [
            "Bu Koşullara tabi olarak Okur Studio, sahip olduğunuz veya kontrol ettiğiniz Apple cihazlarında Vevora IPTV’yi kullanmanız için size kişisel, sınırlı, münhasır olmayan ve devredilemez bir lisans verir.",
            "Uygulamayı indirmeniz ve kullanmanızla ilgili olduğu ölçüde Apple’ın App Store koşulları da geçerlidir."
          ]
        },
        "profiles": {
          "title": "Profiller ve Ayarlar",
          "body": [
            "Cihazınızda saklanan profiller ve ayarlar oluşturabilirsiniz. Kimlik bilgilerini güvende tutun ve paylaşmayın.",
            "Cihazınızda yapılandırdığınız listeler ve profillerle gerçekleşen etkinliklerden siz sorumlusunuz."
          ]
        },
        "content": {
          "title": "İçeriğiniz ve Listeleriniz",
          "body": [
            "Eklediğiniz herhangi bir liste URL’si, kimlik bilgisi veya medya sizden veya seçtiğiniz sağlayıcıdan gelir — Okur Studio’dan değil.",
            "Yalnızca erişim hakkınız olan içeriği kullanmalısınız. Uygulama, üçüncü taraf medya için size herhangi bir hak vermez."
          ]
        },
        "subscriptions": {
          "title": "Premium Abonelikler",
          "body": [
            "İsteğe bağlı premium özellikler, Apple App Store üzerinden satın alınan otomatik yenilenen aboneliklerle sunulabilir.",
            "Satın almayı onayladığınızda ödeme Apple ID hesabınıza yansır. Mevcut dönemin bitiminden en az 24 saat önce otomatik yenilemeyi kapatmadığınız sürece abonelikler otomatik olarak yenilenir.",
            "Yenileme ücreti, mevcut dönemin bitiminden önceki 24 saat içinde hesabınıza yansıtılır. Abonelikleri cihazınızda Ayarlar > Apple ID > Abonelikler bölümünden istediğiniz zaman yönetebilir veya iptal edebilirsiniz.",
            "App Store satın almaları Apple’ın koşullarına tabidir. Okur Studio ödemeleri doğrudan işlemez."
          ]
        },
        "rules": {
          "title": "Kabul Edilebilir Kullanım",
          "body": [
            "Vevora IPTV’yi yalnızca geçerli yasalara ve bu koşullara uygun şekilde kullanın.",
            "Uygulamayı yasadışı içeriğe erişmek veya dağıtmak, başkalarının sistemlerine müdahale etmek veya yasaların izin verdiği durumlar dışında tersine mühendislik yapmak için kötüye kullanmayın."
          ]
        },
        "ownership": {
          "title": "Uygulama Sahipliği",
          "body": [
            "Okur Studio, Vevora IPTV yazılımı, tasarımı ve markasının sahibidir.",
            "Bu koşullar uygulamanın mülkiyetini size devretmez."
          ]
        },
        "nowarranty": {
          "title": "Garanti Yok",
          "body": [
            "Uygulama “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Oynatma; cihazınıza, ağa ve seçtiğiniz liste kaynaklarına bağlıdır.",
            "Okur Studio kesintisiz oynatma, her liste biçimiyle uyumluluk veya herhangi bir üçüncü taraf yayınının kullanılabilirliğini garanti etmez."
          ]
        },
        "responsibility": {
          "title": "Sorumluluğunuz",
          "body": [
            "Uygulamayı nasıl kullandığınızdan ve bağlandığınız listeler ile yayınlardan siz sorumlusunuz.",
            "Okur Studio, üçüncü taraf içerikten, liste sağlayıcılarından veya açmayı seçtiğiniz medya ya da bağlantılardan kaynaklanan zararlardan sorumlu değildir."
          ]
        },
        "stop": {
          "title": "Kullanımı Durdurma",
          "body": [
            "Uygulamayı ve ilgili verileri cihazınızdan silerek istediğiniz zaman Vevora IPTV kullanımını bırakabilirsiniz.",
            "Uygulamayı sunmayı bırakabilir veya bu koşulları güncelleyebiliriz. Değişikliklerden sonra kullanıma devam etmek, güncellenmiş koşulları kabul ettiğiniz anlamına gelir."
          ]
        },
        "contact": {
          "title": "İletişim",
          "body": [
            "Bu Kullanım Koşulları hakkında sorular: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "de": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Zuletzt aktualisiert",
      "lastUpdatedDate": "7. August 2026",
      "navHome": "Startseite",
      "navPrivacy": "Datenschutzrichtlinie",
      "navTerms": "Nutzungsbedingungen",
      "navSupport": "Support",
      "footer": "© 2026 Okur Studio. Alle Rechte vorbehalten.",
      "footerNote": "Vevora IPTV ist eine Mediaplayer-App. Okur Studio stellt keine IPTV-Kanäle oder Streams bereit, hostet oder vertreibt sie nicht.",
      "selectLanguage": "Sprache"
    },
    "index": {
      "title": "Rechtliches & Support",
      "heading": "Vevora IPTV",
      "subtitle": "Datenschutz, Bedingungen und Support für die iOS- und iPadOS-App von Okur Studio.",
      "privacyTitle": "Datenschutzrichtlinie",
      "privacyDesc": "Wie die App Informationen auf deinem Gerät und über Apple iCloud / CloudKit verarbeitet.",
      "termsTitle": "Nutzungsbedingungen",
      "termsDesc": "Regeln für die Nutzung der Vevora-IPTV-Player-App.",
      "supportTitle": "Support",
      "supportDesc": "Einrichtung und technische Hilfe per E-Mail."
    },
    "support": {
      "title": "Support",
      "heading": "Support kontaktieren",
      "intro": "Brauchen Sie Hilfe zu Vevora IPTV? Schreiben Sie uns zu Einrichtung, von Ihnen hinzugefügten Playlists oder technischen Fragen. Wir stellen keine Kanäle oder Streams bereit.",
      "emailLabel": "E-Mail an",
      "emailHint": "Geben Sie Gerätemodell und iOS-Version an, damit wir schneller helfen können.",
      "topicsTitle": "Häufige Fragen",
      "topics": [
        {
          "title": "Playlists hinzufügen",
          "body": "Vevora IPTV ist ein Shell-Player. Fügen Sie in der App Ihre eigene M3U-URL oder Xtream-Anmeldung hinzu. Okur Studio stellt keine Playlists oder Kanäle bereit."
        },
        {
          "title": "Wiedergabeprobleme",
          "body": "Die Stream-Qualität hängt von Netzwerk und Playlist-Anbieter ab. Probieren Sie einen anderen Kanal, prüfen Sie die Verbindung oder wenden Sie sich an Ihren Anbieter."
        },
        {
          "title": "Premium und Abonnements",
          "body": "Premium-Funktionen werden über den App Store auf Ihrer Apple-ID abgerechnet. Verwalten oder kündigen Sie unter Einstellungen > Apple-ID > Abonnements mindestens 24 Stunden vor Verlängerung."
        },
        {
          "title": "Support kontaktieren",
          "body": "Schreiben Sie an vevoraplayer@gmail.com mit einer kurzen Problembeschreibung. Teilen Sie Playlist-Passwörter nur auf Anfrage."
        }
      ],
      "helpTitle": "Bevor Sie schreiben",
      "helpItems": [
        "Vevora IPTV ist ein Shell-Player — Sie fügen eigene M3U- oder Xtream-Playlists hinzu. Okur Studio stellt keine Kanäle oder Streams bereit, hostet oder vertreibt sie nicht.",
        "Geben Sie Ihre iOS- oder iPadOS-Version, das Gerätemodell und eine kurze Problembeschreibung an.",
        "Teilen Sie Playlist-Passwörter per E-Mail nur, wenn es für die Fehlersuche nötig ist."
      ],
      "responseNote": "Wir bemühen uns, innerhalb weniger Werktage zu antworten."
    },
    "privacy": {
      "title": "Datenschutzrichtlinie",
      "sections": {
        "about": {
          "title": "Über diese Richtlinie",
          "body": [
            "Diese Datenschutzrichtlinie erklärt, wie Okur Studio Informationen verarbeitet, wenn Sie Vevora IPTV auf iPhone und iPad (iOS / iPadOS) nutzen.",
            "Vevora IPTV ist ein Shell-Mediaplayer. Sie fügen eigene M3U- oder Xtream-Playlists hinzu. Okur Studio stellt keine Kanäle, Filme, Serien oder andere Streams bereit, hostet oder vertreibt sie nicht."
          ]
        },
        "data": {
          "title": "Informationen auf Ihrem Gerät",
          "body": [
            "Okur Studio betreibt keine eigenen Server zur Speicherung deiner Playlists oder deines Wiedergabeverlaufs. Bibliotheksdaten liegen auf deinem Gerät und können bei iCloud-Anmeldung über Apple iCloud / CloudKit synchronisiert werden.",
            "Gerätedaten können Playlist-Links und Zugangsdaten, Profile, Favoriten, Wiedergabeverlauf, Download-Metadaten und App-Einstellungen umfassen.",
            "Beim Abspielen verbindet sich Ihr Gerät direkt mit der von Ihnen konfigurierten Playlist-Quelle. Wir empfangen oder speichern diese Medien nicht."
          ]
        },
        "icloud": {
          "title": "iCloud- und CloudKit-Synchronisierung",
          "body": [
            "Wenn du auf dem Gerät bei iCloud angemeldet bist, kann Vevora IPTV deine Bibliothek—z. B. Profile, Playlist-Metadaten, Favoriten und Wiedergabeverlauf—über Apple CloudKit / iCloud zwischen deinen Apple-Geräten synchronisieren.",
            "Diese Synchronisierung nutzt deine Apple-ID und Apples iCloud-Infrastruktur. Okur Studio betreibt keine eigenen Sync-Server und kann den Inhalt deines iCloud-Accounts nicht lesen.",
            "Playlist-Passwörter und Profil-PINs werden in der iOS-Schlüsselkette gespeichert und können bei aktivierter iCloud-Schlüsselkette synchronisiert werden.",
            "Du kannst synchronisierte Daten einschränken oder entfernen, indem du dich von iCloud abmeldest, Daten in der App löschst oder Vevora IPTV deinstallierst."
          ]
        },
        "tracking": {
          "title": "Tracking und Werbung",
          "body": [
            "Wir betreiben kein App-übergreifendes Tracking für Werbung.",
            "Wir verkaufen keine personenbezogenen Daten.",
            "Wir verwenden keine Drittanbieter-Werbe-SDKs zum Tracking."
          ]
        },
        "use": {
          "title": "Verwendung der Informationen",
          "body": [
            "Gerätedaten werden nur zum Betrieb des Players verwendet: Playlists laden, Ihre Bibliothek anzeigen, Einstellungen merken und von Ihnen angeforderte Streams abspielen.",
            "Wir nutzen Playlist- oder Wiedergabedaten auf dem Gerät nicht für Werbung."
          ]
        },
        "sharing": {
          "title": "Weitergabe",
          "body": [
            "Wir geben Ihre Playlists, Zugangsdaten oder Ihren Wiedergabeverlauf nicht an Dritte zu deren Marketing weiter.",
            "Dein Gerät kann mit dem von dir gewählten Playlist-Anbieter und mit Standard-Apple-Diensten kommunizieren—einschließlich iCloud / CloudKit, wenn die Bibliothekssynchronisierung aktiv ist.",
            "Soweit gesetzlich erforderlich, können wir Informationen im notwendigen Umfang offenlegen."
          ]
        },
        "retention": {
          "title": "Aufbewahrung",
          "body": [
            "Playlist-Daten und Einstellungen bleiben auf deinem Gerät (und bei Aktivierung in deinem iCloud-Account über CloudKit), bis du sie in der App löschst, aus iCloud entfernst oder die App deinstallierst.",
            "Wenn Sie uns per E-Mail kontaktieren, bewahren wir die Korrespondenz nur so lange auf, wie es für Antwort und Klärung nötig ist."
          ]
        },
        "security": {
          "title": "Sicherheit",
          "body": [
            "Wir gestalten die App so, dass sensible Angaben möglichst auf Ihrem Gerät bleiben.",
            "Keine Speicherung oder Übertragung ist vollkommen sicher. Schützen Sie Ihren Gerätecode und teilen Sie Playlist-Zugangsdaten nicht."
          ]
        },
        "choices": {
          "title": "Ihre Wahlmöglichkeiten",
          "body": [
            "Sie können Playlists, Profile und zugehörige Daten in der App bearbeiten oder löschen.",
            "Sie können App-Daten löschen oder Vevora IPTV deinstallieren, um Informationen vom Gerät zu entfernen.",
            "Bei Datenschutzfragen: vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Kinder",
          "body": [
            "Vevora IPTV ist für Nutzer ab 13 Jahren geeignet. Die App richtet sich nicht an Kinder unter 13 Jahren.",
            "Nutzen Sie die App nicht, um Informationen von Kindern zu erheben. Wenn Sie glauben, dass ein Kind über die App personenbezogene Daten übermittelt hat, kontaktieren Sie uns."
          ]
        },
        "purchases": {
          "title": "In-App-Käufe und Abonnements",
          "body": [
            "Vevora IPTV kann optionale Premium-Funktionen über In-App-Käufe und automatisch verlängernde Abonnements im App Store anbieten.",
            "Die Zahlung wird von Apple abgewickelt. Wir erhalten oder speichern keine Zahlungs- oder Bankdaten.",
            "Apple kann uns Kaufbestätigungen und Abonnementstatus mitteilen, damit wir Premium-Funktionen in der App freischalten können.",
            "Rechnungsverlauf, Abonnementverwaltung und Erstattungen erfolgen über Ihr Apple-ID-Konto. Um die automatische Verlängerung zu beenden, schalten Sie sie mindestens 24 Stunden vor Ende des aktuellen Abrechnungszeitraums unter Einstellungen > Apple-ID > Abonnements aus."
          ]
        },
        "thirdparty": {
          "title": "Dienste Dritter",
          "body": [
            "Playlists und Streams stammen von Quellen, die Sie konfigurieren. Diese Anbieter haben eigene Datenschutzpraktiken.",
            "Okur Studio ist nicht für Datenschutz oder Inhalte von Playlist-Quellen Dritter verantwortlich."
          ]
        },
        "updates": {
          "title": "Aktualisierungen der Richtlinie",
          "body": [
            "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert“ oben auf der Seite ändert sich dann.",
            "Die weitere Nutzung der App nach einer Aktualisierung bedeutet, dass Sie die überarbeitete Richtlinie zur Kenntnis nehmen."
          ]
        },
        "contact": {
          "title": "Kontakt",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "E-Mail: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Nutzungsbedingungen",
      "sections": {
        "agreement": {
          "title": "Vereinbarung",
          "body": [
            "Diese Nutzungsbedingungen regeln Ihre Nutzung von Vevora IPTV unter iOS und iPadOS, betrieben von Okur Studio.",
            "Durch Herunterladen oder Nutzen der App stimmen Sie diesen Bedingungen zu. Wenn Sie nicht zustimmen, nutzen Sie die App nicht."
          ]
        },
        "player": {
          "title": "Nur Shell-Player",
          "body": [
            "Vevora IPTV ist ein Shell-Mediaplayer. Er spielt Playlists und Streams ab, die Sie selbst hinzufügen, z. B. M3U- oder Xtream-Quellen.",
            "Okur Studio stellt keine IPTV-Kanäle, Filme, Serien oder andere Medieninhalte bereit, hostet oder vertreibt sie nicht.",
            "Sie allein sind dafür verantwortlich, rechtmäßigen Zugang zu jeder Playlist oder jedem Stream zu haben, den Sie mit der App nutzen."
          ]
        },
        "age": {
          "title": "Altersanforderung",
          "body": [
            "Vevora IPTV ist für Nutzer ab 13 Jahren bestimmt. Die App richtet sich nicht an Kinder unter 13 Jahren.",
            "Sie müssen alt genug sein, um den App Store zu nutzen und diesen Bedingungen in Ihrer Region zuzustimmen. Wenn Sie die App für jemand anderen nutzen, bestätigen Sie, dass Sie befugt sind, diese Bedingungen für diese Person anzunehmen."
          ]
        },
        "license": {
          "title": "Lizenz",
          "body": [
            "Vorbehaltlich dieser Bedingungen gewährt Ihnen Okur Studio eine persönliche, beschränkte, nicht ausschließliche und nicht übertragbare Lizenz zur Nutzung von Vevora IPTV auf Apple-Geräten, die Sie besitzen oder kontrollieren.",
            "Die App-Store-Bedingungen von Apple gelten zusätzlich, soweit sie für Ihren Download und Ihre Nutzung der App relevant sind."
          ]
        },
        "profiles": {
          "title": "Profile und Einstellungen",
          "body": [
            "Sie können Profile und Einstellungen auf Ihrem Gerät speichern. Halten Sie Zugangsdaten sicher und teilen Sie sie nicht.",
            "Sie sind für Aktivitäten verantwortlich, die mit von Ihnen konfigurierten Playlists und Profilen auf Ihrem Gerät erfolgen."
          ]
        },
        "content": {
          "title": "Ihre Inhalte und Playlists",
          "body": [
            "Jede Playlist-URL, Zugangsdaten oder Medien, die Sie hinzufügen, stammen von Ihnen oder Ihrem gewählten Anbieter — nicht von Okur Studio.",
            "Sie dürfen nur Inhalte nutzen, zu denen Sie berechtigt Zugang haben. Die App gewährt Ihnen keine Rechte an Medien Dritter."
          ]
        },
        "subscriptions": {
          "title": "Premium-Abonnements",
          "body": [
            "Optionale Premium-Funktionen können über automatisch verlängernde Abonnements im Apple App Store erhältlich sein.",
            "Die Zahlung wird bei Bestätigung des Kaufs Ihrem Apple-ID-Konto belastet. Abonnements verlängern sich automatisch, sofern Sie die automatische Verlängerung nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums deaktivieren.",
            "Die Verlängerung wird innerhalb von 24 Stunden vor Ende des aktuellen Zeitraums berechnet. Verwalten oder kündigen Sie Abonnements jederzeit unter Einstellungen > Apple-ID > Abonnements.",
            "App-Store-Käufe unterliegen den Bedingungen von Apple. Okur Studio wickelt Zahlungen nicht direkt ab."
          ]
        },
        "rules": {
          "title": "Zulässige Nutzung",
          "body": [
            "Nutzen Sie Vevora IPTV nur in Übereinstimmung mit geltendem Recht und diesen Bedingungen.",
            "Missbrauchen Sie die App nicht, um unrechtmäßige Inhalte zu nutzen oder zu verbreiten, Systeme anderer zu stören oder die App — außer soweit gesetzlich erlaubt — zurückzuentwickeln."
          ]
        },
        "ownership": {
          "title": "Eigentum an der App",
          "body": [
            "Okur Studio besitzt die Vevora-IPTV-Software, das Design und die Marke.",
            "Diese Bedingungen übertragen Ihnen kein Eigentum an der App."
          ]
        },
        "nowarranty": {
          "title": "Keine Gewährleistung",
          "body": [
            "Die App wird „wie besehen“ und „wie verfügbar“ bereitgestellt. Die Wiedergabe hängt von Gerät, Netzwerk und den von Ihnen gewählten Playlist-Quellen ab.",
            "Okur Studio garantiert keine unterbrechungsfreie Wiedergabe, Kompatibilität mit jedem Playlist-Format oder Verfügbarkeit von Streams Dritter."
          ]
        },
        "responsibility": {
          "title": "Ihre Verantwortung",
          "body": [
            "Sie sind für die Nutzung der App sowie für die Playlists und Streams verantwortlich, die Sie verbinden.",
            "Okur Studio ist nicht verantwortlich für Inhalte Dritter, Playlist-Anbieter oder Schäden durch Medien oder Links, die Sie öffnen."
          ]
        },
        "stop": {
          "title": "Nutzung beenden",
          "body": [
            "Sie können die Nutzung von Vevora IPTV jederzeit beenden, indem Sie die App und zugehörige Daten von Ihrem Gerät löschen.",
            "Wir können die App einstellen oder diese Bedingungen aktualisieren. Weitere Nutzung nach Änderungen bedeutet Annahme der aktualisierten Bedingungen."
          ]
        },
        "contact": {
          "title": "Kontakt",
          "body": [
            "Fragen zu diesen Nutzungsbedingungen: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "fr": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Dernière mise à jour",
      "lastUpdatedDate": "7 août 2026",
      "navHome": "Accueil",
      "navPrivacy": "Politique de confidentialité",
      "navTerms": "Conditions d’utilisation",
      "navSupport": "Assistance",
      "footer": "© 2026 Okur Studio. Tous droits réservés.",
      "footerNote": "Vevora IPTV est une application lecteur multimédia. Okur Studio ne fournit, n’héberge ni ne distribue de chaînes ou de flux IPTV.",
      "selectLanguage": "Langue"
    },
    "index": {
      "title": "Mentions légales et assistance",
      "heading": "Vevora IPTV",
      "subtitle": "Confidentialité, conditions et assistance pour l’app iOS et iPadOS d’Okur Studio.",
      "privacyTitle": "Politique de confidentialité",
      "privacyDesc": "Comment l’app traite les informations sur votre appareil et via Apple iCloud / CloudKit.",
      "termsTitle": "Conditions d’utilisation",
      "termsDesc": "Règles d’utilisation de l’app lecteur Vevora IPTV.",
      "supportTitle": "Assistance",
      "supportDesc": "Aide à la configuration et assistance technique par e-mail."
    },
    "support": {
      "title": "Assistance",
      "heading": "Contacter l’assistance",
      "intro": "Besoin d’aide avec Vevora IPTV ? Écrivez-nous au sujet de la configuration, des listes que vous ajoutez ou de problèmes techniques. Nous ne fournissons ni chaînes ni flux.",
      "emailLabel": "Écrivez-nous à",
      "emailHint": "Indiquez le modèle de l’appareil et la version iOS pour une aide plus rapide.",
      "topicsTitle": "Questions fréquentes",
      "topics": [
        {
          "title": "Ajouter des listes",
          "body": "Vevora IPTV est un lecteur shell. Ajoutez votre URL M3U ou identifiants Xtream dans l’app. Okur Studio ne fournit pas de listes ni de chaînes."
        },
        {
          "title": "Problèmes de lecture",
          "body": "La qualité du flux dépend de votre réseau et de votre fournisseur. Essayez une autre chaîne, vérifiez la connexion ou contactez votre fournisseur de liste."
        },
        {
          "title": "Premium et abonnements",
          "body": "Les fonctionnalités premium sont facturées via l’App Store sur votre Apple ID. Gérez ou annulez dans Réglages > Apple ID > Abonnements au moins 24 h avant le renouvellement."
        },
        {
          "title": "Contacter le support",
          "body": "Écrivez à vevoraplayer@gmail.com avec une description claire. Évitez de partager les mots de passe de liste sauf demande de dépannage."
        }
      ],
      "helpTitle": "Avant d’écrire",
      "helpItems": [
        "Vevora IPTV est un lecteur coquille — vous ajoutez vos propres listes M3U ou Xtream. Okur Studio ne fournit, n’héberge ni ne distribue de chaînes ou de flux.",
        "Indiquez votre version d’iOS ou d’iPadOS, le modèle de l’appareil et une brève description du problème.",
        "Ne partagez pas les mots de passe des listes par e-mail sauf si nécessaire pour le diagnostic."
      ],
      "responseNote": "Nous visons à répondre sous quelques jours ouvrés."
    },
    "privacy": {
      "title": "Politique de confidentialité",
      "sections": {
        "about": {
          "title": "À propos de cette politique",
          "body": [
            "Cette politique de confidentialité explique comment Okur Studio traite les informations lorsque vous utilisez Vevora IPTV sur iPhone et iPad (iOS / iPadOS).",
            "Vevora IPTV est un lecteur multimédia coquille. Vous ajoutez vos propres listes M3U ou Xtream. Okur Studio ne fournit, n’héberge ni ne distribue de chaînes, films, séries ou autres flux."
          ]
        },
        "data": {
          "title": "Informations sur votre appareil",
          "body": [
            "Okur Studio n’exploite pas ses propres serveurs pour stocker vos listes ou votre historique. Les données de bibliothèque restent sur votre appareil et peuvent se synchroniser via Apple iCloud / CloudKit si vous êtes connecté à iCloud.",
            "Les données sur l’appareil peuvent inclure les liens et identifiants de listes que vous saisissez, les profils, favoris, historique, métadonnées de téléchargement et réglages de l’app.",
            "Lors de la lecture, votre appareil se connecte directement à la source de liste que vous avez configurée. Nous ne recevons ni ne stockons ces médias."
          ]
        },
        "icloud": {
          "title": "Synchronisation iCloud et CloudKit",
          "body": [
            "Si vous êtes connecté à iCloud sur votre appareil, Vevora IPTV peut synchroniser votre bibliothèque—profils, métadonnées de listes, favoris et historique—entre vos appareils Apple via Apple CloudKit / iCloud.",
            "Cette synchronisation utilise votre identifiant Apple et l’infrastructure iCloud d’Apple. Okur Studio n’exploite pas ses propres serveurs de sync et ne peut pas lire le contenu de votre compte iCloud.",
            "Les mots de passe de listes et les codes PIN de profil sont stockés dans le Trousseau iOS et peuvent se synchroniser via le Trousseau iCloud s’il est activé.",
            "Vous pouvez limiter ou supprimer les données synchronisées en vous déconnectant d’iCloud, en effaçant les données dans l’app ou en désinstallant Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "Suivi et publicité",
          "body": [
            "Nous ne pratiquons pas de suivi inter-applications à des fins publicitaires.",
            "Nous ne vendons pas de données personnelles.",
            "Nous n’utilisons pas de SDK publicitaires tiers pour le suivi."
          ]
        },
        "use": {
          "title": "Utilisation des informations",
          "body": [
            "Les données sur l’appareil servent uniquement à faire fonctionner le lecteur : charger les listes, afficher votre bibliothèque, mémoriser les préférences et lire les flux que vous demandez.",
            "Nous n’utilisons pas les données de listes ou de visionnage sur l’appareil à des fins publicitaires."
          ]
        },
        "sharing": {
          "title": "Partage",
          "body": [
            "Nous ne partageons pas vos listes, identifiants ou historique de visionnage avec des tiers pour leur marketing.",
            "Votre appareil peut communiquer avec le fournisseur de listes que vous choisissez et avec les services Apple standards nécessaires à l’app—y compris iCloud / CloudKit lorsque la synchronisation de bibliothèque est active.",
            "Si la loi l’exige, nous pouvons divulguer des informations dans la mesure nécessaire pour nous y conformer."
          ]
        },
        "retention": {
          "title": "Conservation",
          "body": [
            "Les données de listes et réglages restent sur votre appareil (et, si activé, dans votre compte iCloud via CloudKit) jusqu’à suppression dans l’app, retrait d’iCloud ou désinstallation.",
            "Si vous nous contactez par e-mail, nous conservons la correspondance uniquement le temps nécessaire pour répondre et traiter votre demande."
          ]
        },
        "security": {
          "title": "Sécurité",
          "body": [
            "Nous concevons l’app pour que les détails sensibles restent autant que possible sur votre appareil.",
            "Aucune méthode de stockage ou de transmission n’est parfaitement sûre. Protégez le code de votre appareil et ne partagez pas les identifiants de listes."
          ]
        },
        "choices": {
          "title": "Vos choix",
          "body": [
            "Vous pouvez modifier ou supprimer listes, profils et données associées dans l’app.",
            "Vous pouvez effacer les données de l’app ou désinstaller Vevora IPTV pour retirer les informations de l’appareil.",
            "Pour les questions de confidentialité : vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Enfants",
          "body": [
            "Vevora IPTV convient aux utilisateurs âgés de 13 ans et plus. Elle n’est pas destinée aux enfants de moins de 13 ans.",
            "N’utilisez pas l’app pour collecter des informations auprès d’enfants. Si vous pensez qu’un enfant a fourni des informations personnelles via l’app, contactez-nous."
          ]
        },
        "purchases": {
          "title": "Achats intégrés et abonnements",
          "body": [
            "Vevora IPTV peut proposer des fonctionnalités premium optionnelles via des achats intégrés et des abonnements à renouvellement automatique sur l’App Store.",
            "Le paiement est traité par Apple. Nous ne recevons ni ne stockons vos coordonnées bancaires ou de carte.",
            "Apple peut nous transmettre la confirmation d’achat et le statut d’abonnement afin que nous puissions débloquer les fonctionnalités premium dans l’app.",
            "Consultez l’historique de facturation, gérez vos abonnements et demandez un remboursement via votre compte Apple ID. Pour annuler le renouvellement automatique, désactivez-le au moins 24 heures avant la fin de la période en cours dans Réglages > Apple ID > Abonnements."
          ]
        },
        "thirdparty": {
          "title": "Services tiers",
          "body": [
            "Les listes et flux proviennent de sources que vous configurez. Ces fournisseurs ont leurs propres pratiques de confidentialité.",
            "Okur Studio n’est pas responsable de la confidentialité ou du contenu des sources de listes tierces."
          ]
        },
        "updates": {
          "title": "Mises à jour de la politique",
          "body": [
            "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La date « Dernière mise à jour » en haut de cette page changera alors.",
            "L’utilisation continue de l’app après une mise à jour signifie que vous prenez acte de la politique révisée."
          ]
        },
        "contact": {
          "title": "Contact",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "E-mail : vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Conditions d’utilisation",
      "sections": {
        "agreement": {
          "title": "Accord",
          "body": [
            "Ces conditions d’utilisation régissent votre utilisation de Vevora IPTV sur iOS et iPadOS, exploitée par Okur Studio.",
            "En téléchargeant ou en utilisant l’app, vous acceptez ces conditions. Si vous n’acceptez pas, n’utilisez pas l’app."
          ]
        },
        "player": {
          "title": "Lecteur coquille uniquement",
          "body": [
            "Vevora IPTV est un lecteur multimédia coquille. Il lit les listes et flux que vous ajoutez vous-même, par exemple des sources M3U ou Xtream.",
            "Okur Studio ne fournit, n’héberge ni ne distribue de chaînes IPTV, films, séries ou autre contenu multimédia.",
            "Vous êtes seul responsable d’obtenir un accès licite à toute liste ou flux que vous utilisez avec l’app."
          ]
        },
        "age": {
          "title": "Condition d’âge",
          "body": [
            "Vevora IPTV est destinée aux utilisateurs âgés de 13 ans et plus. Elle n’est pas destinée aux enfants de moins de 13 ans.",
            "Vous devez être assez âgé pour utiliser l’App Store et accepter ces conditions dans votre région. Si vous utilisez l’app pour le compte d’autrui, vous confirmez avoir l’autorité d’accepter ces conditions pour cette personne."
          ]
        },
        "license": {
          "title": "Licence",
          "body": [
            "Sous réserve de ces conditions, Okur Studio vous accorde une licence personnelle, limitée, non exclusive et non transférable pour utiliser Vevora IPTV sur des appareils Apple que vous possédez ou contrôlez.",
            "Les conditions de l’App Store d’Apple s’appliquent également lorsqu’elles sont pertinentes pour votre téléchargement et votre utilisation de l’app."
          ]
        },
        "profiles": {
          "title": "Profils et réglages",
          "body": [
            "Vous pouvez créer des profils et réglages stockés sur votre appareil. Gardez les identifiants en sécurité et ne les partagez pas.",
            "Vous êtes responsable de l’activité liée aux listes et profils que vous configurez sur votre appareil."
          ]
        },
        "content": {
          "title": "Votre contenu et vos listes",
          "body": [
            "Toute URL de liste, identifiant ou média que vous ajoutez provient de vous ou de votre fournisseur choisi — pas d’Okur Studio.",
            "Vous ne devez utiliser que du contenu auquel vous avez le droit d’accéder. L’app ne vous confère aucun droit sur les médias de tiers."
          ]
        },
        "subscriptions": {
          "title": "Abonnements premium",
          "body": [
            "Des fonctionnalités premium optionnelles peuvent être disponibles via des abonnements à renouvellement automatique achetés sur l’App Store.",
            "Le paiement est débité de votre compte Apple ID lors de la confirmation d’achat. Les abonnements se renouvellent automatiquement sauf si vous désactivez le renouvellement automatique au moins 24 heures avant la fin de la période en cours.",
            "Le renouvellement est facturé dans les 24 heures précédant la fin de la période en cours. Gérez ou annulez vos abonnements à tout moment dans Réglages > Apple ID > Abonnements.",
            "Les achats sur l’App Store sont soumis aux conditions d’Apple. Okur Studio ne traite pas les paiements directement."
          ]
        },
        "rules": {
          "title": "Utilisation acceptable",
          "body": [
            "Utilisez Vevora IPTV uniquement d’une manière conforme à la loi applicable et à ces conditions.",
            "Ne détournez pas l’app pour accéder à ou diffuser un contenu illicite, perturber les systèmes d’autrui, ou tenter de rétroconcevoir l’app sauf lorsque la loi le permet."
          ]
        },
        "ownership": {
          "title": "Propriété de l’app",
          "body": [
            "Okur Studio est propriétaire du logiciel, du design et de la marque Vevora IPTV.",
            "Ces conditions ne vous transfèrent pas la propriété de l’app."
          ]
        },
        "nowarranty": {
          "title": "Absence de garantie",
          "body": [
            "L’app est fournie « en l’état » et « selon disponibilité ». La lecture dépend de votre appareil, du réseau et des sources de listes que vous choisissez.",
            "Okur Studio ne garantit pas une lecture ininterrompue, la compatibilité avec chaque format de liste, ni la disponibilité d’un flux tiers."
          ]
        },
        "responsibility": {
          "title": "Votre responsabilité",
          "body": [
            "Vous êtes responsable de la façon dont vous utilisez l’app et des listes et flux auxquels vous vous connectez.",
            "Okur Studio n’est pas responsable du contenu tiers, des fournisseurs de listes, ni des dommages causés par des médias ou liens que vous choisissez d’ouvrir."
          ]
        },
        "stop": {
          "title": "Arrêt de l’utilisation",
          "body": [
            "Vous pouvez cesser d’utiliser Vevora IPTV à tout moment en supprimant l’app et les données associées de votre appareil.",
            "Nous pouvons cesser de proposer l’app ou mettre à jour ces conditions. L’utilisation continue après des modifications signifie que vous acceptez les conditions mises à jour."
          ]
        },
        "contact": {
          "title": "Contact",
          "body": [
            "Questions sur ces conditions d’utilisation : vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "es": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Última actualización",
      "lastUpdatedDate": "7 de agosto de 2026",
      "navHome": "Inicio",
      "navPrivacy": "Política de privacidad",
      "navTerms": "Términos de uso",
      "navSupport": "Soporte",
      "footer": "© 2026 Okur Studio. Todos los derechos reservados.",
      "footerNote": "Vevora IPTV es una app reproductora multimedia. Okur Studio no proporciona, aloja ni distribuye canales ni flujos IPTV.",
      "selectLanguage": "Idioma"
    },
    "index": {
      "title": "Legal y soporte",
      "heading": "Vevora IPTV",
      "subtitle": "Privacidad, términos y soporte para la app de iOS e iPadOS de Okur Studio.",
      "privacyTitle": "Política de privacidad",
      "privacyDesc": "Cómo la app trata la información en tu dispositivo y a través de Apple iCloud / CloudKit.",
      "termsTitle": "Términos de uso",
      "termsDesc": "Reglas para usar la app reproductora Vevora IPTV.",
      "supportTitle": "Soporte",
      "supportDesc": "Ayuda de configuración y técnica por correo."
    },
    "support": {
      "title": "Soporte",
      "heading": "Contactar soporte",
      "intro": "¿Necesita ayuda con Vevora IPTV? Escríbanos sobre la configuración, las listas que añade o problemas técnicos. No proporcionamos canales ni flujos.",
      "emailLabel": "Escríbanos a",
      "emailHint": "Incluya el modelo del dispositivo y la versión de iOS para una ayuda más rápida.",
      "topicsTitle": "Preguntas frecuentes",
      "topics": [
        {
          "title": "Añadir listas",
          "body": "Vevora IPTV es un reproductor shell. Añada su URL M3U o acceso Xtream en la app. Okur Studio no proporciona listas ni canales."
        },
        {
          "title": "Problemas de reproducción",
          "body": "La calidad depende de su red y proveedor de listas. Pruebe otro canal, revise la conexión o contacte a su proveedor si los streams fallan."
        },
        {
          "title": "Premium y suscripciones",
          "body": "Las funciones premium se facturan en la App Store con su Apple ID. Gestione o cancele en Ajustes > Apple ID > Suscripciones al menos 24 h antes de la renovación."
        },
        {
          "title": "Contactar soporte",
          "body": "Escriba a vevoraplayer@gmail.com con una descripción clara. Evite compartir contraseñas de listas salvo que lo pidamos."
        }
      ],
      "helpTitle": "Antes de escribir",
      "helpItems": [
        "Vevora IPTV es un reproductor envolvente: usted añade sus propias listas M3U o Xtream. Okur Studio no proporciona, aloja ni distribuye canales ni flujos.",
        "Incluya su versión de iOS o iPadOS, el modelo del dispositivo y una breve descripción del problema.",
        "No comparta contraseñas de listas por correo salvo que sea necesario para el diagnóstico."
      ],
      "responseNote": "Procuramos responder en unos días laborables."
    },
    "privacy": {
      "title": "Política de privacidad",
      "sections": {
        "about": {
          "title": "Acerca de esta política",
          "body": [
            "Esta Política de privacidad explica cómo Okur Studio trata la información cuando usa Vevora IPTV en iPhone e iPad (iOS / iPadOS).",
            "Vevora IPTV es un reproductor multimedia envolvente. Usted añade sus propias listas M3U o Xtream. Okur Studio no proporciona, aloja ni distribuye canales, películas, series u otros flujos."
          ]
        },
        "data": {
          "title": "Información en su dispositivo",
          "body": [
            "Okur Studio no opera servidores propios para guardar tus listas o historial. Los datos de la biblioteca están en tu dispositivo y pueden sincronizarse con Apple iCloud / CloudKit si tienes sesión en iCloud.",
            "Los datos en el dispositivo pueden incluir enlaces y credenciales de listas que introduce, perfiles, favoritos, historial, metadatos de descarga y ajustes de la app.",
            "Al reproducir, su dispositivo se conecta directamente a la fuente de lista que configuró. No recibimos ni almacenamos esos medios."
          ]
        },
        "icloud": {
          "title": "Sincronización con iCloud y CloudKit",
          "body": [
            "Si has iniciado sesión en iCloud en el dispositivo, Vevora IPTV puede sincronizar tu biblioteca—perfiles, metadatos de listas, favoritos e historial—entre tus dispositivos Apple con Apple CloudKit / iCloud.",
            "Esa sincronización usa tu Apple ID y la infraestructura iCloud de Apple. Okur Studio no opera servidores propios de sync y no puede leer el contenido de tu cuenta iCloud.",
            "Las contraseñas de listas y los PIN de perfil se guardan en el Llavero de iOS y pueden sincronizarse con el Llavero de iCloud si está activado.",
            "Puedes limitar o eliminar datos sincronizados cerrando sesión en iCloud, borrando datos en la app o desinstalando Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "Seguimiento y publicidad",
          "body": [
            "No realizamos seguimiento entre apps con fines publicitarios.",
            "No vendemos datos personales.",
            "No usamos SDK de publicidad de terceros para el seguimiento."
          ]
        },
        "use": {
          "title": "Cómo se usa la información",
          "body": [
            "Los datos en el dispositivo se usan solo para ejecutar el reproductor: cargar listas, mostrar su biblioteca, recordar preferencias y reproducir los flujos que solicite.",
            "No usamos datos de listas o visionado en el dispositivo para publicidad."
          ]
        },
        "sharing": {
          "title": "Compartir",
          "body": [
            "No compartimos sus listas, credenciales ni historial de visionado con terceros para su marketing.",
            "Tu dispositivo puede comunicarse con el proveedor de listas que elijas y con servicios estándar de Apple—incluido iCloud / CloudKit cuando la sincronización de biblioteca está activa.",
            "Si la ley lo exige, podemos divulgar información en la medida necesaria para cumplir."
          ]
        },
        "retention": {
          "title": "Conservación",
          "body": [
            "Los datos de listas y ajustes permanecen en tu dispositivo (y, si está activado, en tu cuenta iCloud vía CloudKit) hasta que los borres en la app, los quites de iCloud o desinstales la app.",
            "Si nos contacta por correo, conservamos la correspondencia solo el tiempo necesario para responder y resolver su solicitud."
          ]
        },
        "security": {
          "title": "Seguridad",
          "body": [
            "Diseñamos la app para que los detalles sensibles permanezcan en su dispositivo cuando sea posible.",
            "Ningún método de almacenamiento o transmisión es perfectamente seguro. Proteja el código de su dispositivo y no comparta credenciales de listas."
          ]
        },
        "choices": {
          "title": "Sus opciones",
          "body": [
            "Puede editar o eliminar listas, perfiles y datos relacionados dentro de la app.",
            "Puede borrar los datos de la app o desinstalar Vevora IPTV para quitar la información del dispositivo.",
            "Para preguntas de privacidad: vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Menores",
          "body": [
            "Vevora IPTV es adecuada para usuarios de 13 años o más. No está dirigida a menores de 13 años.",
            "No use la app para recopilar información de menores. Si cree que un menor ha proporcionado información personal a través de la app, contáctenos."
          ]
        },
        "purchases": {
          "title": "Compras dentro de la app y suscripciones",
          "body": [
            "Vevora IPTV puede ofrecer funciones premium opcionales mediante compras integradas y suscripciones de renovación automática en la App Store.",
            "El pago lo procesa Apple. No recibimos ni almacenamos datos de tarjeta o cuenta bancaria.",
            "Apple puede compartir confirmación de compra y estado de suscripción para que podamos desbloquear funciones premium en la app.",
            "Puede ver el historial de facturación, gestionar suscripciones y solicitar reembolsos desde su cuenta de Apple ID. Para cancelar la renovación automática, desactívela al menos 24 horas antes del fin del periodo actual en Ajustes > Apple ID > Suscripciones."
          ]
        },
        "thirdparty": {
          "title": "Servicios de terceros",
          "body": [
            "Las listas y flujos provienen de fuentes que usted configura. Esos proveedores tienen sus propias prácticas de privacidad.",
            "Okur Studio no es responsable de la privacidad ni del contenido de fuentes de listas de terceros."
          ]
        },
        "updates": {
          "title": "Actualizaciones de la política",
          "body": [
            "Podemos actualizar esta Política de privacidad de vez en cuando. La fecha «Última actualización» en la parte superior de esta página cambiará entonces.",
            "El uso continuado de la app tras una actualización significa que reconoce la política revisada."
          ]
        },
        "contact": {
          "title": "Contacto",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "Correo: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Términos de uso",
      "sections": {
        "agreement": {
          "title": "Acuerdo",
          "body": [
            "Estos Términos de uso rigen su uso de Vevora IPTV en iOS e iPadOS, operada por Okur Studio.",
            "Al descargar o usar la app, acepta estos términos. Si no está de acuerdo, no use la app."
          ]
        },
        "player": {
          "title": "Solo reproductor envolvente",
          "body": [
            "Vevora IPTV es un reproductor multimedia envolvente. Reproduce listas y flujos que usted añade, como fuentes M3U o Xtream.",
            "Okur Studio no proporciona, aloja ni distribuye canales IPTV, películas, series ni ningún otro contenido multimedia.",
            "Usted es el único responsable de obtener acceso lícito a cualquier lista o flujo que use con la app."
          ]
        },
        "age": {
          "title": "Requisito de edad",
          "body": [
            "Vevora IPTV está destinada a usuarios de 13 años o más. No está dirigida a menores de 13 años.",
            "Debe tener edad suficiente para usar el App Store y aceptar estos términos en su región. Si usa la app en nombre de otra persona, confirma que tiene autoridad para aceptar estos términos por ella."
          ]
        },
        "license": {
          "title": "Licencia",
          "body": [
            "Sujeto a estos Términos, Okur Studio le otorga una licencia personal, limitada, no exclusiva e intransferible para usar Vevora IPTV en dispositivos Apple que posea o controle.",
            "Los términos del App Store de Apple también se aplican cuando son pertinentes a su descarga y uso de la app."
          ]
        },
        "profiles": {
          "title": "Perfiles y ajustes",
          "body": [
            "Puede crear perfiles y ajustes almacenados en su dispositivo. Mantenga las credenciales seguras y no las comparta.",
            "Usted es responsable de la actividad que ocurra con las listas y perfiles que configure en su dispositivo."
          ]
        },
        "content": {
          "title": "Su contenido y listas",
          "body": [
            "Cualquier URL de lista, credenciales o medios que añada provienen de usted o de su proveedor elegido — no de Okur Studio.",
            "Solo debe usar contenido al que tenga derecho de acceso. La app no le otorga derechos sobre medios de terceros."
          ]
        },
        "subscriptions": {
          "title": "Suscripciones premium",
          "body": [
            "Las funciones premium opcionales pueden estar disponibles mediante suscripciones de renovación automática adquiridas en la App Store de Apple.",
            "El pago se carga a su cuenta de Apple ID al confirmar la compra. Las suscripciones se renuevan automáticamente salvo que desactive la renovación automática al menos 24 horas antes del fin del periodo actual.",
            "La renovación se cobrará dentro de las 24 horas previas al fin del periodo actual. Gestione o cancele suscripciones en Ajustes > Apple ID > Suscripciones.",
            "Las compras en la App Store están sujetas a los términos de Apple. Okur Studio no procesa pagos directamente."
          ]
        },
        "rules": {
          "title": "Uso aceptable",
          "body": [
            "Use Vevora IPTV solo de formas que cumplan la ley aplicable y estos términos.",
            "No haga un uso indebido de la app para acceder o distribuir contenido ilícito, interferir con sistemas de terceros o intentar aplicar ingeniería inversa a la app salvo cuando la ley lo permita."
          ]
        },
        "ownership": {
          "title": "Propiedad de la app",
          "body": [
            "Okur Studio es propietario del software, el diseño y la marca de Vevora IPTV.",
            "Estos términos no le transfieren la propiedad de la app."
          ]
        },
        "nowarranty": {
          "title": "Sin garantía",
          "body": [
            "La app se proporciona «tal cual» y «según disponibilidad». La reproducción depende de su dispositivo, red y las fuentes de listas que elija.",
            "Okur Studio no garantiza reproducción ininterrumpida, compatibilidad con todos los formatos de lista ni disponibilidad de ningún flujo de terceros."
          ]
        },
        "responsibility": {
          "title": "Su responsabilidad",
          "body": [
            "Usted es responsable de cómo usa la app y de las listas y flujos a los que se conecta.",
            "Okur Studio no es responsable del contenido de terceros, de los proveedores de listas ni de daños causados por medios o enlaces que elija abrir."
          ]
        },
        "stop": {
          "title": "Dejar de usar",
          "body": [
            "Puede dejar de usar Vevora IPTV en cualquier momento eliminando la app y los datos relacionados de su dispositivo.",
            "Podemos dejar de ofrecer la app o actualizar estos términos. El uso continuado tras cambios significa que acepta los términos actualizados."
          ]
        },
        "contact": {
          "title": "Contacto",
          "body": [
            "Preguntas sobre estos Términos de uso: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "it": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Ultimo aggiornamento",
      "lastUpdatedDate": "7 agosto 2026",
      "navHome": "Home",
      "navPrivacy": "Informativa sulla privacy",
      "navTerms": "Termini di utilizzo",
      "navSupport": "Supporto",
      "footer": "© 2026 Okur Studio. Tutti i diritti riservati.",
      "footerNote": "Vevora IPTV è un’app lettore multimediale. Okur Studio non fornisce, ospita né distribuisce canali o stream IPTV.",
      "selectLanguage": "Lingua"
    },
    "index": {
      "title": "Legale e supporto",
      "heading": "Vevora IPTV",
      "subtitle": "Privacy, termini e supporto per l’app iOS e iPadOS di Okur Studio.",
      "privacyTitle": "Informativa sulla privacy",
      "privacyDesc": "Come l’app gestisce le informazioni sul dispositivo e tramite Apple iCloud / CloudKit.",
      "termsTitle": "Termini di utilizzo",
      "termsDesc": "Regole per l’uso dell’app lettore Vevora IPTV.",
      "supportTitle": "Supporto",
      "supportDesc": "Aiuto per configurazione e problemi tecnici via e-mail."
    },
    "support": {
      "title": "Supporto",
      "heading": "Contatta il supporto",
      "intro": "Serve aiuto con Vevora IPTV? Scrivici per configurazione, playlist che aggiungi o problemi tecnici. Non forniamo canali o stream.",
      "emailLabel": "Scrivici a",
      "emailHint": "Indica modello del dispositivo e versione iOS per un aiuto più rapido.",
      "topicsTitle": "Domande frequenti",
      "topics": [
        {
          "title": "Aggiungere playlist",
          "body": "Vevora IPTV è un lettore shell. Aggiungi URL M3U o accesso Xtream nell’app. Okur Studio non fornisce playlist o canali."
        },
        {
          "title": "Problemi di riproduzione",
          "body": "La qualità dipende da rete e provider della playlist. Prova un altro canale, verifica la connessione o contatta il provider se gli stream non funzionano."
        },
        {
          "title": "Premium e abbonamenti",
          "body": "Le funzioni premium sono fatturate sull’App Store con il tuo Apple ID. Gestisci o annulla in Impostazioni > Apple ID > Abbonamenti almeno 24 ore prima del rinnovo."
        },
        {
          "title": "Contattare il supporto",
          "body": "Scrivi a vevoraplayer@gmail.com con una descrizione chiara. Evita di condividere password delle playlist salvo richiesta."
        }
      ],
      "helpTitle": "Prima di scrivere",
      "helpItems": [
        "Vevora IPTV è un lettore shell: aggiungi le tue playlist M3U o Xtream. Okur Studio non fornisce, ospita né distribuisce canali o stream.",
        "Indica la versione di iOS o iPadOS, il modello del dispositivo e una breve descrizione del problema.",
        "Non condividere le password delle playlist via e-mail salvo se necessario per la diagnosi."
      ],
      "responseNote": "Puntiamo a rispondere entro alcuni giorni lavorativi."
    },
    "privacy": {
      "title": "Informativa sulla privacy",
      "sections": {
        "about": {
          "title": "Informazioni su questa informativa",
          "body": [
            "Questa Informativa sulla privacy spiega come Okur Studio gestisce le informazioni quando usi Vevora IPTV su iPhone e iPad (iOS / iPadOS).",
            "Vevora IPTV è un lettore multimediale shell. Aggiungi le tue playlist M3U o Xtream. Okur Studio non fornisce, ospita né distribuisce canali, film, serie o altri stream."
          ]
        },
        "data": {
          "title": "Informazioni sul tuo dispositivo",
          "body": [
            "Okur Studio non gestisce server propri per archiviare playlist o cronologia. I dati della libreria restano sul dispositivo e possono sincronizzarsi tramite Apple iCloud / CloudKit se sei connesso a iCloud.",
            "I dati sul dispositivo possono includere link e credenziali delle playlist che inserisci, profili, preferiti, cronologia, metadati di download e impostazioni dell’app.",
            "Durante la riproduzione, il dispositivo si collega direttamente alla sorgente playlist che hai configurato. Non riceviamo né memorizziamo quei media."
          ]
        },
        "icloud": {
          "title": "Sincronizzazione iCloud e CloudKit",
          "body": [
            "Se hai effettuato l’accesso a iCloud sul dispositivo, Vevora IPTV può sincronizzare la libreria—profili, metadati delle playlist, preferiti e cronologia—tra i tuoi dispositivi Apple tramite Apple CloudKit / iCloud.",
            "Questa sincronizzazione usa il tuo Apple ID e l’infrastruttura iCloud di Apple. Okur Studio non gestisce server di sync propri e non può leggere il contenuto del tuo account iCloud.",
            "Le password delle playlist e i PIN dei profili sono salvati nel Portachiavi iOS e possono sincronizzarsi con il Portachiavi iCloud se abilitato.",
            "Puoi limitare o rimuovere i dati sincronizzati uscendo da iCloud, eliminando i dati nell’app o disinstallando Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "Tracciamento e pubblicità",
          "body": [
            "Non effettuiamo tracciamento tra app a fini pubblicitari.",
            "Non vendiamo dati personali.",
            "Non usiamo SDK pubblicitari di terze parti per il tracciamento."
          ]
        },
        "use": {
          "title": "Come vengono usate le informazioni",
          "body": [
            "I dati sul dispositivo sono usati solo per far funzionare il lettore: caricare playlist, mostrare la libreria, ricordare le preferenze e riprodurre gli stream richiesti.",
            "Non usiamo dati di playlist o visione sul dispositivo per la pubblicità."
          ]
        },
        "sharing": {
          "title": "Condivisione",
          "body": [
            "Non condividiamo le tue playlist, credenziali o cronologia di visione con terze parti per il loro marketing.",
            "Il dispositivo può comunicare con il provider di playlist scelto e con i servizi Apple standard necessari all’app—incluso iCloud / CloudKit quando la sync della libreria è attiva.",
            "Se richiesto dalla legge, possiamo divulgare informazioni nella misura necessaria per adempiere."
          ]
        },
        "retention": {
          "title": "Conservazione",
          "body": [
            "I dati delle playlist e le impostazioni restano sul dispositivo (e, se attivo, nel tuo account iCloud via CloudKit) finché non li elimini nell’app, da iCloud o disinstallando l’app.",
            "Se ci contatti via e-mail, conserviamo la corrispondenza solo per il tempo necessario a rispondere e risolvere la richiesta."
          ]
        },
        "security": {
          "title": "Sicurezza",
          "body": [
            "Progettiamo l’app affinché i dettagli sensibili restino sul dispositivo quando possibile.",
            "Nessun metodo di archiviazione o trasmissione è perfettamente sicuro. Proteggi il codice del dispositivo e non condividere le credenziali delle playlist."
          ]
        },
        "choices": {
          "title": "Le tue scelte",
          "body": [
            "Puoi modificare o eliminare playlist, profili e dati correlati nell’app.",
            "Puoi cancellare i dati dell’app o disinstallare Vevora IPTV per rimuovere le informazioni dal dispositivo.",
            "Per domande sulla privacy: vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Minori",
          "body": [
            "Vevora IPTV è adatta a utenti di età pari o superiore a 13 anni. Non è diretta a minori di 13 anni.",
            "Non usare l’app per raccogliere informazioni da minori. Se ritieni che un minore abbia fornito dati personali tramite l’app, contattaci."
          ]
        },
        "purchases": {
          "title": "Acquisti in-app e abbonamenti",
          "body": [
            "Vevora IPTV può offrire funzioni premium opzionali tramite acquisti in-app e abbonamenti con rinnovo automatico sull’App Store.",
            "Il pagamento è gestito da Apple. Non riceviamo né conserviamo dati di carta o conto bancario.",
            "Apple può condividere conferma d’acquisto e stato dell’abbonamento per consentirci di sbloccare le funzioni premium nell’app.",
            "Puoi consultare lo storico fatture, gestire gli abbonamenti e richiedere rimborsi tramite il tuo account Apple ID. Per annullare il rinnovo automatico, disattivalo almeno 24 ore prima della fine del periodo corrente in Impostazioni > Apple ID > Abbonamenti."
          ]
        },
        "thirdparty": {
          "title": "Servizi di terze parti",
          "body": [
            "Playlist e stream provengono da fonti che configuri. Tali fornitori hanno proprie pratiche sulla privacy.",
            "Okur Studio non è responsabile della privacy o dei contenuti delle fonti di playlist di terze parti."
          ]
        },
        "updates": {
          "title": "Aggiornamenti dell’informativa",
          "body": [
            "Possiamo aggiornare questa Informativa sulla privacy di tanto in tanto. La data «Ultimo aggiornamento» in alto nella pagina cambierà di conseguenza.",
            "L’uso continuato dell’app dopo un aggiornamento significa che prendi atto dell’informativa rivista."
          ]
        },
        "contact": {
          "title": "Contatti",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "E-mail: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Termini di utilizzo",
      "sections": {
        "agreement": {
          "title": "Accordo",
          "body": [
            "Questi Termini di utilizzo regolano l’uso di Vevora IPTV su iOS e iPadOS, gestita da Okur Studio.",
            "Scaricando o usando l’app, accetti questi termini. Se non sei d’accordo, non usare l’app."
          ]
        },
        "player": {
          "title": "Solo lettore shell",
          "body": [
            "Vevora IPTV è un lettore multimediale shell. Riproduce playlist e stream che aggiungi tu, ad esempio fonti M3U o Xtream.",
            "Okur Studio non fornisce, ospita né distribuisce canali IPTV, film, serie o altri contenuti multimediali.",
            "Sei l’unico responsabile di ottenere un accesso lecito a qualsiasi playlist o stream che usi con l’app."
          ]
        },
        "age": {
          "title": "Requisito di età",
          "body": [
            "Vevora IPTV è destinata a utenti di età pari o superiore a 13 anni. Non è diretta a minori di 13 anni.",
            "Devi avere età sufficiente per usare l’App Store e accettare questi termini nella tua area. Se usi l’app per conto di altri, confermi di avere l’autorità di accettare questi termini per loro."
          ]
        },
        "license": {
          "title": "Licenza",
          "body": [
            "Fatti salvi questi Termini, Okur Studio ti concede una licenza personale, limitata, non esclusiva e non trasferibile per usare Vevora IPTV su dispositivi Apple di cui sei proprietario o che controlli.",
            "Si applicano anche i termini dell’App Store di Apple, ove rilevanti per il download e l’uso dell’app."
          ]
        },
        "profiles": {
          "title": "Profili e impostazioni",
          "body": [
            "Puoi creare profili e impostazioni memorizzati sul dispositivo. Conserva le credenziali in modo sicuro e non condividerle.",
            "Sei responsabile dell’attività che avviene con playlist e profili che configuri sul dispositivo."
          ]
        },
        "content": {
          "title": "I tuoi contenuti e le playlist",
          "body": [
            "Qualsiasi URL di playlist, credenziali o media che aggiungi proviene da te o dal fornitore scelto — non da Okur Studio.",
            "Devi usare solo contenuti a cui hai diritto di accesso. L’app non ti concede diritti sui media di terze parti."
          ]
        },
        "subscriptions": {
          "title": "Abbonamenti premium",
          "body": [
            "Funzioni premium opzionali possono essere disponibili tramite abbonamenti con rinnovo automatico acquistati sull’App Store di Apple.",
            "Il pagamento viene addebitato sul tuo account Apple ID alla conferma dell’acquisto. Gli abbonamenti si rinnovano automaticamente salvo disattivazione del rinnovo automatico almeno 24 ore prima della fine del periodo corrente.",
            "Il rinnovo viene addebitato entro 24 ore prima della fine del periodo corrente. Gestisci o annulla gli abbonamenti in Impostazioni > Apple ID > Abbonamenti.",
            "Gli acquisti sull’App Store sono soggetti ai termini di Apple. Okur Studio non elabora i pagamenti direttamente."
          ]
        },
        "rules": {
          "title": "Uso accettabile",
          "body": [
            "Usa Vevora IPTV solo in modi conformi alla legge applicabile e a questi termini.",
            "Non abusare dell’app per accedere o distribuire contenuti illeciti, interferire con sistemi di terzi o tentare di effettuare reverse engineering dell’app salvo quanto consentito dalla legge."
          ]
        },
        "ownership": {
          "title": "Proprietà dell’app",
          "body": [
            "Okur Studio è proprietaria del software, del design e del marchio Vevora IPTV.",
            "Questi termini non ti trasferiscono la proprietà dell’app."
          ]
        },
        "nowarranty": {
          "title": "Assenza di garanzia",
          "body": [
            "L’app è fornita «così com’è» e «come disponibile». La riproduzione dipende dal dispositivo, dalla rete e dalle fonti di playlist che scegli.",
            "Okur Studio non garantisce riproduzione ininterrotta, compatibilità con ogni formato di playlist né disponibilità di stream di terze parti."
          ]
        },
        "responsibility": {
          "title": "La tua responsabilità",
          "body": [
            "Sei responsabile di come usi l’app e delle playlist e degli stream a cui ti colleghi.",
            "Okur Studio non è responsabile di contenuti di terze parti, fornitori di playlist o danni causati da media o link che scegli di aprire."
          ]
        },
        "stop": {
          "title": "Interruzione dell’uso",
          "body": [
            "Puoi interrompere l’uso di Vevora IPTV in qualsiasi momento eliminando l’app e i dati correlati dal dispositivo.",
            "Possiamo interrompere l’offerta dell’app o aggiornare questi termini. L’uso continuato dopo le modifiche significa che accetti i termini aggiornati."
          ]
        },
        "contact": {
          "title": "Contatti",
          "body": [
            "Domande su questi Termini di utilizzo: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "pt": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Última atualização",
      "lastUpdatedDate": "7 de agosto de 2026",
      "navHome": "Início",
      "navPrivacy": "Política de Privacidade",
      "navTerms": "Termos de Uso",
      "navSupport": "Suporte",
      "footer": "© 2026 Okur Studio. Todos os direitos reservados.",
      "footerNote": "Vevora IPTV é um aplicativo reprodutor de mídia. Okur Studio não fornece, hospeda nem distribui canais ou streams IPTV.",
      "selectLanguage": "Idioma"
    },
    "index": {
      "title": "Legal e suporte",
      "heading": "Vevora IPTV",
      "subtitle": "Privacidade, termos e suporte para o app iOS e iPadOS da Okur Studio.",
      "privacyTitle": "Política de Privacidade",
      "privacyDesc": "Como a app trata informação no dispositivo e via Apple iCloud / CloudKit.",
      "termsTitle": "Termos de Uso",
      "termsDesc": "Regras para usar o app reprodutor Vevora IPTV.",
      "supportTitle": "Suporte",
      "supportDesc": "Ajuda de configuração e técnica por e-mail."
    },
    "support": {
      "title": "Suporte",
      "heading": "Contactar o suporte",
      "intro": "Precisa de ajuda com o Vevora IPTV? Escreva-nos sobre configuração, listas que adiciona ou problemas técnicos. Não fornecemos canais ou streams.",
      "emailLabel": "Envie e-mail para",
      "emailHint": "Inclua o modelo do dispositivo e a versão do iOS para uma ajuda mais rápida.",
      "topicsTitle": "Perguntas frequentes",
      "topics": [
        {
          "title": "Adicionar listas",
          "body": "A Vevora IPTV é um leitor shell. Adicione o seu URL M3U ou login Xtream na app. A Okur Studio não fornece listas nem canais."
        },
        {
          "title": "Problemas de reprodução",
          "body": "A qualidade depende da rede e do fornecedor da lista. Experimente outro canal, verifique a ligação ou contacte o fornecedor se os streams falharem."
        },
        {
          "title": "Premium e subscrições",
          "body": "As funcionalidades premium são faturadas na App Store com o seu Apple ID. Gira ou cancele em Definições > Apple ID > Subscrições pelo menos 24 h antes da renovação."
        },
        {
          "title": "Contactar o suporte",
          "body": "Escreva para vevoraplayer@gmail.com com uma descrição clara. Evite partilhar palavras-passe das listas salvo pedido nosso."
        }
      ],
      "helpTitle": "Antes de escrever",
      "helpItems": [
        "Vevora IPTV é um reprodutor shell — você adiciona as suas próprias listas M3U ou Xtream. Okur Studio não fornece, hospeda nem distribui canais ou streams.",
        "Inclua a versão do iOS ou iPadOS, o modelo do dispositivo e uma breve descrição do problema.",
        "Não partilhe palavras-passe de listas por e-mail, salvo se necessário para o diagnóstico."
      ],
      "responseNote": "Procuramos responder em poucos dias úteis."
    },
    "privacy": {
      "title": "Política de Privacidade",
      "sections": {
        "about": {
          "title": "Sobre esta política",
          "body": [
            "Esta Política de Privacidade explica como a Okur Studio trata informações quando utiliza o Vevora IPTV no iPhone e iPad (iOS / iPadOS).",
            "Vevora IPTV é um reprodutor de mídia shell. Você adiciona as suas próprias listas M3U ou Xtream. Okur Studio não fornece, hospeda nem distribui canais, filmes, séries ou outros streams."
          ]
        },
        "data": {
          "title": "Informações no seu dispositivo",
          "body": [
            "A Okur Studio não opera servidores próprios para armazenar as suas listas ou histórico. Os dados da biblioteca ficam no dispositivo e podem sincronizar via Apple iCloud / CloudKit se tiver sessão no iCloud.",
            "Os dados no dispositivo podem incluir ligações e credenciais de listas que introduz, perfis, favoritos, histórico, metadados de transferência e definições da app.",
            "Ao reproduzir, o seu dispositivo liga-se diretamente à fonte de lista que configurou. Não recebemos nem armazenamos esses media."
          ]
        },
        "icloud": {
          "title": "Sincronização iCloud e CloudKit",
          "body": [
            "Se estiver com sessão iniciada no iCloud no dispositivo, o Vevora IPTV pode sincronizar a sua biblioteca—perfis, metadados de listas, favoritos e histórico—entre os seus dispositivos Apple com Apple CloudKit / iCloud.",
            "Essa sincronização usa o seu Apple ID e a infraestrutura iCloud da Apple. A Okur Studio não opera servidores próprios de sync e não consegue ler o conteúdo da sua conta iCloud.",
            "Palavras-passe de listas e PINs de perfil são guardados no Porta-chaves do iOS e podem sincronizar com o Porta-chaves do iCloud quando ativado.",
            "Pode limitar ou remover dados sincronizados terminando a sessão no iCloud, apagando dados na app ou desinstalando o Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "Rastreamento e publicidade",
          "body": [
            "Não fazemos rastreamento entre apps para publicidade.",
            "Não vendemos dados pessoais.",
            "Não usamos SDKs de publicidade de terceiros para rastreamento."
          ]
        },
        "use": {
          "title": "Como as informações são usadas",
          "body": [
            "Os dados no dispositivo são usados apenas para executar o reprodutor: carregar listas, mostrar a sua biblioteca, lembrar preferências e reproduzir streams que solicita.",
            "Não usamos dados de listas ou visualização no dispositivo para publicidade."
          ]
        },
        "sharing": {
          "title": "Partilha",
          "body": [
            "Não partilhamos as suas listas, credenciais ou histórico de visualização com terceiros para o respetivo marketing.",
            "O dispositivo pode comunicar com o fornecedor de listas que escolher e com serviços Apple padrão—incluindo iCloud / CloudKit quando a sincronização da biblioteca estiver ativa.",
            "Se a lei o exigir, podemos divulgar informações na medida necessária para cumprir."
          ]
        },
        "retention": {
          "title": "Retenção",
          "body": [
            "Os dados de listas e definições permanecem no dispositivo (e, se ativado, na sua conta iCloud via CloudKit) até os apagar na app, remover do iCloud ou desinstalar a app.",
            "Se nos contactar por e-mail, mantemos a correspondência apenas o tempo necessário para responder e resolver o pedido."
          ]
        },
        "security": {
          "title": "Segurança",
          "body": [
            "Concebemos a app para que detalhes sensíveis permaneçam no dispositivo sempre que possível.",
            "Nenhum método de armazenamento ou transmissão é perfeitamente seguro. Proteja o código do dispositivo e não partilhe credenciais de listas."
          ]
        },
        "choices": {
          "title": "As suas opções",
          "body": [
            "Pode editar ou eliminar listas, perfis e dados relacionados na app.",
            "Pode limpar os dados da app ou desinstalar o Vevora IPTV para remover informações do dispositivo.",
            "Para questões de privacidade: vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Crianças",
          "body": [
            "Vevora IPTV é adequada para utilizadores com 13 anos ou mais. Não se destina a crianças com menos de 13 anos.",
            "Não use a app para recolher informações de crianças. Se acredita que uma criança forneceu informações pessoais através da app, contacte-nos."
          ]
        },
        "purchases": {
          "title": "Compras na app e subscrições",
          "body": [
            "A Vevora IPTV pode oferecer funcionalidades premium opcionais através de compras integradas e subscrições com renovação automática na App Store.",
            "O pagamento é processado pela Apple. Não recebemos nem armazenamos dados de cartão ou conta bancária.",
            "A Apple pode partilhar confirmação de compra e estado da subscrição para desbloquearmos funcionalidades premium na app.",
            "Pode ver o histórico de faturação, gerir subscrições e pedir reembolsos através da sua conta Apple ID. Para cancelar a renovação automática, desative-a pelo menos 24 horas antes do fim do período atual em Definições > Apple ID > Subscrições."
          ]
        },
        "thirdparty": {
          "title": "Serviços de terceiros",
          "body": [
            "Listas e streams vêm de fontes que configura. Esses fornecedores têm as suas próprias práticas de privacidade.",
            "Okur Studio não é responsável pela privacidade ou conteúdo de fontes de listas de terceiros."
          ]
        },
        "updates": {
          "title": "Atualizações da política",
          "body": [
            "Podemos atualizar esta Política de Privacidade periodicamente. A data «Última atualização» no topo desta página mudará então.",
            "O uso continuado da app após uma atualização significa que reconhece a política revista."
          ]
        },
        "contact": {
          "title": "Contacto",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "E-mail: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Termos de Uso",
      "sections": {
        "agreement": {
          "title": "Acordo",
          "body": [
            "Estes Termos de Uso regem a sua utilização do Vevora IPTV no iOS e iPadOS, operado pela Okur Studio.",
            "Ao transferir ou usar a app, concorda com estes termos. Se não concordar, não use a app."
          ]
        },
        "player": {
          "title": "Apenas reprodutor shell",
          "body": [
            "Vevora IPTV é um reprodutor de mídia shell. Reproduz listas e streams que você adiciona, como fontes M3U ou Xtream.",
            "Okur Studio não fornece, hospeda nem distribui canais IPTV, filmes, séries ou qualquer outro conteúdo multimédia.",
            "É o único responsável por obter acesso legal a qualquer lista ou stream que use com a app."
          ]
        },
        "age": {
          "title": "Requisito de idade",
          "body": [
            "Vevora IPTV destina-se a utilizadores com 13 anos ou mais. Não se destina a crianças com menos de 13 anos.",
            "Deve ter idade suficiente para usar a App Store e aceitar estes termos na sua região. Se usar a app em nome de outra pessoa, confirma que tem autoridade para aceitar estes termos por ela."
          ]
        },
        "license": {
          "title": "Licença",
          "body": [
            "Sujeito a estes Termos, a Okur Studio concede-lhe uma licença pessoal, limitada, não exclusiva e intransferível para usar o Vevora IPTV em dispositivos Apple que possui ou controla.",
            "Os termos da App Store da Apple também se aplicam quando forem relevantes para a transferência e utilização da app."
          ]
        },
        "profiles": {
          "title": "Perfis e definições",
          "body": [
            "Pode criar perfis e definições armazenados no dispositivo. Mantenha as credenciais seguras e não as partilhe.",
            "É responsável pela atividade que ocorre com listas e perfis que configura no dispositivo."
          ]
        },
        "content": {
          "title": "O seu conteúdo e listas",
          "body": [
            "Qualquer URL de lista, credenciais ou media que adicione vem de si ou do fornecedor escolhido — não da Okur Studio.",
            "Só deve usar conteúdo a que tenha direito de acesso. A app não lhe concede direitos sobre media de terceiros."
          ]
        },
        "subscriptions": {
          "title": "Subscrições premium",
          "body": [
            "Funcionalidades premium opcionais podem estar disponíveis através de subscrições com renovação automática adquiridas na App Store da Apple.",
            "O pagamento é debitado na sua conta Apple ID ao confirmar a compra. As subscrições renovam-se automaticamente salvo se desativar a renovação automática pelo menos 24 horas antes do fim do período atual.",
            "A renovação será cobrada nas 24 horas anteriores ao fim do período atual. Gira ou cancele subscrições em Definições > Apple ID > Subscrições.",
            "As compras na App Store estão sujeitas aos termos da Apple. A Okur Studio não processa pagamentos diretamente."
          ]
        },
        "rules": {
          "title": "Utilização aceitável",
          "body": [
            "Use o Vevora IPTV apenas de formas que cumpram a lei aplicável e estes termos.",
            "Não use indevidamente a app para aceder ou distribuir conteúdo ilícito, interferir com sistemas de terceiros ou tentar fazer engenharia inversa da app, exceto quando a lei o permitir."
          ]
        },
        "ownership": {
          "title": "Propriedade da app",
          "body": [
            "Okur Studio é proprietária do software, design e marca Vevora IPTV.",
            "Estes termos não lhe transferem a propriedade da app."
          ]
        },
        "nowarranty": {
          "title": "Sem garantia",
          "body": [
            "A app é fornecida «tal como está» e «conforme disponível». A reprodução depende do dispositivo, da rede e das fontes de listas que escolher.",
            "Okur Studio não garante reprodução ininterrupta, compatibilidade com todos os formatos de lista nem disponibilidade de qualquer stream de terceiros."
          ]
        },
        "responsibility": {
          "title": "A sua responsabilidade",
          "body": [
            "É responsável pela forma como usa a app e pelas listas e streams a que se liga.",
            "Okur Studio não é responsável por conteúdo de terceiros, fornecedores de listas ou danos causados por media ou ligações que escolha abrir."
          ]
        },
        "stop": {
          "title": "Parar de usar",
          "body": [
            "Pode parar de usar o Vevora IPTV a qualquer momento eliminando a app e os dados relacionados do dispositivo.",
            "Podemos deixar de oferecer a app ou atualizar estes termos. O uso continuado após alterações significa que aceita os termos atualizados."
          ]
        },
        "contact": {
          "title": "Contacto",
          "body": [
            "Questões sobre estes Termos de Uso: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "ru": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "Последнее обновление",
      "lastUpdatedDate": "7 августа 2026 г.",
      "navHome": "Главная",
      "navPrivacy": "Политика конфиденциальности",
      "navTerms": "Условия использования",
      "navSupport": "Поддержка",
      "footer": "© 2026 Okur Studio. Все права защищены.",
      "footerNote": "Vevora IPTV — приложение-медиаплеер. Okur Studio не предоставляет, не размещает и не распространяет IPTV-каналы или потоки.",
      "selectLanguage": "Язык"
    },
    "index": {
      "title": "Правовая информация и поддержка",
      "heading": "Vevora IPTV",
      "subtitle": "Конфиденциальность, условия и поддержка для приложения Okur Studio для iOS и iPadOS.",
      "privacyTitle": "Политика конфиденциальности",
      "privacyDesc": "Как приложение обрабатывает данные на устройстве и через Apple iCloud / CloudKit.",
      "termsTitle": "Условия использования",
      "termsDesc": "Правила использования приложения-плеера Vevora IPTV.",
      "supportTitle": "Поддержка",
      "supportDesc": "Помощь по настройке и техническим вопросам по электронной почте."
    },
    "support": {
      "title": "Поддержка",
      "heading": "Связаться с поддержкой",
      "intro": "Нужна помощь с Vevora IPTV? Напишите нам о настройке, добавляемых плейлистах или технических проблемах. Мы не предоставляем каналы или потоки.",
      "emailLabel": "Напишите нам на",
      "emailHint": "Укажите модель устройства и версию iOS для более быстрой помощи.",
      "topicsTitle": "Частые вопросы",
      "topics": [
        {
          "title": "Добавление плейлистов",
          "body": "Vevora IPTV — shell-плеер. Добавьте свой URL M3U или данные Xtream в приложении. Okur Studio не предоставляет плейлисты и каналы."
        },
        {
          "title": "Проблемы воспроизведения",
          "body": "Качество зависит от сети и провайдера плейлиста. Попробуйте другой канал, проверьте соединение или обратитесь к провайдеру."
        },
        {
          "title": "Premium и подписки",
          "body": "Премиум-функции оплачиваются через App Store на ваш Apple ID. Управляйте подписками в Настройки > Apple ID > Подписки не позднее чем за 24 часа до продления."
        },
        {
          "title": "Связь с поддержкой",
          "body": "Напишите на vevoraplayer@gmail.com с кратким описанием проблемы. Не отправляйте пароли плейлистов без запроса."
        }
      ],
      "helpTitle": "Перед тем как писать",
      "helpItems": [
        "Vevora IPTV — оболочечный плеер: вы добавляете собственные плейлисты M3U или Xtream. Okur Studio не предоставляет, не размещает и не распространяет каналы или потоки.",
        "Укажите версию iOS или iPadOS, модель устройства и краткое описание проблемы.",
        "Не сообщайте пароли плейлистов по электронной почте, если это не нужно для диагностики."
      ],
      "responseNote": "Мы стремимся ответить в течение нескольких рабочих дней."
    },
    "privacy": {
      "title": "Политика конфиденциальности",
      "sections": {
        "about": {
          "title": "Об этой политике",
          "body": [
            "Настоящая Политика конфиденциальности объясняет, как Okur Studio обрабатывает информацию при использовании Vevora IPTV на iPhone и iPad (iOS / iPadOS).",
            "Vevora IPTV — оболочечный медиаплеер. Вы добавляете собственные плейлисты M3U или Xtream. Okur Studio не предоставляет, не размещает и не распространяет каналы, фильмы, сериалы или другие потоки."
          ]
        },
        "data": {
          "title": "Информация на вашем устройстве",
          "body": [
            "Okur Studio не ведёт собственные серверы для хранения плейлистов или истории. Данные библиотеки хранятся на устройстве и могут синхронизироваться через Apple iCloud / CloudKit при входе в iCloud.",
            "Данные на устройстве могут включать ссылки и учётные данные плейлистов, которые вы вводите, профили, избранное, историю просмотра, метаданные загрузок и настройки приложения.",
            "При воспроизведении ваше устройство подключается напрямую к источнику плейлиста, который вы настроили. Мы не получаем и не храним эти медиафайлы."
          ]
        },
        "icloud": {
          "title": "Синхронизация iCloud и CloudKit",
          "body": [
            "Если на устройстве выполнен вход в iCloud, Vevora IPTV может синхронизировать библиотеку—профили, метаданные плейлистов, избранное и историю—между вашими устройствами Apple через Apple CloudKit / iCloud.",
            "Синхронизация использует ваш Apple ID и инфраструктуру iCloud Apple. Okur Studio не ведёт собственные серверы синхронизации и не может читать содержимое вашего аккаунта iCloud.",
            "Пароли плейлистов и PIN профилей хранятся в Связке ключей iOS и могут синхронизироваться через Связку ключей iCloud, если она включена.",
            "Ограничить или удалить синхронизированные данные можно, выйдя из iCloud, удалив данные в приложении или удалив Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "Отслеживание и реклама",
          "body": [
            "Мы не ведём межприложенное отслеживание в рекламных целях.",
            "Мы не продаём персональные данные.",
            "Мы не используем сторонние рекламные SDK для отслеживания."
          ]
        },
        "use": {
          "title": "Как используется информация",
          "body": [
            "Данные на устройстве используются только для работы плеера: загрузки плейлистов, отображения библиотеки, сохранения настроек и воспроизведения запрошенных вами потоков.",
            "Мы не используем данные плейлистов или просмотра на устройстве для рекламы."
          ]
        },
        "sharing": {
          "title": "Передача данных",
          "body": [
            "Мы не передаём ваши плейлисты, учётные данные или историю просмотра третьим лицам для их маркетинга.",
            "Устройство может связываться с выбранным вами провайдером плейлистов и со стандартными сервисами Apple—включая iCloud / CloudKit, когда активна синхронизация библиотеки.",
            "Если этого требует закон, мы можем раскрыть информацию в необходимом объёме."
          ]
        },
        "retention": {
          "title": "Хранение",
          "body": [
            "Данные плейлистов и настройки остаются на устройстве (и при включении — в аккаунте iCloud через CloudKit), пока вы не удалите их в приложении, из iCloud или не удалите приложение.",
            "Если вы свяжетесь с нами по электронной почте, мы храним переписку только столько, сколько нужно для ответа и решения вашего запроса."
          ]
        },
        "security": {
          "title": "Безопасность",
          "body": [
            "Мы проектируем приложение так, чтобы конфиденциальные сведения по возможности оставались на вашем устройстве.",
            "Ни один способ хранения или передачи не является абсолютно безопасным. Защищайте код устройства и не делитесь учётными данными плейлистов."
          ]
        },
        "choices": {
          "title": "Ваши возможности",
          "body": [
            "Вы можете изменять или удалять плейлисты, профили и связанные данные в приложении.",
            "Вы можете очистить данные приложения или удалить Vevora IPTV, чтобы убрать информацию с устройства.",
            "По вопросам конфиденциальности: vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "Дети",
          "body": [
            "Vevora IPTV предназначено для пользователей от 13 лет и старше. Оно не рассчитано на детей младше 13 лет.",
            "Не используйте приложение для сбора информации о детях. Если вы считаете, что ребёнок передал персональные данные через приложение, свяжитесь с нами."
          ]
        },
        "purchases": {
          "title": "Покупки в приложении и подписки",
          "body": [
            "Vevora IPTV может предлагать необязательные премиум-функции через покупки в приложении и автоматически продлеваемые подписки в App Store.",
            "Оплату обрабатывает Apple. Мы не получаем и не храним данные платёжных карт или банковских счетов.",
            "Apple может передавать нам подтверждение покупки и статус подписки, чтобы мы могли разблокировать премиум-функции в приложении.",
            "История платежей, управление подписками и возвраты доступны через ваш Apple ID. Чтобы отключить автопродление, сделайте это не позднее чем за 24 часа до конца текущего периода в Настройки > Apple ID > Подписки."
          ]
        },
        "thirdparty": {
          "title": "Сторонние сервисы",
          "body": [
            "Плейлисты и потоки поступают из источников, которые вы настраиваете. У этих поставщиков свои практики конфиденциальности.",
            "Okur Studio не несёт ответственности за конфиденциальность или содержание сторонних источников плейлистов."
          ]
        },
        "updates": {
          "title": "Обновления политики",
          "body": [
            "Мы можем время от времени обновлять эту Политику конфиденциальности. Дата «Последнее обновление» вверху страницы изменится соответственно.",
            "Продолжение использования приложения после обновления означает, что вы принимаете к сведению пересмотренную политику."
          ]
        },
        "contact": {
          "title": "Контакты",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "Эл. почта: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "Условия использования",
      "sections": {
        "agreement": {
          "title": "Соглашение",
          "body": [
            "Настоящие Условия использования регулируют использование вами Vevora IPTV на iOS и iPadOS, управляемого Okur Studio.",
            "Загружая или используя приложение, вы соглашаетесь с этими условиями. Если вы не согласны, не используйте приложение."
          ]
        },
        "player": {
          "title": "Только оболочечный плеер",
          "body": [
            "Vevora IPTV — оболочечный медиаплеер. Он воспроизводит плейлисты и потоки, которые вы добавляете сами, например источники M3U или Xtream.",
            "Okur Studio не предоставляет, не размещает и не распространяет IPTV-каналы, фильмы, сериалы или иной медиаконтент.",
            "Вы самостоятельно несёте ответственность за получение законного доступа к любому плейлисту или потоку, который используете с приложением."
          ]
        },
        "age": {
          "title": "Возрастное требование",
          "body": [
            "Vevora IPTV предназначено для пользователей от 13 лет и старше. Оно не рассчитано на детей младше 13 лет.",
            "Вы должны быть достаточно взрослыми, чтобы пользоваться App Store и принимать эти условия в вашем регионе. Если вы используете приложение от имени другого лица, вы подтверждаете, что уполномочены принять эти условия за него."
          ]
        },
        "license": {
          "title": "Лицензия",
          "body": [
            "При условии соблюдения настоящих Условий Okur Studio предоставляет вам личную, ограниченную, неисключительную и непередаваемую лицензию на использование Vevora IPTV на устройствах Apple, которыми вы владеете или которые контролируете.",
            "Условия App Store компании Apple также применяются там, где они относятся к загрузке и использованию приложения."
          ]
        },
        "profiles": {
          "title": "Профили и настройки",
          "body": [
            "Вы можете создавать профили и настройки, хранящиеся на устройстве. Храните учётные данные в безопасности и не делитесь ими.",
            "Вы несёте ответственность за действия, связанные с плейлистами и профилями, которые вы настраиваете на устройстве."
          ]
        },
        "content": {
          "title": "Ваш контент и плейлисты",
          "body": [
            "Любой URL плейлиста, учётные данные или медиа, которые вы добавляете, исходят от вас или выбранного вами поставщика — не от Okur Studio.",
            "Вы должны использовать только контент, к которому у вас есть право доступа. Приложение не предоставляет вам прав на медиа третьих лиц."
          ]
        },
        "subscriptions": {
          "title": "Премиум-подписки",
          "body": [
            "Необязательные премиум-функции могут быть доступны через автоматически продлеваемые подписки, приобретённые в App Store.",
            "Оплата списывается с вашего Apple ID при подтверждении покупки. Подписки продлеваются автоматически, если вы не отключите автопродление не позднее чем за 24 часа до конца текущего периода.",
            "Продление списывается в течение 24 часов до окончания текущего периода. Управляйте подписками в Настройки > Apple ID > Подписки.",
            "Покупки в App Store регулируются условиями Apple. Okur Studio не обрабатывает платежи напрямую."
          ]
        },
        "rules": {
          "title": "Допустимое использование",
          "body": [
            "Используйте Vevora IPTV только способами, соответствующими применимому закону и этим условиям.",
            "Не злоупотребляйте приложением для доступа к незаконному контенту или его распространения, вмешательства в системы других лиц или попыток обратной разработки приложения, кроме случаев, разрешённых законом."
          ]
        },
        "ownership": {
          "title": "Права на приложение",
          "body": [
            "Okur Studio владеет программным обеспечением, дизайном и брендом Vevora IPTV.",
            "Настоящие условия не передают вам право собственности на приложение."
          ]
        },
        "nowarranty": {
          "title": "Отказ от гарантий",
          "body": [
            "Приложение предоставляется «как есть» и «по мере доступности». Воспроизведение зависит от устройства, сети и выбранных вами источников плейлистов.",
            "Okur Studio не гарантирует бесперебойное воспроизведение, совместимость с каждым форматом плейлиста или доступность какого-либо стороннего потока."
          ]
        },
        "responsibility": {
          "title": "Ваша ответственность",
          "body": [
            "Вы несёте ответственность за то, как используете приложение, а также за плейлисты и потоки, к которым подключаетесь.",
            "Okur Studio не несёт ответственности за сторонний контент, поставщиков плейлистов или ущерб, вызванный медиа или ссылками, которые вы решите открыть."
          ]
        },
        "stop": {
          "title": "Прекращение использования",
          "body": [
            "Вы можете прекратить использование Vevora IPTV в любое время, удалив приложение и связанные данные с устройства.",
            "Мы можем прекратить предложение приложения или обновить эти условия. Продолжение использования после изменений означает принятие обновлённых условий."
          ]
        },
        "contact": {
          "title": "Контакты",
          "body": [
            "Вопросы по настоящим Условиям использования: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  },
  "ar": {
    "common": {
      "appName": "Vevora IPTV",
      "operator": "Okur Studio",
      "platform": "iOS / iPadOS",
      "bundleId": "com.vevora.iptv",
      "email": "vevoraplayer@gmail.com",
      "lastUpdatedLabel": "آخر تحديث",
      "lastUpdatedDate": "7 أغسطس 2026",
      "navHome": "الرئيسية",
      "navPrivacy": "سياسة الخصوصية",
      "navTerms": "شروط الاستخدام",
      "navSupport": "الدعم",
      "footer": "© 2026 Okur Studio. جميع الحقوق محفوظة.",
      "footerNote": "Vevora IPTV تطبيق مشغّل وسائط. Okur Studio لا يوفّر قنوات أو بث IPTV ولا يستضيفها ولا يوزّعها.",
      "selectLanguage": "اللغة"
    },
    "index": {
      "title": "الشؤون القانونية والدعم",
      "heading": "Vevora IPTV",
      "subtitle": "الخصوصية والشروط والدعم لتطبيق Okur Studio على iOS وiPadOS.",
      "privacyTitle": "سياسة الخصوصية",
      "privacyDesc": "كيف يتعامل التطبيق مع المعلومات على جهازك وعبر Apple iCloud / CloudKit.",
      "termsTitle": "شروط الاستخدام",
      "termsDesc": "قواعد استخدام تطبيق مشغّل Vevora IPTV.",
      "supportTitle": "الدعم",
      "supportDesc": "مساعدة الإعداد والمشاكل التقنية عبر البريد الإلكتروني."
    },
    "support": {
      "title": "الدعم",
      "heading": "التواصل مع الدعم",
      "intro": "هل تحتاج مساعدة بشأن Vevora IPTV؟ راسلنا بخصوص الإعداد أو قوائم التشغيل التي تضيفها أو المشاكل التقنية. نحن لا نوفّر قنوات أو بثًا.",
      "emailLabel": "راسلنا على",
      "emailHint": "اذكر طراز الجهاز وإصدار iOS للحصول على مساعدة أسرع.",
      "topicsTitle": "أسئلة شائعة",
      "topics": [
        {
          "title": "إضافة قوائم",
          "body": "Vevora IPTV مشغّل غلاف. أضف عنوان M3U أو بيانات Xtream في التطبيق. Okur Studio لا توفّر قوائم أو قنوات."
        },
        {
          "title": "مشاكل التشغيل",
          "body": "تعتمد جودة البث على شبكتك ومزوّد القائمة. جرّب قناة أخرى أو تحقق من الاتصال أو تواصل مع مزوّد القائمة."
        },
        {
          "title": "Premium والاشتراكات",
          "body": "تُفوتر ميزات Premium عبر App Store على Apple ID. أدر أو ألغِ في الإعدادات > Apple ID > الاشتراكات قبل 24 ساعة على الأقل من التجديد."
        },
        {
          "title": "التواصل مع الدعم",
          "body": "راسل vevoraplayer@gmail.com مع وصف واضح للمشكلة. تجنّب مشاركة كلمات مرور القوائم إلا عند الطلب."
        }
      ],
      "helpTitle": "قبل أن تكتب",
      "helpItems": [
        "Vevora IPTV مشغّل غلاف — تضيف قوائم M3U أو Xtream الخاصة بك. Okur Studio لا يوفّر قنوات أو بثًا ولا يستضيفها ولا يوزّعها.",
        "أدرج إصدار iOS أو iPadOS ونموذج الجهاز ووصفًا موجزًا للمشكلة.",
        "لا تشارك كلمات مرور القوائم عبر البريد إلا إذا لزم الأمر لتشخيص المشكلة."
      ],
      "responseNote": "نسعى للرد خلال أيام عمل قليلة."
    },
    "privacy": {
      "title": "سياسة الخصوصية",
      "sections": {
        "about": {
          "title": "حول هذه السياسة",
          "body": [
            "توضح سياسة الخصوصية هذه كيف تتعامل Okur Studio مع المعلومات عند استخدامك Vevora IPTV على iPhone وiPad (iOS / iPadOS).",
            "Vevora IPTV مشغّل وسائط غلاف. تضيف قوائم M3U أو Xtream الخاصة بك. Okur Studio لا يوفّر قنوات أو أفلامًا أو مسلسلات أو بثًا آخر ولا يستضيفها ولا يوزّعها."
          ]
        },
        "data": {
          "title": "المعلومات على جهازك",
          "body": [
            "لا تشغّل Okur Studio خوادم خاصة بها لتخزين قوائمك أو سجل المشاهدة. تبقى بيانات المكتبة على جهازك وقد تُزامَن عبر Apple iCloud / CloudKit عند تسجيل الدخول إلى iCloud.",
            "قد تتضمن بيانات الجهاز روابط القوائم وبيانات الاعتماد التي تدخلها، والملفات الشخصية، والمفضّلات، وسجل المشاهدة، وبيانات وصفية للتنزيل، وإعدادات التطبيق.",
            "عند تشغيل الوسائط يتصل جهازك مباشرة بمصدر القائمة الذي أعددته. نحن لا نستلم تلك الوسائط ولا نخزّنها."
          ]
        },
        "icloud": {
          "title": "مزامنة iCloud وCloudKit",
          "body": [
            "إذا كنت مسجّلاً الدخول إلى iCloud على جهازك، قد يزامن Vevora IPTV مكتبتك—مثل الملفات الشخصية وبيانات القوائم والمفضلة وسجل المشاهدة—بين أجهزة Apple عبر Apple CloudKit / iCloud.",
            "تعتمد هذه المزامنة على Apple ID وبنية iCloud من Apple. لا تشغّل Okur Studio خوادم مزامنة خاصة بها ولا يمكنها قراءة محتوى حساب iCloud الخاص بك.",
            "تُخزَّن كلمات مرور القوائم وأرقام PIN للملفات الشخصية في سلسلة مفاتيح iOS وقد تُزامَن مع سلسلة مفاتيح iCloud عند تفعيلها.",
            "يمكنك تقييد البيانات المتزامنة أو إزالتها بتسجيل الخروج من iCloud أو حذف البيانات في التطبيق أو إزالة Vevora IPTV."
          ]
        },
        "tracking": {
          "title": "التتبع والإعلان",
          "body": [
            "نحن لا نمارس التتبع عبر التطبيقات لأغراض إعلانية.",
            "نحن لا نبيع البيانات الشخصية.",
            "نحن لا نستخدم حزم SDK إعلانية من جهات خارجية للتتبع."
          ]
        },
        "use": {
          "title": "كيف تُستخدم المعلومات",
          "body": [
            "تُستخدم بيانات الجهاز فقط لتشغيل المشغّل: تحميل القوائم، وعرض مكتبتك، وتذكّر التفضيلات، وتشغيل البث الذي تطلبه.",
            "نحن لا نستخدم بيانات القوائم أو المشاهدة على الجهاز للإعلان."
          ]
        },
        "sharing": {
          "title": "المشاركة",
          "body": [
            "نحن لا نشارك قوائمك أو بيانات اعتمادك أو سجل مشاهدتك مع أطراف ثالثة لأغراض تسويقها.",
            "قد يتواصل جهازك مع مزوّد القائمة الذي تختاره ومع خدمات Apple القياسية اللازمة للتطبيق—بما في ذلك iCloud / CloudKit عند تفعيل مزامنة المكتبة.",
            "إذا اقتضى القانون ذلك، قد نفصح عن المعلومات بالقدر اللازم للامتثال."
          ]
        },
        "retention": {
          "title": "الاحتفاظ",
          "body": [
            "تبقى بيانات القوائم والإعدادات على جهازك (وعند التفعيل في حساب iCloud عبر CloudKit) حتى تحذفها في التطبيق أو من iCloud أو تزيل التطبيق.",
            "إذا راسلتنا عبر البريد، نحتفظ بالمراسلات فقط طالما يلزم للرد ومعالجة طلبك."
          ]
        },
        "security": {
          "title": "الأمان",
          "body": [
            "نصمّم التطبيق بحيث تبقى التفاصيل الحساسة على جهازك قدر الإمكان.",
            "لا توجد طريقة تخزين أو نقل آمنة تمامًا. احمِ رمز جهازك ولا تشارك بيانات اعتماد القوائم."
          ]
        },
        "choices": {
          "title": "خياراتك",
          "body": [
            "يمكنك تعديل أو حذف القوائم والملفات الشخصية والبيانات ذات الصلة داخل التطبيق.",
            "يمكنك مسح بيانات التطبيق أو إلغاء تثبيت Vevora IPTV لإزالة المعلومات من الجهاز.",
            "لأسئلة الخصوصية: vevoraplayer@gmail.com."
          ]
        },
        "children": {
          "title": "الأطفال",
          "body": [
            "Vevora IPTV مناسب للمستخدمين من عمر 13 سنة فأكثر. وهو غير موجّه للأطفال دون 13 سنة.",
            "لا تستخدم التطبيق لجمع معلومات من الأطفال. إذا كنت تعتقد أن طفلًا قدّم معلومات شخصية عبر التطبيق، تواصل معنا."
          ]
        },
        "purchases": {
          "title": "المشتريات داخل التطبيق والاشتراكات",
          "body": [
            "قد يقدّم Vevora IPTV ميزات premium اختيارية عبر مشتريات داخل التطبيق واشتراكات تتجدّد تلقائيًا على App Store.",
            "تتم معالجة الدفع بواسطة Apple. لا نتلقى ولا نخزّن بيانات بطاقتك أو حسابك البنكي.",
            "قد تشارك Apple تأكيد الشراء وحالة الاشتراك معنا لفتح الميزات premium في التطبيق.",
            "يمكنك عرض سجل الفوترة وإدارة الاشتراكات وطلب استرداد عبر حساب Apple ID. لإلغاء التجديد التلقائي، أوقفه قبل 24 ساعة على الأقل من نهاية الفترة الحالية في الإعدادات > Apple ID > الاشتراكات."
          ]
        },
        "thirdparty": {
          "title": "خدمات الأطراف الثالثة",
          "body": [
            "تأتي القوائم والبث من مصادر تعدّها أنت. ولهؤلاء المزوّدين ممارسات خصوصية خاصة بهم.",
            "Okur Studio غير مسؤولة عن خصوصية أو محتوى مصادر قوائم الأطراف الثالثة."
          ]
        },
        "updates": {
          "title": "تحديثات السياسة",
          "body": [
            "قد نحدّث سياسة الخصوصية هذه من وقت لآخر. سيتغيّر تاريخ «آخر تحديث» أعلى هذه الصفحة عند ذلك.",
            "الاستمرار في استخدام التطبيق بعد التحديث يعني إقرارك بالسياسة المعدَّلة."
          ]
        },
        "contact": {
          "title": "التواصل",
          "body": [
            "Okur Studio — Vevora IPTV (com.vevora.iptv)",
            "البريد الإلكتروني: vevoraplayer@gmail.com"
          ]
        }
      }
    },
    "terms": {
      "title": "شروط الاستخدام",
      "sections": {
        "agreement": {
          "title": "الاتفاق",
          "body": [
            "تحكم شروط الاستخدام هذه استخدامك لـ Vevora IPTV على iOS وiPadOS، وتشغّله Okur Studio.",
            "بتنزيل التطبيق أو استخدامه فإنك توافق على هذه الشروط. إذا لم توافق، فلا تستخدم التطبيق."
          ]
        },
        "player": {
          "title": "مشغّل غلاف فقط",
          "body": [
            "Vevora IPTV مشغّل وسائط غلاف. يشغّل قوائم وبثًا تضيفها بنفسك، مثل مصادر M3U أو Xtream.",
            "Okur Studio لا يوفّر قنوات IPTV أو أفلامًا أو مسلسلات أو أي محتوى وسائط آخر ولا يستضيفها ولا يوزّعها.",
            "أنت وحدك مسؤول عن الحصول على وصول مشروع إلى أي قائمة أو بث تستخدمه مع التطبيق."
          ]
        },
        "age": {
          "title": "متطلب العمر",
          "body": [
            "Vevora IPTV موجّه للمستخدمين من عمر 13 سنة فأكثر. وهو غير موجّه للأطفال دون 13 سنة.",
            "يجب أن تكون في سن يسمح باستخدام App Store والموافقة على هذه الشروط في منطقتك. إذا استخدمت التطبيق نيابة عن شخص آخر، فإنك تؤكد أن لديك صلاحية قبول هذه الشروط عنه."
          ]
        },
        "license": {
          "title": "الترخيص",
          "body": [
            "وفقًا لهذه الشروط، تمنحك Okur Studio ترخيصًا شخصيًا ومحدودًا وغير حصري وغير قابل للتحويل لاستخدام Vevora IPTV على أجهزة Apple التي تملكها أو تتحكم بها.",
            "تنطبق أيضًا شروط App Store من Apple حيث تكون ذات صلة بتنزيلك واستخدامك للتطبيق."
          ]
        },
        "profiles": {
          "title": "الملفات الشخصية والإعدادات",
          "body": [
            "يمكنك إنشاء ملفات شخصية وإعدادات تُخزَّن على جهازك. حافظ على أمان بيانات الاعتماد ولا تشاركها.",
            "أنت مسؤول عن النشاط المرتبط بالقوائم والملفات الشخصية التي تعدّها على جهازك."
          ]
        },
        "content": {
          "title": "محتواك وقوائمك",
          "body": [
            "أي عنوان URL لقائمة أو بيانات اعتماد أو وسائط تضيفها تأتي منك أو من المزوّد الذي اخترته — وليس من Okur Studio.",
            "يجب أن تستخدم فقط المحتوى الذي لديك حق الوصول إليه. التطبيق لا يمنحك أي حقوق في وسائط الأطراف الثالثة."
          ]
        },
        "subscriptions": {
          "title": "اشتراكات Premium",
          "body": [
            "قد تتوفر ميزات premium اختيارية عبر اشتراكات تتجدّد تلقائيًا تُشترى من App Store.",
            "يُخصَم الدفع من حساب Apple ID عند تأكيد الشراء. تتجدّد الاشتراكات تلقائيًا ما لم تُوقف التجديد التلقائي قبل 24 ساعة على الأقل من نهاية الفترة الحالية.",
            "يُخصَم التجديد خلال 24 ساعة قبل نهاية الفترة الحالية. يمكنك إدارة الاشتراكات أو إلغاؤها في الإعدادات > Apple ID > الاشتراكات.",
            "تخضع مشتريات App Store لشروط Apple. Okur Studio لا تعالج المدفوعات مباشرة."
          ]
        },
        "rules": {
          "title": "الاستخدام المقبول",
          "body": [
            "استخدم Vevora IPTV فقط بطرق تتوافق مع القانون المعمول به وهذه الشروط.",
            "لا تُسِئ استخدام التطبيق للوصول إلى محتوى غير مشروع أو توزيعه، أو التدخل في أنظمة الآخرين، أو محاولة الهندسة العكسية للتطبيق إلا حيث يسمح القانون."
          ]
        },
        "ownership": {
          "title": "ملكية التطبيق",
          "body": [
            "تملك Okur Studio برنامج Vevora IPTV وتصميمه وعلامته.",
            "هذه الشروط لا تنقل إليك ملكية التطبيق."
          ]
        },
        "nowarranty": {
          "title": "عدم الضمان",
          "body": [
            "يُقدَّم التطبيق «كما هو» و«حسب التوفر». يعتمد التشغيل على جهازك والشبكة ومصادر القوائم التي تختارها.",
            "لا تضمن Okur Studio تشغيلًا دون انقطاع، أو توافقًا مع كل تنسيق قائمة، أو توفر أي بث من طرف ثالث."
          ]
        },
        "responsibility": {
          "title": "مسؤوليتك",
          "body": [
            "أنت مسؤول عن كيفية استخدامك للتطبيق وعن القوائم والبث التي تتصل بها.",
            "Okur Studio غير مسؤولة عن محتوى الأطراف الثالثة أو مزوّدي القوائم أو الضرر الناتج عن وسائط أو روابط تختار فتحها."
          ]
        },
        "stop": {
          "title": "إيقاف الاستخدام",
          "body": [
            "يمكنك التوقف عن استخدام Vevora IPTV في أي وقت بحذف التطبيق والبيانات ذات الصلة من جهازك.",
            "قد نتوقف عن تقديم التطبيق أو نحدّث هذه الشروط. الاستمرار بعد التغييرات يعني قبولك للشروط المحدَّثة."
          ]
        },
        "contact": {
          "title": "التواصل",
          "body": [
            "أسئلة حول شروط الاستخدام هذه: vevoraplayer@gmail.com",
            "Okur Studio — Vevora IPTV (com.vevora.iptv)"
          ]
        }
      }
    }
  }
};

  function resolveLang() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get('lang');
    if (q && LANGS.indexOf(q) !== -1) return q;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    if (LANGS.indexOf(nav) !== -1) return nav;
    return 'en';
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    var url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
  }

  function t(lang, key) {
    var parts = key.split('.');
    var obj = T[lang] || T.en;
    for (var i = 0; i < parts.length; i++) {
      if (!obj) return key;
      obj = obj[parts[i]];
    }
    return obj !== undefined ? obj : key;
  }

  function applyCommon(lang) {
    document.documentElement.lang = lang;
    document.body.dir = RTL_LANGS.indexOf(lang) !== -1 ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(lang, key);
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = t(lang, key);
      if (typeof val === 'string') el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var val = t(lang, key);
      if (typeof val === 'string') el.setAttribute('title', val);
    });
    var metaLabel = document.getElementById('page-meta-date');
    if (metaLabel) {
      metaLabel.textContent = t(lang, 'common.lastUpdatedLabel') + ': ' + t(lang, 'common.lastUpdatedDate');
    }
  }

  function resolveTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    return 'dark';
  }

  function applyTheme(theme) {
    var value = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', value);
    try { localStorage.setItem(THEME_KEY, value); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', value === 'light' ? '#f5f5f7' : '#000000');
    syncThemeToggle(value);
  }

  function syncThemeToggle(theme) {
    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      var on = btn.getAttribute('data-theme-set') === theme;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function buildThemeToggle(lang) {
    var container = document.getElementById('theme-toggle');
    if (!container) return;
    var labels = THEME_LABELS[lang] || THEME_LABELS.en;
    var theme = resolveTheme();
    container.innerHTML = '';
    ['dark', 'light'].forEach(function (mode) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-theme-set', mode);
      btn.textContent = labels[mode];
      btn.setAttribute('aria-label', labels[mode]);
      btn.setAttribute('aria-pressed', mode === theme ? 'true' : 'false');
      btn.addEventListener('click', function () { applyTheme(mode); });
      container.appendChild(btn);
    });
  }

  function buildLangSwitcher(lang, page) {
    var container = document.getElementById('lang-switcher');
    if (!container) return;
    container.innerHTML = '';
    LANGS.forEach(function (code) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-chip' + (code === lang ? ' active' : '');
      btn.textContent = LANG_LABELS[code];
      btn.setAttribute('aria-label', LANG_LABELS[code]);
      btn.setAttribute('aria-pressed', code === lang ? 'true' : 'false');
      btn.addEventListener('click', function () { setLang(code); });
      container.appendChild(btn);
    });
  }

  function renderLegalSections(lang, pageKey, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var page = T[lang][pageKey] || T.en[pageKey];
    var order = pageKey === 'privacy'
      ? ["about", "data", "icloud", "tracking", "use", "sharing", "retention", "security", "choices", "children", "purchases", "thirdparty", "updates", "contact"]
      : ["agreement", "player", "age", "license", "profiles", "content", "subscriptions", "rules", "ownership", "nowarranty", "responsibility", "stop", "contact"];
    container.innerHTML = '';
    order.forEach(function (key) {
      var sec = page.sections[key];
      if (!sec) return;
      var section = document.createElement('section');
      var h2 = document.createElement('h2');
      h2.textContent = sec.title;
      section.appendChild(h2);
      (sec.body || sec.paragraphs || []).forEach(function (p) {
        var para = document.createElement('p');
        para.textContent = p;
        section.appendChild(para);
      });
      container.appendChild(section);
    });
  }

  function fixNavHrefs() {
    if (window.location.pathname.indexOf(BASE_PATH) === -1) return;
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|#|javascript:)/i.test(href)) return;
      if (href.indexOf(BASE_PATH) === 0) return;
      if (href.charAt(0) === '/') {
        a.setAttribute('href', BASE_PATH + href);
      }
    });
  }

  function renderSupportTopics(lang) {
    var container = document.getElementById('support-topics');
    if (container) {
      var topics = t(lang, 'support.topics');
      var title = t(lang, 'support.topicsTitle');
      container.innerHTML = '';
      if (typeof title === 'string' && title !== 'support.topicsTitle') {
        var h2 = document.createElement('h2');
        h2.textContent = title;
        container.appendChild(h2);
      }
      if (Array.isArray(topics)) {
        topics.forEach(function (topic) {
          var block = document.createElement('div');
          block.className = 'support-topic';
          var h3 = document.createElement('h3');
          h3.textContent = topic.title;
          block.appendChild(h3);
          var p = document.createElement('p');
          p.textContent = topic.body;
          block.appendChild(p);
          container.appendChild(block);
        });
      }
    }
    var ul = document.getElementById('support-help-list');
    if (ul) {
      var helpTitle = document.querySelector('[data-i18n="support.helpTitle"]');
      var topicsTitle = t(lang, 'support.topicsTitle');
      if (helpTitle && typeof topicsTitle === 'string') helpTitle.textContent = topicsTitle;
      var items = t(lang, 'support.helpItems');
      var topics = t(lang, 'support.topics');
      ul.innerHTML = '';
      if (Array.isArray(items) && items.length) {
        items.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
      } else if (Array.isArray(topics)) {
        topics.forEach(function (topic) {
          var li = document.createElement('li');
          li.textContent = topic.title + ': ' + topic.body;
          ul.appendChild(li);
        });
      }
    }
  }

  function init(page) {
    var lang = resolveLang();
    applyTheme(resolveTheme());
    applyCommon(lang);
    buildThemeToggle(lang);
    buildLangSwitcher(lang, page);
    var pageTitle = t(lang, page + '.title');
    if (page === 'index') pageTitle = t(lang, 'index.heading');
    else if (page === 'support') pageTitle = t(lang, 'support.title');
    document.title = pageTitle + ' — Vevora IPTV';

    if (page === 'privacy') {
      renderLegalSections(lang, 'privacy', 'legal-sections');
    } else if (page === 'terms') {
      renderLegalSections(lang, 'terms', 'legal-sections');
    } else if (page === 'support') {
      renderSupportTopics(lang);
    }
    fixNavHrefs();
  }

  window.VevoraI18n = { init: init, setLang: setLang, resolveLang: resolveLang, t: t, LANGS: LANGS };
})();
