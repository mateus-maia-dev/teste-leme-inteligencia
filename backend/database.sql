-- Queries em SQL 

CREATE DATABASE ecommerce;

CREATE TABLE IF NOT EXISTS clientes(
    id BIGSERIAL CONSTRAINT pk_clientes PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    data_nasc timestamptz,
    telefone VARCHAR(15),
    ativo INT NOT NULL
    
)


CREATE TABLE IF NOT EXISTS pedido_status(
    id BIGSERIAL CONSTRAINT pk_pedido_status PRIMARY KEY,
    descricao VARCHAR(255)
)

-- EXECUTAR ESTA QUERY NO DBEAVER PARA INSERÇÃO DOS DADOS MANUALMENTE NA TABELA
INSERT INTO pedido_status
    (descricao)
VALUES
    ('Solicitado'), ('Concluído'), ('Cancelado')



CREATE TABLE IF NOT EXISTS pedidos(
    id BIGSERIAL CONSTRAINT pk_pedidos PRIMARY KEY,
    produto VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_pedido timestamptz NOT NULL,
    cliente_id INTEGER NOT NULL, 
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    pedido_status_id INTEGER NOT NULL,
    FOREIGN KEY (pedido_status_id) REFERENCES pedido_status(id),

    ativo INTEGER NOT NULL
)

CREATE TABLE IF NOT EXISTS pedidos_imagens(
    id BIGSERIAL CONSTRAINT pk_pedidos_imagens PRIMARY KEY,
    pedido_id INTEGER NOT NULL, 
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    imagem VARCHAR(255),
    capa VARCHAR(255)
)