import httpInstance from '@/utils/http'

//获取banner数据
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}

//新鲜好物接口

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}

//人气推荐
export const getHotApi = ()=>{
    return httpInstance({
        url:'/home/hot'
    })
}


//产品接口
export const getGoodsAPI = ()=>{
  return httpInstance({
    url:'/home/goods'
  })
}