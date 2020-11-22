<template>
  <div class="leading-normal tracking-normal text-gray-800 bg-gradient-to-r from-red-800 via-orange-500 to-yellow-500">
    <NavHeader />
    <SimpleHero />
    <Abeille />
    <Produits />
    <Distributeurs />
    <WaveBottom />
    <Contact />
    <!--<AppFooter />-->
  </div>
</template>

<script>
// import AppFooter from './AppFooter.vue'
import { defineComponent, onMounted } from 'vue'
import NavHeader from './NavHeader.vue'
import SimpleHero from './SimpleHero.vue'
import Abeille from './Abeille.vue'
import Produits from './Produits.vue'
import WaveBottom from './WaveBottom.vue'
import Contact from './Contact.vue'
import Swal from 'sweetalert2'
import Distributeurs from './Distributeurs.vue'

export default defineComponent({
  components: {
    Distributeurs,
    // AppFooter,
    Contact,
    WaveBottom,
    Produits,
    Abeille,
    SimpleHero,
    NavHeader,
  },
  setup() {
    onMounted(() => {
      if (window.location.search.includes('success=true')) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#a5dc86',
          title: 'Merci',
          text: 'Votre message a bien été envoyé, nous reviendrons vers vous dès que possible.',
        })
      }
    })
  },
})

</script>

<style>

html {
    scroll-behavior: smooth;
}

:target {
    scroll-margin-top: 5rem;
}

</style>


<style src="sweetalert2/dist/sweetalert2.min.css"/>
<style>
.swal2-modal {
  @apply rounded-lg !important;
}

.snipcart-item-line,
.snipcart-item-line__image,
.snipcart-cart-button,
.snipcart-form,
.snipcart__box,
.snipcart-cart-summary__content,
.snipcart-input,
.snipcart-textbox {
  @apply rounded-lg !important;
}

.snipcart-checkbox:focus + label::before,
.snipcart-checkbox:hover + label::before,
.snipcart-input:focus-within,
.snipcart-textbox--focus,
.snipcart-shipping-rates-list-item--highlight {
    @apply border-orange-400
}

.snipcart-checkbox:checked + label::before {
    @apply bg-orange-400
}

.snipcart-form-radio:checked + label::before {
    @apply bg-red-800 bg-none
}

.snipcart-typeahead__suggestions {
    @apply mt-2 border-gray-200 rounded-lg
}

.snipcart-typeahead__suggestion--secondary {
    @apply text-gray-400
}

.snipcart-typeahead__suggestion--powered-by-google {
    @apply hidden !important;
}

button.snipcart-cart-button,
div.snipcart__box--badge-highlight {
  @apply bg-gradient-to-r from-red-800 to-orange-500 text-white
}

.snipcart-cart-button--secondary .snipcart__icon path {
    @apply fill-current
}

.snipcart-cart-header__customer-account svg path,
.snipcart-cart-header__count svg path,
.snipcart-modal__close svg path,
.snipcart-modal__header-summary svg path,
.snipcart__icon--blue-dark path,
.snipcart__actions--link {
   @apply fill-current text-red-800
}

.snipcart__button--icon:active,
.snipcart__button--icon:focus {
    @apply border-red-800

}

.snipcart__button--icon {
  @apply rounded !important;
}

.snipcart-cart-summary,
.snipcart-cart__featured-payment-methods-title,
.snipcart-cart__secondary-header,
.snipcart-discount-box,
.snipcart-modal__container,
.snipcart-featured-payment-methods__title,
.snipcart-cart-header,
.snipcart-cart__content,
.snipcart-modal {
  @apply bg-gray-100 !important;
}

</style>
