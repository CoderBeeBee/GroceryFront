import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import styles from './RHFInput.module.scss'
import useDateTimeLocal from '@/src/hooks/useDateTimeLocal'
import DisplayPasswordButton from '../DisplayPasswordButton/DisplayPasswordButton'
import { useState } from 'react'
import clsx from 'clsx'
import ToolTip from '../ToolTip/ToolTip'
import { useTranslations } from 'next-intl'

type RHFInputType<T extends FieldValues> = {
	name: Path<T>
	type: 'text' | 'number' | 'password' | 'email' | 'date' | 'datetime-local'
	id: string
	label: string
	placeholder: string
	isSubmitting: boolean
	tipMessage?: string
	required?: boolean
}

type InputType = RHFInputType<FieldValues>['type']

const RHFInput = <T extends FieldValues>({
	name,
	type,
	id,
	label,
	placeholder,
	isSubmitting,
	tipMessage,
	required = true,
}: RHFInputType<T>) => {
	const t = useTranslations('AuthForm')
	const { dateToDateTimeLocal } = useDateTimeLocal()
	const [visible, setVisible] = useState<boolean>(false)
	const { control } = useFormContext()

	const getInputValue = (type: InputType, value: string) => {
		if (type === 'datetime-local') {
			return dateToDateTimeLocal(value)
		}
		return value ?? ''
	}
	const getFormValue = (type: InputType, value: string) => {
		if (type === 'number') {
			return value === '' ? undefined : Number(value)
		}

		if (type === 'datetime-local') {
			return value ? new Date(value) : null
		}

		return value
	}

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				return (
					<div className={clsx(styles.inputContainer)}>
						<div className={`${styles.labelWrapper}`}>
							<label htmlFor={id} className={`${required && styles.labelAfter}`}>
								{label && t(`${label}`)}
							</label>
							{tipMessage && <ToolTip id={id} tipMessage={tipMessage} isSubmitting={isSubmitting} />}
						</div>
						<div className={styles.inputWrapper}>
							<input
								id={id}
								value={getInputValue(type, value)}
								onChange={e => {
									const value = e.target.value
									onChange(getFormValue(type, value))
								}}
								className={styles.input}
								type={type === 'password' ? (visible === false ? type : 'text') : type}
								placeholder={t(placeholder)}
								readOnly={isSubmitting}
								aria-readonly={isSubmitting}
								aria-invalid={!!error}
								aria-describedby={error ? `${id}-error` : undefined}
							/>
							{type === 'password' && (
								<DisplayPasswordButton
									visible={visible}
									isSubmitting={isSubmitting}
									fn={() => {
										if (value) setVisible(v => !v)
									}}
								/>
							)}
						</div>
						{error && (
							<span id={`${id}-error`} className={styles.error}>
								{t(`${error.message}`)}
							</span>
						)}
					</div>
				)
			}}
		/>
	)
}

export default RHFInput
