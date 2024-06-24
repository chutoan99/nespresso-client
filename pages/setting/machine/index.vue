<script lang="ts" setup>
import { defineComponent } from "vue";
defineComponent({
  name: "SettingMachine",
});
 
</script>

<template lang="pug">
section#setting_my_machine
  form#form
    .setting_label My Machine
    .form_content
      .form_btn
        button(type='submit')
          span ADD AN MACHINE
</template>
