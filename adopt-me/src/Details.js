import React from "react";
import pet from "@frontendmasters/pet";
import Caraousel from "./Caraousel";
import ErrorBoundary from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";
// hooks dont work in class component
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
    };
    this.toggleModal = () =>
      this.setState({ showModal: !this.state.showModal });
    this.adopt = () => navigate(this.state.url);
  }
  componentDidMount() {
    //Runs once after component is created.
    // useful for ajax request
    // throw new Error();
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        // from inherited class
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }
    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Caraousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1> Would you like to adapt {name}?</h1>
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
