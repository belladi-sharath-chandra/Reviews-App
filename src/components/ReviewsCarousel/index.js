// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(pre => ({count: pre.count + 1}))
    }
  }

  renderReviewsList = reviewsList => {
    const {imgUrl, username, companyName, description} = reviewsList

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="img" />
        <p className="name">{username}</p>
        <p className="c-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(pre => ({count: pre.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const reviewsListDetails = reviewsList[count]

    return (
      <div className="bg">
        <div className="bg-2">
          <button
            type="button"
            onClick={this.onLeftArrow}
            testid="leftArrow"
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderReviewsList(reviewsListDetails)}
          <button
            type="button"
            onClick={this.onRightArrow}
            testid="rightArrow"
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
