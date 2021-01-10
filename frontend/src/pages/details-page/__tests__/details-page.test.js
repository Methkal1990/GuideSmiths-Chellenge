import { shallow } from 'enzyme';

import DetailsPage from '../details-page.component';
import DetailsCard from '../../../components/details-card/details-card.component';

it('should render a DetailsCard component', () => {
  const wrapped = shallow(<DetailsPage />);

  expect(wrapped.find(DetailsCard).length).toEqual(1);
});
