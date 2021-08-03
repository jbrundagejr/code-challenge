import {Input} from 'semantic-ui-react'

function Search({onSearch, searchArticle}){

  return (
    <div id="searchContainer">
      <Input
        id="searchInput" 
        onChange={e => onSearch(e.target.value)} 
        value={searchArticle}
        placeholder="Search by title, byline or section..."/>
    </div>
  )
}

export default Search