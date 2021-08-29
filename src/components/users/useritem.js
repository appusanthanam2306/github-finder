import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 

const useritem = ({ user: { login, avatar_url, html_url } }) => {
     /* constructor() {
     super();
     this.state = {
       id: 'id',
       login: 'mojombo',
       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
       html_url: 'https://github.com/mojombo'
     }
   }
 state = {
          id: 'id',
          login: 'mojombo',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          html_url: 'https://github.com/mojombo'
        }
  render() {
    return (
      <div className="card text-center">
       <img src={this.state.avatar_url} alt="" className="round-img" style={{  width: '60px' }}/>
       <h3>{this.state.login}</h3>

       <div>
         <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More</a>
       </div>
      </div>
    )
  } */

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{  width: '60px' }}/>
        <h3>{login}</h3>

       <div>
         <Link
          to={`/user/${login}`}
          className="btn btn-dark btn-sm my-1"
        >
          More
        </Link>
       </div>
      </div>
    )
 
}

useritem.prototype = {
  user: PropTypes.object.isRequired,
}

export default useritem
