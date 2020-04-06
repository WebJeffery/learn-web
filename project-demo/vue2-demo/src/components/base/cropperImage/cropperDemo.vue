<template>
  <div class="cropper-app">
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
    <!-- 剪裁组件弹窗 -->
    <cropperImage
      :dialogVisible="showCropper"
      :cropper-option="cropperOption"
      :file-size="fileSize"
      :cropper-style="cropperStyle"
      @close="showCropper=false"
      @uploadCropper="uploadImg"
    />
  </div>
</template>

<script>
import cropperImage from './index'
import api from '@/api'
export default {
  name: 'CropperDemo',
  components: {
    cropperImage
  },
  data () {
    return {
      cropperData: {},
      showCropper: false, // 显示裁剪弹窗
      canCropper: false,
      fileSize: 2, // 限制文件上传大小
      cropperOption: {
        img: '',
        autoCropWidth: 375,
        autoCropHeight: 176
      },
      cropperStyle: {
        width: '390px',
        height: '290px'
      }
    }
  },
  methods: {
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
    },
    // 自定义上传方法
    uploadImg (file, data) {
      let fileFormData = new FormData()
      fileFormData.append('file', file)
      // 移除上传组件带来的bug
      // document.getElementsByTagName('body')[0].removeAttribute('style')
      this.cropperData.iconUrl = data
      this.showCropper = false
      // api.uploadFile(fileFormData, this).then(res => {
      //   this.cropperData.iconUrl = res
      //   this.showCropper = false
      //   this.$message({
      //     message: '操作成功',
      //     type: 'success'
      //   })
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.cropper-app  {
    /deep/ .el-dialog{
    width: max-content;
    max-width: 860px;
    height: 470px;
    }
    /deep/ .el-image__inner {
      overflow: hidden;
      border-radius: 6px;
    }
  }

.cropper-app /deep/ .el-upload-dragger {
  width: 320px;
  height: 170px;
  line-height: 170px;
  // background: #ecedf2;
  border: 0;
}
.upload-box {
  height: 100%;
  background: #ecedf2;
}
.el-upload-tips {
  margin-top: 10px;
  font-size: 14px;
  color: #a7aebb;
}
.select-btn {
  margin-top: 50px;
}
</style>
