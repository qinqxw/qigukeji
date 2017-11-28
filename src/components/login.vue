<template>
<div id="login">
    <div class="all">
        <div class="up">
            <p>奇谷人脸识别集群后台管理系统登录</p>
        </div>
        <div class="down">
            <form action="" method="get" id="focus">
                 <label class="lab"><input type="text" name="user" class="user" id="login_user" placeholder="请输入账号"></label>
                 <label class="lab"><input type="password" value="" name="password" class="user pass" id="login_pass" placeholder="请输入密码"></label>
                 <input type="button" value="登录" class="login_sub" id="login_btn">
            </form>
        </div>
    </div>
</div>        
</template>

<script>
    export default {

    }
</script>

<style scoped>
#login{width: 100%; height:600px; background-image: url(../assets/login/login.jpg);}
.all{width:504px; height:307px; margin:0px auto; background:#fff; padding-top:20px;}
.up { width:320px; height: 40px; margin:0 auto;line-height:30px; font-size: 20px; font-weight: bold;}
.all h2{ font-size:27px; color:#105fa4; float:left; border-right:1px solid #e4e4e4; padding-right:8px;}
.down{ width:414px;  margin:20px auto; position:relative;}
.user{ width:359px; height:47px; border:1px solid #e4e4e4; border-radius:5px; background:url(../assets/login/bg.png) 15px center no-repeat; background-position:15px -414px; font-size:16px; color:#464646; padding-left:55px; margin-top:10px;}
.pass{ width:359px; height:47px; border:1px solid #e4e4e4; border-radius:5px; background:url(../assets/login/bg.png) 15px center no-repeat; background-position:15px -450px; font-size:16px; color:#464646; padding-left:55px; margin-top:15px;}
.login_sub{ width:201px; height:48px; background:#de4b3b; font-size:20px; color:#fff; margin-top:15px; border-radius:5px; margin-left: 25%;}
.lab{color: #f2f2f2;}
</style>