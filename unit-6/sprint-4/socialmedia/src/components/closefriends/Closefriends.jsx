import React from 'react'

export const Closefriends = ({data}) => {
  return (
    <li className="sidebarfriendlistitem">
            <img src={data.profilepicture} className="sidebarfriendimg" alt=""></img>
            <span className="sidebarfriendname">{data.username}</span>
          </li>
  )
}
