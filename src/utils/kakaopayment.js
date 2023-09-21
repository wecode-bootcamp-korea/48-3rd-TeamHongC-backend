const axios = require("axios");

const readyPayment = async (
  userId,
  quantity,
  partnerOrderId,
  itemName,
  totalAmount,
  approvalUrl,
  cancelUrl,
  failUrl
) => {
  const params = {
    cid: "TC0ONETIME",
    quantity: quantity,
    partner_order_id: partnerOrderId,
    partner_user_id: userId,
    item_name: itemName,
    total_amount: totalAmount,
    tax_free_amount: totalAmount,
    approval_url: approvalUrl,
    cancel_url: cancelUrl,
    fail_url: failUrl,
  };
  return await axios
    .post("https://kapi.kakao.com/v1/payment/ready", params, {
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `KakaoAK ${process.env.KAKAO_ADMIN}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const completePayment = async (userId, tid, partnerOrderId, pgToken) => {
  const params = {
    cid: "TC0ONETIME",
    partner_user_id: userId,
    tid: tid,
    partner_order_id: partnerOrderId,
    pg_token: pgToken,
  };
  return await axios
    .post("https://kapi.kakao.com/v1/payment/approve", params, {
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `KakaoAK ${process.env.KAKAO_ADMIN}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

module.exports = { readyPayment, completePayment };
