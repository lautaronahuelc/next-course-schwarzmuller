/* import { GoogleAnalytics } from '@next/third-parties/google'; */

import GoogleAnalytics from '@/components/google-analytics/google-analytics';
import MainHeader from '@/components/main-header/main-header';

import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-HNEDC62QWL" />
      {/* <GoogleAnalytics gaId="G-HNEDC62QWL" /> */}
    </html>
  );
}
