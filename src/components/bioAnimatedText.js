import React, { Component } from "react"
import ReactTextTransition, { presets } from "react-text-transition"

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000)

const texts = [
  "Computer Science",
  "Technology",
  "Business Process Management",
  "Process Mining",
  "Research",
  "Teaching",
]

class BioAnimatedText extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1,
      })
    }, 2000)
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      })
    }, 100)
  }
  render() {
    return (
      <React.Fragment>
        <section>
          <section className="inline">
            I love
            <ReactTextTransition
              text={texts[this.state.textIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            />
          </section>
        </section>
      </React.Fragment>
    )
  }
}

export default BioAnimatedText
