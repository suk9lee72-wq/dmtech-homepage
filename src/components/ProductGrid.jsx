import { categories } from '../data'

function ProductGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
        gap: '30px',
      }}
    >
      {categories.map((item, index) => (
        <div
          key={index}
          style={{
            background: '#0f172a',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            style={{
              height: '240px',
              position: 'relative',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(2,6,23,0.9), rgba(2,6,23,0.1))',
              }}
            />

            <p
              style={{
                position: 'absolute',
                left: '24px',
                bottom: '20px',
                color: '#22d3ee',
                fontSize: '12px',
                letterSpacing: '3px',
                margin: 0,
                fontWeight: '700',
              }}
            >
              SEMICONDUCTOR PARTS
            </p>
          </div>

          <div
            style={{
              padding: '30px',
            }}
          >
            <h2
              style={{
                color: 'white',
                fontSize: '36px',
                marginTop: 0,
                marginBottom: '20px',
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: '#94a3b8',
                lineHeight: 1.8,
                fontSize: '17px',
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid