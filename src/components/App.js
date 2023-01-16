import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import ConfirmPage from './ConfirmPage'
import FinalPage from './FinalPage'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props;
    
    const { page } = this.state;
  

    return (
      <div>
        {page === 1 && <FirstPage onSubmit={this.nextPage} />}
        
        {page === 2 && (<SecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>)}

        {page === 3 && (<ThirdPage previousPage={this.previousPage} nextPage={this.nextPage} partyId="1667"/>)}
        
        {page === 4 && (<FourthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>)}

        {page === 5 && (<ConfirmPage previousPage={this.previousPage} onSubmit={onSubmit}/>)}

        {/* {page === 6 && (<FinalPage  onSubmit={onSubmit}/>)} */}

      </div>
    )
  }
}

App.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default App;