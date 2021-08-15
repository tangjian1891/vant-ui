

// import { defineComponent } from "vue";

import { createNamespace } from "../../src/utils/create/index"
import { defineComponent, useSlots } from "vue"
import './index.less'

const [name, bem] = createNamespace('empty')
console.log(bem())

const PRESET_IMAGES = ['error', 'search', 'default'] //预设图片
export default defineComponent({
  name,
  props: {
    description: {
      type: String
    }
  },
  setup(props) {
    const slots = useSlots()
    console.log(props)

    const renderImage = () => {
      if (slots.image) {
        return slots.image()
      }

      let { image } = props
      if (image === 'nextwork') {
        return Network
      }

      if (PRESET_IMAGES.includes(image)) {
        image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`;
      }
      return <img src={image} />
    }


    const renderDescription = () => {
      const description = slots.description ? slots.description() : props.description
      if (description) {
        return <p>这是一个描述啊啊</p>
      }
    }

    const renderBottom = () => {
      if (slots.default) {
        return <div class={bem('bottom')}>{slots.default()}</div>;
      }
    }

    return () => {
      return (
        <div class={bem()}>
          <p class="color">你好</p>
          {/* 图片区域 */}
          <div class={bem('image')}  >
            {renderImage()}
          </div>
          {renderDescription()}
          {renderBottom()}
        </div>
      )
    }
  }
})