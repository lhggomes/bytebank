
  export interface Transferencia {
      id?: number | string;
      valor: number;
      destino: string | number;
      data?: Date;
  }

  export interface RootObject {
      transferencias: Transferencia[];
  }


