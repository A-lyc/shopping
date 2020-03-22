import {request} from "./request";

export function getDetail(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.lowPrice = itemInfo.lowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.reaalPrice = itemInfo.lowNowPrice
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class DetailActive{
  constructor(detailInfo){
    this.detailInfo = detailInfo.detailImage[0].list
  }
}

export class DetailInfo{
  constructor(info,rule){
    this.info = info
    this.rule = rule
  }
}


  