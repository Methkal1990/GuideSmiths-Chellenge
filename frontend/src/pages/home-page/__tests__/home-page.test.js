import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import HomePage from '../home-page.component';
import AddButton from '../../../components/add-button/add-button.component';
import { LoaderLarge } from '../../../components/loader/loader.component';
import CardList from '../../../components/card-list/card-list.component';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<HomePage />);
});

afterEach(() => {
  wrapped.unmount();
  jest.clearAllMocks();
});

it('should render an AddButton component', () => {
  expect(wrapped.find(AddButton).length).toEqual(1);
});

it('should show an H1 element', () => {
  expect(wrapped.find('h1').length).toEqual(1);
});

it("should render a LoaderLarge component when it's in loading state", () => {
  expect(wrapped.find(LoaderLarge).length).toEqual(1);
});

it('should render a CardList component when loading is finished', () => {
  const initialState = false;

  React.useState = jest.fn().mockReturnValue([initialState, {}]);

  // render the component again to get the new state
  wrapped = shallow(<HomePage />);

  expect(wrapped.find(CardList).length).toEqual(1);
});


