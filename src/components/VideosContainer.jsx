import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'

export default function VideosContainer({ videos }) {
    return (
        <div className='videos-container'>
            <Row className='w-100 m-0'>
                {
                    videos.map((video) =>
                        <Col className='m-0 p-0'>
                            <VideoCard videoName={video.snippet.title} channelName={video.snippet.channelTitle} />
                        </Col>)
                }
            </Row>
        </div>
    )
}
