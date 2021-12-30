<template>
  <button
    :type="type"
    @click="$emit('click')"
    class="footer-button"
    :style="{ background: background, borderRadius: borderRadius }"
  >
    <div
      class="btn-icon-wraper"
      v-if="icon"
      :class="icon ? 'icon-inside' : 'no-icon'"
    >
      <div class="nav-btn-icon" :style="{ background: iconColor }">
        <slot></slot>
      </div>
    </div>
    <div class="btn-content" :class="icon ? 'icon-inside' : 'no-icon'">
      <span>{{ value }}</span>
      
    </div>
  </button>
</template>
<script>

export default {
  name: "footer-button",
  props: {
    type: String,
    value: String,
    icon: Boolean,
    iconColor: String,
    background: String,
    borderRadius: String,
  },
};
</script>
<style scoped>
.btn-content {
  position: relative;
}

</style>
