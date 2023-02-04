import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import callAPI from '../utils/callAPI'
import Loader from '../components/Loader'
import VideosContainer from '../components/VideosContainer'

export default function Feed() {
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(true)

  async function getVideos(){
    try{
      const {items} = await callAPI()
      setVideos(items)
      setLoading(false)
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(()=>{
    getVideos();
  },[])
  return (
    <Container fluid className={`feed p-3 justify-content-center d-flex ${loading && 'align-items-center'}`}>
      {loading
        ?
       <Loader/> 
        : 
       <VideosContainer videos={videos}/>
      }
    </Container>
  )
}
