<template>
  <div class="form-group">
        <label>{{ label }}</label>
        <select class="form-control"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option 
                v-for="opt in options"
                :key="opt.value"
                :value="opt.value"
            >
                {{ opt.label || 'No label' }}  
            </option>
        </select>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
        type: Array,
        required: true,
        validator(opts) {
            return !opts.find(opt => typeof opt !== 'object');
        }
    },
    modelValue: {
      type: String,
      required: true
    }
  }
}
</script>