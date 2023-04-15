"use client";

import './globals.css'
import '@shopify/polaris/build/esm/styles.css';


import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider i18n={enTranslations}>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
