import React from 'react'
import { useQuery } from "@apollo/client";
import { FUTURE_LAUNCHES } from "../apollo/queries";
import Card from "./Card";


const FutureLaunches = () => {
  const { data, loading, error, refetch } = useQuery(FUTURE_LAUNCHES, {
    // fetchPolicy: 'cache-and-network'
  })

  const handleClick = () => {
      console.log("re-fetching")
      refetch()
  }

  return (
      <div className='w-3/4 mx-auto mt-3 text-sm'>
         <button className='bg-blue-400 text-white font-bold py-2 px-4 rounded-lg' onClick={handleClick}>
            Refetch this Query
        </button>
        {error && <h1>We got an Error</h1>}
        {loading && <Card.Skeleton /> }
        {data && (
            <>
                {data.launchesUpcoming?.map((launch, index) => (
                    <Card item={launch} key={index} />
                ))}
            </>
        )}
      </div>

  )
}

export default FutureLaunches