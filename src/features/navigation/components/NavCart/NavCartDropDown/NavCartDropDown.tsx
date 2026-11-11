import { removeFromCart } from '@/src/store/useAddToCartStore'
import styles from './NavCartDropDown.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Button from '@/src/components/ui/Button/Button'
import { ShoppingCartSVG } from '@/src/assets/icons/ShopIcons'
import useFormatPrice from '@/src/hooks/useFormatPrice'
import useProductCart from '@/src/hooks/useProductCart'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import { toggleNavActions } from '@/src/store/useMenuStore'
import { useTranslations } from 'next-intl'
import RemoveButton from '@/src/features/cart/components/RemoveButton/RemoveButton'
import CartControllers from '@/src/features/cart/components/CartContollers/CartControllers'

type NavCartDropDownType = {
	isActive: boolean
}

const NavCartDropDown = ({ isActive }: NavCartDropDownType) => {
	const t = useTranslations('NavCart')

	const { count, isShoppingCart, shoppingCart, formattedTotalPrice } = useProductCart()
	const { formatProductPrice, formatCartPrice } = useFormatPrice()

	return (
		<div className={clsx(styles.navCartDropdown, { [styles.activeDropdown]: isActive })}>
			<h3 className={styles.navCartTitle}>
				{t('YourCart')} ({count})
			</h3>

			{isShoppingCart ? (
				shoppingCart.slice(0, 3).map((item, index) => {
					const linkHref = `/shop/${item.categories}/${item.slug}`

					const { formattedProductPrice, formattedDiscountPrice } = formatProductPrice(item.discount, item.price)
					const { formattedTotalDiscountPrice, formattedTotalProductPrice } = formatCartPrice(
						item.discount,
						item.price,
						item.quantity,
					)
					return (
						<div key={index} className={clsx(styles.navCartProductWrapper)}>
							<Link
								href={linkHref as NavigationHref}
								aria-label={`${t('Go to')} ${item.name}`}
								onClick={() => toggleNavActions(null)}>
								<Image
									src={item.image}
									alt={item.name}
									width={800}
									height={800}
									className={styles.navCartProductImage}
								/>
							</Link>
							<div className={styles.navCartProductContent}>
								<Link
									href={linkHref as NavigationHref}
									aria-label={`${t('Go to')} ${item.name}`}
									className={styles.navCartProductLink}
									onClick={() => toggleNavActions(null)}>
									{item.name}
								</Link>
								<p className={styles.navCartProductQuantity}>
									{t('Quantity')}: {item.quantity} x {item.productQuantity}
									{item.salesUnit}
								</p>
								<p className={styles.navCartProductUnitPrice}>
									{t('ProductPrice')}: {item.discount ? formattedDiscountPrice : formattedProductPrice} /{' '}
									{item.productQuantity}
									{item.salesUnit}
								</p>
								<div className={styles.navCartProductPrice}>
									{t('Total Price')}: {item.discount ? formattedTotalDiscountPrice : formattedTotalProductPrice}{' '}
									{item.discount && (
										<span className={styles.navCartProductOldPrice}> {formattedTotalProductPrice}</span>
									)}
								</div>

								<div className={styles.cartControllers}>
									<CartControllers productId={item.id} inStock={item.inStock} />
									<RemoveButton
										size="es"
										ariaLabel={t('Remove Product')}
										className={styles.navCartProductButton}
										onClick={() => removeFromCart(item.id)}></RemoveButton>
								</div>
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
						<h4 className={styles.emptyCartH4}>{t('Your cart is empty')}</h4>
						<p className={styles.emptyCartP}>{t('EmptyCart')}</p>
					</div>
				</div>
			)}

			{isShoppingCart && (
				<div className={styles.navCartTotalWrapper}>
					<p className={styles.navCartTotalQuantity}>
						{t('Total Quantity')}: {count}
					</p>
					<p className={styles.navCartTotalPrice}>
						{t('Total Price')}: {formattedTotalPrice}
					</p>
				</div>
			)}
			<Button
				href={isShoppingCart ? '/shopping-cart' : '/shop'}
				size="xs"
				ariaLabel="View all"
				onClick={() => toggleNavActions(null)}>
				{isShoppingCart ? t('View All') : t('Continue Shopping')}
			</Button>
		</div>
	)
}

export default NavCartDropDown
