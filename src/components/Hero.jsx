function Hero() {
  return (
    <section
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
    </section>
  )
}

export default Hero