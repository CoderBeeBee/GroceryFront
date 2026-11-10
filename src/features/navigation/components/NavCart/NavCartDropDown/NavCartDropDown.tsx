import { removeFromCart } from '@/src/store/useAddToCartStore'
import styles from './NavCartDropDown.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Button from '@/src/components/ui/Button/Button'
import { ShoppingCartSVG } from '@/src/assets/icons/ShopIcons'
import useFormatPrice from '@/src/hooks/useFormatPrice'
import useProductCart from '@/src/hooks/useProductCart'

type NavCartDropDownType = {
	isActive: boolean
}

const NavCartDropDown = ({ isActive }: NavCartDropDownType) => {
	const { count, isShoppingCart, shoppingCart, formattedTotalPrice } = useProductCart()
	const { formatProductPrice } = useFormatPrice()

	return (
		<div className={clsx(styles.navCartDropdown, { [styles.activeDropdown]: isActive })}>
			<h3 className={styles.navCartTitle}>Your Cart ({count})</h3>

			{isShoppingCart ? (
				shoppingCart.slice(0, 3).map((item, index) => {
					const totalProductPrice = item.price * item.quantity
					const { formattedDiscountPrice, formattedProductPrice, discountedPrice } = formatProductPrice(
						item.discount,
						totalProductPrice,
					)

					return (
						<div key={index} className={clsx(styles.navCartProductWrapper)}>
							<Image src={item.image} alt={item.name} width={100} height={80} className={styles.navCartProductImage} />
							<div className={styles.navCartProductContent}>
								<h4 className={styles.navCartProductH4}>{item.name}</h4>
								<p className={styles.navCartProductQuantity}>
									Quantity: {item.quantity} x {item.productQuantity}
									{item.salesUnit}
								</p>
								<p className={styles.navCartProductPrice}>
									Total Price: {discountedPrice > 0 ? formattedDiscountPrice : formattedProductPrice}{' '}
									<span className={styles.navCartProductOldPrice}>{discountedPrice > 0 && formattedProductPrice}</span>
								</p>

								<Button
									type="button"
									variant="remove"
									size="es"
									icon="trash"
									ariaLabel="Remove Product"
									className={styles.navCartProductButton}
									onClick={() => removeFromCart(item.id)}>
									Remove
								</Button>
							</div>
						</div>
					)
				})
			) : (
				<div className={styles.emptyCartWrapper}>
					<div className={styles.emptyCartIconWrapper}>
						<ShoppingCartSVG className={styles.shoppingSVG} />
					</div>

					<div className={styles.emptyCartContent}>
						<h4 className={styles.emptyCartH4}>Your cart is empty</h4>
						<p className={styles.emptyCartP}>{`Looks like you haven't added anything to your cart yet.`}</p>
					</div>
				</div>
			)}
			{isShoppingCart && (
				<div className={styles.navCartTotalWrapper}>
					<p className={styles.navCartTotalQuantity}>Total Quantity: {count}</p>
					<p className={styles.navCartTotalPrice}>Total Price: {formattedTotalPrice}</p>
				</div>
			)}
			<Button href={isShoppingCart ? '/shopping-cart' : '/shop'} size="xs" ariaLabel="View all">
				{isShoppingCart ? 'View All' : 'Continue Shopping'}
			</Button>
		</div>
	)
}

export default NavCartDropDown
