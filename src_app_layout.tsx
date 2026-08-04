import './globals.css';

export const metadata = {
  title: 'Job Application Tracker',
  description: 'Minimal starter for Job Application Tracker'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 20, borderBottom: '1px solid #eee' }}>
          <h1>Job Application Tracker</h1>
        </header>
        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}