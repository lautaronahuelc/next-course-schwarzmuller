'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from "react";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
    const pathname = usePathname();
    const searchParams = useSearchParams().toString();

    useEffect(() => {
        const params = searchParams ? `?${searchParams}` : '';
        const url = pathname + params;

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    // Script is added to the head of the document. To Begin, consent is denied.
    return (
        <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />

            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());                  
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                      page_path: window.location.pathname,
                  });`,
              }}
            />
        </>
    )
}