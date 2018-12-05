<template>
  <div class="login">
    <img src="../assets/logo.png">
    <h1 id="welcome">{{ msg }}</h1>
        <div class="form-signin">
            <h1>Please sign in</h1>
            <Input class="inputField" placeholder="Email address" required="" autofocus="" />
            <Input class="inputField" placeholder="Password" required="" />
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
    }
  }
}
</script>
<style scoped>
.login{
  text-align: center;
}
#inputEmail,#inputPassword{
  margin-top: 10px;
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
