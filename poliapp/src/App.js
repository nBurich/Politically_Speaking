import React, { Component, Header, BrowserRouter as Route} from "react"
import { Container} from 'reactstrap';
import './App.css'
import Home from './pages/Login'
import About from './pages/About'
import House from './pages/House'
import Senate from './pages/Senate'
import Bills from './pages/Bills'
import Committees from './pages/Committees';
// import { subscribeToTimer } from './api';

  class App extends Component {

    render() {
      return (
        <Container>
            <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/house" component={House} />
              <Route exact path="/senate" component={Senate} />
              <Route exact path="/bills" component={Bills} />
              <Route exact path="/committees" component={Committees} />
            {/* <Switch>
              <Route path ="/house/:id" render={({match})=> (<CongresspersonShow member={match.params.id}/>) }/>
              <Route path ="/senate/:id" render={({match})=> (<CongresspersonShow member={match.params.id}/>) }/>
              <Route path ="/bills/:id" render={({match})=> (<BillShow id={match.params.id}/>) }/>
            </Switch> */}
          </Container>
      );
    }
  }
  
  export default App;