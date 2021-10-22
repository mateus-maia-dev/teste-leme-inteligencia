import React from 'react'
// import { Form } from './Form/FormCliente'

export const AddButton = () => {


    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Add Cliente
            </button>


            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Cadastro de Cliente</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body ">
                            {/* <Form /> */}
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

// Vai ter que abrir um MODAL