import {Component} from 'react'
import CommentListItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }
  onChangeText = event => {
    this.setState({commentInput: event.target.value})
  }
  formSubmit = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  renderCommentsList = () => {
    const {commentList} = this.state

    return commentList.map(eachComment => (
      <CommentListItem
        key={eachComment.id}
        onClickLikePassFunction={this.onClickLikePassFunction}
        onClickDeletePassFunction={this.onClickDeletePassFunction}
        eachComment={eachComment}
      />
    ))
  }

  onClickLikePassFunction = id => {
    console.log(id)
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }
  onClickDeletePassFunction = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    })
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state

    return (
      <div className="bg-container">
        <div className="top-section">
          <div className="add-comment-section">
            <div className="first">
              <h1 className="comments">Comments</h1>
              <p className="para">Say something about 4.0 Technologies</p>
              <form onSubmit={this.formSubmit} className="form-css">
                <input
                  className="search-box-text"
                  placeholder="Your Name"
                  type="text"
                  value={nameInput}
                  onChange={this.onChangeName}
                />
                <textarea
                  className="search-box-text"
                  placeholder="Your Comment"
                  rows="6"
                  value={commentInput}
                  onChange={this.onChangeText}
                ></textarea>
                <button type="submit" className="btn">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <div className="second">
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr className="hr" />
        <div className="comment-added-section">
          <div className="cmt-section">
            <p className="count">{commentList.length}</p>
            <p className="cmt-para">Comments</p>
          </div>
          <ul>{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
