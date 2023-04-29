import { CounterPipe } from './counter.pipe';

describe('CounterPipe', () => {
  const pipe = new CounterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('check the value it passed is array and return the length of it', () => {
    expect(pipe.transform([1, 2, 3])).toEqual(3);
  });
});
