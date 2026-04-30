import { useState } from 'react';

const ADMIN_USER = 'sPaAdminUser';
const ADMIN_PASS = 'sUperUserlogin4321';

const AdminPage = ({ bookings, onBack }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [filterService, setFilterService] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const services = ['All', ...new Set(bookings.map(b => b.service.split(' – ')[0]).filter(Boolean))];

  const filtered = bookings.filter(b => {
    const matchService = filterService === 'All' || b.service.includes(filterService);
    const matchSearch = b.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.includes(searchTerm);
    return matchService && matchSearch;
  });

  const formatDate = (iso) => {
    try { return new Date(iso).toLocaleString('en-NG', { dateStyle: 'medium', timeStyle: 'short' }); }
    catch { return iso; }
  };

  if (!loggedIn) {
    return (
      <>
        <style>{`
          .admin-login-page {
            min-height: 100vh;
            background: var(--green-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            position: relative;
            overflow: hidden;
          }
          .admin-login-page::before {
            content: '';
            position: absolute;
            top: -100px; left: -100px;
            width: 500px; height: 500px;
            background: radial-gradient(circle, rgba(82,183,136,0.15) 0%, transparent 70%);
            pointer-events: none;
          }
          .admin-login-page::after {
            content: '';
            position: absolute;
            bottom: -80px; right: -80px;
            width: 400px; height: 400px;
            background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
            pointer-events: none;
          }
          .admin-login-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 24px;
            padding: 48px 44px;
            width: 100%;
            max-width: 440px;
            backdrop-filter: blur(12px);
            box-shadow: 0 40px 80px rgba(0,0,0,0.4);
            position: relative;
            z-index: 1;
          }
          .admin-login-logo {
            text-align: center;
            margin-bottom: 32px;
          }
          .admin-login-logo-icon {
            width: 70px; height: 70px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            display: flex; align-items: center; justify-content: center;
            font-size: 36px;
            margin: 0 auto 16px;
            border: 1px solid rgba(255,255,255,0.15);
          }
          .admin-login-brand {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            color: #fff;
            font-weight: 700;
          }
          .admin-login-subbrand {
            font-size: 12px;
            color: var(--gold-light);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-top: 4px;
          }
          .admin-login-title {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            color: #fff;
            text-align: center;
            margin-bottom: 8px;
          }
          .admin-login-sub {
            text-align: center;
            font-size: 13px;
            color: rgba(255,255,255,0.5);
            margin-bottom: 32px;
          }
          .admin-form {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }
          .admin-form-group {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }
          .admin-form-group label {
            font-size: 12px;
            font-weight: 600;
            color: rgba(255,255,255,0.55);
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .admin-input-wrap {
            position: relative;
          }
          .admin-form-group input {
            background: rgba(255,255,255,0.07);
            border: 1.5px solid rgba(255,255,255,0.15);
            border-radius: 10px;
            padding: 13px 16px;
            color: #fff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            outline: none;
            width: 100%;
            transition: border-color 0.3s, background 0.3s;
          }
          .admin-form-group input::placeholder { color: rgba(255,255,255,0.25); }
          .admin-form-group input:focus {
            border-color: var(--green-light);
            background: rgba(255,255,255,0.1);
          }
          .show-pass-btn {
            position: absolute;
            right: 14px; top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: rgba(255,255,255,0.4);
            font-size: 14px;
            cursor: pointer;
            transition: color 0.2s;
          }
          .show-pass-btn:hover { color: rgba(255,255,255,0.8); }
          .admin-login-error {
            background: rgba(229,62,62,0.15);
            border: 1px solid rgba(229,62,62,0.3);
            border-radius: 10px;
            padding: 12px 16px;
            font-size: 13px;
            color: #fc8181;
            text-align: center;
          }
          .admin-login-btn {
            width: 100%;
            background: var(--green-light);
            color: var(--green-dark);
            padding: 15px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 4px;
          }
          .admin-login-btn:hover {
            background: #fff;
            transform: translateY(-1px);
          }
          .admin-back-link {
            text-align: center;
            margin-top: 16px;
          }
          .admin-back-link button {
            background: none;
            border: none;
            color: rgba(255,255,255,0.4);
            font-size: 13px;
            cursor: pointer;
            transition: color 0.2s;
          }
          .admin-back-link button:hover { color: rgba(255,255,255,0.7); }
        `}</style>

        <div className="admin-login-page">
          <div className="admin-login-card">
            <div className="admin-login-logo">
              <div className="admin-login-logo-icon">🌿</div>
              <div className="admin-login-brand">Serenova Spa</div>
              <div className="admin-login-subbrand">Admin Portal</div>
            </div>
            <h2 className="admin-login-title">Welcome Back</h2>
            <p className="admin-login-sub">Sign in to access the admin dashboard</p>

            <form className="admin-form" onSubmit={handleLogin}>
              <div className="admin-form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter admin username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>
              <div className="admin-form-group">
                <label>Password</label>
                <div className="admin-input-wrap">
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button type="button" className="show-pass-btn" onClick={() => setShowPass(!showPass)}>
                    {showPass ? '🙈' : '👁'}
                  </button>
                </div>
              </div>
              {loginError && <div className="admin-login-error">⚠️ {loginError}</div>}
              <button type="submit" className="admin-login-btn">Sign In →</button>
            </form>
            <div className="admin-back-link">
              <button onClick={onBack}>← Back to Website</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .admin-dashboard {
          min-height: 100vh;
          background: #f0f4f0;
          font-family: 'Inter', sans-serif;
        }
        .admin-topbar {
          background: var(--green-dark);
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        .admin-topbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
        .admin-topbar-icon {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.15);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
        }
        .admin-topbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .admin-user-badge {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.8);
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .admin-logout-btn {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admin-logout-btn:hover { background: rgba(255,255,255,0.2); }

        .admin-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 32px 24px;
        }
        .admin-page-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: var(--green-dark);
          margin-bottom: 6px;
        }
        .admin-page-sub {
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 32px;
        }

        .admin-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .admin-stat-card {
          background: #fff;
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 2px 12px rgba(26,74,46,0.06);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .admin-stat-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .admin-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1;
          margin-bottom: 2px;
        }
        .admin-stat-label {
          font-size: 12px;
          color: var(--text-light);
        }

        .admin-table-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 2px 20px rgba(26,74,46,0.07);
          overflow: hidden;
        }
        .admin-table-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--green-pale);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .admin-table-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: var(--text-dark);
          font-weight: 600;
        }
        .admin-table-controls {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .admin-search {
          border: 1.5px solid var(--green-pale);
          border-radius: 8px;
          padding: 9px 14px;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          color: var(--text-dark);
          transition: border-color 0.2s;
          width: 200px;
        }
        .admin-search:focus { border-color: var(--green-accent); }
        .admin-filter-select {
          border: 1.5px solid var(--green-pale);
          border-radius: 8px;
          padding: 9px 14px;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          color: var(--text-dark);
          cursor: pointer;
          background: #fff;
        }

        .admin-table-wrap {
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13.5px;
        }
        .admin-table thead tr {
          background: var(--off-white);
        }
        .admin-table th {
          padding: 12px 18px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 1px solid var(--green-pale);
        }
        .admin-table td {
          padding: 14px 18px;
          color: var(--text-mid);
          border-bottom: 1px solid #f0f5f0;
          vertical-align: middle;
        }
        .admin-table tr:hover td { background: #f8faf8; }
        .admin-table tr:last-child td { border-bottom: none; }
        .booking-service-badge {
          background: var(--green-pale);
          color: var(--green-accent);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .admin-empty-state {
          text-align: center;
          padding: 60px 24px;
          color: var(--text-light);
        }
        .admin-empty-state .empty-icon { font-size: 48px; margin-bottom: 12px; }
        .admin-empty-state p { font-size: 15px; }

        .admin-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: 1.5px solid var(--green-light);
          color: var(--green-dark);
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admin-back-btn:hover {
          background: var(--green-pale);
        }

        @media (max-width: 900px) {
          .admin-stats-row { grid-template-columns: repeat(2, 1fr); }
          .admin-topbar { padding: 14px 16px; }
          .admin-content { padding: 20px 14px; }
        }
        @media (max-width: 500px) {
          .admin-stats-row { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="admin-dashboard">
        <div className="admin-topbar">
          <div className="admin-topbar-brand">
            <div className="admin-topbar-icon">🌿</div>
            Serenova Spa — Admin
          </div>
          <div className="admin-topbar-right">
            <div className="admin-user-badge">👤 {ADMIN_USER}</div>
            <button className="admin-logout-btn" onClick={() => setLoggedIn(false)}>Sign Out</button>
          </div>
        </div>

        <div className="admin-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h1 className="admin-page-title">Booking Dashboard</h1>
              <p className="admin-page-sub">Manage all client session bookings from one place</p>
            </div>
            <button className="admin-back-btn" onClick={onBack}>← Back to Website</button>
          </div>

          <div className="admin-stats-row">
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#d8f3dc' }}>📋</div>
              <div>
                <div className="admin-stat-num">{bookings.length}</div>
                <div className="admin-stat-label">Total Bookings</div>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#e8f4fd' }}>📅</div>
              <div>
                <div className="admin-stat-num">
                  {bookings.filter(b => b.date === new Date().toISOString().split('T')[0]).length}
                </div>
                <div className="admin-stat-label">Today's Sessions</div>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#fff3cd' }}>💆</div>
              <div>
                <div className="admin-stat-num">
                  {new Set(bookings.map(b => b.service.split(' – ')[0])).size || 0}
                </div>
                <div className="admin-stat-label">Service Types</div>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#f8d7da' }}>📞</div>
              <div>
                <div className="admin-stat-num">{new Set(bookings.map(b => b.phone)).size}</div>
                <div className="admin-stat-label">Unique Clients</div>
              </div>
            </div>
          </div>

          <div className="admin-table-card">
            <div className="admin-table-header">
              <div className="admin-table-title">All Bookings</div>
              <div className="admin-table-controls">
                <input
                  className="admin-search"
                  type="text"
                  placeholder="Search by name or phone..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                  className="admin-filter-select"
                  value={filterService}
                  onChange={e => setFilterService(e.target.value)}
                >
                  {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="admin-table-wrap">
              {filtered.length === 0 ? (
                <div className="admin-empty-state">
                  <div className="empty-icon">🌿</div>
                  <p>{bookings.length === 0 ? 'No bookings yet. They\'ll appear here when clients book sessions.' : 'No bookings match your search.'}</p>
                </div>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>Phone</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Address</th>
                      <th>Booked At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((b, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{i + 1}</td>
                        <td style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{b.fullName}</td>
                        <td>{b.phone}</td>
                        <td>
                          <span className="booking-service-badge">
                            {b.service.split(' – ')[0]}
                          </span>
                        </td>
                        <td>{b.date}</td>
                        <td>{b.time}</td>
                        <td style={{ maxWidth: '160px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {b.address}
                        </td>
                        <td style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                          {formatDate(b.timestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
