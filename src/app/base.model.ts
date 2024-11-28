// readonly (para que una variable sea sólo de lectura)

export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
