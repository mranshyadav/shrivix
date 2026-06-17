import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0e0d',
          borderRadius: 40,
        }}
      >
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 112,
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
