<template>
  <div id="registerPage">
    <div class="create-account-box-wrapper">
      <el-card class="create-account-box">
        <div class="form-header-wrapper">
          <!-- Title of register page -->
          <span class="form-title-text">Create your account</span>
        </div>
        <div class="form-body-wrapper">
          <!-- Body For controls -->
          <el-form ref="formData" :model="formData" @focusout.native="updateIsFormValidated">
            <el-row :gutter="20">
              <el-col :span="12">
                <!-- First name -->
                <el-form-item :rules="rules.firstName" prop="firstName">
                  <el-input placeholder="First name" v-model="formData.firstName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <!-- Last name -->
                <el-form-item :rules="rules.lastName" prop="lastName">
                  <el-input placeholder="Last name" v-model="formData.lastName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <!-- Email input -->
              <el-form-item :rules="rules.email" prop="email">
                <el-input placeholder="Email" v-model="formData.email"></el-input>
              </el-form-item>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <!-- Rules for password input and password -->
                <el-form-item :rules="rules.password" prop="password">
                  <el-input type="password" placeholder="Password" v-model="formData.password"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :rules="rules.password" prop="passwordConfirm">
                  <el-input
                    type="password"
                    placeholder="Confirm"
                    v-model="formData.passwordConfirm"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- instruction for register -->
            <div class="instruction-text-wrapper">
              <p>
                Use 8 or more characters with a mix of letters, numbers
                & symbols
              </p>
            </div>
          </el-form>
        </div>
        <div class="form-footer-wrapper">
          <!-- Path back to sign in form instead -->
          <div class="text-button-wrapper">
            <router-link to="/login">
              <a>Sign in instead</a>
            </router-link>
          </div>
          <div class="next-button-wrapper">
            <router-link to="/dashboard">
              <el-button v-bind:disabled="!isFormValidated" @click="register">Next</el-button>
            </router-link>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./register-page.component.js"></script>
<style src="./register-page.component.css"></style>
