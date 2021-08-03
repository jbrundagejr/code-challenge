import {} from 'semantic-ui-react'
import ArticleCard from "./ArticleCard"

function ArticleContainer({articleArr}){

  const articleArray = articleArr.map(articleObj => {
    return <ArticleCard key={articleObj.id} article={articleObj} />
  })
  return (
    <div id="articleContainer">
      {articleArray}
    </div>
  )
}

export default ArticleContainer