<template lang="pug">
.home.uk-margin-large-top
  .uk-flex.uk-flex-center.uk-margin-small-top#downward
  
    div(class="uk-child-width-1-3@m" uk-grid)
      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/morelinot.jpg' alt)
          .uk-card-body
            h3.uk-card-title Infernal Machine Seven
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-body
            h3.uk-card-title Infernal Machine Eight
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
          .uk-card-media-bottom
            img(src='../assets/images/morelinot.jpg' alt)

      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/morelinot.jpg' alt)
          .uk-card-body
            h3.uk-card-title Infernal Machine Nine
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
