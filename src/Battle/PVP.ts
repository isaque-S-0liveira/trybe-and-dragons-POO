import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private player2: Fighter) {
    super(player);
  }

  fight(): number {
    return this.player.lifePoints > this.player2.lifePoints ? 1 : -1;
  }
}
export default PVP;