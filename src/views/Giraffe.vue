<template lang="pug">
.home.uk-margin-large-top
  .uk-flex.uk-flex-wrap.uk-flex-center
    .uk-card.uk-card-primary.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
        i.material-icons.md-72 toys
      h3 Gaffes by Giraffes

      a.uk-button.uk-button-default(href='#modal-sections' uk-toggle) All Mod Cons    

      #modal-sections(uk-modal)
        .uk-modal-dialog.uk-margin-auto-vertical
          button.uk-modal-close-default(type='button' uk-close)
          .uk-modal-header.uk-background-secondary.uk-light
            h2.uk-modal-title
              i.fas.fa-sun.fa-2x.uk-margin-small-right
              | Engenho Novo LLC
          .uk-modal-body
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          .uk-modal-footer.uk-text-right.uk-background-primary
            button.uk-button.uk-button-primary.uk-modal-close.uk-light.uk-margin-small-right(type='button') Acceptance
            button.uk-button.uk-button-primary.uk-modal-close.uk-light(type='button') Rejection


    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
        i.material-icons.md-72 directions_bike
      h3 Mimeograph for Staff
      button.uk-button.uk-button-default.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Oppress Me

    .uk-card.uk-card-secondary.uk-card-body.uk-hover.uk-margin-large-bottom
      h1
        i.material-icons.md-72 beach_access
      h3 Songs by Piaf
      button.uk-button.uk-background-primary.uk-button-large
        i.material-icons.md-36.uk-margin-small-right all_inclusive
        | Oppress Me

    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
         i.material-icons.md-72 code
      h3 A Graph on Behalf
      button.uk-button.uk-button-danger.uk-button-large
        i.material-icons.md-24.uk-margin-small-right toys
        | Oppress Me


    .uk-card.uk-card-primary.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
      h1
        i.material-icons.md-72 toys
      h3 Telegraph Paragraph
      button.uk-button.uk-button-default.uk-button-large
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Oppress Me

    .uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom
      h1
        i.material-icons.md-72 my_location
      h3 The Golden Calf
      button.uk-button.uk-button-primary.uk-button-large
        i.material-icons.md-36.uk-margin-small-right all_inclusive
        | Oppress Me

  .uk-flex.uk-flex-center.uk-margin-large-top#downward
  
    div(class="uk-child-width-1-3@m" uk-grid)
      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/morelinot.jpg' alt)
          .uk-card-body
            h3.uk-card-title Satanic Mills
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-body
            h3.uk-card-title Gizmos au Gogo
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
          .uk-card-media-bottom
            img(src='../assets/images/morelinot.jpg' alt)

      div
        .uk-card.uk-card-default.uk-card-body.uk-card-hover
          .uk-card-media-top
            img(src='../assets/images/morelinot.jpg' alt)
          .uk-card-body
            h3.uk-card-title A Huge Kludge
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
