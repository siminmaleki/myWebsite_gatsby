import React from "react"
import { Timeline } from "react-twitter-widgets"

const TwitterTimeLine = () => {
  return (
    <section>
      // Timeline (with options)
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "siminmaleki",
        }}
        options={{
          height: "800",
        }}
      />
    </section>
  )
}

export default TwitterTimeLine
