import React, { Component } from 'react';
import { Button, Input, Grid, Segment, Divider, Icon, Label, Dropdown, Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { modifySearch, clickSearch } from '../../store/ProductsConfig/actions';

import "semantic-ui-css/semantic.min.css";
import './styles.css';

const trigger = (
    <span>
        <Button circular icon='user outline' />
    </span>
);

const options = [
  { key: 'sign-in', 
    text: (
        <Link to="/login" style={{color: 'black'}}>
            <div>
                <Icon name='sign-in' />
                Entrar
            </div>
        </Link>
    )
  },
  { key: 'user', 
    text: (
        <Link to="/login" style={{color: 'black'}}>
            Cadastrar
        </Link>
    ), 
    icon: 'user'
  }
];

class TopBar extends Component {
    constructor(props) {
        super();        
        this.clickSearch = this.clickSearch.bind(this);
    }

    clickSearch(searchTerm) {
        this.props.clickSearch(searchTerm);
    }

    _handleKeyDown = (e) => {        
        if (e.key === 'Enter') {
            this.props.clickSearch(e.target.value);
        }
    }

    render() {     
        const { pending, search, cart_items_quantity } = this.props;        

        return (
            <div className="container-topbar">
                <Divider hidden />
                <Segment className="topbar">
                    <Grid columns={16} verticalAlign="middle" stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as="h2" className="titulo">E-Commerce</Header>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                { pending ?
                                    <Input
                                        placeholder="Buscar por..."
                                        size="big"
                                        loading
                                        value={search}
                                    />
                                    :
                                    <Input
                                        icon={{ name: 'search', link: true, onClick: () => this.clickSearch(search) }}
                                        placeholder="Buscar por..."
                                        size="big"
                                        value={search}
                                        onChange={text => this.props.modifySearch(text.target.value)}
                                        onKeyDown={this._handleKeyDown}
                                    />
                                }
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='heart' />
                                        Favoritos
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        3
                                    </Label>
                                </Button>

                                <Button as='div' labelPosition='right'>
                                    <Button color='blue'>
                                        <Icon name='shop' />
                                    </Button>
                                    <Label as='a' basic color='blue' pointing='left'>
                                        {cart_items_quantity==='' ? 0 : cart_items_quantity}
                                    </Label>
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={2} textAlign="right">
                                <Dropdown
                                    trigger={trigger}
                                    pointing='top left'
                                    icon={null}
                                    options={options}
                                    direction="left"
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  products: state.ProductsReducers.products,
  search: state.ProductsReducers.search,
  pending: state.ProductsReducers.pending,
  cart_items_quantity: state.ProductsReducers.cart_items_quantity
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({modifySearch, clickSearch}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (TopBar);
