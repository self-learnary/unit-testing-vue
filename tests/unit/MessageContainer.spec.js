import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wrap MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
          template: '<p data-testid="message">Hello from the db!</p>',
        },
      },
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Hello from the db!')
  })
})
