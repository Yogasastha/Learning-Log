import { CurrentAgePipe } from './current-age-pipe';
import { FormsModule } from '@angular/forms';

describe('CurrentAgePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrentAgePipe();
    expect(pipe).toBeTruthy();
  });
});
