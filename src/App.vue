<template lang="pug">
#app
  nav.uk-navbar-container.uk-margin(uk-navbar uk-sticky)
    .uk-navbar-left.with.dignity
      a.uk-navbar-item.uk-logo.with.dignity(href='#') 
        i.fas.fa-sun.fa-2x.uk-margin-small-right
        | Engenho Novo LLC
    .uk-navbar-right
      .uk-navbar-item
        button.uk-button.uk-button-default.uk-button-large(type="button")
          i.material-icons.uk-margin-small-right keyboard_arrow_down
          |  Ungulates
        div(uk-dropdown="mode: click")
          ul.uk-nav.uk-dropdown-nav
            li.uk-nav-header Even-Toed
            li.uk-active
              a(href='#') Elephants
            li
              a(href='#') Camel
            li
              a(href='#') Cows 
            li
              a(href='#') Deer
            li
              a(href='#') Goats
            li.uk-nav-divider
            li.uk-nav-header Odd-Toed
            li
              a(href='#') Giraffe
            li
              a(href='#') Hippos
            li
              a(href='#') Antelopes
            li
              a(href='#') Zebra
            li
              a(href='#') Rhinoceros

        button.uk-button.uk-button-default.uk-button-large.uk-margin-small-left(type="button" uk-toggle='target: #offcanvas-usage' class="uk-visible@m")
          i.material-icons.uk-margin-small-right waves
          | Kidding Aside


      #offcanvas-usage.uk-width-large(uk-offcanvas="overlay: true")
        .uk-offcanvas-bar( style="width: 400px")
          button.uk-offcanvas-close(type='button' uk-close)
          h3
            i.fas.fa-sun.fa-3x.uk-margin-small-right
            | Engenho Novo LLP
          p.uk-text-left Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          button.uk-button.uk-button-large.uk-button-danger.uk-margin-large-bottom
            i.material-icons.md-48.uk-margin-small-right keyboard_arrow_down
            | Acknowledge

          .uk-flex.uk-flex-row.uk-flex-middle.uk-text-secondary.uk-flex-center
            ul.uk-iconnav
              li
                a(href='#' uk-icon='icon: quote-right; ratio: 1.5')
              li
                a(href='#' uk-icon='icon: cog; ratio: 1.5')
              li
                a(href='#' uk-icon='icon: code; ratio: 1.5')
              li
                a(href='#' uk-icon='icon: git-branch; ratio: 1.5')
              li
                a(href='#' uk-icon='icon: social; ratio: 1.5')
              li
                a(href='#' uk-icon='icon: link; ratio: 1.5')

  router-view
</template>

<style lang="less">
</style>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
export default {
    name: 'App',
  };
</script>

<style lang="less">

html * {
  font-family: 'News Cycle', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
