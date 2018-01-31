import {observable, useStrict, computed, action, runInAction} from 'mobx'
import { TITLE_HEIGHT, FOOTER_HEIGHT } from '../constants/config'
import { getAwards } from '../api'

useStrict(true)

export default class AppStore {
  @observable currentAwardId = -1
  @observable awardsList = null
  @observable screenWidth = document.body.offsetWidth
  @observable screenHeight = document.body.offsetHeight

  @computed get contentHeight () {
    return this.screenHeight - TITLE_HEIGHT - FOOTER_HEIGHT
  }

  @computed get awards () {
    return this.awardsList.reduce((obj, award) => {
      obj[award.id] = {
        ...award,
        last: award.num
      }
      return obj
    }, {})
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

  @action.bound
  async getAwardsAction () {
    try {
      const res = await getAwards()
      runInAction(() => {
        this.awardsList = res.data
      })
    } catch (e) {
      console.log(e)
    }
  }
}
