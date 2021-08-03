import {Item} from 'semantic-ui-react'

function ArticleCard({article}){
  const {title, section, byline, abstract, url} = article

  return (
    <div id="cardContainer">
       <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <Item.Meta>{byline}</Item.Meta>
              <Item.Meta>Section: {section}</Item.Meta>
              <Item.Description>
                {abstract}
              </Item.Description>
              <Item.Extra as="a">{url}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
    </div>
  )
}

export default ArticleCard