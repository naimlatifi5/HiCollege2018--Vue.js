<template>
  <!--Show progress bar only if we have any length of form data -->
  <div class="progress" v-if="arrayLength">
      <div class="progress-bar" role="progressbar" :style="{width: rsvpCapacityPercentage + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> {{arrayLength}} / {{rsvpCapacity}}</div>
  </div>
</template>
<script>
export default {
  name: 'progressBar',
  props: {
    rsvpCapacity: {
      type: Number,
      required: true
    },
    rsvpCapacityPercentage: {
      type: Number,
      required: true
    },
    arrayLength: {
      type: Number,
      required: true
    }
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>
