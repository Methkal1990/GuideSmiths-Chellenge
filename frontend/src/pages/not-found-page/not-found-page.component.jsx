import { Link } from 'react-router-dom';
import './not-found-page.styles.css'

const notFoundPage = ()=> {
  return (
    <div className="not-found-page">
      <div className="not-found-page-number">404</div> 
      <div className="not-found-page-desc">Sorry, not found</div>
      <Link to="/" className="not-found-page-return">&larr; Back Home</Link>
    </div>
  )
}

export default notFoundPage
