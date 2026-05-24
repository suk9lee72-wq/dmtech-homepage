import './App.css'

function App() {
  const categories = [
    {
      title: 'Chamber Parts',
      desc: 'Semiconductor equipment parts sourcing and industrial supply support.',
      image:
        'https://insourcedmt.com/wp-content/uploads/vacuum-chamber-1.jpg',
    },
    {
      title: 'ESC Components',
      desc: 'Semiconductor equipment parts sourcing and industrial supply support.',
      image:
        'https://global.kyocera.com/prdct/fc/industries/imgs/semiconductor_main.jpg',
    },
    {
      title: 'Quartz Parts',
      desc: 'Semiconductor equipment parts sourcing and industrial supply support.',
      image:
        'https://www.sqp.co.jp/e/products/images/quartz-glass_01.jpg',
    },
    {
      title: 'Vacuum Components',
      desc: 'Semiconductor equipment parts sourcing and industrial supply support.',
      image:
        'https://res.cloudinary.com/inside-plastics/image/upload/v1694865084/Port%20Plastics/Article%20Images/Vacuum_Chamber_iStock-1164219211_ah3azs.jpg',
    },
    {
      title: 'Gas Line Parts',
      desc: 'Semiconductor equipment parts sourcing and industrial supply support.',
      image:
        'https://axenics.com/wp-content/uploads/2020/09/gas-panel-sm.jpg',
    },
    {
      title: 'RF Components',
      desc: 'Semiconductor equipment parts sourcing and industrial supply support.',
      image:
        'https://assets.rohde-schwarz.com/public/image/market-segment/industry-components-research/high-speed-digital//computer-engineer-making-quality-control-on-motherboard-promotional-image-rohde-schwarz_200_62370_420_236_1.jpg',
    },
  ]

  return (
    <div
      style={{
        background: '#07111f',
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            borderRadius: '32px',
            overflow: 'hidden',
            position: 'relative',
            height: '520px',
            marginBottom: '40px',
          }}
        >
          <img
            src="https://cdn.sanity.io/images/vpe6kkg1/production/9c0ee0d71fd23273985b5b8997181dabe7c7f45e-5120x2880.jpg"
            alt=""
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
                'linear-gradient(to right, rgba(2,6,23,0.95), rgba(2,6,23,0.75), rgba(2,6,23,0.2))',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '70px',
              left: '70px',
              zIndex: 10,
              color: 'white',
            }}
          >
            <p
              style={{
                color: '#22d3ee',
                letterSpacing: '4px',
                fontSize: '14px',
                marginBottom: '20px',
              }}
            >
              SEMICONDUCTOR INDUSTRY
            </p>

            <h1
              style={{
                fontSize: '72px',
                lineHeight: 1,
                margin: 0,
                marginBottom: '24px',
                fontWeight: '900',
              }}
            >
              Wafer
              <br />
              Fabrication
            </h1>

            <p
              style={{
                fontSize: '22px',
                color: '#cbd5e1',
                maxWidth: '500px',
                lineHeight: 1.6,
              }}
            >
              Precision wafer processing and semiconductor manufacturing.
            </p>
          </div>
        </div>

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
      </div>
    </div>
  )
}

export default App