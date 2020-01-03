import React from 'react';
import styled, { css } from 'styled-components';
import { TextField, NumberField, Label } from '../widgets/Fields';


const StyledSingleInput = styled.div`
    position: relative;
    margin-top: 1rem;
`;

const StyledLabel = styled(Label)`
    position: absolute;
    top: 1ch;
    left: 1ch;
    padding: 0 .5ch;
    pointer-events: none;
    transition: 150ms ease;
    color: #888;

    ${p => p.focus && css`
        top: 0;
        font-size: 0.9em;
        color: #e14;
        font-weight: bold;
        transform: translateY(-50%);
        background: linear-gradient(#f8f8f8, #fff);
        font-weight: 700;
    `};
`;

const fieldCSS = css`
    display: block;
    width: 100%;
    border: 2px solid #eee;
    padding: 1ch;
    border-radius: 3px;
    transition: 150ms ease;
    outline: none;
    font-size: .9rem;
    font-family: inherit;
    margin: 1em 0;

    ${p => p.focus && css`
        border-color: #e14;
    `};
`;

const StyledNumberField = styled(NumberField)`
    ${fieldCSS};
`;

const StyledTextField = styled(TextField)`
    ${fieldCSS};
`;

export default class SingleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value !== undefined ? this.props.value : '',
      focus: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleFocus(e) {
    this.setState({ focus: true });
    if (this.props.onFocus !== undefined) this.props.onFocus.call(this, e);
  }

  handleBlur(e) {
    this.setState({ focus: false });
    if (this.props.onBlur !== undefined) this.props.onBlur.call(this, e);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onChange !== undefined) this.props.onChange.call(this, e);
  }

  render() {
    const { name, label, type } = this.props;
    const { value, focus } = this.state;

    const fieldProps = {
      name,
      value,
      focus,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
    };

    let input;

    // console.log(type);

    switch (type) {
      case 'text':
        input = <StyledTextField {...fieldProps} />;
        break;
      case 'number':
        input = <StyledNumberField {...fieldProps} />;
        break;
      default:
        input = <StyledTextField {...fieldProps} />;
        break;
    }

    return (
            <StyledSingleInput focus={focus}>
                <StyledLabel
                    focus={focus || value !== ''}
                    htmlFor={name}>{label}</StyledLabel>
                {input}
            </StyledSingleInput>
    );
  }
}
