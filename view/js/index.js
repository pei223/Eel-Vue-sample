var app = new Vue({
 components: [
    'sample-component',
 ],
  el: '#root',
  template: `
    <div>
        <h3>Index component</h3>
        <sample-component message="Message from index component" :onButtonClicked="onClicked" />
    </div>
    `,
  data: {
  },
  mounted () {
  },
  methods: {
    onClicked() {
        console.log("Button clicked.");
        eel.on_button_clicked();
    },
  }
})

eel.expose(showAlert)
function showAlert(message) {
    window.alert(message);
}