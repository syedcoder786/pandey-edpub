import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import About from '../About';
import Addvedio from '../Addvedio';
import Vedio from '../Vedio';
import Vedios from '../Videos';

class Dashboard extends Component {

  render() {

      return (

          <div>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/">
                      <Vedios />
                    </Route>
                    <Route path="/vedio/:id" component={Vedio}>
                      {/* <Vedio /> */}
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/addrecord">
                      <Addvedio />
                    </Route>
                    {/* <Route path="/videos">
                      <Youtubeapi />
                    </Route>
                    <Route path="/pay/:id" component={Product}>
                    </Route>
                    <Route path="/noti" component={Notification}>
                    </Route>
                    <Route path="/form" component={PostForm}>
                    </Route> */}
                    
                  </Switch> 
                </BrowserRouter>
          </div>
                
      )
    
    }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

export default Dashboard;
