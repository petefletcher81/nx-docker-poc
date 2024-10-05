import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '../hello-world.vue';

describe('HelloWorld.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains 7 <h1> elements with "Hello World" text', () => {
    const wrapper = mount(HelloWorld);
    const h1Elements = wrapper.findAll('h1');
    expect(h1Elements.length).toBe(7);
    h1Elements.forEach((h1) => {
      expect(h1.text()).toBe('Hello World');
    });
  });
});
