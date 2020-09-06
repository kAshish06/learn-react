import React from "react";
//Can not do erro boundries with using classes. Hooks cant do error boundry
class Caraousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
    this.handleIndexClick = (event) => {
      this({
        active: +event.target.dataset.index,
      });
    };
  }
  static getDerivedStateFromProps({ media }) {
    // special react method must be static
    // takes in a set of props and gives you a new set of state
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="caraousel">
        <img src={photos[active]} alt="animal" />
        <div className="caraousel-smaller">
          {photos.map((photo, index) => {
            return (
              //eslint-disable-next-line
              <img
                key={photo}
                onClick={this.handleIndexClick}
                data-index={index}
                src={photo}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Caraousel;
