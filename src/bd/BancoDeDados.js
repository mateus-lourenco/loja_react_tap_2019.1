const PRODUTOS = [
	{"nome":"Data Science do zero (Português) Capa Comum – 29 jun 2016", "preco":"57.90", "foto": "https://images-na.ssl-images-amazon.com/images/I/61%2B21qnbSaL._SS120_.jpg"},
	{"nome":"DataSistemas e Software de Tempo Real (Português) Capa Comum – 1 dez 2003","preco":"18.00","foto": "https://images-na.ssl-images-amazon.com/images/I/51TyADohPqL._SX359_BO1,204,203,200_.jpg"},
	{"nome":"Engenharia de Software (Português) Capa Comum – 23 mai 2007","preco":"45.00","foto": "https://images-na.ssl-images-amazon.com/images/I/416yjCrUsNL._SX370_BO1,204,203,200_.jpg"},
	{"nome":"Uml Na Prática. Do Problema Ao Sistema (Português) Capa Comum – 5 out 2009","preco":"29.00","foto": "https://images-na.ssl-images-amazon.com/images/I/41jr2mZghHL._SX338_BO1,204,203,200_.jpg"},
	{"nome":"Linguagem De Programação Cobol Para Mainframe (Português) Capa Comum – 1 jan 2008","preco":"46.00","foto": "https://images-na.ssl-images-amazon.com/images/I/41KT45GeWGL._SX334_BO1,204,203,200_.jpg"}
];

class BancoDeDados {
    static getProdutos(){
        return PRODUTOS;
    }
}

export default BancoDeDados;