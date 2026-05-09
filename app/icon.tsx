import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: '#111114',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: 18,
            color: '#FF8A1F',
            lineHeight: 1,
            letterSpacing: '-1px',
          }}
        >
          F
        </span>
        <div
          style={{
            position: 'absolute',
            bottom: 5,
            left: 9,
            width: 14,
            height: 2,
            background: '#FF8A1F',
            borderRadius: 1,
            opacity: 0.6,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
