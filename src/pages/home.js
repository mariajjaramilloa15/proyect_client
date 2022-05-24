import React from "react";
import '../App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, FormGroup, ModalFooter, ModalHeader } from 'reactstrap'


const data = [
    { id: 1, libro: "Divina Comedia", autor: "Dante Alighieri" },
    { id: 2, libro: "MARFIL", autor: "Mercedes Ron" },
    { id: 3, libro: "Cazadores de Sombras", autor: "Cassandra Clare" },
    { id: 4, libro: "Pideme lo que quieras", autor: "Megan Maxwell" },
    { id: 5, libro: "Game Of Thores", autor: "George R.R Martin" },
];

class home extends React.Component{
    state={
        data: data,
        form:{
            id:'',
            libro:'',
            autor:''
        },
        modalInsertar: false,
        modalEditar: false
    };

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInsertar=()=>{
        this.setState({modalInsertar: true});
    }

    ocultarModalInsertar=()=>{
        this.setState({modalInsertar: false});
    }

    mostrarModalEditar=(registro)=>{
        this.setState({modalEditar: true, form: registro});
    }

    ocultarModalEditar=()=>{
        this.setState({modalEditar: false});
    }

    insertarLibro=()=>{
        var nuevo = {...this.state.form};
        nuevo.id = this.state.data.length+1;
        var lista = this.state.data;
        lista.push(nuevo);
        this.setState({data: lista, modalInsertar: false});
    }

    editarLibro=(info)=>{
        var contador = 0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if(info.id == registro.id){
                lista[contador].libro = info.libro;
                lista[contador].autor = info.autor;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar: false});
    }

    eliminarLibro=(info)=>{
        var opcion = window.confirm("¿Desea eliminar este libro?"+info.id);
        if(opcion){
            var contador = 0;
            var lista = this.state.data;
            lista.map((registro)=>{
                if(registro.id==info.id){
                    lista.splice(contador, 1);
                }
                contador ++;
            });
            this.setState({data: lista});
        }
    }

    render(){
        return(
        <>
        <div className="text-center"><h3>¡BIENVENIDOS A LA BIBLIOTECA REACT!</h3></div>
        
        <Container>
        <br />
        <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Libro</Button>
        <br /><br />

        <Table>
            <thead><tr><th>ID</th>
            <th>LIBROS</th>
            <th>AUTOR</th>
            <th>ACCIONES</th></tr>
            </thead>
            <tbody>
                {this.state.data.map((elemento)=>(
                    <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.libro}</td>
                        <td>{elemento.autor}</td>
                        <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                        <Button color="danger" onClick={()=>this.eliminarLibro(elemento)}>Eliminar</Button></td>
                    </tr>
                ))}
            </tbody>

        </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
                <div><h3>Insertar</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                   <label>ID:</label> 
                   <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                </FormGroup>

                <FormGroup>
                   <label>LIBRO:</label> 
                   <input className="form-control" name="libro" type="text" onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup>
                   <label>AUTOR: </label> 
                   <input className="form-control" name="autor" type="text" onChange={this.handleChange}/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={()=>this.insertarLibro()}>Insertar</Button>
                <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
                <div><h3>Editar</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                   <label>ID:</label> 
                   <input className="form-control" readOnly type="text" value={this.state.form.id}/>
                </FormGroup>

                <FormGroup>
                   <label>LIBRO:</label> 
                   <input className="form-control" name="libro" type="text" onChange={this.handleChange} value={this.state.form.libro}/>
                </FormGroup>

                <FormGroup>
                   <label>AUTOR: </label> 
                   <input className="form-control" name="autor" type="text" onChange={this.handleChange} value={this.state.form.autor}/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={()=>this.editarLibro(this.state.form)}>Editar</Button>
                <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
            </ModalFooter>
        </Modal>








        </>)
    }
}

export default home;