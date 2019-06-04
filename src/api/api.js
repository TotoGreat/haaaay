//接口文件
import wepy from 'wepy'
import G from './global'

//封装request方法
function request(data) {
    return new Promise((resolve, reject) => {
      wepy.request(data).then(res => {
        wepy.hideLoading()
        resolve(res)
      }).catch(res => {
        wepy.hideLoading()
        reject(res)
        wx.showModal({
          content: '网络出问题啦',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              
            }
          }
        })
      })
    })
  }
  function uploadFile(data) {
    return new Promise(function(resolve, reject) {
      wepy.uploadFile(data).then(function(res) {
        resolve(res,100001)
      }).catch(function (res) {
        reject(res);
      })
    });
  }
//上传附件
export function uploadimg(tempFilePath){
  let req={
      url:G.apiUrl+'/user/uploadPic',
      filePath: tempFilePath,
      name: 'file',
      header:{
        'content-type': 'multipart/form-data',
        'X-Request-ID-WFY':new Date().getTime()
      }
  }
  return uploadFile(req)
}
//获取短信验证码
export function sendCode(data){
        let req={
            url:G.apiUrl+'/user/sendCode',
            method:'POST',
            header:{
                'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
            },
            data:data
        }
        return request(req)
    }
//绑定手机号注册
export function register(data){
    let req={
        url:G.apiUrl+'/user/register',
        method:'POST',
        header:{
            'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data:data
    }
    return request(req)
}
//登录a
export function logina(data){
  let req={
      url:G.apiUrl+'/user/loginA',
      method:'POST',
      header:{
          'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data:data
  }
  return request(req)
}
//登录b
export function loginb(data){
  let req={
      url:G.apiUrl+'/user/loginB',
      method:'POST',
      header:{
          'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data:data
  }
  return request(req)
}
//获取职位列表- 阿姨端
export function auntList(data){
  let req={
      url:G.apiUrl+'/aunt/auntList',
      method:'POST',
      header:{
          'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data:data
  }
  return request(req)
}
//获取职位列表- 阿姨端
export function auntdetails(data){
  let req={
      url:G.apiUrl+'/aunt/auntDetail',
      method:'POST',
      header:{
          'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data:data
  }
  return request(req)
}
//获取公司详情
export function companyQuery(data){
  let req={
      url:G.apiUrl+'/company/companyQuery',
      method:'POST',
      header:{
          'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data:data
  }
  return request(req)
}
//获取发布列表- 阿姨端
export function myList(data){
  let req={
    url:G.apiUrl+'/aunt/mine/myList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//获取发布详情- 阿姨端
export function fbdetail(data){
  let req={
    url:G.apiUrl+'/aunt/mine/myDetail',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//发布- 阿姨端
export function publishSave(data){
  let req={
    url:G.apiUrl+'/publish/publishSave',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//个人资料修改
export function information(data){
  let req={
    url:G.apiUrl+'/user/information',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//发布刷新
export function resetPublish(data){
  let req={
    url:G.apiUrl+'/aunt/mine/resetPublish',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//业主 阿姨列表
export function ownerList(data){
  let req={
    url:G.apiUrl+'/owner/ownerList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//业主 阿姨详情
export function ownerDetail(data){
  let req={
    url:G.apiUrl+'/owner/ownerDetail  ',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//业主 关注/取消关注
export function follow(data){
  let req={
    url:G.apiUrl+'/owner/follow  ',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//业主 我的关注列表
export function followList(data){
  let req={
    url:G.apiUrl+'/owner/followList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//我的发布 列表
export function fbmyList(data){
  let req={
    url:G.apiUrl+'/aunt/mine/myList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//获取小区列表
export function getarea(){
  let req={
    url:G.apiUrl+'/user/area',
    method:'GET',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:{}
  }
  return request(req)
}
//分享列表
export function getshare(data){
  let req={
    url:G.apiUrl+'/share/shareList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//上传资质证明
export function proveImg(data){
  let req={
    url:G.apiUrl+'/user/insertImg',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//分享详情
export function fxdetail(data){
  let req={
    url:G.apiUrl+'/share/shareDetail',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//作废
export function delPublish(data){
  let req={
    url:G.apiUrl+'/aunt/mine/delPublish',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 阿姨求职列表
export function houseList(data){
  let req={
    url:G.apiUrl+'/house/houseList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 录用
export function employ(data){
  let req={
    url:G.apiUrl+'/house/employ',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 分享
export function gssharelist(data){
  let req={
    url:G.apiUrl+'/house/shareList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 录用列表
export function employlist(data){
  let req={
    url:G.apiUrl+'/house/employList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 发布阿姨
export function publish(data){
  let req={
    url:G.apiUrl+'/house/publish',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 接单
export function ownerChoose(data){
  let req={
    url:G.apiUrl+'/house/ownerChoose',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 我发布的招聘列表
export function minePublishList(data){
  let req={
    url:G.apiUrl+'/house/minePublishList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司端 阿姨详情
export function houseDetail(data){
  let req={
    url:G.apiUrl+'/house/houseDetail',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司 业主列表
export function yzList(data){
  let req={
    url:G.apiUrl+'/house/ownerList',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司 业主列表
export function displayimg(data){
  let req={
    url:G.apiUrl+'/house/displayImage',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}
//公司 我的招聘发布详情
export function mineHouseDetail(data){
  let req={
    url:G.apiUrl+'/house/mineHouseDetail',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:data
  }
  return request(req)
}