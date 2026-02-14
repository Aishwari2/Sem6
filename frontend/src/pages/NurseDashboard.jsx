import React from 'react';

const beds = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  status: Math.random() > 0.7 ? 'Available' : 'Occupied',
}));

export default function NurseDashboard() {
  return (
    <div style={{ padding: '40px', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: '#8b5cf6', marginBottom: '10px' }}>Nurse Command Station</h1>
      <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Real-time Ward Monitoring & Bed Management</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        {beds.map((bed) => (
          <div key={bed.id} style={{
            height: '120px', background: '#1e293b', borderRadius: '16px', display: 'flex', 
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            border: bed.status === 'Available' ? '2px solid #2dd4bf' : '1px solid #334155'
          }}>
            <span style={{ fontSize: '24px', fontWeight: '800' }}>Bed {bed.id}</span>
            <span style={{ color: bed.status === 'Available' ? '#2dd4bf' : '#64748b', fontSize: '12px' }}>{bed.status}</span>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', border: '1px solid #8b5cf6' }}>
        <strong>AI Insight:</strong> Ward 4 is predicted to reach capacity in 2 hours. Suggest rerouting incoming patients to East Wing.
      </div>
    </div>
  );
}