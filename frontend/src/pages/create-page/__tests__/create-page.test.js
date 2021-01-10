import { shallow } from 'enzyme';

import CreatePage from '../create-page.component';
import CreateForm from '../../../components/create-form/create-form.components';

it('should render a CreateForm component', () => {
  const wrapped = shallow(<CreatePage />);
  expect(wrapped.find(CreateForm).length).toEqual(1);
});
