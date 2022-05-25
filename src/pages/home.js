import React from "react";
import '../App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, FormGroup, ModalFooter, ModalHeader } from 'reactstrap'


const data = [
    { Numero: 1, libro: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", vendidos: "500 millones" },
    { Numero: 2, libro: "El olvido que seremos", autor: "Hector Abad", vendidos: "200 millones" },
    { Numero: 3, libro: "El Código Da Vinci", autor: "Dan Brown", vendidos: "80 millones" },
    { Numero: 4, libro: "El señor de los anillos", autor: "J.R.R Tolkien", vendidos: "150 millones" },
    { Numero: 5, libro: "El Principito", autor: "Antoine de Saint-Exupery", vendidos: "140 millones" },
    { Numero: 6, libro: "Harry Potter", autor: "J.K Rowling", vendidos: "400 millones" },
    { Numero: 7, libro: "Crepúsculo", autor: "Stephenie Meyer", vendidos: "43 millones" },
    { Numero: 8, libro: "Alicia en el país de las Maravillas", autor: "Lewis Carroll", vendidos: "100 millones" },
    { Numero: 9, libro: "El Diario de Ana Frank", autor: " ", vendidos: "27 millones" },
    { Numero: 10, libro: "Las Crónicas de Narnia", autor: "C.S Lewis", vendidos: "85 millones" },
];

class home extends React.Component{
    state={
        data: data,
        form:{
            Numero:'',
            libro:'',
            autor:'',
            vendidos: ''
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
        nuevo.Numero = this.state.data.length+1;
        var lista = this.state.data;
        lista.push(nuevo);
        this.setState({data: lista, modalInsertar: false});
    }

    editarLibro=(info)=>{
        var contador = 0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if(info.Numero == registro.Numero){
                lista[contador].libro = info.libro;
                lista[contador].autor = info.autor;
                lista[contador].vendidos = info.vendidos;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar: false});
    }

    eliminarLibro=(info)=>{
        var opcion = window.confirm("¿Desea eliminar este libro?"+info.Numero);
        if(opcion){
            var contador = 0;
            var lista = this.state.data;
            lista.map((registro)=>{
                if(registro.Numero==info.Numero){
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
        <Button color="outline-primary" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Libro</Button>
        <br /><br />

        <Table>
            <thead><tr><th>NUMERO</th>
            <th>LIBROS</th>
            <th>AUTOR</th>
            <th>CANTIDAD</th>
            <th>ACCIONES</th></tr>
            </thead>
            <tbody>
                {this.state.data.map((elemento)=>(
                    <tr>
                        <td>{elemento.Numero}</td>
                        <td>{elemento.libro}</td>
                        <td>{elemento.autor}</td>
                        <td>{elemento.vendidos}</td>
                        <td><Button color="outline-primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                        <Button color="outline-danger" onClick={()=>this.eliminarLibro(elemento)}>Eliminar</Button></td>
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
                   <label>NUMERO:</label> 
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

                <FormGroup>
                   <label>CANTIDAD: </label> 
                   <input className="form-control" name="vendidos" type="text" onChange={this.handleChange}/>
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
                   <label>NUMERO:</label> 
                   <input className="form-control" readOnly type="text" value={this.state.form.Numero}/>
                </FormGroup>

                <FormGroup>
                   <label>LIBRO:</label> 
                   <input className="form-control" name="libro" type="text" onChange={this.handleChange} value={this.state.form.libro}/>
                </FormGroup>

                <FormGroup>
                   <label>AUTOR: </label> 
                   <input className="form-control" name="autor" type="text" onChange={this.handleChange} value={this.state.form.autor}/>
                </FormGroup>

                <FormGroup>
                   <label>CANTIDAD:</label> 
                   <input className="form-control" name="vendidos" type="text" onChange={this.handleChange} value={this.state.form.vendidos}/>
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