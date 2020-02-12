import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    user: {}
  };

  getUser = () => {
    axios
      .get("https://gitconnected.com/v1/portfolio/thomasutsey")
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    if(!this.state.user.basics) return <div></div>
    console.log(this.state.user.basics);

    return <div>
      <h1>{this.state.user.basics.name}</h1>
      </div>;
  }
}

// function App() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     fetch('https://gitconnected.com/v1/portfolio/thomasutsey')
//       .then(res => res.json())
//       .then(user => {
//         setUser(user);
//       });
//   }, []);
//  console.log(user)
//   return <div>
//     <h2>{user.basics.name}</h2>

//   </div>

// }

export default App;
