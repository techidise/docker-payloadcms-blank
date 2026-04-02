// lib/payload.ts
import { getPayload } from 'payload'
import config from '@payload-config'

let payloadInstance: Awaited<ReturnType<typeof getPayload>> | null = null

export const getPayloadClient = async () => {
  if (!payloadInstance) {
    payloadInstance = await getPayload({ config })
  }
  return payloadInstance
}
