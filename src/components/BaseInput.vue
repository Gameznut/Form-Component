<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input :type="type" class="form-control" :value="modelValue" @input='$emit("update:modelValue", $event.target.value)'>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password'].includes(value);
      }
    },
    modelValue: {
      type: String,
      required: true
    },
    mask: {
      type: Object,
      required: false
    }
  }
}
</script>