'use client'
import { useField } from '@payloadcms/ui'
import { UploadButton } from '@/lib/uploadthing'
import type { TextFieldClientComponent } from 'payload'

const GalleryImageUpload: TextFieldClientComponent = ({ path, readOnly }) => {
  const { value, setValue } = useField<string>({ path })

  return (
    <div className="field-type" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {value ? (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={value}
            alt=""
            style={{ maxWidth: 320, maxHeight: 240, borderRadius: 8, objectFit: 'cover', display: 'block' }}
          />
          {!readOnly && (
            <button
              type="button"
              onClick={() => setValue('')}
              style={{
                position: 'absolute',
                top: 6,
                right: 6,
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                fontSize: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
              }}
              title="Remove image"
            >
              &times;
            </button>
          )}
        </div>
      ) : (
        <UploadButton
          endpoint="galleryImage"
          onClientUploadComplete={(res) => {
            if (res?.[0]?.url) setValue(res[0].url)
          }}
          onUploadError={(err) => {
            console.error('Upload error:', err)
          }}
          appearance={{
            button: {
              background: 'var(--theme-elevation-100, #151515)',
              color: 'var(--theme-elevation-1000, #fff)',
              border: '1px solid var(--theme-elevation-500, #333)',
              borderRadius: 4,
              padding: '10px 20px',
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.15s',
            },
            container: {
              border: '2px dashed var(--theme-elevation-500, #333)',
              borderRadius: 8,
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--theme-elevation-50, #0a0a0a)',
            },
            allowedContent: {
              color: 'var(--theme-elevation-500, #666)',
              fontSize: 12,
            },
          }}
        />
      )}
    </div>
  )
}

export default GalleryImageUpload
