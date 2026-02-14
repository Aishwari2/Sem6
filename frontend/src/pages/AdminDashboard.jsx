import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// --- Fake ML Data for the Forecast ---
const data = [
  { time: '08:00', actual: 40, predicted: 45 },
  { time: '10:00', actual: 55, predicted: 52 },
  { time: '12:00', actual: 80, predicted: 78 },
  { time: '14:00', actual: 65, predicted: 70 },
  { time: '16:00', actual: 95, predicted: 90 }, // Current Peak
  { time: '18:00', actual: null, predicted: 110 }, // Predicted Surge
  { time: '20:00', actual: null, predicted: 85 },
];

export default function AdminDashboard() {
  return (
    <div style={dashboardContainer}>
      {/* Sidebar - Same as before but consistent */}
      <div style={sidebar}>
        <div style={brandHeader}>SmartCare AI</div>
        <nav style={navLinks}>
          <div style={activeNavLink}>Hospital Overview</div>
          <div style={navLink}>Bed Forecasting</div>
          <div style={navLink}>Staff Scheduling</div>
          <div style={navLink}>Resource Logs</div>
        </nav>
        <div style={sidebarFooter}>Admin: Aishwari T.</div>
      </div>

      <div style={mainContent}>
        <header style={topHeader}>
          <div>
            <h2 style={{margin: 0}}>Hospital Operations Center</h2>
            <p style={{color: '#64748b', fontSize: '14px'}}>Proactive Resource Management System</p>
          </div>
          <div style={statusBadge}>
             <div style={pulseDot}></div> LIVE PREDICTIONS ACTIVE
          </div>
        </header>

        {/* Top KPI Cards */}
        <div style={statsGrid}>
          <div style={statCard}>
            <small style={labelStyle}>Total Admissions Today</small>
            <h3 style={valueStyle}>1,240</h3>
            <span style={{color: '#2dd4bf', fontSize: '12px'}}>↑ 12% vs last week</span>
          </div>
          <div style={statCard}>
            <small style={labelStyle}>Current ICU Occupancy</small>
            <h3 style={valueStyle}>88%</h3>
            <div style={progressBarContainer}><div style={{...progressBar, width: '88%', background: '#f59e0b'}}></div></div>
          </div>
          <div style={predictionCard}>
            <small style={{color: '#3b82f6', fontWeight: 'bold'}}>AI SURGE ALERT</small>
            <h3 style={valueStyle}>+25 Incoming</h3>
            <p style={{fontSize: '12px', margin: '5px 0'}}>Predicted arrival: 18:30 - 19:15</p>
          </div>
        </div>

        {/* The "Crazy Good" Chart Section */}
        <div style={chartContainer}>
          <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between'}}>
            <h3 style={{fontSize: '18px'}}>Patient Inflow Forecast (ML XGBoost Model)</h3>
            <div style={{fontSize: '12px', color: '#94a3b8'}}>
              <span style={{marginRight: '15px'}}>● Actual Load</span>
              <span style={{color: '#3b82f6'}}>● AI Prediction</span>
            </div>
          </div>
          
          <div style={{height: '350px', width: '100%'}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px'}}
                  itemStyle={{color: '#fff'}}
                />
                <Area type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                <Line type="monotone" dataKey="actual" stroke="#f8fafc" strokeWidth={3} dot={{r: 6, fill: '#f8fafc'}} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Styles (Refined for 'Crazy Good' look) ---
const dashboardContainer = { display: 'flex', width: '100vw', height: '100vh', background: '#0f172a', color: 'white', fontFamily: 'Inter, sans-serif' };
const sidebar = { width: '260px', background: '#0a0f1e', padding: '30px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #1e293b' };
const brandHeader = { fontSize: '22px', fontWeight: '900', marginBottom: '50px', color: '#3b82f6', letterSpacing: '-1px' };
const navLinks = { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 };
const navLink = { padding: '12px 16px', borderRadius: '12px', cursor: 'pointer', color: '#64748b', fontSize: '14px', transition: '0.2s' };
const activeNavLink = { ...navLink, background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', fontWeight: '600' };
const sidebarFooter = { fontSize: '12px', color: '#334155', borderTop: '1px solid #1e293b', paddingTop: '20px' };

const mainContent = { flex: 1, padding: '40px', overflowY: 'auto' };
const topHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' };

const statusBadge = { background: '#1e293b', border: '1px solid #334155', color: '#2dd4bf', padding: '8px 16px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' };
const pulseDot = { width: '8px', height: '8px', borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 10px #2dd4bf' };

const statsGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' };
const statCard = { background: '#131c31', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' };
const predictionCard = { ...statCard, border: '1px solid #3b82f644', background: 'linear-gradient(135deg, #131c31 0%, #1e293b 100%)' };

const labelStyle = { color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '10px' };
const valueStyle = { fontSize: '28px', margin: '10px 0', fontWeight: '700' };

const progressBarContainer = { width: '100%', height: '6px', background: '#1e293b', borderRadius: '3px', marginTop: '15px' };
const progressBar = { height: '100%', borderRadius: '3px' };

const chartContainer = { background: '#131c31', padding: '30px', borderRadius: '24px', border: '1px solid #1e293b' };