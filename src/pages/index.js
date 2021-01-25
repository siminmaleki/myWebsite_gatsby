import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SocialFollow from "../components/socialFollow"
import "@quasar/extras/ionicons-v4/ionicons-v4.css"
import "../styles/index.scss"
import "../components/bioAnimatedText"
import BioAnimatedText from "../components/bioAnimatedText"
import TwitterTimeLine from "../components/twitterTimeline"

const IndexPage = () => {
  const images = {
    hi: "images/hello.png",
    heart: "images/heart.png",
  }

  return (
    <Layout>
      <section className="hero">
        <br />
        <div id="light1"></div>
        <div id="light2"></div>
        <div id="light3"></div>
        <div id="light4"></div>
        <div id="light5"></div>

        <section className="introduction">
          <h1>Welcome to my home!</h1>
          <div className="bio">
            <BioAnimatedText />
          </div>
          <div id="briefIntro">
            I'm an experienced full-stack developer and BPM expert.
            <br />
            I've worked in different domains.
            <br />
            I'll share my experiences in
            <Link to={"/blog"}> BLOG </Link>
            and
            <Link to={"/tutorial "}> TUTORIAL </Link> sections.
            <br /> We're going to have lots of fun here !
            <br />I also have a wonderful programmer daughter <nbsp />
            <a href={`https://twitter.com/diana_ashktorab`} target="_blank">
              Diana
            </a>
            <br />
            Want to know more about me ? Just click
            <Link to={`/about`}> HERE</Link>
          </div>
          <SocialFollow />
        </section>
      </section>
      {/* 
      <section className="mycontent">
        <div className="twitterTimeline">
          <TwitterTimeLine />
        </div>
      </section> */}
      <br />
    </Layout>
  )
}

export default IndexPage
