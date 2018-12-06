<template>
  <div class="login">
      <a href="#" class="close" v-on:click="CloseWindow"></a>
    <img src="../assets/logo.png">
    <h1 id="welcome" style="color:#fafafa;">{{ msg }}</h1>
        <div class="form-signin">
            <h1 style="padding-bottom:10px;color:#fafafa">Please sign in</h1>
            <Input type="email" class="inputField" placeholder="Email address" required="" autofocus="" />
            <Input type="password" class="inputField" placeholder="Password" required="" />
            <Button type="primary" v-on:click="Login">Sign in</Button>
        </div>
  </div>
</template>

<script>
import {Input,Button} from 'iview'
export default {
  name: 'login',
  components:{Input,Button},
  data () {
    return {
      msg: 'Welcome to ThinkNote'
    }
  },
  methods:{
    Login:function(){
      const ipc = window.electron.ipcRenderer
      ipc.send('showHomePage')
      window.localStorage.setItem("token","loginSuccessful")
    },
    CloseWindow:function(){
      const win = window.electron.remote.getCurrentWindow()
      win.close()
    }
  }
}
</script>
<style scoped>
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 10px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: rgb(114, 114, 114);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.login{
  padding-top:40px;
  position: relative;
  height: 100vh;
  text-align: center;
  background-image: url('../assets/login-bg.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
}
#inputEmail,#inputPassword{
  margin-top: 30px;
  margin-bottom: 10px;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.inputField {
    width:50%;
    margin-bottom: 10px;
}
button {
    width: 50%;
}
</style>
