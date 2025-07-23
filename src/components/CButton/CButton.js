import react from "react";
import "./CButton.css";

class Button {
  constructor(props){
    this.props = props;
  }

  render() {
    const content = this.props.children || this.props.label;
    return react.createElement("button", {
      className: this.props.className,
      onClick: this.props.onClick,
      disabled: this.props.disabled
    }, content);
  }
}

class ButtonPrimary extends Button {
  render() {
    const { className, onClick, disabled, label, children } = this.props;
    const content = children || label;
    return react.createElement("button", {
      className: `button button--primary ${className}`,
      onClick,
      disabled
    }, content);
  }
}

class ButtonSecondary extends Button {
  render() {
    const { className, onClick, disabled, label, children } = this.props;
    const content = children || label;
    return react.createElement("button", {
      className: `button button--secondary ${className}`,
      onClick,
      disabled
    }, content);
  }
}

class ButtonTerceareo extends Button {
  render() {
    const content = children || label;
    const { className, onClick, disabled, label, children } = this.props;
    return react.createElement("button", {
      className: `button button--terceareo ${className}`,
      onClick,
      disabled
    }, content);
  }
}

class ButtonText extends Button {
  render() {
    const { className, onClick, disabled, label, children} = this.props;
    const content = children || label;
    return react.createElement("button", {
      className: `button button--text ${className}`,
      onClick,
      disabled
    }, content);
  }
}

export class ButtonFactory {
  static createButton(tipo, props) {
    switch (tipo) {
      case 'primary':
        return new ButtonPrimary(props);
      case 'secondary':
        return new ButtonSecondary(props);
      case 'terceareo':
        return new ButtonTerceareo(props);
      case 'text':
        return new ButtonText(props);
      default:
        return new Button(props);
    }
  }
}

export const CButton = ({ tipo, ...props }) => {
  const button = ButtonFactory.createButton(tipo , props);
  return button.render();
}