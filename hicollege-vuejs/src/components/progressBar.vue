<template>
  <!--Show progress bar only if we have any length of form data -->
  <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{width: rsvpCapacityInPercent + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> {{formLengthArray}} / {{rsvpCapacity}}</div>
  </div>
</template>
<script>
export default {
  name: 'progressBar',
  props: {
    rsvpCapacity: Number,
    required: true
  },
  data () {
    return {
      rsvpCapacityInPercent: 0,
      formLengthArray: 0
    }
  },
  mounted() {
    this.$root.$on('arrayFormLength', data => {
      this.formLengthArray = data;
      this.rsvpCapacityInPercent = this.formLengthArray / (this.rsvpCapacity / 100);
    });
  },
  methods: {
  }
}
</script>
