import {useEffect, useState} from 'react'
import Header from './Header';
import Search from './Search';
import ArticleContainer from './ArticleContainer';

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
    <div id="siteContainer">
      <Header />
      <Search onSearch={handleSearch} searchArticle={searchArticle}/>
      <ArticleContainer articleArr={searchedArr}/>
    </div>
  );
}

export default App;
