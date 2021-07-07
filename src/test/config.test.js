import * as configOptions from '../Config/config';

it('returns screen width', () => {
  expect(configOptions.gameConfig.width).toBe(1270);
});

it('returns screen height', () => {
  expect(configOptions.gameConfig.height).toBe(650);
});

it('returns platform speed', () => {
  expect(configOptions.gameOptions.platformSpeedRange).toStrictEqual([300, 300]);
  expect(configOptions.gameOptions.platformSpeedRange[0]).not.toBeLessThan(300);
});

it('gives player gravity', () => {
  expect(configOptions.gameOptions.playerGravity).toEqual(900);
  expect(configOptions.gameOptions.playerGravity).not.toBeLessThan(900);
});

it('gives player jumpforce', () => {
  expect(configOptions.gameOptions.jumpForce).toEqual(420);
  expect(configOptions.gameOptions.jumpForce).not.toBeLessThan(420);
});

it('limits player jump to 2 times', () => {
  expect(configOptions.gameOptions.jumps).toEqual(2);
  expect(configOptions.gameOptions.jumps).not.toBeLessThan(2);
});

it('returns platform spawn range', () => {
  expect(configOptions.gameOptions.spawnRange).toStrictEqual([80, 300]);
});

it('gives minimum limit to platform spawn rate', () => {
  expect(configOptions.gameOptions.spawnRange[0]).toBe(80);
  expect(configOptions.gameOptions.spawnRange[0]).not.toBeLessThan(80);
});

it('gives maximum limit to platform spawn rate', () => {
  expect(configOptions.gameOptions.spawnRange[1]).toBe(300);
  expect(configOptions.gameOptions.spawnRange[1]).not.toBeLessThan(300);
});