import { shallow } from 'enzyme';

import CreateForm from '../create-form.components';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CreateForm />);
});

it('should render a form', () => {
  expect(wrapped.find('form').length).toEqual(1);
});

it('should render 7 inputs elements', () => {
  expect(wrapped.find('input').length).toEqual(7);
});

it('should render 7 labels elements', () => {
  expect(wrapped.find('label').length).toEqual(7);
});

it('should render a textarea', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
})