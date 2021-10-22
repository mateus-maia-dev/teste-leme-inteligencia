import React, { Fragment } from 'react'

export const EditButton = ({ client }) => {
    return (
        <Fragment>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${client.id}`}>
                Editar
            </button>


            <div class="modal fade" id={`id${client.id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Editar Cliente</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* Isso vai ser um formulário que vai receber vários inputs! */}
                        <div class="modal-body">
                            <input type="text" className="form-control" value={client.nome} />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" >Editar</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}
