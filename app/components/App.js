import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
import Main from './Main';

function mapStateToProps(state) {
  return {
    state // TODO
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
