import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Rubik } from "next/font/google";
import logoWho from '../../../public/logo-who.ico';
import "./globals.css";
import NavBar from '@/partials/NavBar/NavBar';
import Footer from '@/partials/Footer/Footer';

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Who consultora integral",
  description: "Consultora integral IT y de negocios",
  icons: {
    icon: logoWho.src,
    shortcut: logoWho.scr,
    apple: logoWho.scr,
  },
  openGraph: {
    title: "Who consultora integral",
    description: "Consultora integral IT y de negocios",
    url: "https://whoconsultoraintegral.com/",
    siteName: "Who consultora integral",
    images: [
      {
        url: "/logo-who-01.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es-AR",
    type: "website",
  }
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error('Error cargando mensajes para locale:', locale);
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${rubik.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
