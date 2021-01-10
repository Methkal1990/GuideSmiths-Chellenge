import { shallow } from 'enzyme';

import CardList from '../card-list.component';
import Card from '../../card/card.component';

it('should render a list of Cards', () => {
  const phones = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'samsung' },
  ];
  const wrapped = shallow(<CardList phones={phones} />);
  expect(wrapped.find(Card).length).toEqual(2);
});
