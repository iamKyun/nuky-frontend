import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarAlt,
  faCommentDots,
  faFireAlt,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import {
  faClock,
  faCopyright,
  faEnvelope
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faGithubSquare,
  faGithub,
  faClock,
  faCommentDots,
  faCopyright,
  faEnvelope,
  faCalendarAlt,
  faFireAlt,
  faCaretDown
)

Vue.component('fa-icon', FontAwesomeIcon)
