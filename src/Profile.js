import React, { Component } from "react";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Charles Herrera",
        bio: [
          "Gender: female",
          "Title: Mrs",
          "Race: White",
          "Birthday: 11/5/1992",
          "SocialSecurityNumber: 395-03-9081",
        ],
        imgSrc: "https://picsum.photos/200/300",
        profession: "College Professor.",
      },
      shows: false,
      show: "hidden",
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
    this.setState({
      count: this.state.count + 1,
    });
  }

  appear() {
    this.setState({
      shows: !this.state.shows,
    });
  }
  render() {
    return (
      <div>
        {this.state.shows === true ? (
          <div className="pff">
            <div>My name is {this.state.person.fullName}</div>
            <div>
              {this.state.person.bio.map((x, i) => (
                <div key={i}>{x}</div>
              ))}
            </div>
            <img src={this.state.person.imgSrc} alt="ops" />
            <div>Profession: {this.state.person.profession}</div>
            <div>{this.state.count}</div>
          </div>
        ) : (
          " "
        )}
        <div>
          <button onClick={() => this.appear()}>
            {this.state.shows === true ? "hide" : "show"}
          </button>
        </div>
      </div>
    );
  }
}
export default Profile;
