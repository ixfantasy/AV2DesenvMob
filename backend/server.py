# Nome: Nathália Pinto Fortunato & Jorbe Junior
# Matricula: 0050016724 & 0050016533

from flask import Flask
from flask_cors import CORS, cross_origin
from listContato import contatos, Cadastrar_contatos


app = Flask(__name__)
CORS(app)

@app.route("/contatos")
def contato():
    resultado = contatos()
    return resultado

@app.route("/gravar_contato")
def cadastro():
    resultado = cadastro()
    return resultado

if __name__ == "__main__":
    app.run(debug=True) 