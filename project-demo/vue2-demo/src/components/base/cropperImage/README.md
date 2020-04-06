## 图片上传裁剪

图片上传裁剪组件

### 基本用法

```html
<template>
  <!-- 剪裁组件弹窗 -->
    <cropperImage
      :dialogVisible="showCropper"
      :cropper-option="cropperOption"
      :file-size="fileSize"
      :cropper-style="cropperStyle"
      @close="showCropper=false"
      @uploadCropper="uploadImg"
    />
</template>
<script>
  import cropperImage from './index'
  export default{
    compoutents:{
      cropperImage
    },
    data(){
      showCropper: false, // 显示裁剪弹窗
      cropperOption: { // 裁剪配置
        img: '',
        autoCropWidth: 375,
        autoCropHeight: 176
      },
      cropperStyle: { // 裁剪框大小
        width: '390px',
        height: '290px'
      }
    },

  }
</script>
```

### Attribute

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

### Events

| 事件名 | 说明 | 参数 |
| :--- | :--- | :--- |
| imgMoving | 图片移动回调函数 | data |
| cropMoving | 截图框移动回调函数 | data |
| imgLoad | 图片加载回调函数 | message |
| realTime | 实时预览回调函数 | data |

### Methods

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
