import './index.css'
// import {async} from 'rxjs'
import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

//   //Render UserInfo and BlogList
const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
