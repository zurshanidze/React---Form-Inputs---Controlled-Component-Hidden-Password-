import reactDom from 'react-dom';
import React from 'react';
import './App.css';

class App extends React.Component{
  
  state={
    username: "",
    password: "",
    email: "",
    age: ""
  }
  
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onSubmit = (e) => {
    
    let blankName = React.createElement("span", null, `${this.state.username[0].toUpperCase() + this.state.username.slice(1)}`)
    ReactDOM.render(blankName, document.getElementById("blank-name"))
    
    let blankPassw = React.createElement("span", null, `${this.state.password}`)
    ReactDOM.render(blankPassw, document.getElementById("blank-passw"))
    
    let blankEmail = React.createElement("span", null, `${this.state.email}`)
    ReactDOM.render(blankEmail, document.getElementById("blank-email"))
    
    let blankAge = React.createElement("span", null, `${this.state.age}`)
    ReactDOM.render(blankAge, document.getElementById("blank-age"))
    
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    
    username.value=""
    password.value=""
    email.value=""
    age.value=""
    
    e.preventDefault();
  }
  
  render(){
    return(
      <div className="App">
        <form className="form" submit="submit" autocomplete="off"
          method="post">
          
          <div class="input-class">
            
            <label>Username</label>
            <input id="username" type="text" name="username" 
              autocomplete="off"
              value={this.state.username} 
              onChange={this.onChange}/>
            
          </div>
          
          <div class="input-class">
            
            <label>Password</label>
            <input id="password" type="password" name="password"
              autocomplete="off"
              value={this.state.password} 
              onChange={this.onChange}/>
            
          </div>
          
          <div class="input-class">
            
            <label>Email</label>
            <input id="email" type="email" name="email"
              autocomplete="off"
              value={this.state.email} 
              onChange={this.onChange}/>
            
          </div>
          
          <div class="input-class">
            
            <label>Age</label>
            <input id="age" type="number" name="age"
              autocomplete="off"
              value={this.state.age} min="0"
              onChange={this.onChange}/>
            
          </div>
          
          <button className="submit" 
            onClick={this.onSubmit}>Submit</button>
          
        </form>
        
        <div className="backgroundDiv">
          <div className="result">
              <h1>Blank</h1>
            
            <div>
              <b>Name: </b>
              <span id="blank-name"></span>
            </div>
              <br/>
            
            <div>
              <b>Password:</b>
              <span id="blank-passw"></span>
            </div>
              <br/>
            
            <div>
              <b>Email:</b>
              <span id="blank-email"></span>
            </div>
            <br/>

            <div>
              <b>Age:</b>
              <span id="blank-age"></span>
            </div>
            <br/>
            
            <div className="hidden">
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
