<!-- App.vue -->
<template>
  <div>
    <HomeSidebar></HomeSidebar>
  </div>
</template>

<script>
import { HomeSidebar } from '#components';
import ProfileDropdown from '~/components/Home/Profile-dropdown.vue';

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        birthDate: '',
        gender: '',
        password: ''
      },
      showPassword: false
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style>
/* Tailwind CSS is already included via CDN or installed in the project */
</style>