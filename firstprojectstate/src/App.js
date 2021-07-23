import './App.css';
import React, {Component} from 'react';
import myImage from './img.jpg'

class App extends Component {
  state = {
    fullName: "Safa Alatrech",
    bio : "Born on 20th January, 1996 in Tunisia",
    imgSrc: myImage,
    profession: "Full Stack JS Developer / .net(Core)",
    show: false,
    intervall: null,
    timer: 0
  }

  componentDidMount() {
    this.setState({
        intervall : setInterval(() => {
            this.setState({ timer : this.state.timer + 1 })
        }, 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervall);
 }

 showContent = () => {
  this.setState({
    show: !this.state.show
  })
}

imgStyle = {
  margin: '16px',
  padding: '16px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  boxShadow: '0 2px 5px cyan'
}



 
render() {
  return (
   <div className="App">
     <button onClick= {this.showContent} style={{margin: '15px', padding: '10px'}}> {this.state.show? 'Hide Profile' : 'Show Profile' }</button>
     {this.state.show ?
       (  <div>
          <h1 style={{fontSize: '40px', fontWeight: '700', fontFamily: 'cursive', color: 'dodgerblue'}}> {this.state.fullName} </h1>
          <p style={{fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}> {this.state.bio} </p>
          <p style={{fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}> {this.state.profession} </p>
          <img src={this.state.imgSrc} alt="Safa"  style={this.imgStyle} /> 
         </div> ) : (<h4 style={{fontSize: '25px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}>Click on the button to show the user profile</h4>)}
       
     <h4 style={{fontSize: '18px', fontWeight: 'bold', fontFamily: 'cursive', color: 'red'}}> {this.state.timer} </h4>
   </div>
  );
}
}

export default App;