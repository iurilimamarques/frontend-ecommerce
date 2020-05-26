import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form as FormSemantic, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { handleLogin, modifyEmail, modifyPassword } from '../../store/UserConfig/actions';
import { Formik, Form, Field } from 'formik';
import parse from 'html-react-parser';

import './styles.css';

const EmailInput = (props) => {    
    let erro = (props.erro!==undefined && props.touched.email) ? props.erro.erro : false;
    return <FormSemantic.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Email'
                type='email'
                error={erro}
                {...props}
            />
};

const PasswordInput = (props) => {
    let erro = (props.erro!==undefined && props.touched.password) ? props.erro.erro : false;    
    return <FormSemantic.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Senha'
                type='password'
                error={erro}
                {...props}
            />
};

const MessageError = (errors, touched, erroRequest) => {    
    if (errors.email!==undefined || errors.password!==undefined) {
        if (errors.email.erro || errors.password.erro) {
            return(
                <Message negative>
                    <Message.Header >{parse(errors.email.message || errors.password.message)}</Message.Header>
                </Message>
            );
        }else{
            return null;
        }
    }else if(erroRequest!='') {
        return(
            <Message negative>
                <Message.Header >{erroRequest}</Message.Header>
            </Message>
        );
    }else {
        return null;
    }
}

class Login extends Component {
    constructor() {
        super();
        this._handleLogin = this._handleLogin.bind(this);
    }

    _handleLogin({email, password}) {
        this.props.handleLogin(email, password);
    }

    componentDidMount() {
        
    }

    render() {
        const { email, password, error_login } = this.props;
        
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 400 }}>
                    <Header as='h2' textAlign='center' className='title-login'>
                        Log-in no Ecommerce
                    </Header>
                    <FormSemantic size='large'>
                        <Segment stacked>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    let errors = { email: { erro: false, message: '' },
                                                     password: { erro: false, message: '' } };

                                    values.email = email;
                                    values.password = password;
                                    
                                    if (!values.email) {
                                        errors.email.erro = true;
                                        errors.email.message = 'Necessário o preenchimento do e-mail!';
                                    } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email.erro = true;
                                        errors.email.message = 'Preencha o e-mail corretamente!';
                                    }

                                    /*const regexLowerCase = new RegExp('.*[a-z]');
                                    const regexUpperCase = new RegExp('.*[A-Z]');
                                    const regexMinimumADigit = new RegExp('[0-9]{1,1}');*/

                                    if (!values.password) {
                                        errors.password.erro = true;
                                        errors.password.message = 'Necessário o preenchimento da senha!';
                                    }
                                    
                                    /*else if (!regexLowerCase.test(values.password) || 
                                                !regexUpperCase.test(values.password ||
                                                !regexMinimumADigit.test(values.password))) {
                                        errors.password.erro = true;
                                        errors.password.message = ` No mínimo 8 caracteres! <br>
                                                                    Ao menos uma letra minúscula! <br>
                                                                    Ao menos uma letra maiúscula!`;
                                    }*/

                                    if (!errors.email.erro && !errors.password.erro) {
                                        errors = {};
                                    }
                                                                        
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {                                    
                                    setTimeout(() => {
                                        this._handleLogin(values);
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({ errors, touched, handleSubmit }) => (                                    
                                    <Form onSubmit={handleSubmit} noValidate>
                                        <Field 
                                            type="email" 
                                            name="email"
                                            as={EmailInput}
                                            erro={errors.email}
                                            touched={touched}
                                            value={email}
                                            onChange={text => this.props.modifyEmail(text.target.value)}
                                        />

                                        <Field 
                                            type="password" 
                                            name="password"
                                            as={PasswordInput}
                                            erro={errors.password}
                                            touched={touched}
                                            value={password}
                                            onChange={text => this.props.modifyPassword(text.target.value)}
                                        />

                                        {MessageError(errors, touched, error_login)}

                                        <Button 
                                            fluid 
                                            size='large' 
                                            type='submit' 
                                            primary>
                                            Login
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Segment>
                    </FormSemantic>
                    <Message>
                        Não tem conta ainda? <a href='#'>Cadastre-se</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
  email: state.UserReducers.email,
  password: state.UserReducers.password,
  error_login: state.UserReducers.error_login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleLogin, modifyEmail, modifyPassword }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Login);
