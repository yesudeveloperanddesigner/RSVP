'use client'
import type { DefaultCellComponentProps } from 'payload'

const GalleryImageCell = ({ cellData }: DefaultCellComponentProps) => {
  if (!cellData) return null

  return (
    <img
      src={cellData as string}
      alt=""
      style={{ width: 80, height: 60, borderRadius: 4, objectFit: 'cover' }}
    />
  )
}

export default GalleryImageCell
