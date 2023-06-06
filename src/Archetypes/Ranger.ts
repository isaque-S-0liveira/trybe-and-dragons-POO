import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static countInstances = 0;  
  private damage: EnergyType;

  constructor(name: string) {
    super(name);
    this.damage = 'stamina';
    Ranger.countInstances += 1;
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
    return Ranger.countInstances;
  }
}

export default Ranger;