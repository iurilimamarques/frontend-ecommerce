import React, { Component } from 'react';
import { Label, Menu } from "semantic-ui-react";

import './styles.css';

class SideBar extends Component {
    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        
        return (
            <div className="container-sidebar">
                <Menu vertical>
                    <Menu.Item
                        name='inbox'
                        active={activeItem === 'inbox'}
                        onClick={this.handleItemClick}
                    >
                        <Label color='teal'>1</Label>
                        Todos
                    </Menu.Item>

                    <Menu.Item
                        name='spam'
                        active={activeItem === 'spam'}
                        onClick={this.handleItemClick}
                    >
                        <Label>51</Label>
                        Livros
                    </Menu.Item>

                    <Menu.Item
                        name='updates'
                        active={activeItem === 'updates'}
                        onClick={this.handleItemClick}
                    >
                        <Label>1</Label>
                        Roupas
                    </Menu.Item>

                    <Menu.Item
                        name='eletronicos'
                        active={activeItem === 'eletronicos'}
                        onClick={this.handleItemClick}
                    >
                        <Label>1</Label>
                        Eletrônicos
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default SideBar;
