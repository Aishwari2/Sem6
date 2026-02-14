import React from 'react';

const patients = [
  { id: 'P-902', name: 'Suresh Raina', risk: 'Critical', prob: '94%', insight: 'High cardiac instability predicted.' },
  { id: 'P-441', name: 'Anita Desai', risk: 'Stable', prob: '12%', insight: 'Discharge likely in 24h.' },
  { id: 'P-102', name: 'Vikram Seth', risk: 'Moderate', prob: '45%', insight: 'Monitor respiratory levels.' },
];

export default function DoctorDashboard() {
  return (
    <div style={{ padding: '40px', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', color: '#3b82f6' }}>Clinical Risk Portal</h1>
        <p style={{ color: '#94a3b8' }}>AI-Driven Patient Prioritization</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {patients.map((p) => (
          <div key={p.id} style={{ background: '#1e293b', padding: '24px', borderRadius: '24px', border: p.risk === 'Critical' ? '2px solid #ef4444' : '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ fontWeight: '800' }}>{p.name}</span>
              <span style={{ color: p.risk === 'Critical' ? '#ef4444' : '#2dd4bf', fontWeight: 'bold' }}>{p.risk}</span>
            </div>
            <div style={{ background: '#0f172a', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: p.prob, height: '100%', background: p.risk === 'Critical' ? '#ef4444' : '#3b82f6' }}></div>
            </div>
            <p style={{ marginTop: '15px', fontSize: '14px', color: '#94a3b8' }}>{p.insight}</p>
            <button style={{ width: '100%', marginTop: '20px', padding: '12px', borderRadius: '12px', border: 'none', background: '#3b82f6', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>View Vitals</button>
          </div>
        ))}
      </div>
    </div>
  );
}