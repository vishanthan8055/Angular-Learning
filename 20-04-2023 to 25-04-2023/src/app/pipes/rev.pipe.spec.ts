import { RevPipe } from './rev.pipe';

describe('RevPipe', () => {
  it('create an instance', () => {
    const pipe = new RevPipe();
    expect(pipe).toBeTruthy();
  });
});
