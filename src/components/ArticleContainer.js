import {Item} from 'semantic-ui-react'
import ArticleCard from "./ArticleCard"

function ArticleContainer({articleArr}){

  const articleArray = articleArr.map(articleObj => {
    return <ArticleCard key={articleObj.id} article={articleObj} />
  })
  
  return (
    <div id="articleContainer">
      <Item.Group>
        {articleArray.length > 0 ? articleArray : <p>There are no articles matching that search.</p>}
      </Item.Group>
    </div>
  )
}

export default ArticleContainer