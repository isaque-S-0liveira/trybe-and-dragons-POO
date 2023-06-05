import Race from './Race';

class Dwarf extends Race {
  private static countInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity:number) { 
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    return this.countInstances;
  }
}

export default Dwarf;