import FormStyle from './FormStyle';
import InputLabel from './InputLabel';
import InputStyle from './InputStyle';
import FormButton from '../buttons/FormButton';

export default function CustomForm({
	formInfos,
	saveInputsState,
	formSubmit,
	loading = false,
	buttonText = 'Enviar',
}) {
	const inputModifier = (event, field, changingInput) => {
		if (changingInput.type === 'number') {
			changingInput.value = event.target.value.replace('-', '');
		} else {
			changingInput.value = event.target.value;
		}

		const newInputsState = formInfos.map(input => {
			if (input.field === field) return changingInput;
			return input;
		});

		saveInputsState(newInputsState);
	};

	return (
		<FormStyle onSubmit={formSubmit}>
			{formInfos.map((formInput, i) => (
				<>
					<InputLabel for={formInput.label}>
						{formInput.label}
					</InputLabel>

					<InputStyle
						name={formInput.label}
						value={formInput.value}
						onChange={
							loading
								? null
								: event =>
										inputModifier(
											event,
											formInput.field,
											formInput
										)
						}
						placeholder={formInput.placeholder}
						loading={loading}
						type={formInput.type}
						required={formInput.required}
						key={i}
					/>
				</>
			))}

			<FormButton type='submit' loading={loading}>
				{buttonText}
			</FormButton>
		</FormStyle>
	);
}
