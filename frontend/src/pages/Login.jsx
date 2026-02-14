import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      <div style={styles.glassCard}>
        <div style={styles.badge}>AI</div>
        <h1 style={styles.title}>SmartCare AI</h1>
        <p style={styles.subtitle}>Predictive Hospital Operations Platform</p>
        <div style={styles.btnGroup}>
          <button onClick={() => navigate('/admin')} style={styles.btnAdmin}>Admin Portal</button>
          <button onClick={() => navigate('/doctor')} style={styles.btnDoctor}>Doctor Portal</button>
          <button onClick={() => navigate('/nurse')} style={styles.btnNurse}>Nurse Portal</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', position: 'relative', overflow: 'hidden' },
  glassCard: { background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '32px', padding: '60px', width: '420px', textAlign: 'center', zIndex: 10 },
  badge: { background: 'linear-gradient(135deg, #3b82f6, #2dd4bf)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '800' },
  title: { fontSize: '32px', fontWeight: '800', marginBottom: '10px' },
  subtitle: { color: '#94a3b8', fontSize: '14px', marginBottom: '40px' },
  btnGroup: { display: 'flex', flexDirection: 'column', gap: '15px' },
  btnBase: { padding: '18px', borderRadius: '16px', border: 'none', cursor: 'pointer', color: 'white', fontWeight: '600', transition: '0.3s' },
  get btnAdmin() { return { ...this.btnBase, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid #3b82f6' } },
  get btnDoctor() { return { ...this.btnBase, background: 'rgba(45, 212, 191, 0.2)', border: '1px solid #2dd4bf' } },
  get btnNurse() { return { ...this.btnBase, background: 'rgba(139, 92, 246, 0.2)', border: '1px solid #8b5cf6' } },
  blob1: { position: 'absolute', width: '600px', height: '600px', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(100px)', top: '-20%', left: '-10%' },
  blob2: { position: 'absolute', width: '500px', height: '500px', background: 'rgba(45, 212, 191, 0.05)', filter: 'blur(100px)', bottom: '-10%', right: '-10%' }
};