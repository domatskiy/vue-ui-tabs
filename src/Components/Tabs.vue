<template>
    <div class="ui-tabs" :class="tabs.length === 0 ? 'tabs--empty' : ''">
        <div class="ui-tabs__header">
            <div
                v-for="(tab) in tabs"
                :class="tab.code === currentTab ? 'active' : ''"
                v-if="tab.show">
                <span @click="currentTab = tab.code">{{tab.title}}</span>
            </div>
        </div>
        <div class="ui-tabs__content" @click="tabsClick">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  // import Vue from 'vue'
  import TabItem from './TabItem'
  import Tab from './Tab.vue'

  export default {
    name: 'UiTabs',
    components: {Tab},
    data: function () {
      return {
        currentTab: 0,
        hide_all: false,
        tabs: []
      }
    },
    methods: {
      tabsClick: function (e) {
        console.log('tabsClick')
        this.$emit('tabsClick')
        e.stopPropagation()
      }
    },
    mounted () {
      let countHide = 0

      for (let $el of this.$children) {
        if ($el.$options._componentTag === 'ui-tab') {
          let t = new TabItem($el.title, $el.code, $el.show)
          if (!this.currentTab && $el.show === true) {
            this.currentTab = $el.code
          }
          if ($el.show !== true) {
            countHide++
          }
          this.tabs.push(t)
        }
      }

      this.hide_all = this.tabs.length === countHide;

      this.$on('tabShow', (tabCode, show) => {
        let countHide = 0
        let tabShowed = ''
        for (let i in this.tabs) {
          let tab = this.tabs.hasOwnProperty(i) ? this.tabs[i] : null
          if (tab) {
            // console.log('tab', tab)
            if (tab.code === tabCode) {
              tab.show = show
            }

            if (tab.show !== true) {
              countHide++
            }

            if (!tabShowed && tab.show === true) {
              tabShowed = tab.code
            }

            if (this.currentTab === tab.code && !tab.show) {
              this.currentTab = null
            }
          }
        }

        if (!this.currentTab) {
          this.currentTab = tabShowed
        }

        this.hide_all = this.tabs.length === countHide;
      })
    },
    watch: {
      currentTab: function (currentTab) {
        this.$emit('selecttab', currentTab)
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../less/__functions";
@import "../less/__variables";

.ui-tabs{

    padding: 70px 0 10px;

    &--empty{
      display: none;
    }

    &__header{

        display: inline-block;
        width: 100%;
        border: 0;
        padding: 0 0 15px;

        & > * {

            cursor: pointer;
            border-bottom: 3px solid transparent;

            &.active{
                border-bottom-color: #00a8dd;
            }
        }

    }

    &__content{

        display: inline-block;
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 200px;

        .tab{
            display: inline-block;
            position: relative;
            width: 100%;
            height: 100%;
        }
    }

}

@media (max-width: @screen-md){
  .container .ui-tabs{
     margin-left: -15px;
     margin-right: -15px;
     padding-top: 35px;
     padding-bottom: 0;

     &__header{
         box-sizing: border-box;
         padding: 0 15px;
     }
  }
}
</style>