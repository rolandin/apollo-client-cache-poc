import React from 'react'
import { useQuery } from "@apollo/client";
import { PAST_LAUNCHES, FUTURE_LAUNCHES } from "../apollo/queries";
import { client } from "../apollo/client";
import Card from "./Card";

const PastLaunches = () => {
  const { data, loading, error } = useQuery(PAST_LAUNCHES)

  // Reading data from the cache   
  const cachedData = client?.readQuery({
      query: FUTURE_LAUNCHES,

  })

  const handleClick = () => console.log(
      cachedData?.launchesUpcoming || 
      "The data you are trying to Log hasn't been cached yet"
  )

  return (
      <div className='w-3/4 mx-auto mt-3 text-sm'>
        <button className='bg-blue-400 text-white font-bold py-2 px-4 rounded-lg' onClick={handleClick}>
            Console Log Future Queries From Cache
        </button>

        {error && <h1>We got an Error</h1>}
        {loading && <Card.Skeleton /> }
        {data && (
            <>
                {data.launchesPast?.map((launch, index) => (
                    <Card item={launch} key={index} />
                ))}
            </>
        )}
      </div>

  )
}

export default PastLaunches