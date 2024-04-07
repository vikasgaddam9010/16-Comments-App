import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentListItem = props => {
  const {eachComment, onClickLikePassFunction, onClickDeletePassFunction} =
    props
  const {id, name, comment, isLiked, initialClassName, date} = eachComment

  const initial = name ? name[0].toUpperCase() : ''

  const postedTime = formatDistanceToNow(date)

  const onLIkeClick = () => {
    onClickLikePassFunction(id)
  }
  const onDeleteClick = () => {
    onClickDeletePassFunction(id)
  }
  return (
    <div>
      <li className="li-container">
        <p className={`${initialClassName} first-letter`}>{initial}</p>
        <div className="comment-head">
          <div className="li-container name">
            <h1>{name}</h1>
            <p className="para-time">{postedTime} ago</p>
          </div>
          <p className="comment-para">{comment}</p>
        </div>
      </li>
      <div className="row">
        <div className="row">
          <img
            alt="like"
            src={
              isLiked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            className="img"
          />
          <button className="button" type="button" onClick={onLIkeClick}>
            <p className={isLiked ? 'liked-css' : 'para-time'}>Like</p>
          </button>
        </div>
        <button
          testid="delete"
          type="button"
          className="button"
          onClick={onDeleteClick}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="img"
          />
        </button>
      </div>
      <hr className="hr-1" />
    </div>
  )
}

export default CommentListItem
