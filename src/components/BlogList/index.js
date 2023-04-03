import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      id: eachData.id,
      imageUrl: eachData.image_url,
      title: eachData.title,
      topic: eachData.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        <ul>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogsData.map(eachItem => (
              <BlogItem key={eachItem.id} details={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default BlogList
