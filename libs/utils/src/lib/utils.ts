import {Picture,Location,User, SimpleNameType, Company} from '@trucos/models'

export function utils(): string {
  return 'utils';
}

/**
 * Method to say Hello in spanish
 * @param name user's name
 * @returns
 */

export function greet(name:string):string{
  return `Hola ${name}`;
}

export class Person
{
  readonly name:string;
  lastName='';
  age:number | null|undefined;
  location!:Partial<Location>;
  getFullName():string{
    return `${this.name} ${this.lastName}`
  }
  constructor(){
    this.name='Cristian';

  }
}

const person = new Person();
// person.name='Cristian';
person.lastName='Soncco';
person.age = undefined;
person.location= {
  city:'Lugo',
  country:'Spain'
}



person.getFullName();


const user: Required<User> = {
  gender:'',
  name:{},
  location:{
    street:{
      name:'Las Hiedras',
      number:30
    }
  },
  email:'',
  login:{},
  dob:{},
  registered:{},
  phone:'',
  cell:'',
  id:{},
  picture:{},
  nat:'',
}

const name:SimpleNameType={
  first:"Cristian",
  last:"Soncco"
}

const userPhoto: Readonly<Picture> = {
  large:'https://via.placeholder.com/300.png',
  medium:'https://via.placeholder.com/150.png',
  thumbnail:'https://via.placeholder.com/50.png'
};

// userPhoto.large='https://via.placeholder.com/500.png';


function getStreetNumber(cliente:User | Company) :number|string{
  //typeof
  if(cliente.location?.street?.number && typeof cliente.location?.street?.number =='number'
  //in consulta si la propiedad number existe en parametro cliente
  && 'number' in cliente
//uso de in, para verificar si la propiedad street existe en el elemento location de cliente.
  && 'street' in cliente.location
  ){
    return cliente.location?.street?.number;
  }else {
    return 'Sin número';
  }
}

getStreetNumber(user); // ?

// tslint:disable: prefer-const
// tslint:disable: no-unused-expression


let value2: any =true;

let flag2:boolean=value2;

typeof flag2; // boolean



let value :unknown;

let flag:boolean=value;

typeof flag; // boolean


//***Type Guards */
//***Tipos primitivos(typeof): number, string, boolean y symbol */
//***Por instancia (instanceof):variable creada a través de un constructor */
//** Por tipo de propiedad (in) */


//instaceof
function notify(persona:Person){
  if (persona instanceof Person) {
    null;
  }
}

//*** Bloqueo de propiedades de objetos
const directions ={
  UP:'Up',
  DOWN:'Down',
  LEFT:'Left',
  RIGHT:'Right',
  console:{
    name:'Commodore',
    bits:'64'
  }
} as const;

directions.UP = 'arriba';
directions.console.name = 'Amstrad';

