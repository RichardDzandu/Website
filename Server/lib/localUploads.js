import { mkdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomUUID } from 'node:crypto'

const uploadDirectory = fileURLToPath(new URL('../uploads/', import.meta.url))
const maximumUploadBytes = 10 * 1024 * 1024
const permittedTypes = new Map([
  ['image/jpeg', '.jpg'],
  ['image/png', '.png'],
  ['image/webp', '.webp'],
  ['video/mp4', '.mp4'],
  ['video/webm', '.webm'],
])

export async function saveDataUrl(dataUrl, { imagesOnly = false } = {}) {
  const match = /^data:([a-z]+\/[a-z0-9.+-]+);base64,([a-zA-Z0-9+/]+={0,2})$/.exec(String(dataUrl || ''))
  if (!match) {
    const error = new Error('Upload must be a valid base64 data URL')
    error.statusCode = 400
    throw error
  }

  const [, contentType, encoded] = match
  const extension = permittedTypes.get(contentType)
  if (!extension || (imagesOnly && !contentType.startsWith('image/'))) {
    const error = new Error('Unsupported upload type')
    error.statusCode = 400
    throw error
  }

  const file = Buffer.from(encoded, 'base64')
  if (!file.length || file.length > maximumUploadBytes) {
    const error = new Error('Upload must be smaller than 10 MB')
    error.statusCode = 413
    throw error
  }

  await mkdir(uploadDirectory, { recursive: true })
  const filename = `${randomUUID()}${extension}`
  await writeFile(path.join(uploadDirectory, filename), file, { flag: 'wx' })
  return `/uploads/${filename}`
}

export function saveImageDataUrl(dataUrl) {
  return saveDataUrl(dataUrl, { imagesOnly: true })
}

export async function removeUploadedFile(url) {
  if (typeof url !== 'string' || !url.startsWith('/uploads/')) return
  const filename = url.slice('/uploads/'.length)
  if (path.basename(filename) !== filename || !/^[0-9a-f-]{36}\.(jpg|png|webp|mp4|webm)$/.test(filename)) return
  try {
    await unlink(path.join(uploadDirectory, filename))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}
