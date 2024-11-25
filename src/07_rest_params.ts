import { User, ROLES } from './02_enums';

const currentUser: User = {
  username: 'Santi',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  // if (currentUser.role === 'admin') {
  //   return true;
  // } else {
  //   return false;
  // }

  // o puede ser:
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  } else {
    return false;
  }
};

console.log(checkAdminRole());

// función para ver si algún usuario comple con determinado roll
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};
const rta = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole:', rta);

// versión 2

export const checkRole2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
const rta2 = checkRole2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRole2:', rta2);

// * Versión Rest: verión 3 (la función puede recibir infinita cantidad de parámetros)
export const checkRole3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
const rta3 = checkRole3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRole3:', rta3);
