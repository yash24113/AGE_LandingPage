import Script from 'next/script';

export default function GoogleAnalyticsScript() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EEYBQB40EJ"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EEYBQB40EJ');`
        }}
      />
    </>
  );
} 