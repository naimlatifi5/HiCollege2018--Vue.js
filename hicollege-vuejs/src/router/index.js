import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataBinding from '@/components/vue-essentials/dataBinding'
import ListConditionalRendering from '@/components/vue-essentials/listConditionalRendering'
import BindingAttributes from '@/components/vue-essentials/bindingAttributes'
import InstanceProperties from '@/components/vue-essentials/instanceProperties'
import EventHandling from '@/components/vue-essentials/eventHandling'
import Components from '@/components/vue-essentials/components'
import Props from '@/components/vue-essentials/props'
import Slots from '@/components/vue-essentials/slots'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dataBinding',
      name: 'DataBinding',
      component: DataBinding
    },
    {
      path: '/listConditionalRendering',
      name: 'ListConditionRendering',
      component: ListConditionalRendering
    },
    {
      path: '/bindingAttributes',
      name: 'BindingAttributes',
      component: BindingAttributes
    },
    {
      path: '/instanceProperties',
      name: 'InstanceProperties',
      component: InstanceProperties
    },
    {
      path: '/eventHandling',
      name: 'EventHandling',
      component: EventHandling
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/slots',
      name: 'Slots',
      component: Slots
    }
  ]
})
