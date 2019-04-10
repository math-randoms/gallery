import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListEntry from "./listEntry.jsx";
import Slideshow from "./Slideshow.jsx";
import Save from "./Save.jsx";
import Share from "./Share.jsx";
import Embed from "./Embed.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      name: "TEMP TEST",
      location: "LOCATION TEMP",
      reviews: Math.round(Math.random() * 400) + 50,
      showSS: false,
      showShare: false,
      showSave: false,
      showEmbed: true,
      SSstart: 0
    };
    this.get = this.get.bind(this);
    this.embedClick = this.embedClick.bind(this);
    this.SStransition = this.SStransition.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    let id = Math.floor(Math.random() * 50) + 1;
    console.log(id);
    axios
      .get(`/api/photos/${id}`)
      .then(data => {
        this.setState({
          imageList: data.data[0].urls
        });
      })
      .catch(err => console.error(err));
  }

  embedClick() {
    this.setState({
      showShare: false,
      showEmbed: true
    });
  }

  SStransition(e) {
    this.setState({
      SSstart: e
    });
  }

  //TODO add double click event that sets state of SSstart to item index and opens SS

  render() {
    let SSclose = () => this.setState({ showSS: false });
    let saveClose = () => this.setState({ showSave: false });
    let shareClose = () => this.setState({ showShare: false });
    let embedClose = () => this.setState({ showEmbed: false });
    return (
      <div>
        <div className="gallery-container">
          <img src={this.state.imageList[0]} className="gallery-mainPic" />
          {this.state.imageList.slice(1, 5).map((item, index) => {
            return <ListEntry pic={item} key={index} index={index} />;
          })}
          <div id="gallery-buttonContainer">
            <Button
              variant="primary"
              onClick={() => this.setState({ showShare: true })}
              id="gallery-shareButton"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/share+icon.png"
                id="gallery-shareIcon"
              />
              <p className="gallery-inlineButtonText">Share</p>
            </Button>
            <Button
              variant="primary"
              onClick={() => this.setState({ showSave: true })}
              id="gallery-saveButton"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/heart+icon.png"
                id="gallery-likeIcon"
              />
              <p className="gallery-inlineButtonText">Save</p>
            </Button>
          </div>
          <Button
            variant="primary"
            onClick={() => this.setState({ showSS: true })}
            id="gallery-SSbutton"
          >
            <p className="gallery-SSbuttonText">View Photos</p>
          </Button>
        </div>
        <Slideshow
          show={this.state.showSS}
          onHide={SSclose}
          imageList={this.state.imageList}
          start={this.state.SSstart}
          transition={this.SStransition}
        />
        <Save show={this.state.showSave} onHide={saveClose} />
        <Embed
          show={this.state.showEmbed}
          onHide={embedClose}
          images={this.state.imageList}
          name={this.state.name}
          location={this.state.location}
          reviews={this.state.reviews}
        />
        <Share
          show={this.state.showShare}
          onHide={shareClose}
          embedClick={this.embedClick}
        />
      </div>
    );
  }
}

export default App;
{
  /* <List imageList={this.state.imageList.slice(1)} /> */
}
