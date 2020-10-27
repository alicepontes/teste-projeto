const items = [
  {
    id: 0,
    nome: "Orquídia",
    img: "img/orquidia.jpg",
    preco1: 50.9,
    preco: 50.9 / 2,
    somarItens: 1,
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Tulipa",
    img: "img/tulipa.jpg",
    preco1: 39.9,
    preco: 39.9 / 2,
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Rosas",
    img: "img/rosa.jpg",
    preco1: 45.9,
    preco: 45.9 / 2,
    quantidade: 0,
  },
  {
    id: 3,
    nome: "Suculenta",
    img: "img/suculenta.jpg",
    preco1: 29.9,
    preco: 29.9 / 2,
    quantidade: 0,
  },
  {
    id: 4,
    nome: "Terrário",
    img: "img/terrario1.jpg",
    preco1: 50.9,
    preco: 50.9 / 2,
    quantidade: 0,
  },
  {
    id: 5,
    nome: "Terrário com fonte",
    img: "img/terrario2.png",
    preco1: 50.9,
    preco: 50.9 / 2,
    quantidade: 0,
  },

  
];
inicializarLoja = () => {
  var containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    containerProdutos.innerHTML +=
      ` <div id="produtos-container">
                <div class="produto-single" >
                    <img id="img-card" src="` +
      val.img +
      `" />
                   <div id="card-nome"> <p id="card-nome"> ` +
      val.nome +
      ` </p>
                    <p id="card-nome"> ` +
      val.preco1 +
      ` </p></div>
                   <div id="adicionar" > <a id="adicionar"  key="` +
      val.id +
      `" href="#"> Adicionar  </a></div>
                </div>
        </div>
        </br>
        `;
  });
};
inicializarLoja();

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById("carrinho");
  containerCarrinho.innerHTML = "ITENS ADICIONADOS:";
  items.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
         <p>` +
        val.nome +
        ` | quantidade: ` +
        val.quantidade +
        ` | preço ` +
        val.preco +
        `</p>
         <hr>
  
        `;
    }
  });
};
var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    items[key].quantidade++;
    atualizarCarrinho();
    return false;
  });
}

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    items[key].preco *= 2;
    atualizarCarrinho();
    return false;
  });
}


//Passar string para número
function moneyTextToFloat(text){
  var cleanText=text.replace('R$', '').replace(',', '.');
  return parseFloat(cleanText);
}
//Passar número para string
function floatToMoneyText(value){
  var text= (value<1 ? '0' : '')+ Math.floor(value * 100);
  text='R$'+text;
  return text.substr(0, text.length -2) + ',' +text.substr(-2);
}

//LER O TOTAL
function readTotal() {
  var total=document.getElementById('total');
  return moneyTextToFloat(total.innerHTML);
}

//ESCREVER O TOTAL
function writeTotal(value){
  var total=document.getElementById('total');
  total.innHTML=floatToMoneyText(value);
}

//CALCULAR TOTAL PELO PREÇO E QUANTIDADE
function calculateTotalProducts(){
  var produtos=document.getElementsByClassName('produto');
  var totalProdutos=0;
    for (var pos=0; pos<produtos.length; pos++){
      var priceElements= produtos[pos].getElementsByClassName('price');
      var priceText=priceElements[0].innerHTML;
      var price=moneyTextToFloat(priceText);
      var qtyElements=produtos [pos].getElementsByClassName('quantity');
      var qtyText=qtyElements[0].value;
      var quantity=moneyTextToFloat(qtyText);
      var subtotal=quantity * price;
      totalProdutos+=subtotal;
   }
    return totalProdutos;
  }
   // }
//}
document.getElementById("btn-carrinho").addEventListener("click", () => {
  alert("Compra realizada com sucesso!");
});
document.getElementsByTagName("btn_inscrição").addEventListener("click", () => {
  alert("Cadastrado(a) com sucesso!");
});

