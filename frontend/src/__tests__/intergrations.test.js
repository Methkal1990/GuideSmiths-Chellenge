import moxios from 'moxios';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import history from '../history';
import HomePage from '../pages/home-page/home-page.component';
import CardList from '../components/card-list/card-list.component';
import Card from '../components/card/card.component';
import { LoaderLarge } from '../components/loader/loader.component';

let wrapped;
beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe('HomePage', () => {
  beforeEach(async () => {
    moxios.stubRequest('/api/v1/phones', {
      status: 200,
      response: { data: [{ id: 1, name: 'iPhone 7' }] },
    });

    wrapped = mount(
      <Router history={history}>
        <HomePage />
      </Router>
    );

    // make sure that loading is there before the update
    expect(wrapped.find(LoaderLarge).length).toEqual(1);

    await act(
      () =>
        new Promise((resolve) => {
          setImmediate(() => {
            wrapped.update();
            resolve();
          });
        })
    );
  });

  it("should render HomePage with CardList component that has Phones' Cards", (done) => {
    expect(wrapped.find(CardList).length).toEqual(1);
    // CardList should have 1 card as per the response
    expect(wrapped.find(Card).length).toEqual(1);
    done();
  });
});
