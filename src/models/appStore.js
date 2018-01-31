import {observable, useStrict, computed, action} from 'mobx'
import { TITLE_HEIGHT, FOOTER_HEIGHT } from '../constants/config'
import AWARD from '../db/award.json'

useStrict(true)

export default class AppStore {
  @observable currentAwardId = -1
  @observable awards = AWARD.reduce((obj, award) => {
    obj[award.id] = {
      ...award,
      last: award.num
    }
    return obj
  }, {})
  @observable screenWidth = document.body.offsetWidth
  @observable screenHeight = document.body.offsetHeight

  @computed get contentHeight () {
    return this.screenHeight - TITLE_HEIGHT - FOOTER_HEIGHT
  }

  @computed get currentAward () {
    if (this.currentAwardId === -1) {
      return null
    } else {
      return this.awards[this.currentAwardId]
    }
  }

  @action.bound
  resizeContentHeight () {
    this.screenHeight = document.body.offsetHeight
  }

  @action.bound
  selectAward (id) {
    this.currentAwardId = id
  }
}
