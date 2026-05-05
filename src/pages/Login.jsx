import "./Login.css"


export default function Login(){


  return(
    <div className="main">
        <h1>Login</h1>
        <div className="box">
            <div>
                <h2>User:</h2>
                <input type="text" id="name"></input>
            </div>
            <div>
                <h2>Password:</h2>
                <input type="password" id="name"></input>
            </div>

            <button className="login-button">Login</button>

        </div>
    </div>
    
  );
}
