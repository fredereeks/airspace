import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { houseData } from '../data/houseData'

export default function SingleListing() {
    const params = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const house = houseData.find(el => el.id === params.id.toString())
        setData(prev => ({...house}))
    }, [params.id])

  return (
    <div>SingleListing - {data?.title}</div>
  )
}
