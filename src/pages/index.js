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
            I'm a woman in tech with more than 15 years experiences in various
            industries.
            <br />
            By looking at
            <Link to={"/about"}> My Profile </Link>
            it may seem a little bit difficult to categorize me !
            <br /> But getting my hands dirty in different categories has made
            me improve.
            <br />
            <br />
            I'll also share anything when I feel insightful and kids are not
            around in
            <Link to={"/blog"}> BLOG </Link>
            and
            <Link to={"/tutorial "}> TUTORIAL </Link> sections.
            <br />
            <br />I also have a wonderful programmer daughter 'Diana Ashktorab'{" "}
            <br />
            Don't forget to check her website <nbsp />
            <a href={`https://dianash.dev`} target="_blank">
              HERE
            </a>
            <br />
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
