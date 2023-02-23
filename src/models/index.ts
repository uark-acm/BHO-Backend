import BHOBorrowRequest from './bho_borrow_request.model'
import BHOItem from './bho_item.model'
import BHOItemCategory from './bho_item_category.model'
import BHOItemSet from './bho_item_set.model'
import BHOOrder from './bho_order.model'

export const initializeModels = async () => {
    await BHOItemCategory.sync()
    await BHOItemSet.sync()
    await BHOItem.sync()
    await BHOOrder.sync()
    await BHOBorrowRequest.sync()
}
