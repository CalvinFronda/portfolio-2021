import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Calvin Fronda',
  description: `Calvin Fronda's Personal Portfolio website.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
