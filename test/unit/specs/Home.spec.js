import Vue from 'vue'
import Home from 'src/components/Home'

// helper function that mounts and returns the rendered text
function getRenderedEl (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()

  return vm.$el
}

describe('Home.vue', () => {
  it('should initailize to zero', () => {
    const vm = new Vue(Home).$mount()

    expect(vm.distance).to.equal(0)
    expect(vm.volume).to.equal(0)
    expect(vm.hasPiano).to.equal(false)
  })

  it('should have a calculate button', () => {
    const $el = getRenderedEl(Home,{})
    expect($el.querySelector('button.button').textContent).to.equal('Calculate');
  })
})
