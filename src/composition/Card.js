import React from 'react'

const Card = ({ item }) => {
  return (
    <div className='mb-4 shadow-lg p-6 rounded'>
        <div>Mission Name: {item.mission_name}</div>
        <div>Site Name: {item.launch_site.site_name_long}</div>
        <div>Site Code: {item.launch_site.site_name}</div>
        <div>Launch Year: {item.launch_year}</div>
        <div>Time Stamp: {item.launch_date_utc}</div>
        <div>Succesful: {item.launch_success ? "True" : "False"}</div>
    </div>
  )
}

const Skeleton = () => (
    <div className='mb-4 shadow-lg p-6 rounded animate-pulse'>
        <div className='h-4 w-1/2 bg-gray-200 rounded mb-2' />
        <div className='h-4 w-1/4 bg-gray-200 rounded mb-2' />
        <div className='h-4 w-1/2 bg-gray-200 rounded' />
    </div>
)

Card.Skeleton = Skeleton
export default Card