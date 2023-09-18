const itemDetailDao = require('../models/itemDetailDao');

const getItemDetail = async (id) => {
  try {
    const [detail, image] = await Promise.all([
      itemDetailDao.getItemDetail(id),
      itemDetailDao.getItemImage(id),
    ]);

    detail['price'] = detail['price'].toLocaleString() + '원';

    const createdAt = detail.createdAt;
    const today = new Date();
    const difference = Math.floor(
      (today.getTime() - createdAt.getTime()) / 1000 / 60
    );
    if (difference <= 1) {
      detail['date'] = '방금전';
    } else if (difference < 60) {
      detail['date'] = `${difference}분전`;
    }

    const differenceHour = Math.floor(difference / 60);
    if (differenceHour !== 0 && differenceHour < 24) {
      detail['date'] = `${differenceHour}시간전`;
    }

    const differenceTimeDay = Math.floor(difference / 60 / 24);
    if (differenceTimeDay !== 0 && differenceTimeDay < 7) {
      detail['date'] = `${differenceTimeDay}일전`;
    }

    const differenceMonthDay = Math.floor(difference / 60 / 24 / 30);
    if (differenceMonthDay !== 0 && differenceMonthDay < 12) {
      detail['date'] = `${differenceMonthDay}개월 전`;
    }

    delete detail.createdAt;
    detail['image'] = image;
    return detail;
  } catch (err) {
    console.log('An error occurred: ', err);
    throw err;
  }
};

module.exports = { getItemDetail };
