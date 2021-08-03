import {useEffect, useState} from 'react'
import ArticleContainer from './ArticleContainer';
import Search from './Search';

function App() {
  const [articleArr, setArticleArr] = useState([])
  const [searchArticle, setSearchArticle] = useState("")

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil")
    .then(res => res.json())
    .then(resp => {
      setArticleArr(resp.results)
      console.log(resp.results)
    })
  }, [])

  function handleSearch(e){
    setSearchArticle(e)
  }

  const searchedArr = articleArr.filter(articleObj => {
    if(articleObj.title.toLowerCase().includes(searchArticle.toLowerCase())){
      return true
    } else if (articleObj.byline.toLowerCase().includes(searchArticle.toLowerCase())){
      return true
    } else {return articleObj.section.toLowerCase().includes(searchArticle.toLowerCase())}
  })

  return (
    <div>
      <div id="headerContainer">
        <h1>The Thrilling Times</h1>
      </div>
      <Search onSearch={handleSearch} searchArticle={searchArticle}/>
      <ArticleContainer articleArr={searchedArr}/>
    </div>
  );
}

export default App;
