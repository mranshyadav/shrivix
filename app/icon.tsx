import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0e0d',
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 20,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  )
}
