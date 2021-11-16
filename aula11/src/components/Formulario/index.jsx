import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2'

export default class Formulario extends Component {

    handleSubmit = ({ nome, number, email }) => {
        if(nome === ''){
            Swal.fire({
                title: 'Aconteceu um erro',
                icon: 'error',
                text: 'ih rapaz'
            })
        }else{
            Swal.fire({
                title: 'Valores enviados!',
                icon: 'success',
                html: `
                nome: ${nome} <br/>
                telefone: ${number} <br/>
                email: ${email}
                `
            })
        }
    }

    render(){
        return(
            <>
                <Formik initialValues={{ nome: '', number: 0, email: '' }} onSubmit={this.handleSubmit}>
                    <Form >
                        <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
                        <Field type="number" name="number" id="number" className="form-control"></Field>
                        <Field placeholder="Insira seu email" type="email" name="email" id="email" className="form-control"></Field>
                        <button type="submit" >Enviar</button>
                    </Form>
                </Formik>
            </>
        )
    } 
}

