<template lang="pug">
.home
  .uk-flex.uk-flex-wrap.uk-flex-center
    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom
      //- img(alt='Vue logo' src='../assets/images/alchemy-sulphuric.svg' height="75px")
      h1
        i.fas.fa-mosque.fa-3x
      h3 Addio Mondo Crudele
      button.uk-button.uk-button-danger.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Oppress Me
    .uk-card.uk-card-default.uk-card-body.uk-margin-left.uk-hover
      //- img(alt='Vue logo' src='../assets/images/alchemy-sulphuric.svg' height="75px")
      h1
        i.fas.fa-university.fa-3x
      h3 Addio Mondo Crudele
      button.uk-button.uk-button-default.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Oppress Me
    .uk-card.uk-card-default.uk-card-body.uk-margin-left.uk-hover
      //- img(alt='Vue logo' src='../assets/images/alchemy-sulphuric.svg' height="75px")
      h1
        i.fas.fa-chess-rook.fa-3x
      h3 Addio Mondo Crudele
      button.uk-button.uk-button-primary.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Oppress Me

  .uk-flex.uk-flex-center.uk-margin-large-top
  
    div(class="uk-child-width-1-3@m" uk-grid)
      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/morelinot.jpg' alt)
          .uk-card-body
            h3.uk-card-title Media Top
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-body
            h3.uk-card-title Media Bottom
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          .uk-card-media-bottom
            img(src='../assets/images/morelinot.jpg' alt)

      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/morelinot.jpg' alt)
          .uk-card-body
            h3.uk-card-title Media Top
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

    //- .uk-card.uk-card-default.uk-card-body.uk-margin-left
    //-   img(alt='Vue logo' src='../assets/images/alchemy-sulphuric.svg' height="75px")
    //-   h3 Addio Mondo Crudele
    //-   button.uk-button.uk-button-primary.uk-button-large Oppress Me
    //- .uk-card.uk-card-default.uk-card-body.uk-margin-left
    //-   img(alt='Vue logo' src='../assets/images/alchemy-sulphuric.svg' height="75px")
    //-   h3 Addio Mondo Crudele
    //-   button.uk-button.uk-button-primary.uk-button-large Oppress Me

    
    
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
