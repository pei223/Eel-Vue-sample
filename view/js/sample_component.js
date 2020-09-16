Vue.component('sample-component', {
    props: [
        'message',
        'onButtonClicked',
    ],
  template: `
    <div class="card">
        <div class="card-content row">
            <p>{{ message }}</p>
            <button type="button" @click='onButtonClicked()'>Button</button>
        </div>
    </div>
    `,
})
