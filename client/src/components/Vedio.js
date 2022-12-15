import React, { Component } from 'react';
import '../style/vedio.css';
import {connect} from 'react-redux';
import {findVedio} from '../action/vediosActions';
import ReactPlayer from 'react-player';
class Vedio extends Component {

  componentDidMount(){
    // console.log(this.props.match.params.id)
    this.props.findVedio({id:this.props.match.params.id})
    // this.props.fetchCake();
  }

  render() {

    return (
      
      <div>
        {/* <center> */}
        <div class="containerpl">
          
            <div id="player">
                <ReactPlayer style={{maxWidth:'100%'}} url = {this.props.vedio.link} controls = {true} playing = {true}/><br/><br/>
                <div id="discp">
                  <h3>{this.props.vedio.name}</h3>
                  <h4>{this.props.vedio.discp}</h4>
                </div>
            </div>
        {/* </center> */}
        {/* <hr/> */}
        {/* <center> */}
          
          <div id="sidebarpl">
          <h2>Subscribe Our Youtube channel</h2>
            <div class="dark">
              <h3>What We Do</h3>
              <p>We make online vedios and lectures on c++ language. Content is very straight and with deeply and thouroughly explained.</p>
            </div>
            <a href="https://www.youtube.com/channel/UCk7ipmu-_OWZGNvA3YSaPVA"><button class="button">Suscribe</button></a>
          </div>
          </div>
        {/* </center> */}
        <div class="blw">
        <h2>Features of C++ in programming</h2>
        <h4>Encapsulation: It is the process of combining data and functions into a single unit called class. Using the method of encapsulation, the programmer cannot directly access the data rather data is accessible through the functions present inside the class. It led to the important concept of data hiding.</h4>
        <h4>Abstraction: It is one of the most powerful and vital features provided by object-oriented C++ programming language. The main idea behind data abstraction is to give a clear separation between properties of datatype and the associated implementation details.</h4>
        <h4>Polymorphism: It is the ability to use an operator or function in different ways. Poly, referring to many uses of these operators and functions. A single function usage or an operator functioning in many ways can be called polymorphism.</h4>
        <h4>Inheritance: It is the process by which new classes called derived classes are created from existing classes called base classes. The derived classes have all the features of the base class and the programmer can choose to add new features specific to the newly created derived classes.</h4>
        <h4>C++ better than C:</h4>
        <h4>Stronger typing: the type system in C++ is stronger than in C. This prevents many common programming errors – coupled with the next very important feature, the stronger type system even manages not be an inconvenience.</h4>
        <h4>A Bigger standard library: C++ allows the full use of the standard library. It includes the Standard Template Library.</h4>
        <h4>Parameterized types: the template keyword allows the programmer to write generic implementations of algorithms.</h4>
        <h4>Data and methods to edit the data act as one entity i.e. by the usage of classes.</h4>
        <h4>Limiting scope of data i.e. by using private/public variables.</h4>
        <h4>Constructors and destructors for defining default behaviour of entities.</h4>
        </div>
      </div>
 
    )
  }
}

const mapStateToProps = state => ({
    vedio:state.vedios.item
    // vedioerr:state.vedios.itemerr
});

export default connect(mapStateToProps, {findVedio})(Vedio);
// export default Vedio;
