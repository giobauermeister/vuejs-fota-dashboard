import Api from '@/services/Api'

export default {
  // registerEmployee (employeeData) {
  //   return Api().post('registeremployee', employeeData)
  // },
  // uploadPhoto (photo) {
  //   // console.log('inside register service upload photo')
  //   // console.log(photo)        
  //   return Api().post('uploadphoto', photo)
  // },
  uploadFirmware (firmware) {
    return Api().post('fimware-upload', firmware)
  },
  makeGet (body) {
    console.log('inside gettest frontend')
    console.log(body);    
    return Api().post('gettest', body)
  }
}