import {Picture} from '@trucos/models'

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
  lastName:string;
  getFullName():string{
    return `${this.name} ${this.lastName}`
  }
}

const person = new Person();
// person.name='Cristian';
person.lastName='Soncco';
person.getFullName();


const userPhoto: Readonly<Picture> = {
  large:'https://via.placeholder.com/300.png',
  medium:'https://via.placeholder.com/150.png',
  thumbnail:'https://via.placeholder.com/50.png'
};

// userPhoto.large='https://via.placeholder.com/500.png';
