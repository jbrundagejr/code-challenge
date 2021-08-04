import {Icon} from 'semantic-ui-react'

function Header(){

  return (
    <div id="headerContainer">
      <p className="header">August 3, 2021</p>
      <h1>The Thrilling Times</h1>
      <div className="headerSub">
        <Icon name="rain"/>
        <p className="header">76°</p>
      </div>
    </div>
  )
}

export default Header