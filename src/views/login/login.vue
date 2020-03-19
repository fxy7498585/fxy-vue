<template>
  <div>
    <wxlogin :appid="wx.appid" :scope="wx.scope" :theme='wx.style' :state='wx.state' :redirect_uri="wx.redirect_uri"></wxlogin>
  </div>
</template>

<script>
import wxlogin from 'vue-wxlogin';
export default {
  name: 'Login',
  data() {
    return {
      wx: {
        appid: 'wx2eed7f501e7cb9ca',
        scope: 'snsapi_login',
        state: 'bind',
        style: 'black',
        redirect_uri: encodeURI('http://www.fxy-done.cn/')
      }
    }
  },
  components: {
    wxlogin
  }
}
</script>

<style>

</style>
