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
            So happy to host you here! <br />
            I'm a self-motivated person, always tried to reach goals by teaching
            myself to be dedicated and consistent.
            <br /> A day never comes to the end for me without a new learning or
            outcome. <br />
            I've been working in industry for more than 15 years and if you're
            interested to see my background, I invite you to check
            <Link to={"/about"}> My Profile. </Link>
            <br />
            <br />I sometimes write when kids are not around; here or elsewhere.
            <br /> But you can find them all in
            <Link to={"/blog"}> BLOG </Link>
            or
            <Link to={"/tutorial "}> TUTORIAL </Link>. There are not many so
            far; but I try to write more from now on.
            <br />
            I have made this website in Gatsby and the source code is available
            in my GitHub.
            <br />
            I'm also mentoring my wonderful daughter 'Diana Ashktorab' on her
            journey to learn programming. Don't forget to check her website{" "}
            <nbsp />
            <a href={`https://www.dianash.dev`} target="_blank">
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
