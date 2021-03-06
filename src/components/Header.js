import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";

@inject("UiStore")
@observer
export class Header extends React.Component {
  render() {
    const explorerUrl = this.props.UiStore.web3Store.explorerUrl || 'https://etherscan.io';
    
    return (
    <header className="header">
        <div className="container">
          <a href="#" className="header-logo"></a>
          <form className="form form_header">
            {/* <Link className="button" to='/retry'>Retry Failed Transaction</Link> */}
            <label htmlFor="network" 
                className="label">MultiSender Address: <a target="_blank" href={`${explorerUrl}/address/${process.env.REACT_APP_PROXY_MULTISENDER}`}>
                   {process.env.REACT_APP_PROXY_MULTISENDER}</a>
            </label>
            {/* <select id="network" className="select">
              <option value="">YourTokens</option>
              <option value="">YourTokens 1</option>
              <option value="">YourTokens 2</option>
            </select> */}
            <div className="socials">
          </div>
          </form>
        </div>
    </header>
    )
  }
}