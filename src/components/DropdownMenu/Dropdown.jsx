import React, { Component } from "react";
import {
  DropdownMenuContainer,
  DropdownButton,
  DropdownMenu,
} from "components/DropdownMenu/Dropdown.styled";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  onShowMenu = () => {
    this.setState({ visible: true });
  };

  onHideMenu = () => {
    this.setState({ visible: false });
  };

  toggleMenu() {
    this.setState(() => ({ visible: !this.state.visible }));
  }

  onToggleMenu = () => () => this.toggleMenu();

  render() {
    const { visible } = this.state;
    return (
      <DropdownMenuContainer>
        <DropdownButton
          type="button"
          onClick={() => {
            this.toggleMenu();
          }}>
          Показати toggle inline
        </DropdownButton>

        <DropdownButton type="button" onClick={this.onToggleMenu()}>
          Показати toggle
        </DropdownButton>

        <DropdownButton type="button" onClick={this.onShowMenu}>
          Показати
        </DropdownButton>

        <DropdownButton type="button" onClick={this.onHideMenu}>
          Сховати
        </DropdownButton>

        {visible && <DropdownMenu>Спадаюче меню</DropdownMenu>}
      </DropdownMenuContainer>
    );
  }
}

export default Dropdown;
