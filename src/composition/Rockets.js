import React from 'react'
import { ROCKETS } from "../apollo/queries";
import { useLazyQuery } from "@apollo/client";
import Card from "./Card";

const Rockets = () => {

  const [fetcherFn, { data, loading, error }] = useLazyQuery(ROCKETS)
  
  return (
      <div className='w-3/4 mx-auto mt-3 text-sm'>
        <button 
            className='bg-blue-400 text-white font-bold py-2 px-4 rounded-lg' 
            onClick={() => fetcherFn()}>
            Fetch on Demand
        </button>

        {loading && <Card.Skeleton />}
        {error && <h1>We got an Error</h1>}
        {data?.rockets?.map((rocket, index) => (
            <div className='mb-4 shadow-lg p-6 rounded' key={index}>
                <div>Rocket Name: {rocket.name}</div>
                <div>Rocket Capacity: {`${rocket.payload_weights.kg} Kg`}</div>
                <div>Rocket Description: {rocket.description}</div>
            </div>            
        ))}
      </div>
  )
}

export default Rockets