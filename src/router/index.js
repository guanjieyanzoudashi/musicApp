import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/searchValue/searchValue'
import Details from 'components/songsheet-details/details'
import SingerDetails from 'components/singerDetails/singerDetails'
import Albums from 'components/singerDetails/compoents/Albums'
import HotMusic from 'components/singerDetails/compoents/hotMusic'
import Mv from 'components/singerDetails/compoents/MV'
import SingerIntroduction from 'components/singerDetails/compoents/singerIntroduction'
import mvPlay from 'components/mv/mv'
import searchSong from 'components/searchValue/components/song'
import searchSinger from 'components/searchValue/components/singer'
import searchAlbum from 'components/searchValue/components/album'
import searchVideo from 'components/searchValue/components/video'
import searchLrc from 'components/searchValue/components/lrc'
import searchSheet from 'components/searchValue/components/songList'
import searchRadio from 'components/searchValue/components/radio'
import searchUser from 'components/searchValue/components/user'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: '/',
          name: 'searchSong',
          component: searchSong
        },
        {
          path: '/search/singer',
          component: searchSinger
        },
        {
          path: '/search/song',
          component: searchSong
        },
        {
          path: '/search/album',
          component: searchAlbum
        },
        {
          path: '/search/video',
          component: searchVideo
        },
        {
          path: '/search/lrc',
          component: searchLrc
        },
        {
          path: '/search/songList',
          component: searchSheet
        },
        {
          path: '/search/radio',
          component: searchRadio
        },
        {
          path: '/search/user',
          component: searchUser
        }
      ]
    },
    {
      path: '/details',
      component: Details
    },
    {
      path: '/singerDetails',
      component: SingerDetails,
      children: [
        {
          path: '/',
          component: HotMusic
        },
        {
          path: '/singerDetails/albums',
          component: Albums
        },
        {
          path: '/singerDetails/hotMusic',
          component: HotMusic
        },
        {
          path: '/singerDetails/mv',
          component: Mv
        },
        {
          path: '/singerDetails/singerIntroduction',
          component: SingerIntroduction
        }
      ]
    },
    {
      path: '/mv',
      name: 'mvPlay',
      component: mvPlay
    }
  ]
})
