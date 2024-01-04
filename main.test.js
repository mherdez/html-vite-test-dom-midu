import { describe, expect, test } from 'vitest';
import { App } from './App';

describe('main', () => {

  test('should render App', () => {
    const root = document.createElement('div');
    root.innerHTML = App();
    const card = root.querySelector('.card');
    expect(card).not.toBeNull();

    const img = root.querySelector('.card-img');
    expect(img).not.toBe(null);

    const name = root.querySelector('.card-name');
    console.log(typeof name)
    expect(name).not.toBe(null);
  });

  test('should be Michael Lawson the first user', () => {
    const root = document.createElement('div');
    root.innerHTML = App();
    const name = root.querySelector('.card-name');

    const firstUser = name.textContent;
    expect(firstUser).toBe('Michael Lawson');
  });

  test('should be Rachel Howell the last user', () => {
    const root = document.createElement('div');
    root.innerHTML = App();
    const cards = root.querySelectorAll('.card');
    const lastCardName = cards[cards.length - 1].querySelector('.card-name').textContent;
    expect(lastCardName).toBe('Rachel Howell');
  });

  test('should include a specific user (Byron Fields)', () => {
    const root = document.createElement('div');
    root.innerHTML = App();

    // const users = Array.from(cards).map(card => card.querySelector('.card-name').textContent);
    const users = Array.from(root.querySelectorAll('.card-name')).map(card => card.textContent);
    expect(users).includes('Byron Fields');
  });
})