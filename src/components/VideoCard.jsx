import React from 'react'

export default function VideoCard({videoName,videoURL,channelName}) {
  return (
    <div className='rounded bg-white shadow-sm video-card p-3 d-flex flex-column'>
        <div className="video-card-display"></div>
        <div className="video-card-info d-flex flex-column">
          <p className='m-0 video-card-title'>{videoName.length > 35 ? videoName.slice(0,32) +'...' : videoName}</p>
          <div className="d-flex mt-3 w-100 justify-content-between">
            <p className='m-1'>{channelName}</p>
            <button className='video-card-button'>+ Ver mas tarde</button>
          </div>
        </div>
    </div>
  )
}
