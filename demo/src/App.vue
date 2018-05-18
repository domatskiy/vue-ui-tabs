<template>
    <div id="app">
        <ui-tabs @tabsClick="tclick($event)">
            <ui-tab code="tab1" title="Tab 1">
                tab1
            </ui-tab>
            <ui-tab code="tab2" title="Tab 2">
                tab2
            </ui-tab>
            <ui-tab code="tab3" title="Tab 3">
                tab3
            </ui-tab>
        </ui-tabs>
    </div>
</template>

<script>
    export default {
      name: 'app',
      components: {},
      data () {
        return {}
      },
      methods: {
        tclick: function () {
          console.info('tclick')
        }
      }
    }
</script>