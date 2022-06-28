class Lanche{

    constructor(combo, hamburguer, queijo, batataP, fruta, alface, molho, picles, frango){
        this.hamburguer = hamburguer;
        this.batataP = batataP;
        this.cebola = cebola;
        this.fruta = fruta;
        this.alface = alface;
        this.molho = molho;
        this.picles = picles;
        this.frango = frango;
        this.combo = combo;
        this.queijo = queijo;
    }

combo(batata, bebida){
   if (batata === true || bebida === true){
    this.combo = Lanche;
   }
}

}
const BigLanche = new Lanche("hamburguer, alface, queijo, molho, cebola, picles");

const McHen = new Lanche("frango, alface, queijo, picles");

const McLancheAlegre = new Lanche("hamburguer, queijo, batataP, fruta");
