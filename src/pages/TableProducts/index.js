import React from 'react';
import { Grid, Card, Icon, Image } from "semantic-ui-react";

import './styles.css';

const TableProducts = ({products}) => 
    <div className="list-products">
        <Grid columns={4} verticalAlign="middle">
            {products.response.map( (value, key) =>  
                <Grid.Row key={key}>
                    {value.map((v, k) =>
                        <Grid.Column width={4} key={v.i_produto}>
                            <Card floated="right">
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                <Card.Header>{v.nome}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Em estoque: {v.quantidade}</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='heart' />
                                    22 Favoritos
                                </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )}
                </Grid.Row>
            )}
        </Grid>
    </div>

export default TableProducts;
