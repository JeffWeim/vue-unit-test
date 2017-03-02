import Vue from 'vue'
// import { mount } from 'avoriaz';
import { mount } from 'avoriaz'
import  * as utility from '../utility'
import Information from 'src/components/Information'

describe('Information.vue', () => {
  // it('renders a div with class information', () => {
  //   const wrapper = mount(Information);
  //   expect(wrapper.is('div')).to.equal(true);
  //   expect(wrapper.hasClass('information')).to.equal(true);
  // });

  // it('renders and <h2> with the copy "Welcome to the information section." ', () => {
  //   const wrapper = mount(Information);
  //   const element = wrapper.find('.information h2')[0].element.innerText;
  //   expect(element.trim()).to.equal('Welcome to the information section.');
  // });

  // it('renders 3 <p> tags inside .information', () => {
  //   const wrapper = mount(Information);
  //   const paragraphs = wrapper.find('.information p');
  //   expect(paragraphs.length).to.equal(3);
  // });

  it('.information p has color style set to #3b9e71', () => {
    const wrapper = mount(Information);
    const paragraphs = wrapper.find('.information p');

    expect(wrapper.siblingText(paragraphs)).to.equal(' The is the first message in the messasges array.  The is the second message in the messasges array.  The is the third message in the messasges array. ')
  });
});