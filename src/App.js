import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [datos, setDatos] = useState([]);
  const [joke, setJoke] = useState([]);
  // este hook nos sirve para que se ejecute solo 1na vez el codigo
  useEffect(() => {
    const url = 'https://randomuser.me/api/?results=3';

    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) =>
        lectura.results.map(
          (lect, i) => (
            console.log(`${lect.name.first} ${lect.name.last}`),
            console.log(`${lect.picture.thumbnail}`),
            setDatos((e) => [
              ...e,
              <div key={lect.email}>
                <p>
                  Nombre : {lect.name.first} {lect.name.last}
                </p>
                <img src={`${lect.picture.thumbnail}`} />
              </div>,
            ])
          )
        )
      )
      .catch(() => console.log('mal'));
  }, []);

  useEffect(() => {
    otro();
  }, []);
  const otro = () => {
    const urlChucknorris = 'https://api.chucknorris.io/jokes/random';
    const peticionChucknorris = fetch(urlChucknorris);
    peticionChucknorris
      .then((datos) => datos.json())
      .then(
        (lectura) => (
          console.log(lectura),
          console.log(lectura),
          setJoke(
            <div id={lectura.id}>
              <img src={lectura.icon_url} />
              <p> {lectura.value} </p>
            </div>
          )
        )
      )
      .catch(() => console.log('mal'));
  };

  return (
    <div>
      <h1>Emplead@:</h1>
      {datos}
      <img />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>
        https://randomuser.me/
        <br />
        https://randomuser.me/api/ https://randomuser.me/api/?results=3
      </p>
      <p>https://api.icndb.com/jokes/random </p>
      <p>https://api.chucknorris.io/jokes/random</p>
      {joke}
      <button onClick={otro}>Otro chiste </button>
    </div>
  );
}
