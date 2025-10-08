import { RepeatPipe } from './repeat-pipe';
import { FormsModule } from '@angular/forms';

describe('RepeatPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatPipe();
    expect(pipe).toBeTruthy();
  });
});
