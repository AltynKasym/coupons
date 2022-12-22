//ORIGIN
export const _ORIGIN_ = 'http://185.178.44.117/api/v1'

//TOKEN
export const _TOKEN_ = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyMjY1ODcwNjUzLCJqdGkiOiIyMTQwMzkwZGU5Y2E0OWUyOGMxMDRlOTNmYmFiMWNhNyIsInVzZXJfaWQiOjR9.qliUVNobvDy20UQYD6VFVczhNtCPNX_QdR0Mb0Jsfhk"


//CATEGORIES
export const _CATEGORIES_ = `${_ORIGIN_}/categories/`

//COMPANY
export const _COMPANY_ = `${_ORIGIN_}/company/`

//COUPONS
export const _COUPONS_ALL_ = `${_ORIGIN_}/coupons/`
export const _COUPONS_BUY_ = `${_ORIGIN_}/coupons/buy/`
export const _COUPONS_CATEGORY_ = `${_ORIGIN_}/coupons/category/{cat_pk}/`
export const _COUPONS_CHECK_ORDER_ = `${_ORIGIN_}/coupons/check-order/{id}`
export const _COUPONS_ME_ = `${_ORIGIN_}/coupons/me/`
export const _COUPONS_MY_STOCKS_ = `${_ORIGIN_}/coupons/my-stocks/`
export const _COUPONS_PROCESS_BUY_ = `${_ORIGIN_}/coupons/process-buy/`
export const _COUPONS_QR_CODE_ACTIVATE_ = `${_ORIGIN_}/coupons/qr-code/activate/`
export const _COUPONS_QR_CODE_ = `${_ORIGIN_}/coupons/qr-code/{id}/`
export const _COUPONS_SEARCH_TEXT_ = `${_ORIGIN_}/coupons/search-text/`
export const _COUPONS_SEARCH_ = `${_ORIGIN_}/coupons/search/`
export const _COUPONS_SUB_SUBCATEGORY_ = `${_ORIGIN_}/coupons/sub-subcategory/{subcat_pk}/`
export const _COUPONS_SUBCATEGORY_ = `${_ORIGIN_}/coupons/subcategory/{subcat_pk}/`
export const _COUPONS_TRENDS_ = `${_ORIGIN_}/coupons/trends/`
export const _COUPONS_SINGLE_ = `${_ORIGIN_}/coupons/{id}/`

//INFO
export const _INFO_ABOUT_US_ = `${_ORIGIN_}/info/about-us/`
export const _INFO_FAQ_ = `${_ORIGIN_}/info/faq/`
export const _INFO_FOOTER_FAQ_ = `${_ORIGIN_}/info/footer-faq/`
export const _INFO_HOW_TO_ORDER_ = `${_ORIGIN_}/info/how-to-order/`
export const _INFO_IMAGE_BLOCK_ = `${_ORIGIN_}/info/image-block/`
export const _INFO_IMAGE_SLIDER_ = `${_ORIGIN_}/info/image-slider/`
export const _INFO_NETWORKS_ = `${_ORIGIN_}/info/networks/`
export const _INFO_OUR_MAP_COORDINATES_ = `${_ORIGIN_}/info/our-map-coordinates/`
export const _INFO_PAYMENT_METHOD_ = `${_ORIGIN_}/info/payment-method/`
export const _INFO_PRIVACY_POLICY_ = `${_ORIGIN_}/info/privacy-policy/`
export const _INFO_PUBLIC_OFFER_ = `${_ORIGIN_}/info/public-offer/`
export const _INFO_REQUISITES_ = `${_ORIGIN_}/info/requisites/`

//TAGS
export const _TAG_ = `${_ORIGIN_}/tags/`
export const _TAG_CATEGORY_ = `${_ORIGIN_}/tags/category/{cat_pk}/`
export const _TAG_SUB_CATEGORY_ = `${_ORIGIN_}/tags/subcategory/{subcat_pk}/`

//USERS
export const _USERS_AUTH_ = `${_ORIGIN_}/users/auth/`
export const _USERS_CHANGE_OLD_PHONE_ = `${_ORIGIN_}/users/change-old-phone/`
export const _USERS_CHANGE_PASSWORD_PUT_ = `${_ORIGIN_}/users/change-password/`
export const _USERS_CHECK_USER_ = `${_ORIGIN_}/users/check-user/`
export const _USERS_FAVOURITE_COUPONS_ = `${_ORIGIN_}/users/favourite-coupons`
export const _USERS_LOGIN_CONFIRM_ = `${_ORIGIN_}/users/login-confirm/`
export const _USERS_LOGIN_ = `${_ORIGIN_}/users/login/`
export const _USERS_NEW_PHONE_CONFIRM_ = `${_ORIGIN_}/users/new-phone-confirm/`
export const _USERS_PARTNER_BID_ = `${_ORIGIN_}/users/partner-bid/`
export const _USERS_PROFILE_ = `${_ORIGIN_}/users/profile/`
export const _USERS_RECOVERY_PASSWORD_CONFIRM_ = `${_ORIGIN_}/users/recovery-password-confirm/`
export const _USERS_RECOVERY_PASSWORD_SEND_SMS_ = `${_ORIGIN_}/users/recovery-password-send-sms/`
export const _USERS_RECOVERY_PASSWORD_ = `${_ORIGIN_}/users/recovery-password/`
export const _USERS_RESET_PASSWORD_ = `${_ORIGIN_}/users/reset-password/`

// Local-Storage-Keys
export const localStorageKeys = {
  currentUserToken: 'marketBonusCurrentUser'
}