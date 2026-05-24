function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(2,6,23,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h1
            style={{
              color: 'white',
              margin: 0,
              fontSize: '32px',
              fontWeight: '900',
            }}
          >
            DMTech
          </h1>

          <p
            style={{
              color: '#64748b',
              marginTop: '6px',
              fontSize: '12px',
              letterSpacing: '3px',
            }}
          >
            SEMICONDUCTOR PARTS SUPPLIER
          </p>
        </div>

        <nav
          style={{
            display: 'flex',
            gap: '28px',
            alignItems: 'center',
          }}
        >
          <a
            href="#"
            style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            About
          </a>

          <a
            href="#"
            style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Products
          </a>

          <a
            href="#"
            style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            OEM / USED
          </a>

          <a
            href="#"
            style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Contact
          </a>

          <button
            style={{
              background: '#22d3ee',
              color: '#020617',
              border: 'none',
              borderRadius: '16px',
              padding: '14px 22px',
              fontWeight: '800',
              cursor: 'pointer',
            }}
          >
            RFQ Request
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header