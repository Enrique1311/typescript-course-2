// enum declara cuáles son las opciones que tengo para asignar valores a una variable
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const enriqueUser: User = {
  username: 'enriq',
  role: ROLES.ADMIN,
};
