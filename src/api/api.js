//接口文件
import wepy from 'wepy'
import G from './global'

//封装request方法
function request(data, tryagain) {
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