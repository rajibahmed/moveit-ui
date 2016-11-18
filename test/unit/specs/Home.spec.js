import Vue from 'vue'
import Home from 'src/components/Home'

// helper function that mounts and returns the rendered text
/*
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}
*/

describe('Home.vue', () => {
  it('should have calculate button', () => {
    const vm = new Vue(Home).$mount()

    expect(vm.distance).to.equal(0)
    expect(vm.volume).to.equal(0)
    expect(vm.hasPiano).to.equal(false)
  })
})
