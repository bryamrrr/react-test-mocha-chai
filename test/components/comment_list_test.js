import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    let comments = [
      'Hola mundo',
      'xyz',
    ];
    component = renderComponent(CommentList, null, { comments });
  });

  it('shows and LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('Hola mundo');
    expect(component).to.contain('xyz');
  })
});