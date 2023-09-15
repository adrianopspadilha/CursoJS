let amigo = {
    nome: 'Adriano', sexo: 'M', peso: 100.0, engordar(p) {
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} engordou ${amigo.peso}kg`)