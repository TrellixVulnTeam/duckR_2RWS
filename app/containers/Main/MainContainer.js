import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default withRouter(connect(
  (state) => ({ isAuthed: state.isAuthed })
)(MainContainer))
// (state) => ({isAuthed: state.isAuthed}) = mapToState
