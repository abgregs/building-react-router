import PropTypes from 'prop-types';
import React from 'react';

import { createBrowserHistory } from "history";

const basename = process.env.REACT_APP_BASENAME;

function makePath(path) {
  return basename.concat('', path);
}

const Route = ({ path, component }, { location }) => {
  const pathname = location.pathname;
  const p = makePath(path);
  if (pathname.match(p)) {
    return (
      React.createElement(component)
    );
  } else {
    return null;
  }
};

Route.contextTypes = {
  location: PropTypes.object,
};

const Link = ({ to, children }, { history }) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      const p = makePath(to);
      history.push(p);
    }}
    href={`${basename}${to}`}
  >
    {children}
  </a>
);

Link.contextTypes = {
  history: PropTypes.object,
};

class Router extends React.Component {
  // defines property on class Router itself (Router.childContextTypes) rather than instance
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.history = createBrowserHistory();
    this.history.listen(() => this.forceUpdate());
  }

  getChildContext() {
    return {
      history: this.history,
      location: window.location,
    };
  }

  render() {
    return this.props.children;
  }
}

const App = () => (
  <Router>
    <div>
      <div className="content-container">
        <h3 className="step">Step 3</h3>
        <h2 className="title">Create Router Component</h2>
        <p>
          We build a <code>{'Router'}</code> component that will do two things.
        </p>
        <ol>
          <li>1. Supply its children with context for both <code>location</code> and <code>history</code></li>
          <li>2. Re-render the app whenever the history changes.</li>
        </ol>
        <p>The app works the same as it did in the previous step, only now our app is wrapped in a <code>Router</code> component that provides location management APIs to child components. Now, <code>Link</code> and <code>Route</code> use the <code>history</code> and <code>location</code> property, respectively, from the shared context object provided by <code>Router</code>.</p>
      </div>
      <div className="content-container">
        <h3 className="title">Surfing Destinations</h3>
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
  </Router>
);

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
);

const Cloudbreak = () => (
  <div className="card-container">
    <h3 className="card-heading">Cloudbreak</h3>
    <p>
      Located just three miles south of Namotu Island in Fiji, Cloudbreak is famous for consistently being one of the most challenging waves in the world. The spot breaks over a sharp, shallow reef and offers fast, barreling lefts. As the wave progresses, it tends to speed up, presenting shallower, more critical sections. The wave is as equally amazing as it is dangerous and, as such, it attracts pros from across the globe. If you aren???t up for surfing Cloudbreak, getting an up-close view from a boat is an incredible way to experience the wave.
    </p>
    <Source />
  </div>
);

const JeffreysBay = () => (
  <div className="card-container">
    <h3 className="card-heading">Jeffreys Bay</h3>
    <p>
      Often referred to as J-Bay, Jeffreys Bay is regarded as the surfing mecca of South Africa and home to one of the best right point breaks on the planet. Located on the western edge of South Africa???s Eastern Cape Province, Jeffreys Bay is situated inside a crescent-shaped bay that shelters many of its incredible point breaks. The region was first popularized in The Endless Summer, when Bruce Brian stumbled upon Cape Saint Francis ??? the spot that is now lovingly referred to as Bruce???s Beauties. Although Brian deemed the spot perfect at the time, J-Bay, located just to the east, is more deserving of surfing glory.
    </p>
    <Source />
  </div>
);

export default App;