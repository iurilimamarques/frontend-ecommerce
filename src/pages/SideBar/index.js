import React, { Component } from 'react';
import { Label, Menu } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchByCategory } from '../../store/ProductsConfig/actions';

import './styles.css';

class SideBar extends Component {
    constructor() {
        super();
        this.state = { activeItem: 'inbox' }
    }
    handleItemClick = (e, { i_category, name }) => {                
        this.setState({ activeItem: name })
        this.props.searchByCategory(i_category);
    }

    render() {
        const { activeItem } = this.state
        const { categories } = this.props;
        
        return (
            <div className="container-sidebar">
                <Menu vertical>
                    {categories.response.map((value, key) => {
                        return( <Menu.Item
                                    key={key}
                                    name={value.nome}
                                    i_category={value.i_categoria}
                                    active={activeItem === value.nome}
                                    onClick={this.handleItemClick}
                                >
                                    {value.nome==='Todos'
                                        ?   <Label color="teal">{value.count}</Label>
                                        :   <Label>{value.count}</Label>
                                    }
                                    {value.nome}
                                </Menu.Item>)
                    })}
                </Menu>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({searchByCategory}, dispatch);

export default connect(null, mapDispatchToProps) (SideBar);
