import {Item} from 'semantic-ui-react'

function ArticleCard({article}){
  const {title, section, byline, abstract, url} = article

  const capitalizedSection = (artricleSection) => {
    if(artricleSection.length < 3) return artricleSection.toUpperCase()
    return artricleSection[0].toUpperCase() + artricleSection.substring(1)
  }

  return (
    <div id="cardContainer">
          <Item>
            <Item.Content>
              <h2>{title}</h2>
              <Item.Meta>
                <p>{byline}</p>
              </Item.Meta>
              <Item.Meta>
                <p>Section: {capitalizedSection(section)}</p>
              </Item.Meta>
              <Item.Description>
                <p>{abstract}</p>
              </Item.Description>
              <Item.Extra>
                <a href={url} target="_blank" rel="noreferrer">View Article</a>
              </Item.Extra>
            </Item.Content>
          </Item>
    </div>
  )
}

export default ArticleCard