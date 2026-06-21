'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UploadDropzone } from '@/lib/uploadthing'

export default function UploadPage() {
  const router = useRouter()
  const [urls, setUrls] = useState<string[]>([])

  return (
    <div style={{ maxWidth: 600, margin: '80px auto', padding: '0 20px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', marginBottom: 8 }}>Upload Gallery Images</h1>
      <p style={{ color: '#666', marginBottom: 32 }}>
        Upload images via UploadThing, then copy the URL and paste it into Gallery Images in the admin panel.
      </p>

      <UploadDropzone
        endpoint="galleryImage"
        onClientUploadComplete={(res) => {
          const newUrls = res.map((r) => r.url)
          setUrls((prev) => [...prev, ...newUrls])
        }}
        onUploadError={(err) => {
          alert(`Upload failed: ${err.message}`)
        }}
      />

      {urls.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h3>Uploaded URLs</h3>
          {urls.map((url, i) => (
            <div key={i} style={{ marginTop: 8 }}>
              <input
                readOnly
                value={url}
                onClick={(e) => e.currentTarget.select()}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 6,
                  fontSize: 14,
                  fontFamily: 'monospace',
                }}
              />
            </div>
          ))}
          <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
            Copy the URL above and paste it into the Gallery Images admin panel.
          </p>
        </div>
      )}

      <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
        <a
          href="/admin/collections/gallery-images"
          style={{
            padding: '10px 24px',
            background: '#c9a96e',
            color: '#fff',
            borderRadius: 6,
            textDecoration: 'none',
            fontSize: 14,
          }}
        >
          Go to Gallery Admin
        </a>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: '10px 24px',
            background: 'transparent',
            border: '1px solid #ccc',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Back to Site
        </button>
      </div>
    </div>
  )
}
