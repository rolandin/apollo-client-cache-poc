import { gql } from "@apollo/client";

export const PAST_LAUNCHES = gql`
query PastQuery {
    launchesPast {
        id
        launch_success
        launch_date_utc
        launch_site {
          site_name
          site_name_long
        }
        launch_year
        mission_name
      }
  }
`


export const FUTURE_LAUNCHES = gql`
query FutureQuery {
    launchesUpcoming {
      id
      launch_success
      launch_date_utc
      launch_site {
        site_name
        site_name_long
      }
      launch_year
      mission_name
    }
  }
`
