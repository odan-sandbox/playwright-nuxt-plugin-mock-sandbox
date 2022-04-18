<template>
  <div>
    <Tutorial />
    <div>
      <button data-testid="button" @click="onClick">click</button>
      <div data-testid="text">{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    text: 'init',
  }),
  methods: {
    onClick(): void {
      this.text = this.$user.login()
    },
  },
})
</script>
