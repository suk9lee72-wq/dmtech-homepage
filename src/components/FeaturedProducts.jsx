const products = [
  {
    name: 'Focus Ring',
    image: '/images/focus-ring.jpg',
  },
  {
    name: 'Wafer Chuck',
    image: '/images/wafer-chuck.jpg',
  },
  {
    name: 'ESC Ring',
    image: '/images/esc-ring.jpg',
  },
  {
    name: 'Vacuum Valve',
    image: '/images/vacuum-valve.jpg',
  },
  {
    name: 'ESC Chuck',
    image: '/images/esc-chuck.jpg',
  },
  {
    name: 'Gas Filter',
    image: '/images/gas-filter.jpg',
  },
]

function FeaturedProducts() {
  return (
    <section
      style={{
        marginTop: '80px',
      }}
    >
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            color: '#22d3ee',
            letterSpacing: '4px',
            fontSize: '13px',
            marginBottom: '16px',
          }}
        >
          FEATURED PRODUCTS
        </p>

        <h2
          style={{
            color: 'white',
            fontSize: '52px',
            margin: 0,
            marginBottom: '20px',
          }}
        >
          Semiconductor
          <br />
          Equipment Parts
        </h2>

        <p
          style={{
            color: '#94a3b8',
            fontSize: '18px',
            maxWidth: '700px',
            lineHeight: 1.8,
          }}
        >
          OEM, refurbished and industrial semiconductor equipment components
          sourcing support.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '28px',
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#0f172a',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
              transition: '0.3s',
            }}
          >
            <div
              style={{
                height: '240px',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div
              style={{
                padding: '28px',
              }}
            >
              <h3
                style={{
                  color: 'white',
                  fontSize: '28px',
                  margin: 0,
                  marginBottom: '14px',
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: '#94a3b8',
                  lineHeight: 1.8,
                }}
              >
                Semiconductor equipment component sourcing support.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts