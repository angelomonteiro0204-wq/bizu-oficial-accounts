'use client'

import { useState } from 'react'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('home')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1B2A4A 0%, #2a3f5f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
        padding: '1rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: '#1B2A4A' }}>👥</h1>
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: '#1B2A4A' }}>Gerador de Contas</h2>
            <p style={{ color: '#666', margin: '0' }}>Painel Administrativo</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', color: '#1B2A4A', fontWeight: '600', marginBottom: '0.5rem' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#1B2A4A', fontWeight: '600', marginBottom: '0.5rem' }}>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#1B2A4A',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Entrar
            </button>
          </form>

          <p style={{ textAlign: 'center', color: '#666', marginTop: '1rem', fontSize: '0.9rem' }}>
            Teste: admin@test.com / 123456
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui' }}>
      <header style={{
        background: 'linear-gradient(135deg, #1B2A4A 0%, #2a3f5f 100%)',
        color: 'white',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: '0', fontSize: '1.5rem' }}>👥 Gerador de Contas</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Sair
          </button>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {activeTab === 'home' && (
          <div>
            <h2 style={{ color: '#1B2A4A', marginBottom: '1.5rem' }}>Painel de Administração</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              <div
                onClick={() => setActiveTab('criar')}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>➕</div>
                <h3 style={{ color: '#1B2A4A', margin: '0 0 0.5rem 0' }}>Criar Contas</h3>
                <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>Gere contas em massa</p>
                <button style={{
                  marginTop: '1rem',
                  background: '#1B2A4A',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  Criar
                </button>
              </div>

              <div
                onClick={() => setActiveTab('gerenciar')}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                <h3 style={{ color: '#1B2A4A', margin: '0 0 0.5rem 0' }}>Gerenciar</h3>
                <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>Controle contas ativas</p>
                <button style={{
                  marginTop: '1rem',
                  background: '#1B2A4A',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  Gerenciar
                </button>
              </div>

              <div
                onClick={() => setActiveTab('relatorios')}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
                <h3 style={{ color: '#1B2A4A', margin: '0 0 0.5rem 0' }}>Relatórios</h3>
                <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>Visualize dados</p>
                <button style={{
                  marginTop: '1rem',
                  background: '#1B2A4A',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  Ver
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'criar' && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
            <h2 style={{ color: '#1B2A4A', marginTop: '0' }}>Criar Contas</h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#1B2A4A', fontWeight: '600', marginBottom: '0.5rem' }}>Importar CSV</label>
              <input
                type="file"
                accept=".csv"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px dashed #1B2A4A',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              />
            </div>
            <button style={{
              background: '#1B2A4A',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              marginRight: '1rem'
            }}>
              Importar
            </button>
            <button
              onClick={() => setActiveTab('home')}
              style={{
                background: '#f0f0f0',
                color: '#1B2A4A',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
          </div>
        )}

        {activeTab === 'gerenciar' && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
            <h2 style={{ color: '#1B2A4A', marginTop: '0' }}>Gerenciar Contas</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f0f0f0', borderBottom: '2px solid #1B2A4A' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', color: '#1B2A4A', fontWeight: '600' }}>Email</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: '#1B2A4A', fontWeight: '600' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: '#1B2A4A', fontWeight: '600' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '1rem' }}>user{i}@example.com</td>
                      <td style={{ padding: '1rem' }}><span style={{ background: '#4CAF50', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>Ativo</span></td>
                      <td style={{ padding: '1rem' }}>
                        <button style={{ background: '#f44336', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>Desativar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setActiveTab('home')}
              style={{
                marginTop: '2rem',
                background: '#f0f0f0',
                color: '#1B2A4A',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              ← Voltar
            </button>
          </div>
        )}

        {activeTab === 'relatorios' && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
            <h2 style={{ color: '#1B2A4A', marginTop: '0' }}>Relatórios</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: '#f0f7ff', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#1B2A4A', fontWeight: 'bold' }}>250</div>
                <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Total</p>
              </div>
              <div style={{ background: '#f0fff0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#4CAF50', fontWeight: 'bold' }}>245</div>
                <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Ativas</p>
              </div>
              <div style={{ background: '#fff0f0', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#f44336', fontWeight: 'bold' }}>5</div>
                <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Expiradas</p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('home')}
              style={{
                background: '#f0f0f0',
                color: '#1B2A4A',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              ← Voltar
            </button>
          </div>
        )}
      </main>

      <footer style={{
        background: '#1B2A4A',
        color: 'white',
        textAlign: 'center',
        padding: '2rem 1rem',
        marginTop: '3rem'
      }}>
        <p style={{ margin: '0' }}>&copy; 2026 Bizu do Cadete</p>
      </footer>
    </div>
  )
}
