import React, { Component } from 'react';

import { Button, Input, Grid, Segment, Divider, Icon, Label, Dropdown, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import './styles.css';

const trigger = (
    <span>
        <Button circular icon='user outline' />
    </span>
);

const options = [
  { key: 'sign-in', text: 'Entrar', icon: 'sign-in' },
  { key: 'user', text: 'Cadastrar', icon: 'user' }
];

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.state = { botao: true };
        this.changeBool = this.changeBool.bind(this);
    }

    changeBool(){
        let { botao } = this.state;
        if (botao) {
            this.setState({botao: false})
        }else{
            this.setState({botao: true})
        }
    }

    render() {
        const { botao } = this.state;
        return (
            <div className="container-topbar">
                <Divider hidden />
                <Segment>
                    <Grid columns={16} verticalAlign="middle" stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as="h2" className="titulo">E-Commerce</Header>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                {botao ?
                                    <Input
                                        icon={{ name: 'search', link: true, onClick: () => this.changeBool() }}
                                        placeholder="Buscar por..."
                                        size="big"
                                    />
                                    :
                                    <Input
                                        placeholder="Buscar por..."
                                        size="big"
                                        loading
                                        onClick={() => this.changeBool()}
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
                                        5
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

export default TopBar;
