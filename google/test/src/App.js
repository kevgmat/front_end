import { useAuth0 } from "@auth0/auth0-react";

import logo from './logo.svg';
import './App.css';

function App() {
  const{ user, loginWithRedirect,isAuthenticated,logout } = useAuth0();

  console.log("Current User", user);
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <h3>Hello {user.name}</h3>}
        {isAuthenticated ? (
          <button onClick={(e) => logout()}>logout</button>
        ):(
          <button onClick={(e) => loginWithRedirect()}>Log In with google</button>
        )}
        
      </header>
    </div>
  );
}

export default App;

