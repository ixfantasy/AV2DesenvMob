# Nome: Nathália Pinto Fortunato & Jorbe Junior
# Matricula: 0050016724 & 0050016533

import pymysql.cursors
import json


def contatos():
    db_host="database-1.clrs6ibkuvxt.us-east-1.rds.amazonaws.com"
    db_banco="database-1"
    
    listaContato =[]
    jsonCont = {}
    
    
    # Conectar no banco
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='12345678',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection.cursor() as cursor:           
            sql = "SELECT nome,telefone FROM contato"
            cursor.execute(sql)
            comando = cursor.fetchall()
            for contatos in comando:
                listaContato.append(contato["nome","telefone"])
    
    jsonContat["contatos"] = listaContato
    json_object = json.dumps(jsonContat, indent=4 ) 
    
    return json_object    

def Cadastrar_contatos():
    db_host="database-1.clrs6ibkuvxt.us-east-1.rds.amazonaws.com"
    db_banco="database-1"
    
    
    # Conectar no banco
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='12345678',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection.cursor() as cursor:
           sql = "INSERT INTO Contatos (`nome`, `telefone`) VALUES (%s, %s)"
           cursor.execute(sql, connection) 