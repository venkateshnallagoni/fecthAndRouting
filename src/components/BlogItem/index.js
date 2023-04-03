// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {author, id, avatarUrl, title, imageUrl, topic} = details
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="list-item">
        <img src={imageUrl} className="main-image" alt={title} />
        <div className="image-details">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="name-avatar">
            <img src={avatarUrl} alt="avatar" className="avatar-img" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
