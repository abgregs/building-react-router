import React from 'react';

const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if (pathname.match(path)) {
    return (
      React.createElement(component)
    );
  } else {
    return null;
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Top 10 Surfing Destinations
        </h2>

        <ul>
          <li>
            <a href='/popoyo'>
              <code>/popoyo</code>
            </a>
          </li>
          <li>
            <a href='/nosara'>
              <code>/nosara</code>
            </a>
          </li>
        </ul>

        <hr />

        <Route path='/popoyo' component={Popoyo} />
        <Route path='/nosara' component={Nosara} />
      </div>
    );
  }
}

const Popoyo = () => (
  <div>
    <h3>Popoyo</h3>
    <p>
    Located on the west coast of Nicaragua, Popoyo is a dreamscape for surfers. A rocky, dirt road deposits you into the heart of a small, remote village where the lifestyle is all about the surf. While many breaks revolve around swells, storms, and tides, Popoyo is consistent year round. The spot receives over 300 days of offshore winds annually and, as a result, is often regarded as one of the best surf spots in the country. Like most of Central America, Popoyo experiences a dry season and a wet season, so plan your trip accordingly.
    </p>
  </div>
);

const Nosara = () => (
  <div>
    <h3>Nosara</h3>
    <p>
    Nosara is a village located on the North Pacific Coast of the Nicoya Peninsula in Guanacaste and is famous for yoga and year-round surf. Technically, Nosara is a few miles inland, so when tourists visit, they typically stay in Playa Guiones, Playa Plada, or Playa Garza, with Playa Guiones being the most popular. In 2015, a good friend of mine moved to the area to work as a surf instructor. After hearing about the epic surf and seeing his photos, I had to visit. Nosara definitely lives up to the hype. After that first visit I was back a year later to get my fill of warm water waves.
    </p>
  </div>
);

export default App;
