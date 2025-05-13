class Heroi { //classe Heroi.
  constructor(nome, idade, tipo) { //Método construtor da classe.
    this.nome = nome; //propriedades do héroi
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() { //função dentro da classe, representa a ação do heroi
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque genérico";
    }
    console.log(`O ${this.tipo}, ${this.nome}, ${this.idade} anos, atacou usando ${ataque}`);
  }
}

// Exemplos de criação de heróis e seus ataques
let mago = new Heroi("Merlin", 150, "mago");
mago.atacar();

let guerreiro = new Heroi("Arthur", 35, "guerreiro");
guerreiro.atacar();

let monge = new Heroi("Bruce", 42, "monge");
monge.atacar();

let ninja = new Heroi("Hanzo", 28, "ninja");
ninja.atacar();

let personagemDesconhecido = new Heroi("Zé Ninguém", 20, "arqueiro");
personagemDesconhecido.atacar();
