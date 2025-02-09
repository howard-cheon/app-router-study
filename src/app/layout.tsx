export default function RootLayout({
  children,
  header,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>layout.tsx</h1>
        <header>{header}</header>

        <main>{children}</main>

        <footer>{footer}</footer>
      </body>
    </html>
  );
}
