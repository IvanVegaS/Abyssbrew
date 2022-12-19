import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Magick } from './magick/magick';
import { Condition } from './magick-conditions/magick-conditions'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const magicks = [
      {id: 1, type: 'Fuego',  name: 'Fire', uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar quemadura', description: '' },
      {id: 2, type: 'Fuego',  name: 'Fira', uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar quemadura', description: '' },
      {id: 3, type: 'Fuego',  name: 'Firaga', uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar quemadura', description: '' },
      {id: 4, type: 'Fuego',  name: 'Firaja', uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar quemadura', description: '' },
      {id: 5, type: 'Fuego',  name: 'Firaza', uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar quemadura', description: '' },
      {id: 6, type: 'Fuego',  name: 'Flare',  uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar quemadura', description: '' },
      {id: 7, type: 'Fuego',  name: 'Flarega',  uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar quemadura', description: '' },
      {id: 8, type: 'Agua', name: 'Water',  uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar confusion', description: '' },
      {id: 9, type: 'Agua', name: 'Watera', uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar confusion', description: '' },
      {id: 10,  type: 'Agua', name: 'Waterga',  uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar confusion', description: '' },
      {id: 11,  type: 'Agua', name: 'Waterja',  uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar confusion', description: '' },
      {id: 12,  type: 'Agua', name: 'Waterza',  uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar confusion', description: '' },
      {id: 13,  type: 'Agua', name: 'Flood',  uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar confusion', description: '' },
      {id: 14,  type: 'Agua', name: 'Floodga',  uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar confusion', description: '' },
      {id: 15,  type: 'Tierra', name: 'Quake',  uses: 1,  level: 1, range: '3 m2',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar aturdir', description: '' },
      {id: 16,  type: 'Tierra', name: 'Quakera',  uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar aturdir', description: '' },
      {id: 17,  type: 'Tierra', name: 'Quakega',  uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar aturdir', description: '' },
      {id: 18,  type: 'Tierra', name: 'Quakeja',  uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar aturdir', description: '' },
      {id: 19,  type: 'Tierra', name: 'Quakeza',  uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar aturdir', description: '' },
      {id: 20,  type: 'Tierra', name: 'Break',  uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar aturdir', description: '' },
      {id: 21,  type: 'Tierra', name: 'Breakga',  uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar aturdir', description: '' },
      {id: 22,  type: 'Viento', name: 'Aero', uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar confusion', description: '' },
      {id: 23,  type: 'Viento', name: 'Aerora', uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar confusion', description: '' },
      {id: 24,  type: 'Viento', name: 'Aeroga', uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar confusion', description: '' },
      {id: 25,  type: 'Viento', name: 'Aeroja', uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar confusion', description: '' },
      {id: 26,  type: 'Viento', name: 'Aeroza', uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar confusion', description: '' },
      {id: 27,  type: 'Viento', name: 'Tornado',  uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar confusion', description: '' },
      {id: 28,  type: 'Viento', name: 'Typhoon',  uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar confusion', description: '' },
      {id: 29,  type: 'Electricidad', name: 'Thunder',  uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar paralisis', description: '' },
      {id: 30,  type: 'Electricidad', name: 'Thundara', uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar paralisis', description: '' },
      {id: 31,  type: 'Electricidad', name: 'Thundaga', uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar paralisis', description: '' },
      {id: 32,  type: 'Electricidad', name: 'Thundaja', uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar paralisis', description: '' },
      {id: 33,  type: 'Electricidad', name: 'Thundaza', uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar paralisis', description: '' },
      {id: 34,  type: 'Electricidad', name: 'Bolt', uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar paralisis', description: '' },
      {id: 35,  type: 'Electricidad', name: 'Boltga', uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar paralisis', description: '' },
      {id: 36,  type: 'Hielo',  name: 'Blizzard', uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar congelamiento', description: '' },
      {id: 37,  type: 'Hielo',  name: 'Blizzara', uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar congelamiento', description: '' },
      {id: 38,  type: 'Hielo',  name: 'Blizzaga', uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar congelamiento', description: '' },
      {id: 39,  type: 'Hielo',  name: 'Blizzaja', uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar congelamiento', description: '' },
      {id: 40,  type: 'Hielo',  name: 'Blizzaza', uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar congelamiento', description: '' },
      {id: 41,  type: 'Hielo',  name: 'Freeze', uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar congelamiento', description: '' },
      {id: 42,  type: 'Hielo',  name: 'Freezega', uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar congelamiento', description: '' },
      {id: 43,  type: 'Natual', name: 'Vine', uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 44,  type: 'Natual', name: 'Vinera', uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 45,  type: 'Natual', name: 'Vinega', uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 46,  type: 'Natual', name: 'Vineja', uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 47,  type: 'Natual', name: 'Vineza', uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 48,  type: 'Natual', name: 'Forest', uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 49,  type: 'Natual', name: 'Forestga', uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar envenenamiento',  description: '' },
      {id: 50,  type: 'No Elemental', name: 'Shock',  uses: 1,  level: 1, range: '1 objetivo',  damage: '1d6 + 10', requires: 'Magick 1 - 2', additional: 'Puede causar aturdir', description: '' },
      {id: 51,  type: 'No Elemental', name: 'Shockra',  uses: 1,  level: 2, range: '3 m2',  damage: '1d10 + 20',  requires: 'Magick 3 - 4', additional: 'Puede causar aturdir', description: '' },
      {id: 52,  type: 'No Elemental', name: 'Shockga',  uses: 1,  level: 3, range: '5 m2',  damage: '2d10 + 40',  requires: 'Magick 5 - 6', additional: 'Puede causar aturdir', description: '' },
      {id: 53,  type: 'No Elemental', name: 'Shockja',  uses: 2,  level: 4, range: '10 m2', damage: '4d12 + 100', requires: 'Magick 7 - 9', additional: 'Puede causar aturdir', description: '' },
      {id: 54,  type: 'No Elemental', name: 'Shockza',  uses: 2,  level: 5, range: '15 m2', damage: '4d12 + 200', requires: 'Magick 10 - 12', additional: 'Puede causar aturdir', description: '' },
      {id: 55,  type: 'No Elemental', name: 'Pulse',  uses: 3,  level: 6, range: 'Rango de vision', damage: '6d12 + 400', requires: 'Magick 13 - 16', additional: 'Puede causar aturdir', description: '' },
      {id: 56,  type: 'No Elemental', name: 'Pulsega',  uses: 3,  level: 7, range: 'Rango de vision', damage: '8d12 + 600', requires: 'Magick 17 - 20', additional: 'Puede causar aturdir', description: '' },
      {id: 57,  type: 'Luz',  name: 'Sacro',  uses: 1,  level: 1, range: '1 objetivo',  damage: '1d10 + 20',  requires: 'Magick 1 - 2', additional: '', description: '' },
      {id: 58,  type: 'Luz',  name: 'Bliss',  uses: 1,  level: 2, range: '3 m2',  damage: '4d12 + 40',  requires: 'Magick 3 - 4', additional: '', description: '' },
      {id: 59,  type: 'Luz',  name: 'Holy', uses: 1,  level: 3, range: '5 m2',  damage: '10d12 + 100',  requires: 'Magick 5 - 6', additional: '', description: '' },
      {id: 60,  type: 'Luz',  name: 'Holyga', uses: 2,  level: 4, range: '10 m2', damage: '(6d12 + 100) * 4', requires: 'Magick 7 - 9', additional: '', description: '' },
      {id: 61,  type: 'Luz',  name: 'Judgement',  uses: 2,  level: 5, range: '15 m2', damage: '(3d12 + 40) * 12 + 1200',  requires: 'Magick 10 - 12', additional: '', description: '' },
      {id: 62,  type: 'Oscuridad',  name: 'Nicto',  uses: 1,  level: 1, range: '1 objetivo',  damage: '1d10 + 20',  requires: 'Magick 1 - 2', additional: '', description: '' },
      {id: 63,  type: 'Oscuridad',  name: 'Ruin', uses: 1,  level: 2, range: '3 m2',  damage: '4d12 + 40',  requires: 'Magick 3 - 4', additional: '', description: '' },
      {id: 64,  type: 'Oscuridad',  name: 'Umbra',  uses: 1,  level: 3, range: '5 m2',  damage: '10d12 + 100',  requires: 'Magick 5 - 6', additional: '', description: '' },
      {id: 65,  type: 'Oscuridad',  name: 'Umbraga',  uses: 2,  level: 4, range: '10 m2', damage: '(6d12 + 100) * 4', requires: 'Magick 7 - 9', additional: '', description: '' },
      {id: 66,  type: 'Oscuridad',  name: 'Doomsday', uses: 2,  level: 5, range: '15 m2', damage: '(3d12 + 40) * 12 + 1200',  requires: 'Magick 10 - 12', additional: '', description: '' },
      {id: 67,  type: 'Gravedad', name: 'Demi', uses: 1,  level: 1, range: '1 objetivo',  damage: '1d10 + 20',  requires: 'Magick 1 - 2', additional: '', description: '' },
      {id: 68,  type: 'Gravedad', name: 'Demira', uses: 1,  level: 2, range: '3 m2',  damage: '4d12 + 40',  requires: 'Magick 3 - 4', additional: '', description: '' },
      {id: 69,  type: 'Gravedad', name: 'Demiga', uses: 1,  level: 3, range: '5 m2',  damage: '10d12 + 100',  requires: 'Magick 5 - 6', additional: '', description: '' },
      {id: 70,  type: 'Gravedad', name: 'Demiza', uses: 2,  level: 4, range: '10 m2', damage: '(6d12 + 100) * 4', requires: 'Magick 7 - 9', additional: '', description: '' },
      {id: 71,  type: 'Gravedad', name: 'Demija', uses: 2,  level: 5, range: '15 m2', damage: '(3d12 + 40) * 12 + 1200',  requires: 'Magick 10 - 12', additional: '', description: '' }
    ];
    
    const conditions = [
      { id: 1,  name: 'Quemadura',  description: 'Reduce el ATQ a la mitad y daña cada turno 5% del HP total'},
      { id: 2,  name: 'Confusion',  description: 'Ataca al azar a un miembro de su equipo'},
      { id: 3,  name: 'Aturdimiento', description: 'Pierde el siguiente turno'},
      { id: 4,  name: 'Paralisis',  description: 'Reduce VEL a la mita,con probabilidad de no tomar acciones en su turno'},
      { id: 5,  name: 'Congelamiento',  description: 'Reduce VEL a 0 y daña cada turno 5% del HP total'},
      { id: 6,  name: 'Envenenamiento', description: 'Daña cada turno 10% del HP total'},
      { id: 7,  name: 'Lentitud', description: 'Reduce a la mitad el numero de turnos que puede tomar'},
      { id: 8,  name: 'Ceguera',  description: 'Requiere 18+ para poder pegar,cancela criticos'},
      { id: 9,  name: 'Silencio', description: 'Imposibilita el uso de reliquias'},
      { id: 10, name: 'Sangrado', description: 'Reduce el ATQ en un 25% y daña cada turno 5% del HP total'},
      { id: 11, name: 'Somnolencia',  description: 'Incrementa el daño recibido en 1.5x. Los ataques fisicos terminan el efecto'},
      { id: 12, name: 'Petrificacion',  description: 'Imposibilita tomar acciones,si no se cura antes de [Nivel] turnos,provoca la muerte al romperse (golpe critico)'},
      { id: 13, name: 'Debilidad',  description: 'Reduce resistencias elementales'},
      { id: 14, name: 'Penetrante', description: 'Ignora DEF en el calculo de daño'}
    ];
    return {magicks, conditions};
  }


  genId<T extends Magick | Condition>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 1;
  }
}