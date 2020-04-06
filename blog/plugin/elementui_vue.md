# Element-ui 和 vuedraggable 实现图片上传裁剪

使用 [element-ui](https://element.eleme.cn/#/zh-CN/component/upload) 和 [vuedraggable](https://github.com/SortableJS/Vue.Draggable) 实现一个图片上传按尺寸大小裁剪功能

### element-ui upload 组件

- `element-ui` `upload` 组件上传图片，设置自动上传，使用 `before-upload` 钩子进行上传校验

- 将图片文件转化为图片路径进行裁剪

```html
<el-upload
  class="upload-banner"
  drag
  action=""
  :auto-upload="true"
  :on-change="handleCrop"
  :before-upload="beforeAvatarUpload"
  :show-file-list="false"
>
  <el-image v-if="cropperData.iconUrl" :src="cropperData.iconUrl" fit="contain" class="avatar"></el-image>
  <div v-else class="upload-box">
    <el-button type="primary" class="select-btn">选择图片</el-button>
  </div>
</el-upload>

<script>
handleCrop (file) {
    // 点击弹出剪裁框
    this.$nextTick(() => {
      if (this.canCropper) {
        this.cropperOption.img = window.URL.createObjectURL(file.raw)
        this.showCropper = this.canCropper
      }
    })
  },
  beforeAvatarUpload (file) {
    // 上传前校验
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isJPG) {
      this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
    }
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2 MB!')
    }
    // 校验通过后显示裁剪框
    this.canCropper = isJPG && isLt2M
    return false
  }
</script>

```

### vuedraggable

- 将图片缩放到设定的尺寸

- 重新上传图片，将图片转化为图片路径，裁剪图片


```javascript
<el-dialog
    title="图片裁切"
    class="cropper-dialog"
    :close-on-click-modal="false"
    :visible="dialogVisible"
    center
    @close="close"
  >
    <div class="cropper-wrap">
      <div
        class="cropper-box"
        :style="cropperStyle"
        >
        <vue-cropper
          ref="cropper"
          :img="option.img"
          :output-size="option.size"
          :output-type="option.outputType"
          :info="option.info"
          :full="option.full"
          :canScale="option.canScale"
          :can-move="option.canMove"
          :can-move-box="option.canMoveBox"
          :fixed="option.fixed"
          :fixed-box="option.fixedBox"
          :original="option.original"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :center-box="option.centerBox"
          :high="option.high"
          :info-true="option.infoTrue"
          :max-img-size="option.maxImageSize"
          :enlarge="option.enlarge"
          :mode="option.mode"
          :maxImgSize="option.maxImgSize"
          @realTime="realTime"
        />
      </div>
      <div class="preview-box">
        <div class="preview-title">
          <span>预览</span>
          <span @click="upload" class="preveiw-upload">重新上传</span>
        </div>
        <input
          ref="upload"
          type="file"
          style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/jpg"
          @change="uploadImg"
        >
        <div
          :style="previewStyle"
          class="preview-img"
        >
          <div :style="preview.div">
            <img
              :style="preview.img"
              :src="preview.url"
            />
          </div>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="finish" :loading="loading">确认</el-button>
    </div>
  </el-dialog>
// 裁剪组件的基础配置option
  option: {
    img: '', // 裁剪图片的地址
    outputSize: 1, // 裁剪生成图片的质量
    outputType: 'png', // 裁剪生成图片的格式
    full: true, // 是否输出原图比例的截图
    info: true, // 图片大小信息
    canScale: true, // 图片是否允许滚轮缩放
    autoCrop: true, // 是否默认生成截图框
    autoCropWidth: 200, // 默认生成截图框宽度
    autoCropHeight: 150, // 默认生成截图框高度
    canMove: true, // 上传图片是否可以移动
    fixedBox: true, // 固定截图框大小 不允许改变
    fixed: false, // 是否开启截图框宽高固定比例
    canMoveBox: true, // 截图框能否拖动
    original: false, // 上传图片按照原始比例渲染
    centerBox: false, // 截图框是否被限制在图片里面
    height: true,
    infoTrue: false, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
    enlarge: 1, // 图片根据截图框输出比例倍数
    mode: 'container', // 图片默认渲染方式
    maxImgSize: 375 // 限制图片最大宽度和高度
  }
```

### 将 base64 图片转化为图片文件

由于后台只能识别 `jpg` 、`png` 图片格式，需要将 `base64` 图片转化为图片文件

```javascript
// 将base64转换为文件
dataURLtoFile (dataurl, filename) {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let len = bstr.length
  let u8arr = new Uint8Array(len)
  while (len--) {
    u8arr[len] = bstr.charCodeAt(len)
  }
  return new File([u8arr], filename, { type: mime })
}
```

### vuedraggable 相关配置

#### Attribute

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| img | 裁剪图片的地址 | String / Blob | — | — |
| outputSize | 裁剪生成图片的质量 | Number | 0.1 - 1 | false |
| outputType | 裁剪生成图片的格式 | String | jpeg / png / webp | jpg (jpg 需要传入 jpeg) |
| info | 裁剪框的大小信息 | Boolean | — | true |
| canScale | 图片是否允许滚轮缩放 | Boolean | — | true |
| autoCrop | 是否默认生成截图框 | Boolean | — | false |
| autoCropWidth | 默认生成截图框宽度 | Number | 0~max | 容器的 80% |
| autoCropHeight | 默认生成截图框高度 | Number | 0~max | 容器的 80% |
| fixed | 是否开启截图框宽高固定比例 | Boolean | — | true |
| fixedNumber | 截图框的宽高比例 | Array | — | [1, 1] |
| full | 是否输出原图比例的截图 | Boolean | — | false |
| fixedBox | 固定截图框大小 不允许改变 | Boolean | — | false |
| canMove | 上传图片是否可以移动 | Boolean | — | true |
| canMoveBox | 截图框能否拖动 | Boolean | — | true |
| original | 上传图片按照原始比例渲染 | Boolean | — | false |
| centerBox | 截图框是否被限制在图片里面 | Boolean | — | false |
| high | 是否按照设备的 dpr 输出等比例图片 | Boolean | — | true |
| infoTrue | true 为展示真实输出图片宽高 false 展示看到的截图框宽高 | Boolean | — | false |
| maxImgSize | 限制图片最大宽度和高度 | Number | 0~max | 2000 |
| enlarge | 图片根据截图框输出比例倍数 | Number | 0-max(建议不要太大不然会卡死的呢) | 1 |
| mode | 图片默认渲染方式 | String | contain , cover, 100px, 100% auto | contain |

#### Events

| 事件名 | 说明 | 参数 |
| :--- | :--- | :--- |
| imgMoving | 图片移动回调函数 | data |
| cropMoving | 截图框移动回调函数 | data |
| imgLoad | 图片加载回调函数 | message |
| realTime | 实时预览回调函数 | data |

#### Methods

| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| startCrop | 开始截图 | — |
| stopCrop | 停止截图 | — |
| clearCrop | 清除截图 | — |
| changeScale | 修改图片大小 正数为变大 负数变小 | — |
| getImgAxis | 获取图片基于容器的坐标点 | — |
| getCropAxis | 获取截图框基于容器的坐标点 | — |
| goAutoCrop | 自动生成截图框函数 | — |
| rotateRight | 向右边旋转 90 度 | — |
| rotateLeft | 向左边旋转 90 度 | — |
| cropW | 截图框宽度 | — |
| cropH | 截图框高度 | — |
| getCropData | 获取截图的 base64 数据 | data |
| getCropBlob | 获取截图的 blob 数据 | data |

