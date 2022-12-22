import { ITabsDetail } from "../../types/app.interface"

export const detailTabs: ITabsDetail[] = [
    {
        id: 1,
        title: 'Условия',
        active: true
    },
    {
        id: 2,
        title: 'Описание ',
        active: false
    },
    {
        id: 3,
        title: 'Адреса ',
        active: false
    }
]

export const sortCouponsTabs: ITabsDetail[] = [
    {
        id: 1,
        title: 'Активные',
        active: true
    },
    {
        id: 2,
        title: 'Активированные ',
        active: false
    },
    {
        id: 3,
        title: 'Истекшие ',
        active: false
    }
]