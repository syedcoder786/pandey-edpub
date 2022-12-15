import React, { Component } from 'react';
import '../style/vedios.css';
import {connect} from 'react-redux';
import { fetchVedios } from '../action/vediosActions';
class Vedios extends Component {

  componentDidMount(){
    this.props.fetchVedios();
  }

  onClick = (e) => {
    // const categoryid = e.target.value;
    console.log(e.target.id)
    // this.props.fetchSubCategories({ id:categoryid });
    window.location.assign("/vedio/"+e.target.id)
  }

  render() {

      const vediosItems = this.props.vedios.map(({ _id, img_path, name, discp, link }) => (
        
        <div key={_id}>
            <div className="box"  id={_id} onClick={this.onClick}>
              <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img><br/>
              <p id={_id} onClick={this.onClick} class="updiscp">{name}</p>
              <p id={_id} onClick={this.onClick} class="downdiscp">{discp}</p>
              {/* <b>Link- <a href={link} class="downdiscp">{link}</a></b><br/> */}
              
              {/* <hr/> */}
            </div>
        </div>
      
    
      ));
      
    
      return (
      <div>
  
      <section id="showcase">
        <div className="container">
          <h1>Affordable Professional C++ Courses</h1>
          <p><b>Courses on C++ from starting by Lal Bihari Pandey(JMI(Jamia Millia Islamia)- BTech CSE)</b></p>
        </div>
      </section>
        {/* <hr/> */}
      <section id="boxes">
      <div className="container">
        <center><h1 id="headlac">Lectures On C++</h1></center>
      {this.props.vediosLoading?<div><center><h1>Loading...</h1></center><br/></div>:vediosItems}
          {/* <br/> */}
          
            {/* <div className="box">
              <img src = "./logo192.png" alt = "hi"></img><br/>
              <p>Name- AnyName<br/>
              Description- AnyDescription<br/>
              <b>Time- Time</b><br/>
              </p>
              <hr/>
            </div>

            <div className="box">
              <img src = "./logo192.png" alt = "hi"></img><br/>
              <p>Name- AnyName<br/>
              Description- AnyDescription<br/>
              <b>Time- Time</b><br/>
              </p>
              <hr/>
            </div>

            <div className="box">
              <img src = "./logo192.png" alt = "hi"></img><br/>
              <p>Name- AnyName<br/>
              Description- AnyDescription<br/>
              <b>Time- Time</b><br/>
              </p>
              <hr/>
            </div> */}
      </div>
      </section> 

      <div>
            {/* <br/> */}
          <center>
          {/* <hr/> */}
          <div id="middelbar">
          <h2>Subscribe Our Youtube channel</h2>
            <div class="dark">
              <h3>What We Do</h3>
              <p>We make online vedios and lectures on c++ language. Content is very straight and with deeply and thouroughly explained.</p>
            </div>
            <a href="https://www.youtube.com/channel/UCk7ipmu-_OWZGNvA3YSaPVA"><button class="button">Suscribe</button></a>
          </div>
          </center>
          </div>
  
      </div>
      )
    
}
}

const mapStateToProps=state=>({
    vedios:state.vedios.items,
    vediosLoading:state.vedios.vediosLoading
});

export default connect(mapStateToProps, { fetchVedios })(Vedios);
// export default Vedios;
