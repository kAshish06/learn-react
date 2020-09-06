import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
// useEffect takes place of life cycle hooks like componentDidMount
export default function SearchParams() {
  /** Hooks can not be created inside if or for loop, something that class component lifecycle methods cant do but lifecycle methods can */
  const [location, setLocation] = useState("Seattle, WA"); // This is a hook
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown, setAnimal] = useDropdown(
    "Animal",
    "Dog",
    ANIMALS
  );
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }
  useEffect(() => {
    setBreeds([]),
      setBreed(""),
      pet.breeds(animal).then(({ breeds: apiBreeds }) => {
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      }, console.error);
    // requestPets()
  }, [animal, setBreed, setBreeds]);
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          ThemeContext
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">darkblue</option>
            <option value="mediumorchid">mediumorchid</option>
            <option value="chartreuse">chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}
