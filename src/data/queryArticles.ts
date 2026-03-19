import { initLocalApi } from '@/utils/initLocalApi'

export const queryArticleBySlug = async (slug: string) => {
  const payload = await initLocalApi()
  const data = await payload.find({
    collection: 'articles',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return data.docs?.[0] || null
}
