#!/usr/bin/env node
/**
 * Patches lastUpdatedDate and privacy.sections.thirdparty in all locale JSON files.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '..', 'i18n', 'locales');

const dates = {
  en: 'September 5, 2026',
  tr: '5 Eylül 2026',
  de: '5. September 2026',
  fr: '5 septembre 2026',
  es: '5 de septiembre de 2026',
  it: '5 settembre 2026',
  pt: '5 de setembro de 2026',
  ru: '5 сентября 2026 г.',
  ar: '5 سبتمبر 2026'
};

const thirdparty = {
  en: {
    title: 'Third-Party Services',
    body: [
      'Playlists and streams come from sources you configure. Those providers have their own privacy practices.',
      'To show movie and series metadata and artwork (such as titles, descriptions, and poster images), the app may request information from The Movie Database (TMDB). These requests go through a Cloudflare Worker proxy operated by Okur Studio. We send only the metadata lookup queries needed for display—not your playlists, credentials, or viewing history.',
      'Poster images may be loaded from TMDB’s image CDN. TMDB has its own privacy policy at themoviedb.org. Okur Studio is not responsible for the privacy or content of third-party playlist sources or TMDB.'
    ]
  },
  tr: {
    title: 'Üçüncü Taraf Hizmetler',
    body: [
      'Oynatma listeleri ve yayınlar, sizin yapılandırdığınız kaynaklardan gelir. Bu sağlayıcıların kendi gizlilik uygulamaları vardır.',
      'Film ve dizi meta verileri ile görselleri (başlıklar, açıklamalar ve poster görselleri gibi) göstermek için uygulama The Movie Database (TMDB) üzerinden bilgi talep edebilir. Bu istekler Okur Studio tarafından işletilen bir Cloudflare Worker vekil sunucusu üzerinden iletilir. Yalnızca görüntüleme için gerekli meta veri sorguları gönderilir—oynatma listeleriniz, kimlik bilgileriniz veya izleme geçmişiniz değil.',
      'Poster görselleri TMDB’nin görsel CDN’inden yüklenebilir. TMDB’nin themoviedb.org adresinde kendi gizlilik politikası vardır. Okur Studio, üçüncü taraf oynatma listesi kaynaklarının veya TMDB’nin gizliliği veya içeriğinden sorumlu değildir.'
    ]
  },
  de: {
    title: 'Dienste Dritter',
    body: [
      'Wiedergabelisten und Streams stammen aus Quellen, die Sie konfigurieren. Diese Anbieter haben eigene Datenschutzpraktiken.',
      'Um Metadaten und Grafiken von Filmen und Serien (z. B. Titel, Beschreibungen und Poster) anzuzeigen, kann die App Informationen von The Movie Database (TMDB) anfordern. Diese Anfragen laufen über einen von Okur Studio betriebenen Cloudflare-Worker-Proxy. Wir senden nur die für die Anzeige erforderlichen Metadatenabfragen—nicht Ihre Wiedergabelisten, Zugangsdaten oder den Wiedergabeverlauf.',
      'Poster können über das Bild-CDN von TMDB geladen werden. TMDB hat eine eigene Datenschutzrichtlinie unter themoviedb.org. Okur Studio ist nicht verantwortlich für den Datenschutz oder Inhalt Dritter Wiedergabelistenquellen oder von TMDB.'
    ]
  },
  fr: {
    title: 'Services tiers',
    body: [
      'Les listes de lecture et les flux proviennent des sources que vous configurez. Ces fournisseurs ont leurs propres pratiques en matière de confidentialité.',
      'Pour afficher les métadonnées et visuels de films et séries (titres, descriptions, affiches, etc.), l’app peut demander des informations à The Movie Database (TMDB). Ces requêtes passent par un proxy Cloudflare Worker exploité par Okur Studio. Nous n’envoyons que les requêtes de métadonnées nécessaires à l’affichage—pas vos listes, identifiants ou historique de visionnage.',
      'Les affiches peuvent être chargées depuis le CDN d’images de TMDB. TMDB dispose de sa propre politique de confidentialité sur themoviedb.org. Okur Studio n’est pas responsable de la confidentialité ou du contenu des sources de listes tierces ni de TMDB.'
    ]
  },
  es: {
    title: 'Servicios de terceros',
    body: [
      'Las listas y transmisiones provienen de las fuentes que usted configura. Esos proveedores tienen sus propias prácticas de privacidad.',
      'Para mostrar metadatos y material gráfico de películas y series (títulos, descripciones, pósters, etc.), la app puede solicitar información a The Movie Database (TMDB). Estas solicitudes pasan por un proxy de Cloudflare Worker operado por Okur Studio. Solo enviamos las consultas de metadatos necesarias para la visualización—no sus listas, credenciales ni historial de visionado.',
      'Las imágenes de póster pueden cargarse desde la CDN de imágenes de TMDB. TMDB tiene su propia política de privacidad en themoviedb.org. Okur Studio no es responsable de la privacidad o el contenido de fuentes de listas de terceros ni de TMDB.'
    ]
  },
  it: {
    title: 'Servizi di terze parti',
    body: [
      'Playlist e stream provengono dalle fonti che configuri. Questi provider hanno le proprie pratiche sulla privacy.',
      'Per mostrare metadati e artwork di film e serie (titoli, descrizioni, poster, ecc.), l’app può richiedere informazioni a The Movie Database (TMDB). Le richieste passano tramite un proxy Cloudflare Worker gestito da Okur Studio. Inviamo solo le query di metadati necessarie per la visualizzazione—non le tue playlist, credenziali o cronologia di visione.',
      'I poster possono essere caricati dalla CDN immagini di TMDB. TMDB ha una propria informativa sulla privacy su themoviedb.org. Okur Studio non è responsabile della privacy o dei contenuti delle fonti playlist di terze parti o di TMDB.'
    ]
  },
  pt: {
    title: 'Serviços de terceiros',
    body: [
      'As listas e transmissões vêm das fontes que você configura. Esses provedores têm suas próprias práticas de privacidade.',
      'Para exibir metadados e artes de filmes e séries (títulos, descrições, pôsteres, etc.), o app pode solicitar informações ao The Movie Database (TMDB). Essas solicitações passam por um proxy Cloudflare Worker operado pela Okur Studio. Enviamos apenas as consultas de metadados necessárias para exibição—não suas listas, credenciais ou histórico de visualização.',
      'Imagens de pôster podem ser carregadas da CDN de imagens do TMDB. O TMDB tem sua própria política de privacidade em themoviedb.org. A Okur Studio não é responsável pela privacidade ou conteúdo de fontes de listas de terceiros ou do TMDB.'
    ]
  },
  ru: {
    title: 'Сторонние сервисы',
    body: [
      'Плейлисты и потоки поступают из источников, которые вы настраиваете. У этих поставщиков свои правила конфиденциальности.',
      'Для отображения метаданных и обложек фильмов и сериалов (названия, описания, постеры и т. д.) приложение может запрашивать информацию у The Movie Database (TMDB). Запросы проходят через прокси Cloudflare Worker, управляемый Okur Studio. Мы отправляем только запросы метаданных, необходимые для отображения,— не ваши плейлисты, учётные данные или историю просмотра.',
      'Изображения постеров могут загружаться с CDN изображений TMDB. У TMDB есть собственная политика конфиденциальности на themoviedb.org. Okur Studio не несёт ответственности за конфиденциальность или содержание сторонних источников плейлистов или TMDB.'
    ]
  },
  ar: {
    title: 'خدمات الطرف الثالث',
    body: [
      'تأتي قوائم التشغيل والبث من المصادر التي تُعدّها. لهذه الجهات ممارسات خصوصية خاصة بها.',
      'لعرض بيانات وصفية وصور الأعمال (مثل العناوين والأوصاف وملصقات الأفلام والمسلسلات)، قد يطلب التطبيق معلومات من The Movie Database (TMDB). تمر هذه الطلبات عبر وكيل Cloudflare Worker تديره Okur Studio. نرسل فقط استعلامات البيانات الوصفية اللازمة للعرض—وليس قوائم التشغيل أو بيانات الاعتماد أو سجل المشاهدة.',
      'قد تُحمَّل صور الملصقات من شبكة توصيل محتوى صور TMDB. لدى TMDB سياسة خصوصية خاصة على themoviedb.org. Okur Studio غير مسؤولة عن خصوصية أو محتوى مصادر قوائم التشغيل الخارجية أو TMDB.'
    ]
  }
};

for (const file of fs.readdirSync(localesDir).filter((f) => f.endsWith('.json'))) {
  const lang = file.replace('.json', '');
  const p = path.join(localesDir, file);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (dates[lang]) data.common.lastUpdatedDate = dates[lang];
  if (thirdparty[lang]) data.privacy.sections.thirdparty = thirdparty[lang];
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
  console.log('Patched', lang);
}
