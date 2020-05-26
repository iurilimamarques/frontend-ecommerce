import React, { Component } from 'react';
import { Grid, Card, Icon, Image, Button, Segment } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCategories, getAllProducts } from '../../store/ProductsConfig/actions';

import './styles.css';

class TableProducts extends Component {
    constructor() {
        super();
    }

    render() {
        const { products } = this.props;
        return (
            <Grid verticalAlign="middle" columns={4}>
                {products.response.map((value, key) => 
                    <Grid.Row key={key}>
                        {value.map((v, k) => 
                            <Grid.Column key={v.i_produto} className="column-card">
                                <Card floated="right" className="card-product">
                                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                    <Card.Content>
                                    <Card.Header className="header-product">
                                        <span className="title-product">{v.nome}</span>
                                        <label className="price">R$ {v.preco}</label>
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Em estoque: {v.quantidade}</span>
                                    </Card.Meta>
                                    <Card.Description className="description-container">
                                        
                                            <Button inverted 
                                                    color="blue"
                                                    onClick={() => this.props.setCartItems(v.i_produto)}
                                            >
                                                <Icon name="plus cart"/>
                                                Adicionar ao carrinho
                                            </Button>

                                            <Button inverted color="red" className="btn-add-favorite">
                                                <Icon name="heart"/>
                                                Adicionar aos favoritos
                                            </Button>
                                        
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <a className="info-favorites">
                                            <Icon name="heart" />
                                            22 Favoritaram
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )}
                    </Grid.Row>
                )}      
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCategories, getAllProducts }, dispatch);

export default connect(null, mapDispatchToProps) (TableProducts);
