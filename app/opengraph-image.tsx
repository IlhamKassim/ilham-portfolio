import { ImageResponse } from 'next/og'

export const alt = 'Ilham Kassim, freelance web, AI and data developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0a0a0c',
          backgroundImage:
            'radial-gradient(circle at 20% 0%, rgba(139, 92, 246, 0.35), transparent 55%)',
          color: '#f5f3ef',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#f5f3ef',
              color: '#0a0a0c',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            IK
          </div>
          <div style={{ fontSize: 26, color: '#a1a1aa' }}>
            Ilham Kassim · Freelance developer
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Software that
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.1,
              color: '#a78bfa',
            }}
          >
            shows its work.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#a1a1aa' }}>
          Websites · AI features · Data dashboards · Tutoring · Sabah, Malaysia
        </div>
      </div>
    ),
    size,
  )
}
