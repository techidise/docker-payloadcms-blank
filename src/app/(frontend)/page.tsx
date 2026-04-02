import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import { queryArticleBySlug } from '@/data/queryArticles'

import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import Hero from '@/components/base/Hero'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Hero />
      </div>
      <div className="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis autem ea nisi labore
        natus ad nobis facilis dolore rerum! Debitis ea vero, tenetur libero quod similique rerum
        accusamus asperiores.
      </div>
      <div className="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis autem ea nisi labore
        natus ad nobis facilis dolore rerum! Debitis ea vero, tenetur libero quod similique rerum
        accusamus asperiores.
      </div>
      <div className="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis autem ea nisi labore
        natus ad nobis facilis dolore rerum! Debitis ea vero, tenetur libero quod similique rerum
        accusamus asperiores.
      </div>
      <div className="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis autem ea nisi labore
        natus ad nobis facilis dolore rerum! Debitis ea vero, tenetur libero quod similique rerum
        accusamus asperiores.
      </div>
      <div className="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis autem ea nisi labore
        natus ad nobis facilis dolore rerum! Debitis ea vero, tenetur libero quod similique rerum
        accusamus asperiores.
      </div>
      <div className="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis autem ea nisi labore
        natus ad nobis facilis dolore rerum! Debitis ea vero, tenetur libero quod similique rerum
        accusamus asperiores.
      </div>
    </>
  )
}
