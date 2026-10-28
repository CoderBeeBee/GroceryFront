import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import styles from './RHFCheckbox.module.scss'
import { ReactNode } from 'react'
import { useTranslations } from 'next-intl'

type RHFCheckboxTypes<T extends FieldValues> = {
	children: ReactNode
	name: Path<T>
	id: string
	label?: string
	placeholder?: string
	isSubmitting?: boolean
}

const RHFCheckbox = <T extends FieldValues>({
	children,
	name,
	id,
	label,
	placeholder,
	isSubmitting,
}: RHFCheckboxTypes<T>) => {
	const t = useTranslations("AuthForm")
	const { control } = useFormContext()
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className={styles.formCheckbox}>
					<label htmlFor={id} className={styles.checkboxLabel}>
						{label && `${label}`}

						{children}
					</label>
					<input
						value={value ?? ''}
						id={id}
						onChange={e => {
							const value = e.target.checked
							onChange(value)
						}}
						type="checkbox"
						checked={!!value}
						placeholder={placeholder}
						disabled={isSubmitting}
						aria-readonly={isSubmitting}
						aria-invalid={!!error}
						aria-describedby={error ? `${id}-error` : undefined}
					/>
					{error && (
						<span id={`${id}-error`} className={styles.error}>
							{t(`${error.message}`)}
						</span>
					)}
				</div>
			)}
		/>
	)
}

export default RHFCheckbox
