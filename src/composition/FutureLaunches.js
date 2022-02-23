import React from 'react'
import { useQuery } from "@apollo/client";
import { FUTURE_LAUNCHES } from "../apollo/queries";
import Card from "./Card";


const FutureLaunches = () => {
  const { data, loading, error } = useQuery(FUTURE_LAUNCHES)

  console.log({data})
  return (
      <div className='w-3/4 mx-auto mt-3 text-sm'>

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