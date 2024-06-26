<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import { data_cart } from "./resources";
import ProductCartItem from "./components/cart-item.vue"
definePageMeta({
  layout: 'sign-up'
});
defineComponent({
  components: { 
    ProductCartItem 
  },
})
const privateOption = ref<string>('');
const inputYesRef = ref<HTMLInputElement | null>(null);
const inputNoRef = ref<HTMLInputElement | null>(null);
const dataCart = ref<any>(data_cart); 

const onNoClicked = () => {
  privateOption.value = 'no';
  if (inputYesRef.value) {
    inputYesRef.value.checked = false;
  }
};

const onYesClicked = () => {
  privateOption.value = 'yes';
  if (inputNoRef.value) {
    inputNoRef.value.checked = false;
  }
};
</script>

<template lang="pug">
main#signUp_private
  section.private
    .private_wrapper
      .private_inner
        #private_form.container
          .private_form-inner
            h3.private_form-heading COFFEE MACHINE
            h4.private_form-title Register your coffee machine
            .private_form-header
              input#signUp_private-yes(type='radio' v-model='privateOption' value='yes' @click='onYesClicked' ref='inputYes')
              label(for='signUp_private-yes') I already own a machine.
            .private_form-header
              input#signUp_private-no(type='radio' v-model='privateOption' value='no' @click='onNoClicked' ref='inputNo')
              label(for='signUp_private-no') I don&apos;t have any machine yet.
          .private_form-label
            span SELECT YOUR RANGE
          .private_form-label2
            span STEP 1/3 SELECT YOUR RANGE
          #card-list.card-list
            ProductCartItem(v-bind:data='dataCart')
          .private_form-label2
            span STEP 2/3 SELECT YOUR MACHINE COLOR
          .card-list
            ProductCartItem(v-bind:data='dataCart')
          .private_form-label2
            span STEP 3/3 ENTER YOUR MACHINE INFORMATION
          .private_form-footer(style='background-color: white')
            .private_form-body
              h3.private_form-heading
                | Inissia Inissia Ruby Red Coffee Machine
              fieldset.private_form-content
                div
                  label(for='') Machine serial number :
                  input(type='text' placeholder='')
                span.private_form-mess Help me find my number
              fieldset.private_form-content
                div
                  label(for='') Date of purchase* :
                  div(style='display: flex; gap: 4px')
                    select(style='width: 100%')
                      option
                    select(style='width: 100%')
                      option
                    select(style='width: 100%')
                      option
              fieldset.private_form-content
                div
                  label(for='') How did you obtain your machine?*
                  select
                    option
            .private_form-img
              .private_form-wrapper
                img(src='/_nuxt/assets/images/sigup/Rectangle_7.png')
          .private_form-button
            button
              router-link(to='/signUp_private_step_2') Continue

</template>
