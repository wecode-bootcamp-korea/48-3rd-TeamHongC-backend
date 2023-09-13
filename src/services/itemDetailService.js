const itemDetailDao = require('../models/itemDetailDao');

const getItemDetail = async (id) => {
  const detail = await itemDetailDao.getItemDetail(id);
  //   const review = await itemDetailDao.getItemReview(id);
  const image = await itemDetailDao.getItemImage(id);

  detail['price'] =
    detail['price'].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') +
    '원';

  console.log(typeof detail['price']);
  const createdAt = detail.createdAt;
  const today = new Date();
  const diff = Math.floor((today.getTime() - createdAt.getTime()) / 1000 / 60);
  if (diff < 1) detail['date'] = '방금전';
  if (diff < 60) {
    detail['date'] = `${diff}분전`;
  }

  const diffHour = Math.floor(diff / 60);
  if (diffHour < 24) {
    detail['date'] = `${diffHour}시간전`;
  }

  const diffTimeDay = Math.floor(diff / 60 / 24);
  if (diffTimeDay !== 0 && diffTimeDay < 7) {
    detail['date'] = `${diffTimeDay}일전`;
  }

  const diffMonthDay = Math.floor(diff / 60 / 24 / 30);
  if (diffMonthDay !== 0 && diffMonthDay < 12) {
    detail['date'] = `${diffMonthDay}개월 전`;
  }

  delete detail.createdAt;
  //   detail['review'] = review;
  detail['image'] = image;
  return detail;
};

module.exports = { getItemDetail };
