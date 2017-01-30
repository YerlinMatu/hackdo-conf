import React from 'react';
import '../../scss/components/formSearch.scss';
import $ from 'jquery';
export default class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childrens: this.props.options,
      error: false,
      warning: false,
      msgStyle: 'valid',
      valid: false,
      search: '',
      pattern: this.props.pattern
    };
  }

  bindValue(self) {
    return function (e) {
      let canditate = e.target.value;
      if(canditate.length === 0) return self.showWarning();
      let isValid = self.validate(canditate);
      if(isValid) {
       self.hideMsg();
        self.setState({search: canditate, valid: true})
      } else {
       self.showError();
      }
    };
  }

  validate(canditate) {
    return /^\S[a-z0-9ñÑ]{3,}/g.test(canditate);
  }

  hideMsg() {
    this.setState({error: false, warning: false, msgStyle: 'valid'})
  }

  showError() {
    this.setState({error: true, warning: false, msgStyle: 'invalid', valid: false})
  }

  showWarning() {
    this.setState({error: false, warning: true, msgStyle: 'empty', valid: false})
  }

  render() {
    return (
      <div>
        <form className="form-search" onSubmit={this.props.onSubmit.bind(this)}>
          <button type="submit" className="btn-search"><i className="material-icons">&#xE8B6;</i> </button>
          <input type="text" className={"input-search "+(this.state.msgStyle)} placeholder={this.props.placeholder} onChange={this.bindValue(this)}/>
          <small className={"input-msg error "+ (!this.state.error ? 'hide' : '')} >Campo invalido</small>
          <small className={"input-msg warning "+ (!this.state.warning ? 'hide' : '')} >Campo vacio</small>


          <div className="row">
            {
              this.props.options.map((option, index)=> {
                return (
                  <div className={"columns large-"+(12/this.props.options.length)} key={index}>
                    {option}
                  </div>
                )
              })
            }
          </div>
        </form>
      </div>
    )
  }
};
