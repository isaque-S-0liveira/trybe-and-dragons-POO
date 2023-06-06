import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static countInstances = 0;  
  private damage: EnergyType;

  constructor(name: string) {
    super(name);
    this.damage = 'stamina';
    Warrior.countInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  get special(): number {
    return this.special;
  }

  get cost(): number {
    return this.cost;
  }

  get energyType(): EnergyType {
    return this.damage;
  }

  static createdArchetypeInstances(): number {
    return Warrior.countInstances;
  }
}

export default Warrior;