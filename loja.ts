export class Loja {

  constructor(
      public nome_loja: string, 
      public logradouro: string, 
      public numero: number, 
      public complemento: string,
      public bairro: string, 
      public municipio: string, 
      public estado: string, 
      public cep: string,
      public telefone: string, 
      public observacao: string, 
      public cnpj: string, 
      public inscricao_estadual: string) { }

  public dados_loja(): string {

      if (this.nome_loja == "")
      throw new Error(`O campo nome da loja é obrigatório`)

      if(this.logradouro == "")
      throw new Error("O campo logradouro do endereço é obrigatório")

      if(this.municipio == "")
      throw new Error("O campo município do endereço é obrigatório")

      if(this.estado == "")
      throw new Error("O campo estado do endereço é obrigatório")

      if(this.cnpj == "")
      throw new Error("O campo CNPJ da loja é obrigatório")

      if(this.inscricao_estadual == "")
      throw new Error("O campo inscrição estadual da loja é obrigatório")



      const _logradouro : string = this.logradouro + ", "
      const _numero : string = this.numero? `${this.numero}` : "s/n"
      const _complemento : string = this.complemento && " " + this.complemento || "";
      const _bairro : string = this.bairro? this.bairro + " - " : ""
      const _municipio = this.municipio + " - "

      const _cep : string = this.cep? `CEP:${this.cep}` : ""
      let _telefone : string = this.telefone? `Tel ${this.telefone}` : ""
      _telefone = _cep && _telefone? " " + _telefone : _telefone
      
      const _observacao : string = this.observacao? this.observacao : ""

      const _cnpj : string = `CNPJ: ${this.cnpj}`
      const _inscricao_estadual : string = `IE: ${this.inscricao_estadual}`


  return `${this.nome_loja}
${_logradouro}${_numero}${_complemento}
${_bairro}${_municipio}${this.estado}
${_cep}${_telefone}
${_observacao}
${_cnpj}
${_inscricao_estadual}
`
}
}