/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import Control from './Control';
import withState from './withState';
import DialogReact from '../components-react/Dialog';
import React from 'react';
import {render, findDOMNode} from 'react-dom';


class HeaderJSX extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div />
    );
  }
}
class ContentJSX extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div />
    );
  }
}
class FooterJSX extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div />
    );
  }
}

export default class Dialog extends Control {

  constructor(props) {
    props.headerJSX = <HeaderJSX ref={(e)=>(this.headerContent = e)} />;
    props.contentJSX = <ContentJSX ref={(e)=>(this.contentContent = e)} />;
    props.footerJSX = <FooterJSX ref={(e)=>(this.footerContent = e)} />;
    super(props);
    this._reactComponentClass = DialogReact;
    this.header = props.header;
    this.content = props.content;
    this.footer = props.footer;
  }

  setHeader(header) {
    this.headerDOMNode.innerHTML = '';
    this.header = header;
    this.headerDOMNode.append(header);
  }

  getHeader() {
    return this.header;
  }

  setContent(content) {
    this.contentDOMNode.innerHTML = '';
    this.content = content;
    this.contentDOMNode.append(content);
  }

  getContent() {
    return this.content;
  }

  setFooter(footer) {
    this.footerDOMNode.innerHTML = '';
    this.footer = footer;
    this.footerDOMNode.append(footer);
  }

  getFooter() {
    return this.footer;
  }

  defaultClose = () => {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
    this.hide();
  }

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    const additionalProps = {onClose: this.defaultClose};
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} ref={el => (this._reactObject = el)} />;
    return reactElement;
  }
  _renderReactObject(callback) {
    const container = document.createElement('div');
    this._reactObject = render(
      this._getReactElement(),
      container,
      callback
    );
    return container;
  }

  render() {
    const newEl = this._renderReactObject(()=>{
      this.headerDOMNode = findDOMNode(this.headerContent);
      this.contentDOMNode = findDOMNode(this.contentContent);
      this.footerDOMNode = findDOMNode(this.footerContent);
      this.headerDOMNode.append(this.header || '');
      this.contentDOMNode.append(this.content || '');
      this.footerDOMNode.append(this.footer || '');
    });
    if (this.el !== undefined) {
      this.el.parentNode.replaceChild(newEl, this.el);
    }
    this.el = newEl;
    return this.el;
  }
}