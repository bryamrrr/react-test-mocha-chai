import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component).to.have.descendants('.comment-box');;
  });

  it('shows a comment list', () => {
    expect(component).to.have.descendants('.comment-list');;
  });
});
