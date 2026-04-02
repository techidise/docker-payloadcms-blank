import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

const ArticlesPage = async () => {
  const articles = await payload.find({
    collection: 'articles',
  })

  return (
    <div>
      <h1>Articles</h1>

      {articles.docs.map((article) => (
        <div key={article.id}>
          <h2>{article.id}</h2>
          <h2>{article.title}</h2>
          {/* <h2>{article.author}</h2> */}
          {/* <p>{article.image}</p> */}
        </div>
      ))}
    </div>
  )
}

export default ArticlesPage

// ==================== Original =========================== \\
// import { getPayloadClient } from '@/lib/payload'
// import type { Article } from '@/payload-types'

// const ArticlesPage = async () => {
//   const payload = await getPayloadClient()

//   const articles = await payload.find({
//     collection: 'articles',
//     limit: 10,
//     sort: '-createdAt',
//   })

//   return (
//     <div>
//       <h1>Articles</h1>

//       {articles.docs.map((article: Article) => (
//         <div key={article.id}>
//           <h2>{article.title}</h2>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ArticlesPage
