<template lang="pug">
.home.uk-margin-large-top
  .uk-flex.uk-flex-wrap.uk-flex-center
    .uk-card.uk-card-primary.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
        i.material-icons.md-72 toys
      h3 The Hippo Dippy Shake
      a.uk-button.uk-button-default.uk-button-large(href="#downward")
        i.fas.fa-bullseye.fa-2x.uk-margin-small-right
        | Impress Me


    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
        i.material-icons.md-72 directions_bike
      h3 The River Horse
      button.uk-button.uk-button-default.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Imprint Me

    .uk-card.uk-card-secondary.uk-card-body.uk-hover.uk-margin-large-bottom
      h1
        i.material-icons.md-72 beach_access
      h3 Saint Augustine of Hippo
      button.uk-button.uk-background-primary.uk-button-large
        i.material-icons.md-36.uk-margin-small-right all_inclusive
        | Press-Gang Me

    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
         i.material-icons.md-72 code
      h3 A Faulty Hippocampus
      button.uk-button.uk-button-danger.uk-button-large
        i.material-icons.md-24.uk-margin-small-right toys
        | Free Press Me


    .uk-card.uk-card-primary.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
        i.material-icons.md-72 toys
      h3 The Hippodromes 
      button.uk-button.uk-button-default.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Oppress Me

    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom
      h1
        i.material-icons.md-72 my_location
      h3 The Hippogriffs
      button.uk-button.uk-button-primary.uk-button-large
        i.material-icons.md-36.uk-margin-small-right all_inclusive
        | Oppress Me

  .uk-flex.uk-flex-center.uk-margin-large-top#downward
  
    div(class="uk-child-width-1-3@m" uk-grid)
      div
        .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/ponteavmarinho.jpg' alt style="filter: grayscale(95%)")
          .uk-card-body
            h3.uk-card-title San Pavlov Skyline
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
      div
        .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-card-hover
          .uk-card-body
            h3.uk-card-title San Pavlov Skyline
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
          .uk-card-media-bottom
            img(src='../assets/images/ponteavmarinho.jpg' alt style="filter: grayscale(95%)")

      div
        .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/ponteavmarinho.jpg' alt style="filter: grayscale(95%)")
          .uk-card-body
            h3.uk-card-title San Pavlov Skyline
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
