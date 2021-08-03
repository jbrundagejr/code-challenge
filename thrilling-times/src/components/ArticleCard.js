import {Item} from 'semantic-ui-react'

function ArticleCard({article}){
  const {title, section, byline, abstract, url} = article

  return (
    <div id="cardContainer">
      <Item.Group>
          <Item>
            <Item.Content>
              <h2>{title}</h2>
              <Item.Meta>
                <p>{byline}</p>
              </Item.Meta>
              <Item.Meta>
                <p>Section: {section}</p>
              </Item.Meta>
              <Item.Description>
                <p>{abstract}</p>
              </Item.Description>
              <Item.Extra>
                <a href={url} target="_blank" rel="noreferrer">View Article</a>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
    </div>
  )
}

export default ArticleCard