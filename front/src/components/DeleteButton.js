import React, { Fragment } from 'react'

export const DeleteButton = ({ delClient }) => {
    return (
        <Fragment className="container">
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">
                Excluirizin
            </button>
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Atenção</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body">
                            Tem certeza que deseja excluir o cliente?
                        </div>


                        <div className="d-flex p-3 text-white justify-content-end">
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => delClient()}>Sim</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
