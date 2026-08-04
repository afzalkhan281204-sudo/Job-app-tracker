'use client';

import React, { useEffect, useState } from 'react';

type Application = {
  id: string;
  role: string;
  status: string;
  appliedAt: string | null;
  company: { id: string; name: string };
};

export default function Page() {
  const [apps, setApps] = useState<Application[]>([]);
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApps();
  }, []);

  async function fetchApps() {
    const res = await fetch('/api/applications');
    const data = await res.json();
    setApps(data);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!role || !company) return;
    setLoading(true);
    const res = await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, companyName: company })
    });
    const created = await res.json();
    setApps(prev => [created, ...prev]);
    setRole('');
    setCompany('');
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 800 }}>
      <section style={{ marginBottom: 24 }}>
        <h2>Create application</h2>
        <form onSubmit={handleCreate}>
          <div style={{ marginBottom: 8 }}>
            <input value={role} onChange={e => setRole(e.target.value)} placeholder="Role (e.g., Frontend Engineer)" style={{ width: '100%', padding: 8 }} />
          </div>
          <div style={{ marginBottom: 8 }}>
            <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company name" style={{ width: '100%', padding: 8 }} />
          </div>
          <button type="submit" disabled={loading} style={{ padding: '8px 12px' }}>
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </section>

      <section>
        <h2>Applications ({apps.length})</h2>
        <ul>
          {apps.map(a => (
            <li key={a.id} style={{ padding: 12, borderBottom: '1px solid #eee' }}>
              <strong>{a.role}</strong> — {a.company?.name} <br />
              <small>Status: {a.status} • Applied: {a.appliedAt ? new Date(a.appliedAt).toLocaleString() : '—'}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}