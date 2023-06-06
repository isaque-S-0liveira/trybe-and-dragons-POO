import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static countInstances = 0;  
  private damage: EnergyType;

  constructor(name: string) {
    super(name);
    this.damage = 'mana';
    Necromancer.countInstances += 1;
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
    return Necromancer.countInstances;
  }
}

export default Necromancer;