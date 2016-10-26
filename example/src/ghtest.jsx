import React from 'react';
import ReactDOM from 'react-dom';
import Artwork from 'react-artwork';
import albumTheme from './album-theme.css';
import skeleton from './skeleton.css';

ReactDOM.render(
  <section className={skeleton.container}>
    <section className={skeleton.region}>
      <h1>Some cool metal albums</h1>
      <Artwork
        id="albums"
        height={450}
        width={400}
        transitionDuration="1s"
        radius={5}
        draggable={true}
        source="example/albums"
        containment={true}
        shadow={true}
        theme={albumTheme}
      />
    </section>
    <section className={skeleton.region}>
      <h1>Some beautiful cities</h1>
      <Artwork
          id="cities"
          height={450}
          width={700}
          transitionDuration="1.25s"
          radius={2}
          draggable={true}
          source="example/cities"
          containment={true}
          shadow={true}
        />
    </section>
  </section>,
  document.getElementById('content')
);