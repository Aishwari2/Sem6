import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ admissions: 0, occupancy: 0, surge_prediction: "..." });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const s = await axios.get('http://127.0.0.1:8000/api/stats');
        const f = await axios.get('http://127.0.0.1:8000/api/forecast');
        setStats(s.data); setChartData(f.data);
      } catch (e) { console.error("Offline", e); }
    };
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.brand}>SmartCare AI</h2>
        <nav style={styles.nav}>
          <div onClick={() => navigate('/admin')} style={styles.activeLink}>Hospital Overview</div>
          <div onClick={() => navigate('/bed-forecasting')} style={styles.link}>Bed Forecasting</div>
          <div onClick={() => navigate('/staff-scheduling')} style={styles.link}>Staff Scheduling</div>
          <div onClick={() => navigate('/resource-logs')} style={styles.link}>Resource Logs</div>
        </nav>
        <div style={styles.footer}>Admin: Aishwari T.</div>
      </div>

      <div style={styles.main}>
        <header style={styles.header}>
          <h1>Hospital Operations Center</h1>
          <div style={styles.liveBadge}>● LIVE MONITORING</div>
        </header>

        <div style={styles.statsGrid}>
          <div style={styles.card}><small>ADMISSIONS</small><h3>{stats.admissions}</h3></div>
          <div style={styles.card}><small>OCCUPANCY</small><h3>{stats.occupancy}%</h3></div>
          <div style={{...styles.card, border: '1px solid #3b82f6'}}><small>AI SURGE</small><h3>{stats.surge_prediction}</h3></div>
        </div>

        <div style={styles.chartContainer}>
          <h3 style={{marginBottom: '20px'}}>Patient Inflow Forecast (XGBoost)</h3>
          <div style={{height: '350px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b'}} />
                <Area type="monotone" dataKey="actual" stroke="#ffffff" fill="transparent" strokeDasharray="5 5" />
                <Area type="monotone" dataKey="predicted" stroke="#3b82f6" fill="rgba(59, 130, 246, 0.1)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', width: '100vw', height: '100vh', background: '#0f172a', color: 'white' },
  sidebar: { width: '260px', background: '#0a101f', padding: '30px', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column' },
  brand: { color: '#3b82f6', marginBottom: '40px', fontWeight: '900', fontSize: '24px' },
  nav: { flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' },
  link: { padding: '12px', borderRadius: '8px', cursor: 'pointer', color: '#64748b' },
  activeLink: { padding: '12px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', cursor: 'pointer' },
  main: { flex: 1, padding: '40px', overflowY: 'auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
  liveBadge: { background: '#1e293b', color: '#2dd4bf', padding: '8px 16px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' },
  card: { background: '#131c31', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' },
  chartContainer: { background: '#131c31', padding: '30px', borderRadius: '24px', border: '1px solid #1e293b' },
  footer: { fontSize: '12px', color: '#334155', paddingTop: '20px', borderTop: '1px solid #1e293b' }
};