<template>
    <div class="ui-tab" v-if="sel_tab_code === code && show === true" @click="click">
        <slot></slot>
    </div>
</template>
<script>
// import Vue from 'vue'
// import TabItem from './TabItem'

export default {
  name: 'UiTab',
  data: function () {
    return {
      sel_tab_code: ''
    }
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    code: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: false,
      default: function () {
        return true
      }
    }
  },
  methods: {
    click: function () {
      this.$parent.$emit('tabClick', this.code)
    }
  },
  watch: {
    show: {
      handler: function ($enableShow) {
        console.log('show: ', this.code, $enableShow)
        this.$parent.$emit('tabShow', this.code, $enableShow)
      },
      deep: true
    }
  },
  mounted: function () {
    this.$parent.$on('selecttab', (tabCode) => {
      console.log('selecttab', tabCode)
      this.sel_tab_code = tabCode
    })
  }
}
</script>