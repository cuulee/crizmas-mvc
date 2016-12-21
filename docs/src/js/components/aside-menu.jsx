import React, {Component, PropTypes} from 'react';

class AsideMenu extends Component {
  constructor() {
    super();

    this.state = {expanded: true};

    this.onExpand = () => {
      this.setState({expanded: !this.state.expanded});
    };
  }

  render() {
    let className = 'aside-menu';

    if (this.state.expanded) {
      className += ' expanded';
    }

    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return <div className={className}>
      <button onClick={this.onExpand}>&#9776;</button>
      <div className="menu-content">{this.props.children}</div>
    </div>;
  }
}

AsideMenu.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default AsideMenu;
