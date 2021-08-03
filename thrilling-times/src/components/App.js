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

  // const searchedArr = articleArr.filter(articleObj => {
  //   if()
  // })

  return (
    <div>
      <Search onSearch={handleSearch} searchArticle={searchArticle}/>
      <ArticleContainer />
    </div>
  );
}

export default App;
