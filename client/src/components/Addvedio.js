import React, { Component } from 'react';
// import '../styles/header.css';
import { connect } from 'react-redux';
import { addrecord } from '../action/recordActions';
class Addvedio extends Component {

    
  state = {
    img_path:"",
    rname:"",
    discp:"",
    link:""
  }
//   componentDidMount(){
//     this.props.fetchCake();
//   }


//   onClick = (e) => {
//     // const categoryid = e.target.value;
//     console.log(e.target.id)
//     // this.props.fetchSubCategories({ id:categoryid });
//     window.location.assign("/cake/"+e.target.id)
//   }

onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state.rname)
}

onSubmit=(e)=>{
    e.preventDefault();
    const record = {
      img_path:this.state.img_path,
      rname:this.state.rname,
      discp:this.state.discp,
      link:this.state.link
    };
    console.log(record)
    this.props.addrecord(record)
}

  render() {

    // const cakeItems = this.props.cakes.map(({ _id, img_path, name, discp, price, percent }) => (
    //   <div className="box" id={_id} onClick={this.onClick}>
    //       <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img>
    //       <h5>{name}</h5>
    //       <p>{discp}</p>
    //       <div id="btm">
    //         <div id="pl">{price}</div>
    //         <div id="pr">{percent}</div>
    //       </div>
    //   </div>
    // ));
      
      return (
      <div>
          <center>
              <br/><br/>
              <form method="post" onSubmit = {this.onSubmit}>
                  <input name="img_path" type="text" onChange = {this.onChange} placeholder="img_path"></input><br/><br/>
                  <input name="rname" type="text" onChange = {this.onChange} placeholder="rname"></input><br/><br/>
                  <input name="discp" type="text" onChange = {this.onChange} placeholder="discp"></input><br/><br/>
                  <input name="link" type="text" onChange = {this.onChange} placeholder="link"></input><br/><br/>
                  {/* <input name="percent" type="text" onChange = {this.onChange} placeholder="percent"></input> */}
                  <input type="submit" ></input>
              </form>
          </center>
        
  
      {/* <footer>
        <p>About us</p>
      </footer> */}
  
  
        </div>
      )
    
}
}

const mapStateToProps=state=>({
    // cakes:state.categories.cakes,
    // cakeLoading:state.categories.cakeLoading,
    // auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, {addrecord} )(Addvedio);
// export default AddCake;
