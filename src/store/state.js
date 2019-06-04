// let songSheetId
// let singerName
// try {
//   if (localStorage.id || localStorage.singer) {
//     songSheetId = localStorage.id
//     singerName = localStorage.singer
//   }
// } catch (e) {}
//
// export default {
//   id: songSheetId,
//   singer: singerName
// }
const state = {
  singer: {} || localStorage.getItem('singer'),
  id: '' || localStorage.getItem('id'),
  mvID: '' || localStorage.getItem('mvID')
}
export default state
