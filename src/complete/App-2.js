import React from 'react';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

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

const Link = ({ to, children }) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);

class App extends React.Component {
  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="container">
        <h1 className="app-title">
          Top Surfing Destinations
        </h1>
        <div className="content-container">
          <h3 className="step">Step 2</h3>
          <h2 className="title">Add Link Component</h2>
          <p>
            We create a <code>{'Link'}</code> component that gets passed a location and produces an <code>{'<a>'}</code> tag with special <code><em>onClick</em></code> binding.
          </p>
        
          <p>This time the links below are rendered by our custom <code>{'Link'}</code> component. When our <code><em>onClick</em></code> handler runs, we prevent the default behavior of the browser. There is no full page load. Instead, we use the history API to update the location of our app. This will update the path in the URL. We listen for this change in the browser history and use <code>forceUpdate()</code> to alert our React app. Our <code>{'Route'}</code> compenent from Step 1 hasn't changed. It will once again check for a match against the new location. However, this time the updates to our app happen much faster since we avoid a full page load.</p>
        </div>
        <div className="content-container">
          <h3 className="title">Links List</h3>
          <ul>
            <li>
              <Link to='/popoyo'>
                <code>/popoyo</code>
              </Link>
            </li>
            <li>
              <Link to='/nosara'>
                <code>/nosara</code>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/uluwatu'>
                <code>/uluwatu</code>
              </Link>
            </li>
            <li>
              <Link to='/cloudbreak'>
                <code>/cloudbreak</code>
              </Link>
            </li>
            <li>
              <Link to='/jeffreys-bay'>
                <code>/jeffreys-bay</code>
              </Link>
            </li>
          </ul>
          </div>
        <Route path='/popoyo' component={Popoyo} />
        <Route path='/nosara' component={Nosara} />
        <Route path='/uluwatu' component={Uluwatu} />
        <Route path='/cloudbreak' component={Cloudbreak} />
        <Route path='/jeffreys-bay' component={JeffreysBay} />
      </div>
    );
  }
}

const Source = () => (
  <a href="https://57hours.com/best-of/surfing-worldwide/" target="_blank" rel="noreferrer">[source]</a>
);

const Popoyo = () => (
  <div className="card-container">
    <h3 className="card-heading">Popoyo</h3>
    <p>
      Located on the west coast of Nicaragua, Popoyo is a dreamscape for surfers. A rocky, dirt road deposits you into the heart of a small, remote village where the lifestyle is all about the surf. While many breaks revolve around swells, storms, and tides, Popoyo is consistent year round. The spot receives over 300 days of offshore winds annually and, as a result, is often regarded as one of the best surf spots in the country. Like most of Central America, Popoyo experiences a dry season and a wet season, so plan your trip accordingly.
    </p>
    <Source />
  </div>
);

const Nosara = () => (
  <div className="card-container">
    <h3 className="card-heading">Nosara</h3>
    <p>
      Nosara is a village located on the North Pacific Coast of the Nicoya Peninsula in Guanacaste and is famous for yoga and year-round surf. Technically, Nosara is a few miles inland, so when tourists visit, they typically stay in Playa Guiones, Playa Plada, or Playa Garza, with Playa Guiones being the most popular. In 2015, a good friend of mine moved to the area to work as a surf instructor. After hearing about the epic surf and seeing his photos, I had to visit. Nosara definitely lives up to the hype. After that first visit I was back a year later to get my fill of warm water waves.
    </p>
    <Source />
  </div>
);

const Uluwatu = () => (
  <div className="card-container">
    <h3 className="card-heading">Uluwatu</h3>
    <p>
      Uluwatu is one of those destinations that perennially tops bucket lists. Located on the southwestern tip of the Bukit Peninsula, Uluwatu is known for its world-famous surf as well as the Uluwatu Temple: an 11th century Hindu temple. Due to its famous name and prime conditions, Uluwatu is one of the busiest surf spots in all of Bali and is best suited for experienced surfers. Consistent year round, Uluwatu offers hollow, performance waves during low tide and slower, mellower waves during high tide.
    </p>
    <Source />
  </div>
)

const Cloudbreak = () => (
  <div className="card-container">
    <h3 className="card-heading">Cloudbreak</h3>
    <p>
      Located just three miles south of Namotu Island in Fiji, Cloudbreak is famous for consistently being one of the most challenging waves in the world. The spot breaks over a sharp, shallow reef and offers fast, barreling lefts. As the wave progresses, it tends to speed up, presenting shallower, more critical sections. The wave is as equally amazing as it is dangerous and, as such, it attracts pros from across the globe. If you aren’t up for surfing Cloudbreak, getting an up-close view from a boat is an incredible way to experience the wave.
    </p>
    <Source />
  </div>
)

const JeffreysBay = () => (
  <div className="card-container">
    <h3 className="card-heading">Jeffreys Bay</h3>
    <p>
      Often referred to as J-Bay, Jeffreys Bay is regarded as the surfing mecca of South Africa and home to one of the best right point breaks on the planet. Located on the western edge of South Africa’s Eastern Cape Province, Jeffreys Bay is situated inside a crescent-shaped bay that shelters many of its incredible point breaks. The region was first popularized in The Endless Summer, when Bruce Brian stumbled upon Cape Saint Francis — the spot that is now lovingly referred to as Bruce’s Beauties. Although Brian deemed the spot perfect at the time, J-Bay, located just to the east, is more deserving of surfing glory.
    </p>
    <Source />
  </div>
)

export default App;
