import { mount, shallowMount } from '@vue/test-utils';
//import Component from 'components/HelloWorld'; // name of your Vue component
import AssetsList from '../../../src/components/AssetsList'; // name of your Vue component
import { BRow, BCol, BLink, BTable } from 'bootstrap-vue';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(AssetsList, {
        stubs: {
          "b-row": BRow,
          "b-col": BCol,
          "b-table": BTable,
          "b-link": BLink
                      },
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('Assets List', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
});
