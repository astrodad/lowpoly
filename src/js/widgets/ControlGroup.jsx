import React from 'react';
import styled, { css } from 'styled-components';
import animate from '../common/animate';
import theme from '../common/theme';

const StyledControlGroup = styled.section``;

const Heading = styled.button`
    line-height: 2.4;
    font-weight: bold;
    position: relative;
    background: transparent;
    display: block;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 0 1rem;
    margin: 0;
    font-size: .9em;
    outline: none;
    text-align: left;
    color: #444;
    font-family: inherit;
    transition: 150ms ease;

    &:hover {
        color: ${theme.colours.primary};
    }
`;

const Arrow = styled.div`
    position: absolute;
    right: 0;
    display: block;
    top: 0;
    bottom: 0;

    :before, :after {
        display: block;
        position: absolute;
        content: '';
        height: 2px;
        width: .62em;
        background: #ccc;
        top: 50%;
        right: 1rem;
    }

    :after {
        transform-origin: center;
        transition: 150ms ease;
        transform: rotate(90deg) scaleX(1);
        ${props => props.open && css`
            transform: rotate(90deg) scaleX(0);
        `};
    }
`;

const Content = styled.div`
    overflow: hidden;
    transition: 450ms ease;
    padding: 0;
    background-color: #fbfbfb;
`;

const ContentInner = styled.div`
    padding: .5rem 1rem;
`;

export default class ControlGroup extends React.Component {
  constructor() {
    super();

    this.state = {
      open: true,
    };

    this.content = React.createRef();
  }

  toggleOpen() {
    if (this.state.open) {
      animate.slideUp(this.content.current);
    } else {
      animate.slideDown(this.content.current);
    }
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <StyledControlGroup className={this.props.className}>
        <Heading
          onClick={this.toggleOpen.bind(this)}
          open={this.state.open}>
          {this.props.title}
          <Arrow open={this.state.open} />
        </Heading>
        {this.state.open
          ? ''
          : ''}
        <Content ref={this.content}><ContentInner>{this.props.children}</ContentInner></Content>
      </StyledControlGroup>
    );
  }
}
