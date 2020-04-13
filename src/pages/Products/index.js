import React, { Component } from 'react';
import { Grid, Segment, Card, Icon, Image } from "semantic-ui-react";

import TopBar from '../TopBar';
import SideBar from '../SideBar';

import './styles.css';

class Products extends Component {
    render() {
        return(
            <div className="container-products">
                <TopBar />
                
                <div className="container-products-filter">
                    <SideBar />

                    <div className="list-products">
                        <Grid columns={4} verticalAlign="middle" className="teste">
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <Card floated="right" vertically>
                                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Header>Matthew</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Joined in 2015</span>
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
                                <Grid.Column width={4}>
                                    <Card>
                                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Header>Matthew</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Joined in 2015</span>
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
                                <Grid.Column width={4}>
                                    <Card>
                                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Header>Matthew</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Joined in 2015</span>
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
                                <Grid.Column width={4}>
                                    <Card>
                                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Header>Matthew</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Joined in 2015</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            Matthew is a musician living in Nashville.
                                        </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                        <a>
                                            <Icon name='heart'/>
                                            22 Favoritos
                                        </a>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                            
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
