import { shallow } from 'enzyme';

import EditPage from '../edit-page.component';
import EditForm from '../../../components/edit-form/edit-form.component';

it('should render an EditForm', () => {
  // a mock match object so the test doesn't return an error for lack of match object
  const match = { params: { phoneid: '1' } }; 
  const wrapped = shallow(<EditPage match={match} />);

  expect(wrapped.find(EditForm).length).toEqual(1);
});
