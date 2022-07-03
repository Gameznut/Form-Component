<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <BaseInput 
            label="First Name:" 
            v-model="form.firstName" 
          />
          <BaseInput 
            label="Last Name:" 
            v-model="form.lastName" 
          />
          <BaseInput 
            label="Email:" 
            v-model="$v.form.email.$model" 
            type="email" 
          />
          <BaseInput label="Telephone" v-model="form.telephone" v-mask="{mask: '###-###-###'}" />
          <br>
          <input 
            type="text"
            v-model="$v.form.website.$model" 
            class="form-control"
            :class="{'is-valid': !$v.form.website.$error && $v.form.website.$dirty,'is-invalid': $v.form.website.$error}"
          />
          <!-- <pre>{{ $v }}</pre> -->
          <BaseSelect
            label="What do you love most about Vue?"
            v-model="form.love"
            :options="loveOptions"
          />
          
          <br>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" :disabled="!formIsValid" @click.prevent="onSubmit" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import BaseInput from '@/components/BaseInput';
import useVuelidate from "@vuelidate/core";
// import { url } from 'vuelidate/lib/validators';
import {url, alpha, required, email} from "@vuelidate/validators";
import BaseSelect from '@/components/BaseSelect';
export default {
  name: 'app',
  data() {
    return {
      $v: useVuelidate(),
      form: {
        firstName: '',
        lastName: '',
        email: '',
        love: 'fun',
        telephone: '',
        website: '',
      },
      loveOptions: [
        { label: 'Fun to use', value: 'fun' },
        { label: 'Friendly learning curve', value: 'curve' },
        { label: 'Amazing documentation', value: 'docs' },
        { label: 'Fantastic community', value: 'community' }
      ]
    }
  },
  validations() {
    return {
      form: {
first_name: { alpha, required },
last_name: { alpha },
    email: { email, required },
  // telephone: {
  //     validPhone: phone => phone.match(/((\(\d{3}\) ?)|(\d{3}-))? 
  //     \d{3}-\d{4}/) !== null
  //   },
    website: { url },
    love: { required }
  }
    };
  },
  components: { BaseInput, BaseSelect,
   },
  computed: {
    formIsValid() {
      return (
        this.form.firstName.length > 0 && 
        this.form.lastName.length > 0 && 
        this.form.email.length > 0
      );
    }
  },
  methods: {
    async onSubmit() {
      if (!this.formIsValid) return 
      await axios
    .post('http://localhost:3000/users', {data: this.form})
    .then(response =>   {
      console.log('Form has been posted', response);
    }).catch(err => {
      console.log('An error occurred', err);
    });

    }
  },
}
</script> 