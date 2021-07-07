import * as Scoring from '../leaderBoard';

describe('LeaderBoard', () => {
  test('it should return the type', () => {
    Scoring.sendScore('Namdy', 50).then(result => {
      expect(typeof result).toBe('JSON');
    }).catch(err => err);
  });

  test('it should send player name and score', () => {
    Scoring.sendScore('Emelu', 65).then(result => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch(err => err);
  });
});
